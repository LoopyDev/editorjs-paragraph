(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(":root{--ce-paragraph-color-default: var(--text-primary, #e5e7eb);--ce-paragraph-color-gray: #9ca3af;--ce-paragraph-color-brown: #d6a052;--ce-paragraph-color-orange: #fb923c;--ce-paragraph-color-yellow: #facc15;--ce-paragraph-color-green: #4ade80;--ce-paragraph-color-blue: #60a5fa;--ce-paragraph-color-purple: #c084fc;--ce-paragraph-color-pink: #f472b6;--ce-paragraph-color-red: #f87171;--ce-paragraph-bg-default: transparent;--ce-paragraph-bg-gray: rgba(148, 163, 184, .18);--ce-paragraph-bg-brown: rgba(181, 129, 74, .22);--ce-paragraph-bg-orange: rgba(249, 115, 22, .22);--ce-paragraph-bg-yellow: rgba(234, 179, 8, .25);--ce-paragraph-bg-green: rgba(34, 197, 94, .2);--ce-paragraph-bg-blue: rgba(59, 130, 246, .2);--ce-paragraph-bg-purple: rgba(168, 85, 247, .2);--ce-paragraph-bg-pink: rgba(236, 72, 153, .2);--ce-paragraph-bg-red: rgba(239, 68, 68, .2)}:root[data-theme=light]{--ce-paragraph-color-default: var(--text-primary, #0f172a);--ce-paragraph-color-gray: #4b5563;--ce-paragraph-color-brown: #92400e;--ce-paragraph-color-orange: #c2410c;--ce-paragraph-color-yellow: #854d0e;--ce-paragraph-color-green: #15803d;--ce-paragraph-color-blue: #1d4ed8;--ce-paragraph-color-purple: #6b21a8;--ce-paragraph-color-pink: #be185d;--ce-paragraph-color-red: #b91c1c;--ce-paragraph-bg-gray: #e5e7eb;--ce-paragraph-bg-brown: #f3e8d2;--ce-paragraph-bg-orange: #ffedd5;--ce-paragraph-bg-yellow: #fef9c3;--ce-paragraph-bg-green: #dcfce7;--ce-paragraph-bg-blue: #dbeafe;--ce-paragraph-bg-purple: #ede9fe;--ce-paragraph-bg-pink: #ffe4e6;--ce-paragraph-bg-red: #fee2e2}.ce-paragraph{line-height:1.6em;outline:none;color:var(--ce-paragraph-color-default)}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}.ce-paragraph--has-bg{display:inline-block;max-width:100%;padding:.15em .4em;border-radius:6px;line-height:1.6em}.ce-paragraph--text-gray{color:var(--ce-paragraph-color-gray)}.ce-paragraph--text-brown{color:var(--ce-paragraph-color-brown)}.ce-paragraph--text-orange{color:var(--ce-paragraph-color-orange)}.ce-paragraph--text-yellow{color:var(--ce-paragraph-color-yellow)}.ce-paragraph--text-green{color:var(--ce-paragraph-color-green)}.ce-paragraph--text-blue{color:var(--ce-paragraph-color-blue)}.ce-paragraph--text-purple{color:var(--ce-paragraph-color-purple)}.ce-paragraph--text-pink{color:var(--ce-paragraph-color-pink)}.ce-paragraph--text-red{color:var(--ce-paragraph-color-red)}.ce-paragraph--bg-gray{background:var(--ce-paragraph-bg-gray)}.ce-paragraph--bg-brown{background:var(--ce-paragraph-bg-brown)}.ce-paragraph--bg-orange{background:var(--ce-paragraph-bg-orange)}.ce-paragraph--bg-yellow{background:var(--ce-paragraph-bg-yellow)}.ce-paragraph--bg-green{background:var(--ce-paragraph-bg-green)}.ce-paragraph--bg-blue{background:var(--ce-paragraph-bg-blue)}.ce-paragraph--bg-purple{background:var(--ce-paragraph-bg-purple)}.ce-paragraph--bg-pink{background:var(--ce-paragraph-bg-pink)}.ce-paragraph--bg-red{background:var(--ce-paragraph-bg-red)}.ce-paragraph__swatch{display:inline-block;width:16px;height:16px;border-radius:999px;box-shadow:0 0 0 1px var(--ce-header-swatch-border, rgba(255, 255, 255, .2))}.ce-paragraph__swatch--text,.ce-paragraph__swatch--background{background:currentColor}.ce-paragraph__type-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;width:18px;height:18px;line-height:1;filter:none}.ce-paragraph__type-icon path{stroke:currentColor;stroke-width:.5;stroke-linejoin:round;stroke-linecap:round}.ce-paragraph__highlight-icon{display:inline-flex;align-items:center;justify-content:center;min-width:24px;padding:2px 4px;border-radius:6px;font-size:15px;font-weight:600;line-height:1;text-align:center;box-sizing:border-box}.ce-paragraph__highlight-svg{width:24px;height:24px;display:block;color:inherit}.ce-paragraph__highlight-svg path{fill:currentColor;stroke:none}")),document.head.appendChild(a)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
const p = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function v(u) {
  const e = document.createElement("div");
  e.innerHTML = u.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
const m = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alphabet" viewBox="0 0 16 16">
  <path d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552s.864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582m.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864m5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338z"/>
</svg>`, b = ["default", "gray", "brown", "orange", "yellow", "green", "blue", "purple", "pink", "red"], h = [
  { value: "default", label: "Default text" },
  { value: "gray", label: "Grey text" },
  { value: "brown", label: "Brown text" },
  { value: "orange", label: "Orange text" },
  { value: "yellow", label: "Yellow text" },
  { value: "green", label: "Green text" },
  { value: "blue", label: "Blue text" },
  { value: "purple", label: "Purple text" },
  { value: "pink", label: "Pink text" },
  { value: "red", label: "Red text" }
], c = [
  { value: "default", label: "Default highlight" },
  { value: "gray", label: "Grey highlight" },
  { value: "brown", label: "Brown highlight" },
  { value: "orange", label: "Orange highlight" },
  { value: "yellow", label: "Yellow highlight" },
  { value: "green", label: "Green highlight" },
  { value: "blue", label: "Blue highlight" },
  { value: "purple", label: "Purple highlight" },
  { value: "pink", label: "Pink highlight" },
  { value: "red", label: "Red highlight" }
];
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class g {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: a, readOnly: l }) {
    this.highlightSvg = "", this.api = a, this.readOnly = l, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : g.DEFAULT_PLACEHOLDER, this._data = this.normalizeData(e ?? {}), this._element = null, this._preserveBlank = t.preserveBlank ?? !1;
  }
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Normalize a color value against the supported palette
   */
  normalizeColorValue(e) {
    if (typeof e == "string") {
      const t = e.toLowerCase(), a = t === "grey" ? "gray" : t;
      if (b.includes(a))
        return a;
    }
    return "default";
  }
  /**
   * Normalize input data
   */
  normalizeData(e) {
    const t = {
      text: "",
      textColor: "default",
      backgroundColor: "default"
    };
    return typeof e.text == "string" && (t.text = e.text), t.textColor = this.normalizeColorValue(e.textColor), t.backgroundColor = this.normalizeColorValue(e.backgroundColor), t;
  }
  /**
   * Build a nested menu section for colours
   */
  buildColorMenu(e, t, a, l, r, o, i) {
    const s = a, d = e.toLowerCase().replace(/\s+/g, "-");
    return {
      icon: o === "text" ? this.makeTypeIcon(s() || "default", !0) : this.makeHighlightIcon(s() || "default", (i == null ? void 0 : i()) || "default", !0),
      title: e,
      name: d,
      children: {
        items: t.map((n) => ({
          icon: o === "text" ? this.makeTypeIcon(n.value) : this.makeHighlightIcon(n.value, (i == null ? void 0 : i()) || "default", !0),
          title: n.label,
          onActivate: () => l(n.value),
          isActive: () => s() === n.value,
          closeOnActivate: !1,
          toggle: r,
          name: `${r}-${n.value}`
        }))
      }
    };
  }
  /**
   * Icon used for palette buttons
   */
  paletteIcon() {
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
  makeSwatchIcon(e, t) {
    const a = t === "text" ? `--ce-paragraph-color-${e}` : `--ce-paragraph-bg-${e}`, l = t === "text" ? `color: var(${a}); background: currentColor;` : `background: var(${a});`;
    return `<span class="ce-paragraph__swatch ce-paragraph__swatch--${t}" style="${l}"></span>`;
  }
  /**
   * Bootstrap "Type" icon tinted per colour option
   */
  makeTypeIcon(e, t = !1) {
    return `<svg class="ce-paragraph__type-icon" width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style="color: ${t ? "var(--ce-paragraph-preview-text, var(--ce-paragraph-color-default))" : `var(--ce-paragraph-color-${e})`};">
      <path fill="currentColor" d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081zm2.7-7.923L6.34 9.314H3.51l1.4-4.156zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525"/>
    </svg>`;
  }
  /**
   * Highlight preview icon showing background with current text colour
   */
  makeHighlightIcon(e, t, a = !1) {
    const l = `--ce-paragraph-bg-${e}`, r = `--ce-paragraph-color-${t}`, o = a ? `var(--ce-paragraph-preview-bg, var(${l}))` : `var(${l})`, i = a ? "var(--ce-paragraph-preview-text, currentColor)" : `var(${r})`;
    return `<span class="ce-paragraph__highlight-icon" style="${`background: ${o}; color: ${i};`}">${this.getHighlightSvg(i)}</span>`;
  }
  /**
   * Returns the cached Bootstrap alphabet icon markup with our class applied
   */
  getHighlightSvg(e) {
    return this.highlightSvg || (this.highlightSvg = m.replace("<svg", '<svg class="ce-paragraph__highlight-svg"')), e ? this.highlightSvg.replace(
      '<svg class="ce-paragraph__highlight-svg"',
      `<svg class="ce-paragraph__highlight-svg" style="color: ${e};"`
    ) : this.highlightSvg;
  }
  /**
   * Update CSS variables so open menu icons reflect current colours
   */
  updatePreviewVars() {
    if (typeof document > "u")
      return;
    const e = this._data.textColor || "default", t = this._data.backgroundColor || "default";
    document.documentElement.style.setProperty("--ce-paragraph-preview-text", `var(--ce-paragraph-color-${e})`), document.documentElement.style.setProperty("--ce-paragraph-preview-bg", `var(--ce-paragraph-bg-${t})`);
  }
  /**
   * Apply classes to reflect current colour choices
   */
  applyColors() {
    if (!this._element)
      return;
    const e = h.filter((r) => r.value !== "default").map((r) => `ce-paragraph--text-${r.value}`), t = c.filter((r) => r.value !== "default").map((r) => `ce-paragraph--bg-${r.value}`);
    this._element.classList.remove(...e, ...t, "ce-paragraph--has-bg");
    const a = this._data.textColor || "default", l = this._data.backgroundColor || "default";
    a !== "default" && this._element.classList.add(`ce-paragraph--text-${a}`), l !== "default" && this._element.classList.add(`ce-paragraph--bg-${l}`, "ce-paragraph--has-bg");
  }
  /**
   * Set text colour
   */
  setTextColor(e) {
    const t = this.normalizeColorValue(e), a = this.data;
    this.data = {
      ...a,
      textColor: t
    };
  }
  /**
   * Set background highlight colour
   */
  setBackgroundColor(e) {
    const t = this.normalizeColorValue(e), a = this.data;
    this.data = {
      ...a,
      backgroundColor: t
    };
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), this.applyColors(), this.updatePreviewVars(), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const t = v(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML,
      textColor: this._data.textColor || "default",
      backgroundColor: this._data.backgroundColor || "default"
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: p,
      title: "Text"
    };
  }
  /**
   * Returns paragraph block tunes config (colours)
   */
  renderSettings() {
    const e = this.buildColorMenu(
      "Text colour",
      h,
      () => this.data.textColor || "default",
      (a) => this.setTextColor(a),
      "ce-paragraph-text-color",
      "text"
    ), t = this.buildColorMenu(
      "Highlight",
      c,
      () => this.data.backgroundColor || "default",
      (a) => this.setBackgroundColor(a),
      "ce-paragraph-background-color",
      "background",
      () => this.data.textColor || "default"
    );
    return [
      e,
      t
    ];
  }
  /**
   * Get current Tool`s data
   */
  get data() {
    var e;
    return this._data.text = ((e = this._element) == null ? void 0 : e.innerHTML) || "", this._data.textColor = this.normalizeColorValue(this._data.textColor), this._data.backgroundColor = this.normalizeColorValue(this._data.backgroundColor), this._data;
  }
  /**
   * Store data in plugin and apply changes
   */
  set data(e) {
    this._data = this.normalizeData(e), this._element && e.text !== void 0 && (this._element.innerHTML = this._data.text || ""), this.applyColors(), this.updatePreviewVars();
  }
}
export {
  g as default
};
//# sourceMappingURL=paragraph.mjs.map
