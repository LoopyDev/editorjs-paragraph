/**
 * Build styles
 */
import './index.css';

import { IconText } from '@codexteam/icons';
import makeFragment from './utils/makeFragment';

import type {
  API,
  ConversionConfig,
  HTMLPasteEvent,
  PasteConfig,
  SanitizerConfig,
  ToolConfig,
  ToolboxConfig,
} from '@editorjs/editorjs';
import AlphabetIcon from 'bootstrap-icons/icons/alphabet.svg?raw';

type MenuConfig = any[];

type ParagraphColorValue =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red';

interface ColorOption {
  value: ParagraphColorValue;
  label: string;
}

const COLOR_VALUES: ParagraphColorValue[] = ['default', 'gray', 'brown', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'red'];

const TEXT_COLOR_OPTIONS: ColorOption[] = [
  { value: 'default', label: 'Default text' },
  { value: 'gray', label: 'Grey text' },
  { value: 'brown', label: 'Brown text' },
  { value: 'orange', label: 'Orange text' },
  { value: 'yellow', label: 'Yellow text' },
  { value: 'green', label: 'Green text' },
  { value: 'blue', label: 'Blue text' },
  { value: 'purple', label: 'Purple text' },
  { value: 'pink', label: 'Pink text' },
  { value: 'red', label: 'Red text' },
];

const BACKGROUND_COLOR_OPTIONS: ColorOption[] = [
  { value: 'default', label: 'Default highlight' },
  { value: 'gray', label: 'Grey highlight' },
  { value: 'brown', label: 'Brown highlight' },
  { value: 'orange', label: 'Orange highlight' },
  { value: 'yellow', label: 'Yellow highlight' },
  { value: 'green', label: 'Green highlight' },
  { value: 'blue', label: 'Blue highlight' },
  { value: 'purple', label: 'Purple highlight' },
  { value: 'pink', label: 'Pink highlight' },
  { value: 'red', label: 'Red highlight' },
];

/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */

/**
 * @typedef {object} ParagraphConfig
 * @property {string} placeholder - placeholder for the empty paragraph
 * @property {boolean} preserveBlank - Whether or not to keep blank paragraphs when saving editor data
 */
export interface ParagraphConfig extends ToolConfig {
  /**
   * Placeholder for the empty paragraph
   */
  placeholder?: string;

  /**
   * Whether or not to keep blank paragraphs when saving editor data
   */
  preserveBlank?: boolean;
}

/**
 * @typedef {object} ParagraphData
 * @description Tool's input and output data format
 * @property {string} text — Paragraph's content. Can include HTML tags: <a><b><i>
 */
export interface ParagraphData {
  /**
   * Paragraph's content
   */
  text: string;
  /**
   * Text colour choice
   */
  textColor?: ParagraphColorValue;
  /**
   * Background highlight choice
   */
  backgroundColor?: ParagraphColorValue;
}

/**
 * @typedef {object} ParagraphParams
 * @description Constructor params for the Paragraph tool, use to pass initial data and settings
 * @property {ParagraphData} data - Preload data for the paragraph.
 * @property {ParagraphConfig} config - The configuration for the paragraph.
 * @property {API} api - The Editor.js API.
 * @property {boolean} readOnly - Is paragraph is read-only.
 */
interface ParagraphParams {
  /**
   * Initial data for the paragraph
   */
  data: ParagraphData;
  /**
   * Paragraph tool configuration
   */
  config: ParagraphConfig;
  /**
   * Editor.js API
   */
  api: API;
  /**
   * Is paragraph read-only.
   */
  readOnly: boolean;
}

/**
 * @typedef {object} ParagraphCSS
 * @description CSS classes names
 * @property {string} block - Editor.js CSS Class for block
 * @property {string} wrapper - Paragraph CSS Class
 */
interface ParagraphCSS {
  /**
   * Editor.js CSS Class for block
   */
  block: string;
  /**
   * Paragraph CSS Class
   */
  wrapper: string;
}

export default class Paragraph {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return '';
  }

  /**
   * The Editor.js API
   */
  api: API;

  /**
   * Is Paragraph Tool read-only
   */
  readOnly: boolean;

  /**
   * Paragraph Tool's CSS classes
   */
  private _CSS: ParagraphCSS;

  /**
   * Placeholder for Paragraph Tool
   */
  private _placeholder: string;

  /**
   * Paragraph's data
   */
  private _data: ParagraphData;

  /**
   * Paragraph's main Element
   */
  private _element: HTMLDivElement | null;

  /**
   * Whether or not to keep blank paragraphs when saving editor data
   */
  private _preserveBlank: boolean;

  /**
   * Cached highlight icon markup
   */
  private highlightSvg: string = '';

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data, config, api, readOnly }: ParagraphParams) {
    this.api = api;
    this.readOnly = readOnly;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-paragraph',
    };

    if (!this.readOnly) {
      this.onKeyUp = this.onKeyUp.bind(this);
    }

    /**
     * Placeholder for paragraph if it is first Block
     *
     * @type {string}
     */
    this._placeholder = config.placeholder
      ? config.placeholder
      : Paragraph.DEFAULT_PLACEHOLDER;
    this._data = this.normalizeData(data ?? {});
    this._element = null;
    this._preserveBlank = config.preserveBlank ?? false;
  }

  /**
   * Normalize a color value against the supported palette
   */
  private normalizeColorValue(value: any): ParagraphColorValue {
    if (typeof value === 'string') {
      const lowered = value.toLowerCase();
      const candidate = (lowered === 'grey' ? 'gray' : lowered) as ParagraphColorValue;
      if (COLOR_VALUES.includes(candidate)) {
        return candidate;
      }
    }
    return 'default';
  }

  /**
   * Normalize input data
   */
  private normalizeData(data: ParagraphData | {}): ParagraphData {
    const normalized: ParagraphData = {
      text: '',
      textColor: 'default',
      backgroundColor: 'default',
    };

    if (typeof (data as ParagraphData).text === 'string') {
      normalized.text = (data as ParagraphData).text;
    }

    normalized.textColor = this.normalizeColorValue((data as ParagraphData).textColor);
    normalized.backgroundColor = this.normalizeColorValue((data as ParagraphData).backgroundColor);

    return normalized;
  }

  /**
   * Build a nested menu section for colours
   */
  private buildColorMenu(
    title: string,
    options: ColorOption[],
    getCurrent: () => ParagraphColorValue,
    onSelect: (value: ParagraphColorValue) => void,
    toggleKey: string,
    mode: 'text' | 'background',
    textColorForPreview?: () => ParagraphColorValue,
  ) {
    const current = getCurrent;
    const menuName = title.toLowerCase().replace(/\s+/g, '-');

    return {
      icon:
        mode === 'text'
          ? this.makeTypeIcon(current() || 'default', true)
          : this.makeHighlightIcon(current() || 'default', (textColorForPreview?.() || 'default'), true),
      title,
      name: menuName,
      children: {
        items: options.map((opt) => ({
          icon:
            mode === 'text'
              ? this.makeTypeIcon(opt.value)
              : this.makeHighlightIcon(opt.value, (textColorForPreview?.() || 'default')),
          title: opt.label,
          onActivate: () => onSelect(opt.value),
          isActive: () => current() === opt.value,
          closeOnActivate: false,
          toggle: toggleKey,
          name: `${toggleKey}-${opt.value}`,
        })),
      },
    };
  }

  /**
   * Icon used for palette buttons
   */
  private paletteIcon(): string {
    return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.25" cy="7" r="3" fill="var(--ce-paragraph-color-blue)"/>
      <circle cx="12.75" cy="6" r="3" fill="var(--ce-paragraph-color-pink)"/>
      <circle cx="13.25" cy="13" r="3" fill="var(--ce-paragraph-color-green)"/>
      <circle cx="7.5" cy="13.5" r="3" fill="var(--ce-paragraph-color-yellow)"/>
    </svg>`;
  }

  /**
   * Small round swatch icon
   */
  private makeSwatchIcon(color: ParagraphColorValue, mode: 'text' | 'background'): string {
    const variable = mode === 'text' ? `--ce-paragraph-color-${color}` : `--ce-paragraph-bg-${color}`;
    const style = mode === 'text'
      ? `color: var(${variable}); background: currentColor;`
      : `background: var(${variable});`;

    return `<span class="ce-paragraph__swatch ce-paragraph__swatch--${mode}" style="${style}"></span>`;
  }

  /**
   * Bootstrap "Type" icon tinted per colour option
   */
  private makeTypeIcon(color: ParagraphColorValue, usePreviewVar = false): string {
    const variable = usePreviewVar
      ? 'var(--ce-paragraph-preview-text, var(--ce-paragraph-color-default))'
      : `var(--ce-paragraph-color-${color})`;
    return `<svg class="ce-paragraph__type-icon" width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style="color: ${variable};">
      <path fill="currentColor" d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081zm2.7-7.923L6.34 9.314H3.51l1.4-4.156zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525"/>
    </svg>`;
  }

  /**
   * Highlight preview icon showing background with current text colour
   */
  private makeHighlightIcon(background: ParagraphColorValue, textColor: ParagraphColorValue, usePreviewVar = false): string {
    const bgVar = `--ce-paragraph-bg-${background}`;
    const textVar = `--ce-paragraph-color-${textColor}`;
    const bgValue = usePreviewVar ? `var(--ce-paragraph-preview-bg, var(${bgVar}))` : `var(${bgVar})`;
    const textValue = `var(--ce-paragraph-preview-text, var(${textVar}))`;
    const style = `background: ${bgValue}; color: ${textValue};`;
    return `<span class="ce-paragraph__highlight-icon" style="${style}">${this.getHighlightSvg(textValue)}</span>`;
  }

  /**
   * Returns the cached Bootstrap alphabet icon markup with our class applied
   */
  private getHighlightSvg(textValue?: string): string {
    if (!this.highlightSvg) {
      this.highlightSvg = AlphabetIcon.replace('<svg', '<svg class="ce-paragraph__highlight-svg"');
    }
    if (!textValue) return this.highlightSvg;
    return this.highlightSvg.replace(
      '<svg class="ce-paragraph__highlight-svg"',
      `<svg class="ce-paragraph__highlight-svg" style="color: ${textValue};"`
    );
  }

  /**
   * Update CSS variables so open menu icons reflect current colours
   */
  private updatePreviewVars(): void {
    if (typeof document === 'undefined') return;
    const textColor = this._data.textColor || 'default';
    const backgroundColor = this._data.backgroundColor || 'default';
    document.documentElement.style.setProperty('--ce-paragraph-preview-text', `var(--ce-paragraph-color-${textColor})`);
    document.documentElement.style.setProperty('--ce-paragraph-preview-bg', `var(--ce-paragraph-bg-${backgroundColor})`);
  }

  /**
   * Apply classes to reflect current colour choices
   */
  private applyColors(): void {
    if (!this._element) {
      return;
    }

    const textClasses = TEXT_COLOR_OPTIONS
      .filter((opt) => opt.value !== 'default')
      .map((opt) => `ce-paragraph--text-${opt.value}`);
    const backgroundClasses = BACKGROUND_COLOR_OPTIONS
      .filter((opt) => opt.value !== 'default')
      .map((opt) => `ce-paragraph--bg-${opt.value}`);

    this._element.classList.remove(...textClasses, ...backgroundClasses, 'ce-paragraph--has-bg');

    const textColor = this._data.textColor || 'default';
    const backgroundColor = this._data.backgroundColor || 'default';

    if (textColor !== 'default') {
      this._element.classList.add(`ce-paragraph--text-${textColor}`);
    }

    if (backgroundColor !== 'default') {
      this._element.classList.add(`ce-paragraph--bg-${backgroundColor}`, 'ce-paragraph--has-bg');
    }
  }

  /**
   * Set text colour
   */
  setTextColor(color: ParagraphColorValue): void {
    const normalized = this.normalizeColorValue(color);
    const current = this.data;
    this.data = {
      ...current,
      textColor: normalized,
    };
  }

  /**
   * Set background highlight colour
   */
  setBackgroundColor(color: ParagraphColorValue): void {
    const normalized = this.normalizeColorValue(color);
    const current = this.data;
    this.data = {
      ...current,
      backgroundColor: normalized,
    };
  }

  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e: KeyboardEvent): void {
    if (e.code !== 'Backspace' && e.code !== 'Delete') {
      return;
    }

    if (!this._element) {
      return;
    }

    const { textContent } = this._element;

    if (textContent === '') {
      this._element.innerHTML = '';
    }
  }

  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView(): HTMLDivElement {
    const div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);
    div.contentEditable = 'false';
    div.dataset.placeholderActive = this.api.i18n.t(this._placeholder);

    if (this._data.text) {
      div.innerHTML = this._data.text;
    }

    if (!this.readOnly) {
      div.contentEditable = 'true';
      div.addEventListener('keyup', this.onKeyUp);
    }

    /**
     * bypass property 'align' required in html div element
     */
    this.applyColors();
    this.updatePreviewVars();

    return div as HTMLDivElement;
  }

  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render(): HTMLDivElement {
    this._element = this.drawView();

    return this._element;
  }

  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(data: ParagraphData): void {
    if (!this._element) {
      return;
    }

    this._data.text += data.text;

    /**
     * We use appendChild instead of innerHTML to keep the links of the existing nodes
     * (for example, shadow caret)
     */
    const fragment = makeFragment(data.text);

    this._element.appendChild(fragment);

    this._element.normalize();
  }

  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(savedData: ParagraphData): boolean {
    if (savedData.text.trim() === '' && !this._preserveBlank) {
      return false;
    }

    return true;
  }

  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(toolsContent: HTMLDivElement): ParagraphData {
    return {
      text: toolsContent.innerHTML,
      textColor: this._data.textColor || 'default',
      backgroundColor: this._data.backgroundColor || 'default',
    };
  }

  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(event: HTMLPasteEvent): void {
    const data = {
      text: event.detail.data.innerHTML,
    };

    this._data = data;

    /**
     * We use requestAnimationFrame for performance purposes
     */
    window.requestAnimationFrame(() => {
      if (!this._element) {
        return;
      }
      this._element.innerHTML = this._data.text || '';
    });
  }

  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig(): ConversionConfig {
    return {
      export: 'text', // to convert Paragraph to other block, use 'text' property of saved data
      import: 'text', // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }

  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize(): SanitizerConfig {
    return {
      text: {
        br: true,
      },
    };
  }

  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported(): boolean {
    return true;
  }

  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig(): PasteConfig {
    return {
      tags: ['P'],
    };
  }

  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox(): ToolboxConfig {
    return {
      icon: IconText,
      title: 'Text',
    };
  }

  /**
   * Returns paragraph block tunes config (colours)
   */
  renderSettings(): MenuConfig {
    const textColorMenu = this.buildColorMenu(
      'Text colour',
      TEXT_COLOR_OPTIONS,
      () => this.data.textColor || 'default',
      (value) => this.setTextColor(value),
      'ce-paragraph-text-color',
      'text'
    );

    const backgroundColorMenu = this.buildColorMenu(
      'Highlight',
      BACKGROUND_COLOR_OPTIONS,
      () => this.data.backgroundColor || 'default',
      (value) => this.setBackgroundColor(value),
      'ce-paragraph-background-color',
      'background',
      () => this.data.textColor || 'default'
    );

    return [
      textColorMenu,
      backgroundColorMenu,
    ];
  }

  /**
   * Get current Tool`s data
   */
  get data(): ParagraphData {
    this._data.text = this._element?.innerHTML || '';
    this._data.textColor = this.normalizeColorValue(this._data.textColor);
    this._data.backgroundColor = this.normalizeColorValue(this._data.backgroundColor);

    return this._data;
  }

  /**
   * Store data in plugin and apply changes
   */
  set data(data: ParagraphData) {
    this._data = this.normalizeData(data);

    if (this._element && data.text !== undefined) {
      this._element.innerHTML = this._data.text || '';
    }

    this.applyColors();
    this.updatePreviewVars();
  }
}
