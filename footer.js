{
    let BaseNavUI = function (e) {
        "use strict"; function t(e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const o = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback, s = (e, t, o = null) => { for (; t !== o;) { const o = t.nextSibling; e.removeChild(t), t = o } }, r = `{{lit-${String(Math.random()).slice(2)}}}`, i = `\x3c!--${r}--\x3e`, n = new RegExp(`${r}|${i}`), a = "$lit$"; class l { constructor(e, t) { this.parts = [], this.element = t; const o = [], s = [], i = document.createTreeWalker(t.content, 133, null, !1); let l = 0, d = -1, g = 0; const { strings: u, values: { length: f } } = e; for (; g < f;) { const e = i.nextNode(); if (null !== e) { if (d++, 1 === e.nodeType) { if (e.hasAttributes()) { const t = e.attributes, { length: o } = t; let s = 0; for (let e = 0; e < o; e++)c(t[e].name, a) && s++; for (; s-- > 0;) { const t = u[g], o = p.exec(t)[2], s = o.toLowerCase() + a, r = e.getAttribute(s); e.removeAttribute(s); const i = r.split(n); this.parts.push({ type: "attribute", index: d, name: o, strings: i }), g += i.length - 1 } } "TEMPLATE" === e.tagName && (s.push(e), i.currentNode = e.content) } else if (3 === e.nodeType) { const t = e.data; if (t.indexOf(r) >= 0) { const s = e.parentNode, r = t.split(n), i = r.length - 1; for (let t = 0; t < i; t++) { let o, i = r[t]; if ("" === i) o = h(); else { const e = p.exec(i); null !== e && c(e[2], a) && (i = i.slice(0, e.index) + e[1] + e[2].slice(0, -a.length) + e[3]), o = document.createTextNode(i) } s.insertBefore(o, e), this.parts.push({ type: "node", index: ++d }) } "" === r[i] ? (s.insertBefore(h(), e), o.push(e)) : e.data = r[i], g += i } } else if (8 === e.nodeType) if (e.data === r) { const t = e.parentNode; null !== e.previousSibling && d !== l || (d++, t.insertBefore(h(), e)), l = d, this.parts.push({ type: "node", index: d }), null === e.nextSibling ? e.data = "" : (o.push(e), d--), g++ } else { let t = -1; for (; -1 !== (t = e.data.indexOf(r, t + 1));)this.parts.push({ type: "node", index: -1 }), g++ } } else i.currentNode = s.pop() } for (const e of o) e.parentNode.removeChild(e) } } const c = (e, t) => { const o = e.length - t.length; return o >= 0 && e.slice(o) === t }, d = e => -1 !== e.index, h = () => document.createComment(""), p = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/; function g(e, t) { const { element: { content: o }, parts: s } = e, r = document.createTreeWalker(o, 133, null, !1); let i = f(s), n = s[i], a = -1, l = 0; const c = []; let d = null; for (; r.nextNode();) { a++; const e = r.currentNode; for (e.previousSibling === d && (d = null), t.has(e) && (c.push(e), null === d && (d = e)), null !== d && l++; void 0 !== n && n.index === a;)n.index = null !== d ? -1 : n.index - l, i = f(s, i), n = s[i] } c.forEach((e => e.parentNode.removeChild(e))) } const u = e => { let t = 11 === e.nodeType ? 0 : 1; const o = document.createTreeWalker(e, 133, null, !1); for (; o.nextNode();)t++; return t }, f = (e, t = -1) => { for (let o = t + 1; o < e.length; o++) { const t = e[o]; if (d(t)) return o } return -1 };
        /**
           * @license
           * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
           * This code may only be used under the BSD style license found at
           * http://polymer.github.io/LICENSE.txt
           * The complete set of authors may be found at
           * http://polymer.github.io/AUTHORS.txt
           * The complete set of contributors may be found at
           * http://polymer.github.io/CONTRIBUTORS.txt
           * Code distributed by Google as part of the polymer project is also
           * subject to an additional IP rights grant found at
           * http://polymer.github.io/PATENTS.txt
           */
        const v = new WeakMap, m = e => (...t) => { const o = e(...t); return v.set(o, !0), o }, b = e => "function" == typeof e && v.has(e), y = {}, w = {};
        /**
           * @license
           * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
           * This code may only be used under the BSD style license found at
           * http://polymer.github.io/LICENSE.txt
           * The complete set of authors may be found at
           * http://polymer.github.io/AUTHORS.txt
           * The complete set of contributors may be found at
           * http://polymer.github.io/CONTRIBUTORS.txt
           * Code distributed by Google as part of the polymer project is also
           * subject to an additional IP rights grant found at
           * http://polymer.github.io/PATENTS.txt
           */
        class x { constructor(e, t, o) { this.__parts = [], this.template = e, this.processor = t, this.options = o } update(e) { let t = 0; for (const o of this.__parts) void 0 !== o && o.setValue(e[t]), t++; for (const e of this.__parts) void 0 !== e && e.commit() } _clone() { const e = o ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], s = this.template.parts, r = document.createTreeWalker(e, 133, null, !1); let i, n = 0, a = 0, l = r.nextNode(); for (; n < s.length;)if (i = s[n], d(i)) { for (; a < i.index;)a++, "TEMPLATE" === l.nodeName && (t.push(l), r.currentNode = l.content), null === (l = r.nextNode()) && (r.currentNode = t.pop(), l = r.nextNode()); if ("node" === i.type) { const e = this.processor.handleTextExpression(this.options); e.insertAfterNode(l.previousSibling), this.__parts.push(e) } else this.__parts.push(...this.processor.handleAttributeExpressions(l, i.name, i.strings, this.options)); n++ } else this.__parts.push(void 0), n++; return o && (document.adoptNode(e), customElements.upgrade(e)), e } }
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const k = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: e => e }), S = ` ${r} `; class z { constructor(e, t, o, s) { this.strings = e, this.values = t, this.type = o, this.processor = s } getHTML() { const e = this.strings.length - 1; let t = "", o = !1; for (let s = 0; s < e; s++) { const e = this.strings[s], n = e.lastIndexOf("\x3c!--"); o = (n > -1 || o) && -1 === e.indexOf("--\x3e", n + 1); const l = p.exec(e); t += null === l ? e + (o ? S : i) : e.substr(0, l.index) + l[1] + l[2] + a + l[3] + r } return t += this.strings[e], t } getTemplateElement() { const e = document.createElement("template"); let t = this.getHTML(); return void 0 !== k && (t = k.createHTML(t)), e.innerHTML = t, e } }
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const _ = e => null === e || !("object" == typeof e || "function" == typeof e), F = e => Array.isArray(e) || !(!e || !e[Symbol.iterator]); class C { constructor(e, t, o) { this.dirty = !0, this.element = e, this.name = t, this.strings = o, this.parts = []; for (let e = 0; e < o.length - 1; e++)this.parts[e] = this._createPart() } _createPart() { return new L(this) } _getValue() { const e = this.strings, t = e.length - 1, o = this.parts; if (1 === t && "" === e[0] && "" === e[1]) { const e = o[0].value; if ("symbol" == typeof e) return String(e); if ("string" == typeof e || !F(e)) return e } let s = ""; for (let r = 0; r < t; r++) { s += e[r]; const t = o[r]; if (void 0 !== t) { const e = t.value; if (_(e) || !F(e)) s += "string" == typeof e ? e : String(e); else for (const t of e) s += "string" == typeof t ? t : String(t) } } return s += e[t], s } commit() { this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue())) } } class L { constructor(e) { this.value = void 0, this.committer = e } setValue(e) { e === y || _(e) && e === this.value || (this.value = e, b(e) || (this.committer.dirty = !0)) } commit() { for (; b(this.value);) { const e = this.value; this.value = y, e(this) } this.value !== y && this.committer.commit() } } class U { constructor(e) { this.value = void 0, this.__pendingValue = void 0, this.options = e } appendInto(e) { this.startNode = e.appendChild(h()), this.endNode = e.appendChild(h()) } insertAfterNode(e) { this.startNode = e, this.endNode = e.nextSibling } appendIntoPart(e) { e.__insert(this.startNode = h()), e.__insert(this.endNode = h()) } insertAfterPart(e) { e.__insert(this.startNode = h()), this.endNode = e.endNode, e.endNode = this.startNode } setValue(e) { this.__pendingValue = e } commit() { if (null === this.startNode.parentNode) return; for (; b(this.__pendingValue);) { const e = this.__pendingValue; this.__pendingValue = y, e(this) } const e = this.__pendingValue; e !== y && (_(e) ? e !== this.value && this.__commitText(e) : e instanceof z ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : F(e) ? this.__commitIterable(e) : e === w ? (this.value = w, this.clear()) : this.__commitText(e)) } __insert(e) { this.endNode.parentNode.insertBefore(e, this.endNode) } __commitNode(e) { this.value !== e && (this.clear(), this.__insert(e), this.value = e) } __commitText(e) { const t = this.startNode.nextSibling, o = "string" == typeof (e = null == e ? "" : e) ? e : String(e); t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = o : this.__commitNode(document.createTextNode(o)), this.value = e } __commitTemplateResult(e) { const t = this.options.templateFactory(e); if (this.value instanceof x && this.value.template === t) this.value.update(e.values); else { const o = new x(t, e.processor, this.options), s = o._clone(); o.update(e.values), this.__commitNode(s), this.value = o } } __commitIterable(e) { Array.isArray(this.value) || (this.value = [], this.clear()); const t = this.value; let o, s = 0; for (const r of e) o = t[s], void 0 === o && (o = new U(this.options), t.push(o), 0 === s ? o.appendIntoPart(this) : o.insertAfterPart(t[s - 1])), o.setValue(r), o.commit(), s++; s < t.length && (t.length = s, this.clear(o && o.endNode)) } clear(e = this.startNode) { s(this.startNode.parentNode, e.nextSibling, this.endNode) } } class N { constructor(e, t, o) { if (this.value = void 0, this.__pendingValue = void 0, 2 !== o.length || "" !== o[0] || "" !== o[1]) throw new Error("Boolean attributes can only contain a single expression"); this.element = e, this.name = t, this.strings = o } setValue(e) { this.__pendingValue = e } commit() { for (; b(this.__pendingValue);) { const e = this.__pendingValue; this.__pendingValue = y, e(this) } if (this.__pendingValue === y) return; const e = !!this.__pendingValue; this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = y } } class $ extends C { constructor(e, t, o) { super(e, t, o), this.single = 2 === o.length && "" === o[0] && "" === o[1] } _createPart() { return new R(this) } _getValue() { return this.single ? this.parts[0].value : super._getValue() } commit() { this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue()) } } class R extends L { } let A = !1; (() => { try { const e = { get capture() { return A = !0, !1 } }; window.addEventListener("test", e, e), window.removeEventListener("test", e, e) } catch (e) { } })(); class T { constructor(e, t, o) { this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = o, this.__boundHandleEvent = e => this.handleEvent(e) } setValue(e) { this.__pendingValue = e } commit() { for (; b(this.__pendingValue);) { const e = this.__pendingValue; this.__pendingValue = y, e(this) } if (this.__pendingValue === y) return; const e = this.__pendingValue, t = this.value, o = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive), s = null != e && (null == t || o); o && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), s && (this.__options = E(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = y } handleEvent(e) { "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e) } } const E = e => e && (A ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture)
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */; function P(e) { let t = V.get(e.type); void 0 === t && (t = { stringsArray: new WeakMap, keyString: new Map }, V.set(e.type, t)); let o = t.stringsArray.get(e.strings); if (void 0 !== o) return o; const s = e.strings.join(r); return o = t.keyString.get(s), void 0 === o && (o = new l(e, e.getTemplateElement()), t.keyString.set(s, o)), t.stringsArray.set(e.strings, o), o } const V = new Map, M = new WeakMap;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const O = new
            /**
               * @license
               * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
               * This code may only be used under the BSD style license found at
               * http://polymer.github.io/LICENSE.txt
               * The complete set of authors may be found at
               * http://polymer.github.io/AUTHORS.txt
               * The complete set of contributors may be found at
               * http://polymer.github.io/CONTRIBUTORS.txt
               * Code distributed by Google as part of the polymer project is also
               * subject to an additional IP rights grant found at
               * http://polymer.github.io/PATENTS.txt
               */
            class { handleAttributeExpressions(e, t, o, s) { const r = t[0]; if ("." === r) { return new $(e, t.slice(1), o).parts } if ("@" === r) return [new T(e, t.slice(1), s.eventContext)]; if ("?" === r) return [new N(e, t.slice(1), o)]; return new C(e, t, o).parts } handleTextExpression(e) { return new U(e) } };
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1"); const D = (e, ...t) => new z(e, t, "html", O)
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */, B = (e, t) => `${e}--${t}`; let H = !0; void 0 === window.ShadyCSS ? H = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), H = !1); const I = e => t => { const o = B(t.type, e); let s = V.get(o); void 0 === s && (s = { stringsArray: new WeakMap, keyString: new Map }, V.set(o, s)); let i = s.stringsArray.get(t.strings); if (void 0 !== i) return i; const n = t.strings.join(r); if (i = s.keyString.get(n), void 0 === i) { const o = t.getTemplateElement(); H && window.ShadyCSS.prepareTemplateDom(o, e), i = new l(t, o), s.keyString.set(n, i) } return s.stringsArray.set(t.strings, i), i }, j = ["html", "svg"], W = new Set, q = (e, t, o) => { W.add(e); const s = o ? o.element : document.createElement("template"), r = t.querySelectorAll("style"), { length: i } = r; if (0 === i) return void window.ShadyCSS.prepareTemplateStyles(s, e); const n = document.createElement("style"); for (let e = 0; e < i; e++) { const t = r[e]; t.parentNode.removeChild(t), n.textContent += t.textContent } (e => { j.forEach((t => { const o = V.get(B(t, e)); void 0 !== o && o.keyString.forEach((e => { const { element: { content: t } } = e, o = new Set; Array.from(t.querySelectorAll("style")).forEach((e => { o.add(e) })), g(e, o) })) })) })(e); const a = s.content; o ? function (e, t, o = null) { const { element: { content: s }, parts: r } = e; if (null == o) return void s.appendChild(t); const i = document.createTreeWalker(s, 133, null, !1); let n = f(r), a = 0, l = -1; for (; i.nextNode();)for (l++, i.currentNode === o && (a = u(t), o.parentNode.insertBefore(t, o)); -1 !== n && r[n].index === l;) { if (a > 0) { for (; -1 !== n;)r[n].index += a, n = f(r, n); return } n = f(r, n) } }(o, n, a.firstChild) : a.insertBefore(n, a.firstChild), window.ShadyCSS.prepareTemplateStyles(s, e); const l = a.querySelector("style"); if (window.ShadyCSS.nativeShadow && null !== l) t.insertBefore(l.cloneNode(!0), t.firstChild); else if (o) { a.insertBefore(n, a.firstChild); const e = new Set; e.add(n), g(o, e) } }; window.JSCompiler_renameProperty = (e, t) => e; const J = { toAttribute(e, t) { switch (t) { case Boolean: return e ? "" : null; case Object: case Array: return null == e ? e : JSON.stringify(e) }return e }, fromAttribute(e, t) { switch (t) { case Boolean: return null !== e; case Number: return null === e ? null : Number(e); case Object: case Array: return JSON.parse(e) }return e } }, Q = (e, t) => t !== e && (t == t || e == e), G = { attribute: !0, type: String, converter: J, reflect: !1, hasChanged: Q }, Z = "finalized"; class Y extends HTMLElement { constructor() { super(), this.initialize() } static get observedAttributes() { this.finalize(); const e = []; return this._classProperties.forEach(((t, o) => { const s = this._attributeNameForProperty(o, t); void 0 !== s && (this._attributeToPropertyMap.set(s, o), e.push(s)) })), e } static _ensureClassProperties() { if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) { this._classProperties = new Map; const e = Object.getPrototypeOf(this)._classProperties; void 0 !== e && e.forEach(((e, t) => this._classProperties.set(t, e))) } } static createProperty(e, t = G) { if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return; const o = "symbol" == typeof e ? Symbol() : `__${e}`, s = this.getPropertyDescriptor(e, o, t); void 0 !== s && Object.defineProperty(this.prototype, e, s) } static getPropertyDescriptor(e, t, o) { return { get() { return this[t] }, set(s) { const r = this[e]; this[t] = s, this.requestUpdateInternal(e, r, o) }, configurable: !0, enumerable: !0 } } static getPropertyOptions(e) { return this._classProperties && this._classProperties.get(e) || G } static finalize() { const e = Object.getPrototypeOf(this); if (e.hasOwnProperty(Z) || e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map, this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) { const e = this.properties, t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []]; for (const o of t) this.createProperty(o, e[o]) } } static _attributeNameForProperty(e, t) { const o = t.attribute; return !1 === o ? void 0 : "string" == typeof o ? o : "string" == typeof e ? e.toLowerCase() : void 0 } static _valueHasChanged(e, t, o = Q) { return o(e, t) } static _propertyValueFromAttribute(e, t) { const o = t.type, s = t.converter || J, r = "function" == typeof s ? s : s.fromAttribute; return r ? r(e, o) : e } static _propertyValueToAttribute(e, t) { if (void 0 === t.reflect) return; const o = t.type, s = t.converter; return (s && s.toAttribute || J.toAttribute)(e, o) } initialize() { this._updateState = 0, this._updatePromise = new Promise((e => this._enableUpdatingResolver = e)), this._changedProperties = new Map, this._saveInstanceProperties(), this.requestUpdateInternal() } _saveInstanceProperties() { this.constructor._classProperties.forEach(((e, t) => { if (this.hasOwnProperty(t)) { const e = this[t]; delete this[t], this._instanceProperties || (this._instanceProperties = new Map), this._instanceProperties.set(t, e) } })) } _applyInstanceProperties() { this._instanceProperties.forEach(((e, t) => this[t] = e)), this._instanceProperties = void 0 } connectedCallback() { this.enableUpdating() } enableUpdating() { void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0) } disconnectedCallback() { } attributeChangedCallback(e, t, o) { t !== o && this._attributeToProperty(e, o) } _propertyToAttribute(e, t, o = G) { const s = this.constructor, r = s._attributeNameForProperty(e, o); if (void 0 !== r) { const e = s._propertyValueToAttribute(t, o); if (void 0 === e) return; this._updateState = 8 | this._updateState, null == e ? this.removeAttribute(r) : this.setAttribute(r, e), this._updateState = -9 & this._updateState } } _attributeToProperty(e, t) { if (8 & this._updateState) return; const o = this.constructor, s = o._attributeToPropertyMap.get(e); if (void 0 !== s) { const e = o.getPropertyOptions(s); this._updateState = 16 | this._updateState, this[s] = o._propertyValueFromAttribute(t, e), this._updateState = -17 & this._updateState } } requestUpdateInternal(e, t, o) { let s = !0; if (void 0 !== e) { const r = this.constructor; o = o || r.getPropertyOptions(e), r._valueHasChanged(this[e], t, o.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== o.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map), this._reflectingProperties.set(e, o))) : s = !1 } !this._hasRequestedUpdate && s && (this._updatePromise = this._enqueueUpdate()) } requestUpdate(e, t) { return this.requestUpdateInternal(e, t), this.updateComplete } async _enqueueUpdate() { this._updateState = 4 | this._updateState; try { await this._updatePromise } catch (e) { } const e = this.performUpdate(); return null != e && await e, !this._hasRequestedUpdate } get _hasRequestedUpdate() { return 4 & this._updateState } get hasUpdated() { return 1 & this._updateState } performUpdate() { if (!this._hasRequestedUpdate) return; this._instanceProperties && this._applyInstanceProperties(); let e = !1; const t = this._changedProperties; try { e = this.shouldUpdate(t), e ? this.update(t) : this._markUpdated() } catch (t) { throw e = !1, this._markUpdated(), t } e && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(t)), this.updated(t)) } _markUpdated() { this._changedProperties = new Map, this._updateState = -5 & this._updateState } get updateComplete() { return this._getUpdateComplete() } _getUpdateComplete() { return this.getUpdateComplete() } getUpdateComplete() { return this._updatePromise } shouldUpdate(e) { return !0 } update(e) { void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e, t) => this._propertyToAttribute(t, this[t], e))), this._reflectingProperties = void 0), this._markUpdated() } updated(e) { } firstUpdated(e) { } } Y.finalized = !0;
        /**
          @license
          Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
          This code may only be used under the BSD style license found at
          http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
          http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
          found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
          part of the polymer project is also subject to an additional IP rights grant
          found at http://polymer.github.io/PATENTS.txt
          */
        const X = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, K = Symbol(); class ee { constructor(e, t) { if (t !== K) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead."); this.cssText = e } get styleSheet() { return void 0 === this._styleSheet && (X ? (this._styleSheet = new CSSStyleSheet, this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet } toString() { return this.cssText } } const te = (e, ...t) => { const o = t.reduce(((t, o, s) => t + (e => { if (e instanceof ee) return e.cssText; if ("number" == typeof e) return e; throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`) })(o) + e[s + 1]), e[0]); return new ee(o, K) };
        /**
           * @license
           * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
           * This code may only be used under the BSD style license found at
           * http://polymer.github.io/LICENSE.txt
           * The complete set of authors may be found at
           * http://polymer.github.io/AUTHORS.txt
           * The complete set of contributors may be found at
           * http://polymer.github.io/CONTRIBUTORS.txt
           * Code distributed by Google as part of the polymer project is also
           * subject to an additional IP rights grant found at
           * http://polymer.github.io/PATENTS.txt
           */
        (window.litElementVersions || (window.litElementVersions = [])).push("2.5.1"); const oe = {}; class se extends Y { static getStyles() { return this.styles } static _getUniqueStyles() { if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return; const e = this.getStyles(); if (Array.isArray(e)) { const t = (e, o) => e.reduceRight(((e, o) => Array.isArray(o) ? t(o, e) : (e.add(o), e)), o), o = t(e, new Set), s = []; o.forEach((e => s.unshift(e))), this._styles = s } else this._styles = void 0 === e ? [] : [e]; this._styles = this._styles.map((e => { if (e instanceof CSSStyleSheet && !X) { const t = Array.prototype.slice.call(e.cssRules).reduce(((e, t) => e + t.cssText), ""); return new ee(String(t), K) } return e })) } initialize() { super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles() } createRenderRoot() { return this.attachShadow(this.constructor.shadowRootOptions) } adoptStyles() { const e = this.constructor._styles; 0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? X ? this.renderRoot.adoptedStyleSheets = e.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e => e.cssText)), this.localName)) } connectedCallback() { super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this) } update(e) { const t = this.render(); super.update(e), t !== oe && this.constructor.render(t, this.renderRoot, { scopeName: this.localName, eventContext: this }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach((e => { const t = document.createElement("style"); t.textContent = e.cssText, this.renderRoot.appendChild(t) }))) } render() { return oe } } se.finalized = !0, se.render = (e, t, o) => { if (!o || "object" != typeof o || !o.scopeName) throw new Error("The `scopeName` option is required."); const r = o.scopeName, i = M.has(t), n = H && 11 === t.nodeType && !!t.host, a = n && !W.has(r), l = a ? document.createDocumentFragment() : t; if (((e, t, o) => { let r = M.get(t); void 0 === r && (s(t, t.firstChild), M.set(t, r = new U(Object.assign({ templateFactory: P }, o))), r.appendInto(t)), r.setValue(e), r.commit() })(e, l, Object.assign({ templateFactory: I(r) }, o)), a) { const e = M.get(l); M.delete(l); const o = e.value instanceof x ? e.value.template : void 0; q(r, l, o), s(t, t.firstChild), t.appendChild(l), M.set(t, e) } !i && n && window.ShadyCSS.styleElement(t.host) }, se.shadowRootOptions = { mode: "open" };
        /**
           * @license
           * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
           * This code may only be used under the BSD style license found at
           * http://polymer.github.io/LICENSE.txt
           * The complete set of authors may be found at
           * http://polymer.github.io/AUTHORS.txt
           * The complete set of contributors may be found at
           * http://polymer.github.io/CONTRIBUTORS.txt
           * Code distributed by Google as part of the polymer project is also
           * subject to an additional IP rights grant found at
           * http://polymer.github.io/PATENTS.txt
           */
        const re = new WeakMap, ie = m((e => t => { const o = re.get(t); if (void 0 === e && t instanceof L) { if (void 0 !== o || !re.has(t)) { const e = t.committer.name; t.committer.element.removeAttribute(e) } } else e !== o && t.setValue(e); re.set(t, e) })), ne = (e, t) => { customElements.get(e) ? console.log(`Web Component with tag ${e} is already registered.`) : customElements.define(e, t) }; var ae = te`:host,
body {
	/** Tokens
	*
	*  copy/pasted from base-web-components.
	*  Should remove when base-web-components is integrated
	*/

	/** Viewport breakpoints */
	--view-min: 320px;
	--view-xs: 480px;
	--view-sm: 720px;
	--view-md: 960px;
	--view-lg: 1200px;
	--view-xl: 1400px;
	--view-xxl: 1600px;
	--view-max: 2600px;

	/** Sizes */
	--size-025: 2px;
	--size-050: 4px;
	--size-075: 6px;
	--size-100: 8px;
	--size-125: 10px;
	--size-150: 12px;
	--size-200: 16px;
	--size-250: 20px;
	--size-300: 24px;
	--size-350: 28px;
	--size-400: 32px;
	--size-500: 40px;
	--size-600: 48px;
	--size-700: 56px;
	--size-800: 64px;
	--size-900: 72px;
	--size-1000: 80px;
	--size-1100: 96px;

	/** Fonts */
	--font-default: 'Blizzard', Helvetica, Arial, sans-serif, "Microsoft YaHei";
	--font-accent: 'Open Sans', Helvetica, Arial, sans-serif, "Microsoft YaHei";
	/** Font Sizes */
	--font-size-100: 10px;
	--font-size-200: 12px;
	--font-size-300: 14px;
	--font-size-400: 16px;
	--font-size-500: 16px;
	--font-size-550: 18px;
	--font-size-600: 20px;
	--font-size-700: 24px;
	--font-size-800: 30px;
	--font-size-900: 36px;

	/** Colors */

	/** @desc Background */

	/** @desc #0A0D15, darkest */
	--color-background-100: #0a0d15;

	/** @desc #151C28, dark */
	--color-background-300: #151c28;

	/** @desc #232A39, neutral */
	--color-background-500: #232a39;

	/** @desc #323A48, light */
	--color-background-700: #323a48;

	/** @desc Darken */

	/** @desc rgba(0, 0, 0, .05) */
	--color-darken-100: rgba(0, 0, 0, 0.05);

	/** @desc rgba(0, 0, 0, .1) */
	--color-darken-300: rgba(0, 0, 0, 0.1);

	/** @desc rgba(0, 0, 0, .15) */
	--color-darken-400: rgba(0, 0, 0, 0.15);

	/** @desc rgba(0, 0, 0, .3) */
	--color-darken-500: rgba(0, 0, 0, 0.3);

	/** @desc rgba(0, 0, 0, .5) */
	--color-darken-600: rgba(0, 0, 0, 0.5);

	/** @desc rgba(0, 0, 0, .7) */
	--color-darken-700: rgba(0, 0, 0, 0.7);

	/** @desc rgba(0, 0, 0, .9) */
	--color-darken-800: rgba(0, 0, 0, 0.9);

	/** @desc rgba(0, 0, 0, 1) */
	--color-darken-900: rgba(0, 0, 0, 1);

	/** @desc Content */

	/** @desc rgba(255, 255, 255, .05) "neutral white", 5% opacity */
	--color-content-100: rgba(255, 255, 255, 0.05);

	/** @desc rgba(255, 255, 255, .10) "neutral white", 10% opacity (faint) */
	--color-content-300: rgba(255, 255, 255, 0.1);

	/** @desc rgba(255, 255, 255, .15) "neutral white", 15% opacity */
	--color-content-400: rgba(255, 255, 255, 0.15);

	/** @desc rgba(255, 255, 255, .30) "neutral white", 30% opacity (light) */
	--color-content-500: rgba(255, 255, 255, 0.3);

	/** @desc rgba(255, 255, 255, .50) "neutral white", 50% opacity (medium) */
	--color-content-600: rgba(255, 255, 255, 0.5);

	/** @desc rgba(255, 255, 255, .70) "neutral white", 70% opacity (bright) */
	--color-content-700: rgba(255, 255, 255, 0.7);

	/** @desc rgba(255, 255, 255, .90) "neutral white", 90% opacity (bright) */
	--color-content-800: rgba(255, 255, 255, 0.9);

	/** @desc rgba(255, 255, 255, 1) "neutral white", 100% opacity (normal) */
	--color-content-900: rgba(255, 255, 255, 1);

	/** @desc Default */

	/** @desc rgba(96, 117, 159, .40) "default", 40% opacity (default) */
	--color-accent-500: rgba(93, 113, 152, 0.4);

	/** @desc rgba(96, 117, 159, .60) "default", 60% opacity */
	--color-accent-600: rgba(93, 113, 152, 0.6);

	/** @desc rgba(96, 117, 159, .80) "default", 80% opacity */
	--color-accent-700: rgba(93, 113, 152, 0.8);

	/** @desc Primary */

	/** @desc #009DFF "primary" (default) */
	--color-primary-500: #009dff;
	--color-primary-500-inverse: #0074e0;

	/** @desc #33B1FF "primary" (light) */
	--color-primary-600: #33b1ff;

	/** @desc #66C4FF "primary" (ultralight) */
	--color-primary-700: #66c4ff;
	--shadow-xs: 0 1px 3px 0 rgba(0, 0, 0, 0.12);

	/** @desc Success */

	/** @desc #00FF94 "success" (default) */
	--color-success-500: #00ff94;

	/** @desc Error */

	/** @desc #F31D77 "error" (default) */
	--color-error-500: #f31d77;

	--line-height-default: 1;

	/** Filters */
	--filter-100: brightness(100%) contrast(100%);
	--filter-200: brightness(210%) contrast(90%);

	/** Hovers */
	--transition-hover-speed: 0.2s;
	--transition-hover: color var(--transition-hover-speed) ease,
		background-color var(--transition-hover-speed) ease,
		border-color var(--transition-hover-speed) ease;

	/* Navbar tokens */
	--navbar-background-color: rgba(49, 46, 69, 0.7);
	--navbar-background-color-no-blur: rgba(49, 46, 69, 0.9);
	--navbar-background-blur: 20px;

	--navbar-font-color: var(--color-content-900);

	--navbar-link-padding-md: 0 var(--size-100);
	--navbar-link-padding-lg: 0 var(--size-150);
	--navbar-link-padding-xl: 0 var(--size-200);
	--navbar-button-padding-md: 0 var(--size-150);
	--navbar-button-padding-lg: 0 var(--size-200);
	--navbar-button-padding-xl: 0 var(--size-300);

	--navbar-button-border-radius: var(--size-100);

	--navbar-button-font-color: var(--color-content-900);
	--navbar-button-color-primary: var(--color-primary-500);
	--navbar-button-color-primary-hover: var(--color-primary-600);
	--navbar-button-color-secondary: var(--color-background-100);
	--navbar-button-color-secondary-hover: var(--color-background-300);

	--navbar-icon-color: var(--color-content-900);

	--navbar-dropdown-background--primary: var(--color-background-300);
	--navbar-dropdown-background--secondary: var(--color-darken-500);

	--navbar-blizzard-logo-color: #00aeff;
}
`, le = te`:host {
	display: block;
	text-align: center;
}

.logo {
	margin: 30px 0;
	height: 66px;
}

.logo a {
	transition: filter 500ms;
	filter: var(--filter-100);
}

.logo a:is(:hover, :focus) {
	filter: var(--filter-200);
}

slot[name='custom-legal']::slotted(*) {
	color: var(--color-content-600);
	font-size: var(--font-size-200);
	font-family: var(--font-default);
}

/* Light Mode */

:host([theme='light']) .logo #NavbarFooter-blizzard-lower {
	color: var(--color-darken-900);
}

:host([theme='light']) slot[name='custom-legal']::slotted(*) {
	color: var(--color-darken-600);
}
`, ce = te`/*
	Blizzard Font
	@font-face delcarations copied from the CDN in order to save on a network call
	https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/bltaf224921d2965080/5fbd9a2e0b0a825636795f9f/blizzard.css
*/
@font-face {
	font-family: 'Blizzard';
	font-style: 'normal';
	font-weight: 300;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blt94217c59f4a5815a/5fbd95580100b746db953ff6/blizzard-300-normal.woff)
		format('woff');
}
@font-face {
	font-family: 'Blizzard';
	font-style: italic;
	font-weight: 300;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blt6265792bcb15f8cf/5fbd95570b0a825636795f93/blizzard-300-italic.woff)
		format('woff');
}

@font-face {
	font-family: 'Blizzard';
	font-style: 'normal';
	font-weight: 400;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/bltd282a24c6d400df1/5fbd966e21b96a46dc51a9f6/blizzard-400-normal.woff)
		format('woff');
}
@font-face {
	font-family: 'Blizzard';
	font-style: italic;
	font-weight: 400;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blta6017e96865fdd0d/5fbd946f21b96a46dc51a9f2/blizzard-400-italic.woff)
		format('woff');
}

@font-face {
	font-family: 'Blizzard';
	font-style: 'normal';
	font-weight: 700;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blt61ecbf75b23a76ff/5fbd96a3a9e913483b74d58b/blizzard-700-normal.woff)
		format('woff');
}
@font-face {
	font-family: 'Blizzard';
	font-style: italic;
	font-weight: 700;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blt18311f4c612ce876/5fbd96a20b0a825636795f9b/blizzard-700-italic.woff)
		format('woff');
}

/*
	Open Sans
	@font-face delcarations copied from the CDN in order to save on a network call
	https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blt7994d9b50ad5b363/600f57939d2dcf0eda34fa95/openSans.css
*/
@font-face {
	font-family: 'Open Sans';
	font-weight: 300;
	font-style: normal;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/bltd4bd32df33514a17/5fbd9b1d8acca34834e64717/openSans-300-normal.woff)
		format('woff');
}

@font-face {
	font-family: 'Open Sans';
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/bltea0d5575e9b92a19/5fbd9b4a21b96a46dc51a9fa/openSans-400-normal.woff)
		format('woff');
}

@font-face {
	font-family: 'Open Sans';
	font-weight: 400;
	font-style: italic;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blt88507068dca91557/5fbd9c030100b746db954000/openSans-400-italic.woff)
		format('woff');
}

@font-face {
	font-family: 'Open Sans';
	font-weight: 600;
	font-style: normal;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blt24a0e58ff3000b6d/5fbd9c7346cf5a5635c5d428/openSans-600-normal.woff)
		format('woff');
}

@font-face {
	font-family: 'Open Sans';
	font-weight: 700;
	font-style: normal;
	font-display: swap;
	src: url(https://blz-contentstack-assets.akamaized.net/v3/assets/blt72f16e066f85e164/blt48b417ac9e4452d4/5fbd9ec1a9e913483b74d597/openSans-700-normal.woff)
		format('woff');
}

/*
	Navbar Specific Fonts
	@font-face delcarations copied from Google Fonts' CDN in order to save on a network call
*/

/* Poppins */
/* devanagari */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-display: swap;
	src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2)
		format('woff2');
	unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
		U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-display: swap;
	src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-display: swap;
	src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
		U+2215, U+FEFF, U+FFFD;
}

/* Archivo */
/* vietnamese */
@font-face {
	font-family: 'Archivo';
	font-style: normal;
	font-weight: 500;
	font-stretch: 100%;
	src: url(https://fonts.gstatic.com/s/archivo/v9/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTBjNZ-BdvBU7iVNRQGG4.woff) format('woff');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
	font-family: 'Archivo';
	font-style: normal;
	font-weight: 500;
	font-stretch: 100%;
	src: url(https://fonts.gstatic.com/s/archivo/v9/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTBjNZ-RdvBU7iVNRQGG4.woff) format('woff');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
	font-family: 'Archivo';
	font-style: normal;
	font-weight: 500;
	font-stretch: 100%;
	src: url(https://fonts.gstatic.com/s/archivo/v9/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTBjNZ9xdvBU7iVNRQ.woff) format('woff');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`; class de extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }); const e = this.constructor, t = `<style>${e.css}</style>`; this.shadowRoot.innerHTML = t + e.html } } t(de, "css", ":host {display: inline-block;min-width: 24px;min-height: 24px;}svg {pointer-events: none;}:host([theme='light']) svg g#NavbarFooter-blizzard-lower * {fill: var(--color-darken-900);}"), t(de, "html", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122px" version="1.1" id="Layer_1" focusable="false" x="0px" y="0px" viewBox="0 0 124 66" enable-background="new 0 0 124 66" xml:space="preserve"><g><g id="NavbarFooter-blizzard-lower"><polygon fill="#FFFFFF" points="9.5,65 5.9,65 5.9,60 9.5,60 9.5,60.9 7.1,60.9 7.1,62 9.4,62 9.4,62.9 7.1,62.9 7.1,64.1     9.5,64.1   "/><polygon fill="#FFFFFF" points="18.5,64.9 17.6,64.9 15,61.9 15,64.9 13.8,64.9 13.8,60.2 14.9,60.2 17.4,63.1 17.4,60.2     18.5,60.2   "/><polygon fill="#FFFFFF" points="28.7,60.9 26.9,60.9 26.9,65 25.7,65 25.7,60.9 23.9,60.9 23.9,60 28.7,60   "/><polygon fill="#FFFFFF" points="36.5,65 32.9,65 32.9,60.1 36.5,60.1 36.5,61 34.1,61 34.1,62 36.3,62 36.3,62.9 34.1,62.9     34.1,64.1 36.5,64.1   "/><path fill="#FFFFFF" d="M44,60c0.8-0.1,1.5,0.5,1.6,1.3c0,0,0,0.1,0,0.1c0,0.5-0.3,1-0.8,1.2c0.5,0.3,0.7,0.8,1.3,2.3h-1.4    c-0.5-1-0.7-2-1.4-2H43v2h-1.2V60H44z M43,62h0.6c0.3,0,0.6-0.2,0.7-0.5c0,0,0-0.1,0-0.1c0-0.3-0.2-0.6-0.6-0.6c0,0-0.1,0-0.1,0    H43V62z"/><polygon fill="#FFFFFF" points="54.7,61 52.9,61 52.9,65 51.7,65 51.7,61 49.9,61 49.9,60 54.7,60.1   "/><path fill="#FFFFFF" d="M63.2,65h-1.3l-0.4-1h-2.1L59,65h-1.2l1.9-4.8h1.4L63.2,65z M60.4,61.4l-0.7,1.8h1.5L60.4,61.4z"/><polygon fill="#FFFFFF" points="68.7,64.9 67.8,64.9 67.8,60 68.7,60   "/><polygon fill="#FFFFFF" points="78.6,65 77.6,65 75,61.9 75,65 73.8,65 73.8,60.2 74.9,60.2 77.4,63.1 77.4,60.2 78.6,60.2   "/><polygon fill="#FFFFFF" points="87.9,60 89,60 89,65 87.7,65 87.7,61.9 86.4,63.5 86.2,63.5 84.9,61.9 84.9,65 83.6,65 83.6,60     84.7,60 86.3,61.9   "/><polygon fill="#FFFFFF" points="98.1,64.9 94.6,64.9 94.6,60.2 98,60.2 98,61.1 95.8,61.1 95.8,62 97.9,62 97.9,62.9 95.8,62.9     95.8,64.1 98.1,64.1   "/><polygon fill="#FFFFFF" points="107.6,65 106.6,65 103.9,61.9 103.9,65 102.7,65 102.7,60.1 103.8,60.1 106.4,63.1 106.4,60.1     107.6,60.1   "/><polygon fill="#FFFFFF" points="116.7,60.9 114.9,60.9 114.9,64.9 113.7,64.9 113.7,60.9 111.9,60.9 111.9,60 116.7,60   "/></g></g><g><g id="NavbarFooter-blizzard-upper"><path fill="#009dff" d="M75.6,43.9c0.1,0.5,0.2,1,0.4,1.4v4.1h-0.1c-0.1,0.1-0.2,0.2-0.4,0.3c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2    v0.1H69V50c-0.1-0.1-0.2-0.3-0.3-0.4l-2.2-0.2c-0.5,0.5-1,0.9-1.7,1.1h-0.1c-1.6,0-2.6,0.1-3.5,0.1c-0.8,0.4-1.7,0.6-2.5,0.8h-0.1    v0c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.3,0.1-0.6,0.1-0.7v-1.7l0.1,0c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.1-0.3,0.1-0.5    c0-0.3-0.1-0.6-0.2-0.9v-0.1l0.1-0.1c0.3-0.2,0.6-0.4,0.8-0.8c0.1-0.2,0.1-0.3,0.1-0.5c0-0.3,0-0.6-0.1-0.8v-0.1l0.1-0.1    c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.1-0.3,0.1-0.5c0-0.3-0.1-0.5-0.1-0.8v-0.1c0-0.2,0.3-0.7,0.4-1.1c0.1-0.4,0.2-0.9,0.2-1.3    c0-0.6-0.1-1.2-0.2-1.8c-0.1-0.4-0.2-0.7-0.4-1c-0.3-1-0.5-2-0.5-3.1c0-1.4,0.2-2.8,0.4-4.3l2.6-6.9c-0.2-0.1-0.3-0.3-0.4-0.5    c0-0.1,0-0.2,0-0.2c0-0.2,0-0.2,0-0.4v-0.1l0,0c0.3-0.3,0.5-0.8,0.6-1.3c0-0.2,0-0.4,0-0.5s0-0.1,0-0.2c0.1-0.5,1.2-1.8,1.3-3    c0-0.2,0-0.4,0-0.5c0-0.4,0-0.7,0-0.7c0.7-2,1.7-4,3-5.7V7.6h0.1c0.2-0.1,0.3-0.2,0.4-0.4l0,0c0-0.1,0,0-0.2-0.3h-2.3V6.8    c-0.1-0.2-0.2-0.3-0.3-0.5c-0.2-0.2-0.4-0.2-0.7-0.2c-0.5,0.1-1,0.2-1.5,0.3c-0.3,0.2-0.6,0.5-0.7,0.9c-0.4,0.9-0.6,1.9-0.8,2.8    c-0.4,2.6-0.8,2.9-1.4,3h-0.2c-0.3,0-0.5,0.2-0.6,0.4l-0.1,0.1l-0.1-0.1c-0.2-0.2-0.4-0.4-0.5-0.4l-0.1-0.1v-0.1    c0.1-0.3,0.2-0.7,0.2-1c0-0.5-0.2-0.7-0.2-1.2c0.1-0.4,0.3-0.8,0.7-1v-8h14.9v0.1c0.3,0.4,0.3,0.4,0.3,0.4h0.3h0.2v0.5l0,0    c-0.4,0.4-0.5,2-1.8,3.2c0,0.3,0.1,0.5,0.1,0.8c0,0.2,0,0.5-0.1,0.7C72.4,8,72,8.7,71.3,9.1c0,0.3,0.1,0.5,0.1,0.8    c0,0.2,0,0.5-0.1,0.7c-0.3,0.8-0.8,0.4-0.9,1.3c0,0-0.2,1.6-0.5,2.7s-0.8,1.6-0.8,2.4c0,0.1,0,0.3,0,0.4l-0.1,4.2h-0.1    c-0.6,0.4-0.5,2.8-1.7,4v1.5c-0.3,0.9-1,0.9-1.3,2v5l-1.3,3.7c0,0.1,0.1,0.7,0.1,1.3c0,0.3,0,0.7-0.1,1c-0.3,1.2-0.7,2.3-1.4,3.3    l-0.2,0.3c0,0,0,0.1,0,0.1c-0.1,0.5-0.2,1-0.4,1.4c-0.1,0.4-0.2,0.7-0.4,1c0.1,0.1,0.2,0.2,0.3,0.2c0.1-0.1,0.2-0.2,0.3-0.4    l0.1-0.1l0.1,0.1c0.2,0.1,0.5,0.2,0.8,0.2c0.5,0,1-0.2,1.6-0.2c0.2,0,0.2-0.2,0.3-0.5c0-0.4,0.2-0.8,0.4-1.1    c0.7-0.7,2.1-0.8,2.4-1.1c1.8-1.2,2.5-0.7,3.6-2.5l0.1-0.2l0.2,0.1c0.1,0.1,0.3,0.3,0.4,0.4h2.2v0.1c0.4,0.3,0.6,0.7,0.7,1.2    C75.7,43,75.6,43.4,75.6,43.9z M86.6,35.1c0,1.8,0,3.5-0.2,5.3v0.1h-0.1c-0.4,0.7-0.7,1.4-0.9,2.2c-0.2,1-0.6,1.9-1.2,2.7v2.5    l-0.1,0.1c-0.5,0.3-0.6,2.2-1.2,3v1.5l-0.1,0c-0.1,0.1-0.2,0.2-0.4,0.3v2l-0.1,0.1c-0.2,0.3-0.4,0.4-0.8,0.5c-0.1,0-0.2,0-0.2-0.1    c-0.1,0-0.2,0.1-0.2,0.1L81,55.4v-2.7l-1.3-4.3v-1.2c0.1-1-2.1-1.7-2.2-3.8v-0.1l0,0c1.7-1.9,2.6-4.3,2.8-6.8l0,0    c0.1-0.3-1.1-1.1-2.4-1.8c-1-0.5-1.9-1-2.8-1.7h-0.8l0.4,1.1v2.4c0.6,0.2,0.9,0.9,1.3,0.9c0.1,0,0.2,0.1,0.2,0.2    c-0.2,0.4-0.5,0.8-0.7,1.2v0.2h-0.2c0,0-1.3-0.1-2.4-0.1c-0.4,0-0.8,0-1.2,0.1c-2.1,0.7-4.4,1.6-4.4,1.6h-0.1l-0.1-0.1    c-0.6-0.9-0.1-0.7-0.6-1.4l-0.1-0.1l0.1-0.1c0.4-0.7,1-1.2,1.5-1.8c0-0.6,0.1-1.2,0.4-1.8c0.4-0.7,1.4-0.9,1.3-1.1    c-0.1-0.2-0.2-0.3-0.4-0.3L69.4,34v-0.1c0,0,0.2-1.4,0.3-2.1c0-0.1,0-0.3,0.1-0.4c-0.1-0.4-0.2-0.8-0.2-1.2c0-0.3,0.1-0.6,0.3-0.9    c0.1-0.1,0.2-0.2,0.4-0.3V27h0.1c0.2-0.1,0.4-0.3,0.4-0.6c0-0.1,0-0.1-0.1-0.2c-0.2-0.1-0.4-0.3-0.3-0.6c0-0.1,0-0.2,0-0.3    c0-0.2,0.1-0.4,0.1-0.6c0-0.4-0.1-0.7-0.1-1.1c0-0.2,0-0.4,0.1-0.6c0.2-0.5,0.5-1,0.9-1.5c0.3-0.8,0.5-1.6,0.5-2.4V19h0.1    c1-0.5,0.4-2.7,1.2-4.4c0.3-0.8,0.7-1.5,1.2-2.1c0,0,0-0.1,0-0.1c0-0.3-0.2-0.6-0.2-0.9c0-0.2,0.1-0.3,0.2-0.5    c0.1-0.1,0.3-0.3,0.4-0.3c0.2-0.8,0.6-1.7,0.9-2.4c0.2-0.5,0.5-0.9,0.8-1.3v-2l0.1-0.1c0.1-0.1,0.3-0.2,0.3-0.4    C76.8,4.2,77,4,77.2,3.9l0,0l0,0c0.4,0,0.4-0.4,0.5-1c0-0.2,0-0.3,0-0.5c0-0.6,0.1-1.3,0.9-1.3c1.4,0.1,1.3,2.4,1.4,2.7    c1.2,2.5,1.5,2.1,1.5,2.8v1.3c0,1.1,1.6,5.2,1.6,5.2l1.4,5.4c0.1,0.1,0.3,0.2,0.4,0.3H85v1.9c0.3,0.2,0.4,0.5,0.5,0.8    c0,0.2-0.1,0.3-0.1,0.4c0,0.2,0.2,0.4,0.4,0.5h0.1v2.5h-0.1c0,0,0,0.1,0,0.1c0.1,1.6,0.3,3.1,0.6,4.6l0,0v0.1    C86.5,30.5,86.6,32.8,86.6,35.1L86.6,35.1z M75.8,28.6c0,0.3,0,0.5-0.1,0.8v0.1c0.3,0,0.5,0,0.8,0c0.4,0,0.9,0,1.3,0.1    c1.3,0.3,2,1.2,2.8,1.4h0.4c0-0.6,0.1-2.8,0.1-4.5c0-1,0-1.8-0.1-2.1c-0.2-0.5-0.4-1-0.3-1.6c0-0.6-0.2-1.2-0.5-1.7    c-0.5-0.5-1.2-0.2-1.8-0.9c-0.3-0.4-0.6-0.9-0.8-1.5l-0.1,2v0.1h-0.1c-0.3,0.2-0.4,0.6-0.5,0.9c-0.1,0.4-0.4,0.7-0.8,0.8    c0,1-0.1,1.9-0.4,2.8c0,0.2,0,0.4,0,0.6C75.6,26.8,75.8,27.9,75.8,28.6z M57.8,36.4l-0.2,0c-0.7,0.2-0.4,0.7-0.9,1.3    c-0.1,0.6-0.2,1.3-0.1,1.9c0,1.9,0.2,4.5,0.2,4.5v0.2h-0.2c-0.6,0.1-1.2,0.4-1.6,0.9l0,0.1h-5l0-0.1c-0.3-0.4-0.3-0.4-0.3-0.4    c0,0-0.2,0-0.5,0c-0.3,0-0.7,0.1-0.8,0.4c-0.1,0.3-0.5,0.5-0.8,0.5l0,0c-0.5-0.1-1-0.3-1.5-0.7h-3.4V45c-0.2-0.2-0.4-0.5-0.5-0.8    c0.1-0.2,0.2-0.3,0.3-0.4l0.3-0.3v-2.9h0.1c0.4-0.3,0.4-0.3,0.4-0.3c0-0.1,0-0.2,0-0.3c0,0,0,0,0-0.1l-0.1-0.2    c-0.1-0.1-0.1-0.3-0.2-0.5c-0.1-0.3-0.3-0.5-0.5-0.8l-0.1-0.1l0.1-0.1c0.2-0.2,0.3-0.5,0.3-0.8c0-0.3-0.1-0.6-0.3-0.8l0,0l0,0    c0-0.2,0-0.5,0-0.7c0-1.4,0.5-3,0.5-3.8v-0.2l0.1,0c0.4-0.3,0.3-1.7,0.8-2.8c0.4-0.7,0.9-1.5,1.5-2.1c0.2-1.4,0.8-2.7,1.8-3.6    c0.1-0.5,0.9-4.3,1.6-5.5c0.2-0.2,0.4-0.3,0.6-0.5l0.5-0.4c0-0.3,0.3-1,1.7-2.3c-0.1-0.5-0.2-1-0.2-1.5c0-0.4,0.1-0.9,0.3-1.3l0,0    l0,0c0.9-0.7,1.5-2.2,3-3.6v-3l-4.8,0C49,5.9,47.2,6,47.1,8.5v0.2h-0.2c-0.3,0-0.7,0.2-0.9,0.4c-0.3,0.1-0.6,0.4-0.6,0.8v3.5    c-0.2,0.6-0.5,1.2-0.9,1.7l-0.1,0.2L44.2,15c-0.2-0.2-0.4-0.5-0.4-0.8c0-0.2,0-0.3,0-0.4c0-0.2-0.2-0.4-0.4-0.5h-0.1v-0.1    c0,0-0.1-0.9-0.2-1.5c0-0.2,0-0.4-0.1-0.6l-0.1-0.1V11c0.2-0.6,0.4-1.3,0.4-2c0-0.4-0.1-0.8-0.4-1.2c-0.1-0.1-0.3-0.2-0.4-0.3    h-0.1V3.3l0,0c0.2-0.3,0.4-0.6,0.4-1c0,0,0-0.1,0-0.1V2h0.2c6.1,0,6.7,0,12.7,0h0.2v2.4c0,0.4,0.4,0.4,0.4,1v7.9l-0.1,0.1    c-0.4,0.4-0.6,0.9-0.5,1.5c0,0.4,0.1,0.8,0.2,1.2v0.1l-0.1,0.1c-1.3,0.9-1.9,4.4-2.7,5.3v2H53c0,0-1.8,0.8-2.1,1.7    c-0.1,0.3-0.1,0.5-0.1,0.8c0,0.4,0,0.7,0.1,1.1v0.1l-0.1,0c-1.4,0.5-3.7,7-3.7,7.3v1.2H47l0.1,0.1l0,0C47,36,47,36,47,36.1    c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.5-0.5,1.3-0.7,2c-0.3,1.2-0.7,2.4-1.2,3.5c0.2,0.3,0.2,0.3,0.3,0.3s0.2,0,0.4,0    c0.4,0,0.5-0.2,2.2-1c0.7,0,1.4-0.2,2.1-0.5c0.5-0.6,1-1.2,1.3-1.9c0.5-0.9,1.4-1.6,2.5-1.8c0.1-0.7,0.4-1.3,0.8-1.8l0.2-0.2    l0.1,0.2c0.1,0.1,0.1,0.2,0.2,0.3c1.4-0.6,0.8-1.3,1.5-2.2v-0.1h1.2v0.2c0,0,0,0.2,0,0.4c0,0.7,0.1,1.3,0.3,2L57.8,36.4z     M20.8,39.3c0,0.5,0.3,1.6,0.3,2.6c0,0.2,0,0.5-0.1,0.7c-0.2,0.7-0.4,1.5-0.8,2.2c-0.5,0.7-0.9,1.4-1.3,2.2c-0.3,1-0.5,2-0.6,3V50    h-0.1c-1,0.4-1.9,1-2.7,1.5c-0.8,0.4-1.5,1.1-2,1.8v0.1h-0.1c-0.9,0.1-1.8,0.3-2.8,0.5c0,0-0.1,0-0.1,0.1    c-0.1,0.1-0.2,0.2-0.4,0.3c-0.5-0.1-0.6-0.7-0.9-0.6c-0.3,0-0.5,0.2-0.6,0.4c-0.2,0.5-0.9,0.5-1.6,0.5c-0.9,0-1.8-0.1-2.6-0.3    c-0.2,0.1-0.3,0.1-0.5,0.1c-0.5,0-1.1-0.1-1.4-0.1H2.3l-0.1,0.3L2,54.4C1.9,54.3,1.6,54,1.5,54l-0.3-0.2l0.3-0.1    C2,53.5,2.5,53.3,2.9,53l0,0v-0.1c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.2-0.6,0.3-1c0.2-0.8,0.4-1.8,0.6-2.5C3.8,46.6,4,45.3,4,44    c0-0.7-0.1-1.5-0.2-2.2c0-0.3-0.2-2.7-0.4-4.3c0-2.7,0.2-5.6,0.2-7.2c0-0.3,0-0.6,0-0.8v-0.2h0.2c0.2,0,0.4-0.2,0.5-0.4l-0.1-2.2    l-0.3-0.7v-3.2c0.1-0.3,0.2-0.7,0.4-0.9c0.1-0.2,0.1-0.4,0.1-0.7c0-0.4,0-0.9-0.1-1l-0.4-0.8v-11h0.1C4.3,8.1,4.3,8.1,4.3,8    s0-0.3,0-0.6s0-0.5,0-0.5l0,0C4.2,6.8,4.1,6.7,4.1,6.6H3.7c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0H3.2c-0.1,0-0.1-0.1-0.1-0.2    c0,0,0-0.1,0.1-0.1L2.9,6.1L1.5,4.7C1.4,4.6,1.3,4.4,1.2,4.3C1.1,4.2,1,4.1,1,4c0-0.1,0-0.2,0-0.4c0-0.2,0-0.5,0.1-0.7    c0.1-0.1,0.3-0.3,0.4-0.5V2.4h2.4C4.4,2.1,5,2,5.6,2c0.8-0.1,1.7-0.2,1.9-0.2l2.3,0.1c2.3,0,3.2-0.2,4.4-0.2c0.7,0,1.3,0.1,2,0.2    h0.1v0.1c0.2,0.5,0.7,1,1.2,1.3h0.3c0.4,0,0.8,0.1,1.1,0.3c1.3,1.2,2.2,2.8,2.2,4.6c0,1.2,0.3,2.4,0.3,3.3c0,0.5-0.1,1-0.4,1.3    l-1.6,3c-0.8,1.2-1.6,2.4-2.5,3.5c0.1,0.2,0.3,0.3,0.5,0.4c0.5,0.3,1,0.4,1.5,0.4c0.3,0,0.6,0.3,0.6,0.7c-0.1,0.5-0.2,0.9-0.5,1.3    c0,0,0,0.1,0,0.1c0,0.1,0,0.3,0.1,0.4c0,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0.1-0.1l0.1-0.2l0.1,0.1c0.4,0.2,0.6,0.6,0.8,1    c0,0.1-0.1-0.1,0.4,0.4l0.1,0.1v0.1c-0.2,1-0.3,2-0.4,3c0,0.7,0.1,1.4,0.4,2.1c0.1,0.4,0.9,0.5,0.9,1.1c0,0.1-0.1,0.2-0.1,0.3    c0,0.2,0,0.6,0,1c0,0.3,0,0.6,0,0.8c0,0.1,0,0.1,0,0.2c0,1.4,0.3,2.7,0.3,3.9c0.1,0.9-0.2,1.8-0.7,2.6    C20.9,39.1,20.8,39.2,20.8,39.3L20.8,39.3z M14.9,9.4c0-0.1,0-0.2,0.1-0.2l0.6-0.4c-0.7-0.2-1.3,0.2-1.9-1h-0.2l-1.9,0.3l0.1-0.3    c0-0.1,0.1-0.1,0.1-0.2l-0.2,0.1c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3-0.2,0.5-0.4,0.6v8.3c0.1,0,0.3-0.1,0.4-0.1l0,0    c0.2,0,0.3,0,0.5,0.1c0.9-0.3,0.5-2.4,3-2.7c0-0.2,0-0.6,0-1c0-1,0-2.2,0.4-2.6C15.2,10.4,15,9.9,14.9,9.4z M15.3,38.9    c0-0.3,0.2-0.6,0.1-0.7c0-0.1-0.1-0.2-0.2-0.3L15,37.8l0.2-0.1c0.1-0.1,0.2-0.2,0.2-0.3c0-0.5-0.6-1.4-0.6-2.3    c0-0.4,0.2-0.8,0.5-1.1c0.1-0.5,0-0.9-0.3-1.3c-0.3-0.4-0.5-0.9-0.4-1.3c0-0.5,0.4-1.3,0.4-1.8c0-0.1,0-0.2-0.1-0.3l-0.1-0.1    l0.1-0.1c0.1-0.1,0.1-0.3,0.1-0.5c0-0.4-0.2-0.7-0.4-1l-0.2-0.3h0.4h0.1c-0.1-0.2-0.3-0.5-0.3-0.7c0-0.1,0-0.2,0.1-0.2    c0,0,0.1-0.1,0.1-0.2c-0.1-0.4-0.4-0.7-0.7-1c-0.6-0.4-1.2-0.9-1.8-1.4L11,22.6c0,0.6,0,1.6,0,2.5c0,0.7,0,1.3,0,1.7v0l0,0    c-0.2,0.3-0.3,0.7-0.3,1c0,0.7,0.1,1.3,0.3,2l0,0l-0.5,2.2h-0.1c-0.2,0.1-0.3,0.2-0.3,0.5c0,0,0,0,0,0c0,0.2,0.1,0.4,0.3,0.5h0.1    v8.2v0c-0.2,0.1-0.3,0.3-0.4,0.5c0,0.2,0,0.3-0.1,0.3c0,0.1,0,0.1-0.1,0.2c0,0.4,0,1.4,0,3.5c0,0,0,1.1,0.1,1.5l0,0    c0,0,0,0.1,0,0.1c-0.1,0.3-0.3,0.7-0.5,1l-0.3,0.6c0.4,0,0.8-0.1,1.2-0.3l1-0.9h0.1c0.7,0,1.6-1.5,2.3-2c0.6-0.4,0.3-2.3,0.6-3.7    v0l0,0l0,0V42c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.2-0.6,0.3-0.9c0.2-0.5,0.3-1.1,0.3-1.6l0,0C15.2,39.1,15.2,39,15.3,38.9L15.3,38.9z     M104.7,46.4c0.1,0.2,0.2,0.4,0.2,0.6c0,0.3-0.1,0.5-0.2,0.8c-0.2,0.5-0.1,0.7-1.1,5.7v0.2l-0.2-0.1c-0.7-0.2-1.4-0.5-2-0.8    c-2.3-2.2-2.9-2.4-3.9-2.4h-0.8v-0.1c0-0.1,0-0.1,0-0.2c0-0.8,1.3-3.7,1.5-5c0.1-1.4,0.2-2.8,0.2-4.2c0-0.5,0-0.9,0-1.4l0,0    c-0.1-1.3-0.4-2.6-0.7-3.9c-0.4-1.8-1.1-3.6-1.5-3.6H96v-0.2c0.1-1,0.4-2.4,0.4-3c0-0.1,0-0.1,0-0.2c-0.6-1.2-1.9-3.6-2.7-4    c0,0.2,0,0.4,0.1,0.6c0,0.6-0.2,1.1-0.5,1.6c-0.2,0.3-0.3,0.6-0.4,1l0,0l0,0l0,0l0,0v0.1c0,1.1,1.1,10.2,1.1,11.1v0.1l-0.2,0.2    l0,0c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.2-0.1,0.3l0,0c0.2,0.2,0.3,0.5,0.4,0.8c0,0.5,0.1,1.2,0.1,1.8c0,0.9-0.1,1.8-0.4,2.6    c0.1,1,0.4,3.3,0.4,4.5c0,0.1,0,0.3,0,0.4l0,0l0,0c-0.1,0.1-0.2,0.3-0.4,0.3c0,0.3,0.1,0.6,0.1,0.9c0,1-0.2,1.9-0.4,2.8l-0.1,0.5    L93,54c-0.7-2-2-3.8-3.7-5.2c-1.3-1.1-2.3-1.4-2.4-2c0,0,1.5-5.4,2.2-6c0.1-0.2,0.1-0.4,0.1-0.6c0-0.4,0-0.8-0.1-1.2    c-0.1-0.1-0.3-0.1-0.4-0.2l-0.1-0.1v-0.1c0-0.1,0-1.5,0-3.3c0-3.4,0-8.2,0-8.8c-0.1-0.3-0.1-0.6-0.2-0.9l0,0h-0.1L88.2,24    c-0.2-0.3-0.3-0.8-0.4-0.8h-0.1V23c0,0,0-0.5,0-0.9c0-0.2,0-0.4,0-0.6c-0.1-0.2-0.1-0.4-0.1-0.6c0-0.2-0.1-0.4-0.1-0.6l0,0l-0.1,0    v-0.1c0,0,0,0,0-0.1c0-0.4-0.1-0.9-0.2-1.3c-0.1-0.3-0.2-0.7-0.2-1c0-0.3,0-0.6-0.1-0.9H87v-2.2c-0.2-0.2-0.4-0.4-0.4-0.8    c0-0.1,0-0.1,0-0.1c-0.1-0.2-0.2-0.3-0.4-0.3h-0.1v-0.1C86,12.7,86,12,86,11.3c0-0.7,0-1.3,0.1-2V9.3l0,0c0.7-0.7,2.7-1.7,4-3.5    c-0.3-0.1-1.2-0.4-1.3-0.4l-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.3-0.1-0.5-0.2h-0.1V5.5    c-0.3-0.9-0.8-1.7-1.6-2.2C85,2.6,84.3,2.2,84.1,2l-1.6-0.3V1.3l6.3-0.2c0.3-0.2,0.7-0.3,1.1-0.3c0.3,0,0.6,0.2,0.7,0.5h2.3l0,0    H93l0.5,0.2L94.7,2l1.7,0.5h0.4c0.2,0,0.4,0,0.5,0c0.7,0.1,1.4,0.5,2,1c0.3,0.3,0.6,0.6,1,0.8h0.1l2.2,4.7c0.1,0.3,0.1,0.7,0.1,1    c0,0.8-0.1,1.8-0.1,1.8v0.1h-0.1c-0.1,0.1-0.1,0.3-0.2,0.4c0,0.2-0.1,0.4-0.2,0.5c0,0.2,0,0.5,0,0.8c0,0.6,0,1,0,1.1    c-0.8,3.2-2.3,5.8-5.1,5.9c0,0.4,0,0.6,0,0.8c0,0.2-0.1,0.5-0.3,0.6H97c0.3,0,0.6-0.1,1-0.1c0.5,0,1.1,0.3,2,1.4    c0.4,0.3,0.6,0.8,0.6,1.3c0,0.1,0,0.1,0.1,0.1c0.2,0.1,0.4,0.2,0.6,0.3c0.1,0.1,0.2,0.2,0.2,0.3c0,0,0,0.1,0,0.1    c0,0.2,0.1,0.3,0.1,0.5c0.1,0.5,0.2,1,0.3,1.5c0.2,0.8,0.2,1.6,0.2,2.4c0,0.7,0.1,1.4,0.2,2.1l0,0c0.1,0.1,0.1,0.2,0.1,0.3    c0,0.1,0.1,0.3,0.1,0.5c0,0.2,0.1,0.4,0.3,0.5c0.1,0,0.1,0,0.2-0.1l0.2-0.1l0.1,0.2c0.2,0.4,0.8,4.7,0.8,5.1v0.1v0.1    c-0.2,0.5-0.2,1.1-0.3,1.6c0.1,0.1,0.3,0.1,0.4,0.2h0.1v0.1c0.3,0.5,0.5,1,0.6,1.6v0.1v0.1c-0.1,0.1-0.2,0.3-0.2,0.4    c0.1,0.5,0.1,1,0.2,1.4c0,0.8-0.1,1.5-0.3,2.3l0,0L104.7,46.4z M96.8,15.3c0-0.3,0-0.6,0.1-0.9v-0.2H97L97,14    c0-0.1,0.1-0.2,0.2-0.3v-0.9c0-0.2,0.1-0.3,0.1-0.5c0-0.6-0.2-1.2-0.5-1.7c0,0-0.7-0.9-1.4-1.9s-1.7-1.9-2.1-1.8h-0.4v12.8h0.5    c0.2,0,0.3,0,0.5,0c0.6-0.1,1.2-0.4,1.6-0.9c0.5-1.1,0.9-2.1,1.3-3.3C96.8,15.5,96.8,15.4,96.8,15.3z M121.1,20.5    c0,0.7,0,1.4-0.2,2.1l0,0l0,0c-0.1,0-0.3,0.8-0.6,1.1c0,0.1,0,0.2,0,0.3c0,0.5,0.1,1.1,0.1,1.7c0,0.5-0.1,1-0.3,1.5    c-0.2,0.6-0.6,1.1-1,1.5l-0.4,2.2c-0.2,0.5-0.3,1-0.3,1.6c0,0.4,0.3,3.7,0.3,6.1c0,0.8,0,1.7-0.2,2.5c-0.3,0.7-0.4,1.5-0.3,2.2    c0,0.2,0,0.4,0,0.7c0,0.8-0.1,1.7-0.4,2.5l-0.4,2.4c-0.2,0.7-0.5,1.3-0.9,1.9c-0.1,0.3-0.3,0.5-0.5,0.7c-0.1,0.1-0.3,0.2-0.4,0.3    c-0.2,0.5-1.1,0.6-2.1,1c-1,0.2-2,0.5-2.9,0.9h-0.1c-0.5,0-1.1-0.5-1.3-0.5l0,0c-0.3,0.3-0.8,0.5-1.2,0.5    c-0.6,0.1-1.2,0.2-1.7,0.2c-0.2,0-0.3,0-0.4-0.1l-0.2-0.1l0.1-0.2c0.8-0.8,1.3-1.9,1.4-3c0-0.1,0-0.1,0-0.2    c-0.1-0.8-0.2-1.6-0.5-2.4l-0.1-0.2l0.2-0.1c0.6-0.2,1.9-0.8,1.8-1.1c0-0.1,0-0.1,0-0.2h-0.1c-0.1,0-0.3-0.1-0.3-0.2l-0.5-1.3    l-0.9-2l0.8-7.9c-0.9-1.4-1.6-2.9-1.9-4.5v-1.3c0-0.4-0.4-0.4-0.4-1c0,0-0.1-1.6-0.1-2.8c0-0.4,0-0.8,0.1-1.2    c-0.1-0.1-0.2-0.2-0.3-0.3l-0.1-0.1l0.2-3c-0.1-0.2-0.1-0.4-0.2-0.7c0-0.3-0.1-0.5-0.2-0.8l0,0l-0.1,0v-8.9l0.1-0.1    c0.1-0.1,0.2-0.2,0.4-0.3V6.9h0.1c0.1-0.1,0.2-0.2,0.4-0.3V4.1c-0.4-0.4-3.7-3.6-3.9-3.7l-0.2-0.3h2.5v0.1    c0.1,0.1,0.2,0.3,0.3,0.4h1.5v0.1c0,0.4,2.1,0.7,3,1.7h1.4v0.1c0.1,0.2,0.3,0.4,0.5,0.6h1.4l0.1,0.1c0.1,0.1,0.2,0.3,0.3,0.4h1.9    v0.1c0.1,0.1,0.2,0.3,0.3,0.4h2l0.1,0.1c0.6,1.1,1.9,1.7,2.2,2.2c1.5,3.1,1.2,3.4,1.7,3.7h0.1l-0.1,4.5c0.1,0.2,0.2,0.5,0.3,0.7    c0.1,0.3,0.1,0.5,0.3,0.7h0.1v0.1C120.7,16.1,121.1,18.6,121.1,20.5L121.1,20.5z M114.6,27.8c-0.1-0.7,0.3-1.4,0.8-1.9    c0.1-0.5,0.4-2.5,1-3.1v-4.3c-0.3-0.4-0.5-0.9-0.6-1.5c-0.1-0.5-0.2-0.9-0.3-1.3c-0.5-0.7-1.6-1-1.7-2.2c-1-0.1-1.2-1-1.6-0.9    c-0.8,0-1.3-0.1-1.9-0.1h-0.7l-0.2,1.6l0.1,0.6c0,0,0.2,4.7,0.2,6.5c0,0.1,0,0.3,0,0.4l0,0c0,0.1,0.1,0.2,0.1,0.3l0.2,0.4v0.1    c0.1,0.9,0.3,1.8,0.8,2.7h0.1L111,45.8c1.2-1.3,1.9-3,2.1-4.8c0-0.1,0-0.2,0-0.3c0.5-1.7,1-2.2,1.2-3.2l0,0c0-0.5,0-8.5,0.3-9.5    C114.6,28,114.6,27.9,114.6,27.8L114.6,27.8z M41,45.7l-0.3-0.1c-0.2-0.1-0.4-0.1-0.6-0.1h-0.4l0,0h-0.1c-0.2,0-0.5,0.1-0.7,0.2    h-0.1l-0.1-0.1c-0.6-0.2-1.1-0.2-1.7-0.2c-1.1,0-2.3,0.1-3.4,0.4c-0.2,0.4-0.6,0.6-1,0.8l0,0c-0.1,0-0.1,0-0.2-0.1l0,0    c-0.2-0.1-0.4-0.3-0.6-0.5l-0.2-0.1l0.1-0.1c1.3-1.6,0.5-1.1,2-2c0.3-1.9,0.4-3.7,0.4-5.6v-0.4h0.1c0.4-0.3,0.4-0.3,0.4-0.4    c0-0.1,0-0.2,0-0.4c-0.2-0.5-0.3-0.9-0.4-1.4c0-0.7,0.2-1.3,0.5-1.9l-0.1-18.5h0.1c0.1-0.1,0.2-0.2,0.3-0.2h0.1c0,0,0,0,0,0    c-0.1-0.2-0.2-0.3-0.4-0.3v-0.1L34.2,5c-0.2-0.4-0.5-0.6-0.9-0.7c-0.4,0-0.7-0.3-0.9-0.6c-0.3,0.1-0.5,0-0.7-0.2    c-0.1-0.2-0.3-0.4-0.5-0.6l-0.1-0.1L31,2.8c0.2-0.2,0.4-0.5,0.4-0.6l0.1-0.1h0.1c1.4,0.2,2.9,0.2,4.3,0.2c1.3,0,2.5,0,3.8-0.2    l0.1,0L40,2.2c0.2,0.2,0.3,0.5,0.5,0.7l0,0v0.9h-0.1c-1.1,0.3-2.2,1.3-2.2,2.1c0,0.6,0.1,0.6,0.1,0.6c0.3,0.2,0.4,0.5,0.3,0.8    c0,0.3-0.1,0.6-0.4,0.8C38.1,8.1,38,8.3,38,8.5c0,1.4,0.2,5.1,0.2,8.3c0,1.3,0,2.6-0.2,3.9c0.1,0.2,0.2,0.4,0.2,0.6    c0,0.2,0.1,0.5,0.1,0.7l0,0h0.1l0.2,1.4l-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.3-0.3,0.7-0.3,1.1c0,0.4,0.1,0.8,0.1,1    c0,0.2,0,0.3,0,0.5c0,0.4,0,0.9,0.1,1.3c0,0.3,0,0.9,0.1,1.2c0,0,0,0.1,0,0.1h0.1V29c0,0.3,0.1,0.6,0.1,0.8c0,0.3,0,0.7-0.1,1v0.1    h-0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.2-0.4,0.5-0.4,0.8c0.2,0.8,0.3,1.7,0.4,2.5v0.2c0.1,0.6,0.3,1.1,0.6,1.6l0,0l0.1,0.1    l-0.2,3.3h-0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.3,0.1,0.7,0.2,1c0.4,1.5,0.2,0.7,2.9,2.6h0.1L41,45.7z     M56.4,55.2h-6.1v-0.1c-0.1-0.1-0.2-0.3-0.3-0.4h-1.5v-0.1c-0.1-0.2-0.2-0.4-0.4-0.4h-0.3c-0.3,0-0.6-0.2-0.8-0.5h-4.2    c-0.4,0-0.8-0.2-1-0.6C41,53,35.6,53,32.8,53h-1.9l0-0.1c-0.4-0.3-0.8-0.5-1.3-0.6H28c-0.3,0.3-2.5,1.7-2.7,2.3l0,0.1h-0.1    c-0.8-0.1-1.7-0.2-2.6-0.2c-0.5,0-0.9,0-1.3,0.2l-0.1,0.1L21,54.6c-0.1-0.2-0.2-0.3-0.4-0.4l-0.1-0.1l0.1-0.1    c0.2-0.2,0.4-0.4,0.4-0.7v-0.1l1.3-0.7c0.5-0.5,0.4-0.3,1.5-1.3v-2h0.1c0.2-0.1,0.3-0.2,0.4-0.5c0-0.2-0.2-0.4-0.4-0.4l-0.1-0.1    v-3.6h0.1c0.1-0.1,0.2-0.2,0.4-0.3v-1.6h0.1c0.4-0.3,0.4-0.3,0.4-0.3c0-0.1,0-0.2,0-0.3c0-0.5-0.4-0.9-0.8-1.2l-0.1-0.1v-6h0.1    c0.2,0,0.3-0.2,0.3-0.3c-0.1-0.5-0.1-1-0.1-1.5c0-0.5,0-1.1,0.1-1.6v-0.1h0.1c0.1-0.1,0.2-0.2,0.4-0.3v-4.7h0.1    c0.3-0.3,0.4-0.6,0.5-1c0,0,0,0,0-0.1c0-0.4-0.2-0.7-0.4-1h-0.1v-6.6c-0.1-0.1-0.2-0.2-0.4-0.3h-0.1v-3.6h0.1    c0.3-0.2,0.6-0.5,0.8-0.8c0-0.3,0.1-1.2,0.1-2c0-0.4,0-0.8-0.1-1.1c-0.1-0.1-0.2-0.2-0.4-0.3l-0.1-0.1l0.1-0.2    c0.4-0.6,0.6-1.3,0.7-2.1l0,0c-0.1-0.8-0.4-1.7-0.8-2.4c-0.2-0.2-0.5-0.3-0.9-0.3h-0.2v0.1l-0.2-0.1c-0.5-0.4,0.2-0.6-2.2-2.3    L21.1,2l0.1-0.1c0.2-0.2,0.4-0.5,0.4-0.8V0.9h0.8l0,0.1c0.1,0.1,0.2,0.3,0.3,0.4h3.5v0.1c0.1,0.5,0.5,0.8,1,0.9    c0.1,0,0.3-0.1,0.5-0.1c0.1,0,0.2,0,0.3,0.1c0.6,0.7,1.2,1.4,1.9,2.1h0.1v4.4l-0.1,0.1c-0.2,0.1-0.4,0.3-0.4,0.6l0,0l0,0    c0.1,0.4,0.4,0.7,0.8,0.9h0.1v2l0,0.2c-0.1,0.1-0.2,0.2-0.4,0.3v9.2c0.3,0.2,0.6,0.5,0.9,0.8c0.2,1,0.3,2,0.3,3    c0,2.8-0.2,6.5-0.2,6.5v0.1h-0.1c-0.1,0.1-0.2,0.2-0.4,0.3v3.1c0.1,0.1,0.2,0.2,0.4,0.3h0.1v0.1c0,0.3,0,0.6,0,0.9    c0,0.7,0,1.6,0,1.6v0.1L30.8,39c-0.5,0.1-0.5,0.4-0.7,1.1c0.3,0.2,0.4,0.5,0.4,0.8V41c0.1,0.4-0.1,0.7-0.4,0.9v2L30,44    c-0.1,0.1-0.2,0.2-0.4,0.3v2.9l-0.1,0c-0.2,0.1-0.3,0.4-0.4,0.6c0,0,0,0.1,0,0.1c0.4,0.3,0.6,0.8,0.5,1.3c0.8,0,1.4,0.1,2.1,0.1    c0.4,0,0.9,0,1.3-0.1c0.3-0.5,0.7-0.8,1.3-1.1h0.2c0.7,0,2.1,0.7,3.5,0.7c0.7,0,1.5-0.2,2.1-0.6c0.1-0.2,0.4-0.4,0.6-0.4    c0.5-0.1,1.1-0.2,1.6-0.2c1.3-0.1,3.1-0.1,4.9-0.1c3.9,0,7.8,0.1,7.8,0.1h0.2v5.5l0,0l0,0.1l0.2,0.4c0.2,0.3,0.4,0.7,0.6,1    L56.4,55.2z M123,3c0,0.5-0.3,1.3-2.1,1.3s-2.1-0.7-2.1-1.3V1.3c0-0.5,0.3-1.3,2.1-1.3s2.1,0.7,2.1,1.3V3z M122.6,1.2    c0-0.4-0.3-0.9-1.7-0.9s-1.7,0.5-1.7,0.9V3c0,0.4,0.3,0.9,1.7,0.9s1.7-0.5,1.7-0.9V1.2z M120.4,2.5v0.9c0,0,0,0.1,0,0.1    c0,0,0,0,0,0h-0.2c0,0-0.1,0-0.1-0.1c0,0,0,0,0,0V1c0,0,0-0.1,0-0.1c0,0,0,0,0,0h0.9c0.8,0,0.9,0.4,0.9,0.7v0.2    c0,0.3-0.2,0.6-0.5,0.6l0.4,0.9c0,0,0,0.1,0,0.1c0,0,0,0,0,0h-0.2c0,0-0.1,0-0.1-0.1l-0.4-0.9L120.4,2.5L120.4,2.5z M120.4,1.2v1    h0.6c0.3,0.1,0.5-0.1,0.6-0.4c0,0,0,0,0-0.1V1.6c0-0.3-0.3-0.5-0.5-0.4c0,0,0,0-0.1,0L120.4,1.2L120.4,1.2z"/></g></g></svg>'), ne("blz-logo-main", de);
        /**
           * @license
           * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
           * This code may only be used under the BSD style license found at
           * http://polymer.github.io/LICENSE.txt
           * The complete set of authors may be found at
           * http://polymer.github.io/AUTHORS.txt
           * The complete set of contributors may be found at
           * http://polymer.github.io/CONTRIBUTORS.txt
           * Code distributed by Google as part of the polymer project is also
           * subject to an additional IP rights grant found at
           * http://polymer.github.io/PATENTS.txt
           */
        class he { constructor(e) { this.classes = new Set, this.changed = !1, this.element = e; const t = (e.getAttribute("class") || "").split(/\s+/); for (const e of t) this.classes.add(e) } add(e) { this.classes.add(e), this.changed = !0 } remove(e) { this.classes.delete(e), this.changed = !0 } commit() { if (this.changed) { let e = ""; this.classes.forEach((t => e += t + " ")), this.element.setAttribute("class", e) } } } const pe = new WeakMap, ge = m((e => t => { if (!(t instanceof L) || t instanceof R || "class" !== t.committer.name || t.committer.parts.length > 1) throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute."); const { committer: o } = t, { element: s } = o; let r = pe.get(t); void 0 === r && (s.setAttribute("class", o.strings.join(" ")), pe.set(t, r = new Set)); const i = s.classList || new he(s); r.forEach((t => { t in e || (i.remove(t), r.delete(t)) })); for (const t in e) { const o = e[t]; o != r.has(t) && (o ? (i.add(t), r.add(t)) : (i.remove(t), r.delete(t))) } "function" == typeof i.commit && i.commit() })); var ue = te`* {
	font-family: var(--font-default);
}

:host {
	position: relative;
	display: block;
	text-align: center;
	z-index: var(--nav-z-index);
	box-sizing: border-box;

	--color-stop-100: #283244;
	--color-stop-200: #151a23f3;
	--color-selector-tick-background: #11151c;
	--color-selector-region-tick-background: #202836;
	--nav-z-index: 9999;

	--transition-100: color 200ms, background-color 200ms;
}

#selector-section {
	display: flex;
	height: 100%;
}

#dropdown {
	display: none;
	position: fixed;
	inset: 0;
	height: 100%;
	padding: 0;
	font-size: 0;
	text-align: left;
	overflow-y: auto;
	padding: 0;
	box-sizing: border-box;
	background: linear-gradient(
		180deg,
		var(--color-stop-100) 0,
		var(--color-stop-200)
	);
}

:host(.is-open) #dropdown {
	display: block;
	z-index: var(--nav-z-index);
}

#dropdown-container {
	position: relative;
	height: 100%;
	background: linear-gradient(
		to bottom,
		var(--color-stop-100) 0%,
		var(--color-stop-200) 100%
	);
	box-shadow: 0 8px 17px 0 var(--color-darken-400);
}

#dropdown-container:after {
	content: ' ';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border: solid 1px var(--color-content-400);
	pointer-events: none;
}

.selector-section-block-regions {
	background: var(--color-darken-400);
	border-right: 1px solid var(--color-content-400);
	white-space: normal;
	position: relative;
}

.selector-section-label {
	font-size: 13px;
	line-height: 1.5;
	text-transform: uppercase;
	color: var(--color-content-600);
	margin: 10px 0;
	box-sizing: border-box;
	vertical-align: baseline;
}
.selector-section-lable:not(.keyboardMode) * {
	outline-style: none;
}

.selector-option {
	display: block;
	position: relative;
	font-size: 13px;
	line-height: 1.5;
	color: var(--color-content-600);
	text-decoration: none;
	transition: var(--transition-100);
	cursor: pointer;
	padding: 5px 0;
}
.selector-option.active,
.selector-option.selected,
.selector-option:focus {
	color: var(--color-content-900);
}

.selector-option:hover {
	color: var(--color-content-900);
}

.selector-option-label {
	display: inline-block;
}
#selector-tick {
	position: absolute;
	left: 259.094px;
	bottom: 0;
	width: 10px;
	height: 10px;
	border-bottom: solid 1px var(--color-content-400);
	border-left: solid 1px var(--color-content-400);
	background-color: var(--color-selector-tick-background);
	transform: translate(-50%, 50%) rotate(-45deg);
	transform-origin: center;
	z-index: 1;
	opacity: 0.95;
}
:host([region-selection='hybrid']) #selector-tick {
	left: 359.094px;
}

.selector-section-block {
	display: inline-block;
	width: 100%;
	vertical-align: top;
	padding: 10px 32px 15px;
}

.selector-section-block ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.selector-region-tick {
	display: block;
	position: absolute;
	right: -1px;
	top: 0;
	width: 15px;
	height: 15px;
	border-bottom: 1px solid var(--color-content-400);
	border-right: 1px solid var(--color-content-400);
	background-color: var(--color-selector-region-tick-background);
	opacity: 0.95;
	transform: translate(50%, 50%) rotate(-45deg);
	transform-origin: center;
	z-index: 1;
}

:host(.selected-region-us) .selector-region-tick {
	top: 49px;
}
:host(.selected-region-eu) .selector-region-tick {
	top: 94px;
}
:host(.selected-region-kr) .selector-region-tick {
	top: 122px;
}
:host(.selected-region-tw) .selector-region-tick {
	top: 150px;
}
:host(.selected-region-cn) .selector-region-tick {
	top: 178px;
}

.selector-region-tick-overlay {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	border-bottom: 1px solid var(--color-content-400);
	border-right: 1px solid var(--color-content-400);
	background-color: var(--color-selector-tick-background);
	opacity: 0;
}

:host(.selected-region-us) .selector-region-tick .selector-region-tick-overlay {
	opacity: 0.256051;
}
:host(.selected-region-eu) .selector-region-tick .selector-region-tick-overlay {
	opacity: 0.415287;
}
:host(.selected-region-kr) .selector-region-tick .selector-region-tick-overlay {
	opacity: 0.504459;
}
:host(.selected-region-tw) .selector-region-tick .selector-region-tick-overlay {
	opacity: 0.593631;
}
:host(.selected-region-cn) .selector-region-tick .selector-region-tick-overlay {
	opacity: 0.782803;
}

/* Toggler */
#selector-toggler {
	display: inline-block;
	cursor: pointer;
	z-index: 3;
	position: relative;
	text-align: center;
}
#selector-toggler label {
	color: var(--color-content-700);
	display: inline-block;
	vertical-align: middle;
	cursor: pointer;
	margin: 0 auto;
	font-weight: 400;
	line-height: 24px;
	height: 24px;
	transition: var(--transition-100);
	font-family: var(--font-accent);
}
:host(.is-open) #selector-toggler label,
#selector-toggler:is(:hover, :focus) label {
	color: var(--color-content-900);
}

.select-toggler-icon {
	display: inline-block;
	position: relative;
	width: 24px;
	height: 24px;
}

/* GLOBE SVG */
#select-toggler-globe {
	vertical-align: middle;
	margin-right: 5px;
	color: var(--color-primary-500);
	transition: var(--transition-100);
}
:host(.is-open) #select-toggler-globe,
#selector-toggler:is(:hover, :focus) #select-toggler-globe {
	color: var(--color-primary-700);
}

/* ARROWS SVG */
#select-toggler-arrows {
	vertical-align: middle;
	margin-left: 2px;
	width: 16px;
	height: 16px;
	color: var(--color-content-600);
	transition: var(--transition-100);
}
:host(.is-open) #select-toggler-arrows,
#selector-toggler:is(:hover, :focus) #select-toggler-arrows {
	color: var(--color-content-700);
}

/* Overlay */
#overlay {
	display: none;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: var(--color-darken-600);
	z-index: 2;
}
:host(.is-open) #overlay {
	display: block;
	-webkit-animation-name: Navbar-dropdown-fade-in;
	animation-name: Navbar-dropdown-fade-in;
	-webkit-animation-duration: 200ms;
	animation-duration: 200ms;
}

/* Checkmark */
.selector-option-check {
	display: none;
	position: absolute;
	top: 5px;
	right: 100%;
	transform: translateX(-2px);
	width: 18px;
	height: 18px;
	color: var(--color-primary-500);
}
.active .selector-option-check,
.current .selector-option-check {
	display: block;
}

/* External Link */
.selector-option-icon {
	height: 14px;
	width: 20px;
	bottom: -5px;
	margin-left: 5px;
	position: relative;
}

/* Selector Closer */
#selector-closer {
	position: relative;
	height: 48px;
	border-bottom: solid 1px var(--color-content-400);
	text-align: right;
}
#selector-closer-anchor {
	display: inline-block;
	padding: 12px;
	cursor: pointer;
}

blz-logo-close {
	display: inline-block;
	position: relative;
	width: 24px;
	height: 24px;
	color: var(--color-primary-500);
}

/* Light Mode */

:host([theme='light']) #selector-toggler label {
	color: var(--color-darken-700);
}

:host([theme='light']) #selector-toggler:hover label {
	color: var(--color-darken-900);
}

:host([theme='light']) #select-toggler-arrows {
	color: var(--color-darken-600);
}

:host([theme='light']) #selector-toggler:hover #select-toggler-arrows {
	color: var(--color-darken-700);
}

@media (min-width: 480px) {
	#dropdown {
		position: absolute;
		inset: auto auto 100% 50%;
		width: 100%;
		transform: translateX(-50%);
		background: transparent;
		font-size: 16px;
		overflow-y: visible;
		min-height: 100%;
		height: auto;
		display: none;
		padding: 0 20px 8px;
		overflow-y: visible;
	}
	#selector-closer {
		display: none;
	}
	.selector-option {
		font-size: 15px;
	}
}

@media (min-width: 720px) {
	#dropdown {
		max-width: 440px;
	}
	:host([region-selection='hybrid']) #dropdown {
		max-width: 640px;
	}

	:host([region-selection='hybrid']) .selector-section-block {
		width: 68%;
	}

	:host([region-selection='hybrid'])
		.selector-section-block.selector-section-block-regions {
		width: 27%;
	}
	.two-column {
		display: flex;
		justify-content: space-between;
	}
	.two-column ul {
		width: 50%;
	}
	.selector-option {
		padding: 3px 0;
	}
}

/* Animations */
@-webkit-keyframes Navbar-dropdown-fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes Navbar-dropdown-fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
`; class fe extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }); const e = this.constructor, t = `<style>${e.css}</style>`; this.shadowRoot.innerHTML = t + e.html } } t(fe, "css", ":host { display:inline-block; width:200px; color:currentcolor; fill:currentcolor; aspect-ratio:124 / 58; }svg { position: absolute;top: auto;bottom: 0;left: 0;right: 0;fill: currentColor;height:20px;pointer-events: none; }"), t(fe, "html", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true">        <g>            <path d="M32.75,36c-0.768,0-1.536-0.293-2.121-0.879c-1.172-1.171-1.172-3.071,0-4.242   l18.875-18.875c1.171-1.172,3.071-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242L34.871,35.121C34.286,35.707,33.518,36,32.75,36z   "/>            <path d="M52.5,29.5c-1.381,0-2.5-1.119-2.5-2.5V16H39c-1.381,0-2.5-1.119-2.5-2.5   S37.619,11,39,11h13.5c1.381,0,2.5,1.119,2.5,2.5V27C55,28.381,53.881,29.5,52.5,29.5z"/>            <path d="M50,34.943V47.5c0,0.276-0.224,0.5-0.5,0.5h-35c-0.276,0-0.5-0.224-0.5-0.5v-26   c0-0.276,0.224-0.5,0.5-0.5h12.624l5-5H14.5C11.467,16,9,18.467,9,21.5v26c0,3.033,2.467,5.5,5.5,5.5h35c3.033,0,5.5-2.467,5.5-5.5   V34.943H50z"/>        </g>    </svg>'), ne("blz-logo-external", fe); class ve extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }); const e = this.constructor, t = `<style>${e.css}</style>`; this.shadowRoot.innerHTML = t + e.html } } t(ve, "css", ":host { display:inline-block; width:200px; color:currentcolor; fill:currentcolor; aspect-ratio:124 / 58; }svg {position: absolute;top: 0;bottom: 0;left: 0;right: 0;fill: currentColor;pointer-events: none;}"), t(ve, "html", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true">    <g fill="#009dff">        <path d="M12.853,31.912c0,0-1.184,0.839,0,2.764s7.551,13.029,8.291,15.003    c0.74,1.974,1.579,3.208,4.096,2.616s5.133-1.431,6.218-3.553c1.086-2.122,6.515-15.003,11.154-22.307s7.403-11.549,8.242-12.437    s2.122-2.665-2.566-2.418S34.963,22.387,28.35,36.157c0,0-0.556,1.765-1.629-0.049c-1.463-2.475-2.627-4.392-3.491-5.725    c-0.546-0.842-1.567-2.221-3.319-1.925C18.578,28.705,14.531,30.086,12.853,31.912z"/>    </g>    </svg>'), ne("blz-logo-checkmark", ve); class me extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }); const e = this.constructor, t = `<style>${e.css}</style>`; this.shadowRoot.innerHTML = t + e.html } } t(me, "css", ":host { display:inline-block; width:200px; color:currentcolor; fill:currentcolor; aspect-ratio:124 / 58; }svg {position: absolute;top: 0;bottom: 0;left: 0;right: 0;fill: currentColor;pointer-events: none;}"), t(me, "html", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true">    <g>        <path d="M32.027,9.583L32.027,9.583c0.873,0,1.702,0.38,2.272,1.041l12.264,11.78 c1.082,1.255,0.942,3.149-0.313,4.231c-1.254,1.083-3.149,0.941-4.231-0.313l-9.993-9.146L22,26.375 c-1.081,1.255-2.976,1.396-4.231,0.312c-1.255-1.082-1.395-2.977-0.312-4.231l12.298-11.832 C30.325,9.963,31.154,9.583,32.027,9.583z"/>        <path d="M31.992,54.166L31.992,54.166c-0.873,0-1.702-0.38-2.272-1.041l-12.264-11.78 c-1.082-1.255-0.942-3.149,0.313-4.231c1.254-1.083,3.149-0.941,4.231,0.313l9.993,9.146l10.026-9.198 c1.081-1.255,2.976-1.396,4.231-0.312c1.255,1.082,1.395,2.977,0.312,4.231L34.264,53.125 C33.694,53.786,32.865,54.166,31.992,54.166z"/>    </g>    </svg>'), ne("blz-logo-arrows", me); class be extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }); const e = this.constructor, t = `<style>${e.css}</style>`; this.shadowRoot.innerHTML = t + e.html } } t(be, "css", ":host { display:inline-block; width:200px; color:currentcolor; fill:currentcolor; aspect-ratio:124 / 58; }svg {position: absolute;top: 0;bottom: 0;left: 0;right: 0;fill: currentColor;pointer-events: none;}"), t(be, "html", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true">    <g>        <path d="M32,7.448C18.461,7.448,7.449,18.462,7.449,32c0,13.538,11.013,24.552,24.551,24.552   c13.538,0,24.551-11.014,24.551-24.552C56.551,18.462,45.538,7.448,32,7.448z M39.68,45.697v-5.55h1.261v5.55H39.68z M53.235,32   c0,0.351-0.036,0.694-0.053,1.041l-0.41-0.41l-3.152,3.152l-3.082-3.082h-2.601l-0.963,0.961l-4.557-4.556v-2.153h-4.438   l-2.544-2.544l-3.129,3.13h3.349l1.306,1.306H36.6l5.904,5.904v1.87l-3.528,3.528v5.746l-4.292,4.292h-1.794l-2.765-2.764v-7.469   l-1.939-1.941h-3.104l-3.201-3.199v-3.491l4.509-3.782v-4.123l7.275-7.273l2.182,2.182h5.044l3.525-3.525   C49.751,18.657,53.235,24.914,53.235,32z M18.312,15.778c0.73-0.616,1.506-1.176,2.316-1.69h9.044l-4.511,4.51h-2.989l-2.12,2.12   h-1.74V15.778z M15.335,18.865v4.212l-3.965,3.965C12.097,24.011,13.465,21.235,15.335,18.865z M10.865,33.997l9.417,7.119v3.492   l-2.803,2.859C13.811,44.021,11.36,39.299,10.865,33.997z"/>    </g>    </svg>'), ne("blz-logo-globe", be); class ye extends HTMLElement { constructor() { super(), this.attachShadow({ mode: "open" }); const e = this.constructor, t = `<style>${e.css}</style>`; this.shadowRoot.innerHTML = t + e.html } } t(ye, "css", ":host { display:inline-block; width:200px; color:currentcolor; fill:currentcolor; aspect-ratio:124 / 58; }svg {            position: absolute;            top: 0;            bottom: 0;            left: 0;            right: 0;            fill: currentColor;            pointer-events: none;        }"), t(ye, "html", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" focusable="false" aria-hidden="true">        <g>            <path d="M47.949,50.625c-0.64,0-1.28-0.244-1.768-0.732L14.635,18.346c-0.977-0.976-0.977-2.559,0-3.535    c0.976-0.977,2.56-0.977,3.535,0l31.546,31.547c0.977,0.976,0.977,2.559,0,3.535C49.229,50.381,48.589,50.625,47.949,50.625z"/>            <path d="M16.051,50.273c-0.64,0-1.28-0.244-1.768-0.732c-0.977-0.976-0.977-2.559,0-3.535l31.898-31.898    c0.976-0.977,2.56-0.977,3.535,0c0.977,0.976,0.977,2.559,0,3.535L17.818,49.541C17.331,50.029,16.69,50.273,16.051,50.273z"/>        </g>    </svg>'), ne("blz-logo-close", ye); ne("blz-locale-selector", class extends se { constructor() { super(), t(this, "getCurrentRegion", (() => this.supportedRegionLocales ? Object.entries(this.supportedRegionLocales).map((([e, t]) => !!t.includes(this.locale) && e)).filter(Boolean)[0] : Object.entries(this.regions).map((([e, { languages: t, code: o }]) => !!t.some((({ locale: e }) => e === this.locale)) && o)).filter(Boolean)[0])), this.locale = (document.documentElement.lang || navigator.language || "en-us").toLocaleLowerCase(), this.isOpen = !1, this.theme = "default", this.currentRegion = "us", this.selectedRegion = this.currentRegion } static get styles() { return [ue] } static get properties() { return { regions: { type: Object }, locale: { type: String }, theme: { type: String }, externalUrls: { type: Object }, regionSelection: { attribute: "region-selection", type: String }, supportedRegions: (e = "supported-regions", { attribute: e, converter: e => e.split(" ") }), supportedLocales: { type: Object }, supportedRegionLocales: { type: Object }, selectedRegion: { type: String }, url: { type: String }, regionsTitle: { type: String }, regionListLabel: { type: String }, languagesTitle: { type: String }, languageListLabel: { type: String } }; var e } buildSelectorSection() { const { supportedLanguages: e, regions: t } = this; let o; return o = this.regionSelection && "none" !== this.regionSelection ? D`${this.buildRegions(t)}` : D`${this.buildLanguages(e)}`, o } buildLanguages(e, t, o) { const s = [], r = e.length, i = r > 8, n = [e.slice(0, i ? r / 2 : r)]; return i && n.push(e.slice(r / 2, r)), n.forEach(((t, i) => { const n = t.map((({ title: t, locale: s }, n) => { const a = s.includes(this.locale), l = { "selector-option": !0, active: "hybrid" === this.regionSelection ? a && this.currentRegion === o : a }, c = 1 === i && Math.floor(r / 2 + n), d = e[c || n], h = !!d.urlOverride, p = h ? d.urlOverride : this.reconstructURL(o, s), g = D`<blz-logo-external class="selector-option-icon"></blz-logo-external>`; return D`<li><a role="option" href="${p}" data-id="${s}" class="${ge(l)}"><blz-logo-checkmark class="selector-option-check"></blz-logo-checkmark><span class="selector-option-label">${t}</span> ${h ? g : ""}</a></li>` })); s.push(D`<ul aria-label="${this.languageListLabel}">${n}</ul>`) })), D`<div class="selector-section-block">${t && D`<div class="selector-section-label">${t}</div>`}<div class="language-list ${i && "two-column"}">${s}</div></div>` } buildRegions(e) { const t = "hybrid" === this.regionSelection, o = e.find((e => e.regionCode === this.selectedRegion)), s = t ? this.supportedLanguages : o?.regionLanguages || [], r = e.map((({ regionName: e, regionCode: t, urlOverride: o }) => { const s = { "selector-option": !0, selected: this.selectedRegion === t, current: this.currentRegion === t }, r = D`<blz-logo-external class="selector-option-icon"></blz-logo-external>`; return D`<li><a role="option" href="${o || "#"}" data-id="" class="${ge(s)}" @click="${e => !o && this.handleRegionSelectChange(e, t)}"><blz-logo-checkmark class="selector-option-check"></blz-logo-checkmark><span class="selector-option-label">${e}</span> ${o ? r : ""}</a></li>` })), i = D`${this.buildLanguages(s, this.languagesTitle, this.selectedRegion)}`; return D`<div class="selector-section-block selector-section-block-regions selected-region-${this.selectedRegion}"><div class="selector-section-label">${this.regionsTitle}</div><ul aria-label="${this.regionListLabel}">${r}</ul><div class="selector-region-tick"><div class="selector-region-tick-overlay"></div></div></div>${i}` } handleRegionSelectChange(e, t) { e.preventDefault(), this.className = `is-open current-region-${this.currentRegion}`, this.classList.add(`selected-region-${t}`), this.selectedRegion = t } reconstructURL(e, t) { const o = window.location.href, s = this.url || "/{locale}", r = s.replace("{region}", this.currentRegion).replace("{locale}", this.locale); let i = s; return e ? i = s.replace("{region}", e) : s.includes("{region}") && console.warn("The 'url' template provide includes a 'region', but no region was provided.  Either provide a region or set 'region-selection' to either 'limited' or 'hybrid'."), i = i.replace("{locale}", t), o.replace(r, i) } showDropdown() { this.classList.add("is-open", `selected-region-${this.currentRegion}`, `current-region-${this.currentRegion}`), document.body.classList.add("hide-overflow-footer"), this.isOpen = !0, this.scrollToWithOffset("#dropdown", -10) } hideDropdown() { this.className = "", document.body.classList.remove("hide-overflow-footer"), this.selectedRegion = this.currentRegion, this.isOpen = !1 } handleTogglerClick() { this.isOpen ? this.hideDropdown() : this.showDropdown() } scrollToWithOffset(e, t) { const o = this.shadowRoot.querySelector(e).getBoundingClientRect(), s = o.top + window.pageYOffset + t, r = o.top >= 0, i = o.bottom <= window.innerHeight; r && i || window.scrollTo({ top: s, behavior: "smooth" }) } getLanguageTitle(e) { return e.find((({ locale: e }) => e.includes(this.locale)))?.title } updateRegionsWithExternalUrls(e, t) { return t ? (Object.keys(t).forEach((o => { const s = e.findIndex((({ code: e }) => e === o)); ~s ? e[s].urlOverride = t[o] : e.forEach((({ languages: e }) => { const s = e.findIndex((({ locale: e }) => e === o)); ~s && (e[s].urlOverride = t[o]) })) })), e) : e } setSupportedRegionLocales(e, t) { let o = e.map((e => { if (t[e.code]) return { ...e, languages: e.languages.filter((o => t[e.code].includes(o.locale))) } })); return o = o.filter((e => void 0 !== e)), o } handleFocusKeydown(e) { "Enter" !== e.key || this.isOpen || this.showDropdown(), "Escape" === e.key && this.isOpen && this.hideDropdown() } injectGlobalStyle() { const e = document.head, t = document.createElement("style"); t.textContent = ".hide-overflow-footer { overflow:hidden; } @media screen and (min-width:480px){ .hide-overflow-footer { overflow:auto; }}", e.appendChild(t) } initData() { this.regions && (this.regions[0].regionName || (this.supportedRegionLocales && (this.regions = this.setSupportedRegionLocales(this.regions, this.supportedRegionLocales)), this.currentRegion = this.selectedRegion || this.getCurrentRegion(), this.regions = this.updateRegionsWithExternalUrls(this.regions, this.externalUrls), this.languages = this.regions.reduce(((e, t) => e.concat(t.languages)), []), this.regions = this.regions.map((e => ({ regionName: e.title, regionCode: e.code, regionLanguages: e.languages, urlOverride: e.urlOverride })))), this.regionCodes = this.regions.map((e => e.regionCode + "\\.")), this.locales = this.languages.map((e => e.locale)), this.supportedLocales = this.supportedLocales || this.locales, this.supportedLanguages = this.supportedLocales.length && this.languages.filter((e => this.supportedLocales.includes(e.locale))) || this.languages, this.allAliases = this.languages.map((e => e.locale.split("-")[0] + "/")), this.supportedRegions = this.supportedRegions || this.regions.map((e => e.region_code))) } render() { return this.initData(), D`<div id="overlay" @click="${this.hideDropdown}"></div><div id="selector-toggler" @click="${this.handleTogglerClick}" tabindex="0" role="button" aria-haspopup="true" aria-label="${this.languageListLabel}"><blz-logo-globe id="select-toggler-globe" class="select-toggler-icon"></blz-logo-globe><label>${this.supportedLanguages ? this.getLanguageTitle(this.supportedLanguages) : "English (US)"}</label><blz-logo-arrows id="select-toggler-arrows" class="select-toggler-icon"></blz-logo-arrows></div><div id="dropdown" role="listbox"><div id="dropdown-container"><div id="selector-closer" @click="${this.hideDropdown}"><div id="selector-closer-anchor"><blz-logo-close></blz-logo-close></div></div><div id="selector-section">${this.regions ? this.buildSelectorSection() : "Loading Data"}</div><div id="selector-tick"></div></div></div>` } firstUpdated() { this.injectGlobalStyle(), this.addEventListener("keydown", this.handleFocusKeydown) } }); var we = te`* {
	color: var(--color-content-700);
	margin: 0;
	padding: 0;
	font-family: var(--font-default);
	font-style: normal;
	font-weight: 400;
	line-height: 1.4;
}

.NavbarFooter-legalRatings {
	display: inline-block;
	text-align: center;
}

.NavbarFooter-esrbHR {
	margin: 10px 0px 10px 5px;
	border: solid 1px var(--color-content-600);
	border-bottom: none;
}

.NavbarFooter-legalRatingDescriptorsWrapper {
	font-size: 10px;
	line-height: 1.4;
	text-align: left;
	display: inline-block;
	vertical-align: top;
	font-size: 11px;
}

.NavbarFooter-legalRatingDescriptorsWrapper .NavbarFooter-esrbDescriptor {
	font-family: var(--font-accent);
	margin-left: 5px;
	max-width: 135px;
}

.NavbarFooter-legalRatingWrapper {
	text-align: center;
	margin: 0;
	margin-top: 5px;
	white-space: normal;
	display: block;
}

.NavbarFooter-legalRatingWrapper:first-child {
	margin-top: 0px;
}

.NavbarFooter-legal {
	padding: 30px 20px;
}

.NavbarFooter-legal blz-nav-content-block#korea {
	display: inline;
}

.NavbarFooter-legal > blz-nav-content-block {
	display: inline-block;
	vertical-align: top;
}

.NavbarFooter-legalLink {
	margin-right: 5px;
	margin-left: 5px;
	text-decoration: none;
	text-align: center;
	margin-left: inherit;
	display: inline;
}

.NavbarFooter-legalRatingDetailImage {
	width: inherit;
	margin: 0;
	max-width: 100%;
	max-height: 97px;
	vertical-align: top;
	margin-bottom: 5px;
}

:host([theme='light']) * {
	color: var(--color-darken-600);
}

:host([theme='light']) .NavbarFooter-esrbHR {
	border-color: var(--color-darken-500);
}
`, xe = te`* {
	color: var(--color-content-700);
	font-family: var(--font-default);
	font-style: normal;
	line-height: 1.4;
	transition: var(--transition-hover);
}

a {
	text-decoration: none;
	display: inline-block;
}

slot[name='top-links']::slotted(a:is(:hover, :focus)),
slot[name='bottom-links']::slotted(a:is(:hover, :focus)),
a:is(:hover, :focus) {
	color: var(--color-content-900);
}

slot[name='top-links']::slotted(a),
slot[name='bottom-links']::slotted(a) {
	color: var(--color-content-700);
	font-size: var(--font-size-500);
	text-decoration: none;
}

.link {
	display: inline-block;
}

.topLinks a {
	font-size: var(--font-size-500);
	text-transform: uppercase;
}

.bnet {
	margin: 40px 0;
}

.bnet * {
	font-family: var(--font-accent);
}

.bnet a {
	color: var(--color-primary-500);
}

.bnet a:is(:hover, :focus) {
	color: var(--color-primary-700);
}

slot[name='bottom-links']::slotted(a),
.bottomLinks a,
.trademark {
	font-size: var(--font-size-200);
}

slot[name='trademark']::slotted(span),
.trademark span {
	color: var(--color-content-600);
}

#esrb {
	display: inline-block;
}

#esrb img {
	display: block;
	max-height: 97px;
}

#esrb a {
	margin-right: var(--size-125);
}


#korea {
	font-size: var(--font-size-100);
	color: var(--color-content-600);
	padding-bottom: 30px;
}

#easenet {
	font-size: var(--font-size-100);
	color: var(--color-content-600);
	padding-bottom: 30px;
	line-height: 1.8;
}

slot[name='top-links']::slotted(a),
slot[name='bottom-links']::slotted(a),
.topLinks .link,
.bottomLinks .link {
	margin: 0 var(--size-125);
}

#easenet > span,
#easenet > .link {
	margin: 0 var(--size-200);
}

slot[name='top-links']::slotted(a):before,
slot[name='bottom-links']::slotted(a):before,
.topLinks .link:not(:last-of-type):after,
.bottomLinks .link:not(:last-of-type):after,
#easenet > span:before,
#easenet > .link:before {
	content: '';
	display: inline-block;
	height: var(--size-125);
	width: 1px;
	position: relative;
	 /* negative the margin size (minus one to make up for 1px width of the bar)
	 to move the bar between the two links */
	right: calc(calc(var(--size-125) -1) * -1);
	background-color: var(--color-content-500);
	pointer-events: none;
}

slot[name='top-links']::slotted(a):before,
slot[name='bottom-links']::slotted(a):before {
	right: auto;
	/* negative the margin size to move the bar between the two links */
	left: calc(var(--size-125) * -1);
}
#easenet > span:before,
#easenet > .link:before {
	right: auto;
	/* negative the margin size to move the bar between the two links */
	left: calc(var(--size-200) * -1);
}
#easenet > br + span:before,
#easenet > br + .link:before,
#easenet > .link:first-of-type:before {
	display: none;
}

/* Light Theme  */

:host([theme='light']),
:host([theme='light']) span {
	color: var(--color-darken-600);
}
:host([theme='light']) a,
:host([theme='light']) .bottomLinks a {
	color: var(--color-darken-700);
}

:host([theme='light']) .bnet a {
	color: var(--color-primary-500-inverse);
}

:host([theme='light']) a:hover,
:host([theme='light']) .bottomLinks a:hover,
:host([theme='light']) .bnet a:hover {
	color: var(--color-darken-900);
}

:host([theme='light']) .link:not(:last-child):after {
	background-color: var(--color-darken-500);
}
`; const ke = e => { const t = e.target, o = { event: "other", eventLabel: t.dataset.analytics, ctaPlacement: t.dataset.analyticsPlacement }; window.dataLayer && window.dataLayer.push(o) }, Se = { bold: ({ text: e }) => D`<b>${e}</b>`, italic: ({ text: e }) => D`<i>${e}</i>`, space: () => D`Â `, break: () => D`<br>`, plain: ({ text: e }) => D`<span>${e}</span>` }; ne("blz-nav-content-block", class extends se { constructor() { super(), t(this, "Content", (e => { const { Link: t, Image: o, LinkImage: s } = this, { type: r = "", url: i, media: n } = e; if (i && n) return s(e); if (n) return o(e); if (i) return t(e); return (Se[r.toLowerCase()] || Se.plain)(e) })), t(this, "Link", (({ url: e, text: t = "" }) => D`<div class="link" role="presentation"><a href="${e}" @click="${ke}" data-id="${t.toLowerCase()}" data-analytics="global-nav" data-analytics-placement="Footer - ${t}">${t}</a></div>`)), t(this, "Image", (({ media: e, alt: t }) => D`<img src="${e}" alt="${t}">`)), t(this, "LinkImage", (({ url: e, media: t, text: o, alt: s = "" }) => { const r = "" !== o; return D`<a href="${e}" @click="${r && ke}" data-id="${ie(r ? o.toLowerCase() : void 0)}" data-analytics="global-nav" data-analytics-placement="${ie(r ? `Footer - ${o}` : void 0)}"><img src="${t}" alt="${s}">${o}</a>` })), this.id = "", this.classes = "", this.content = [] } static get styles() { return [xe] } static get properties() { return { id: { type: String }, classes: { type: String }, content: { type: Array }, theme: { type: String }, titleId: { type: String } } } render() { const { id: e, titleId: t, classes: o, content: s, Content: r } = this; return D`<div id="${e}" class="${o}" role="presentation">${s.map(r)}<slot name="${t || e}"></div>` } }); ne("blz-nav-legal-ratings", class extends se { constructor() { super(), t(this, "RatingImage", (({ referenceUrl: e, title: t, ratingImageUrl: o }) => D`<a class="NavbarFooter-legalLink" href="${e}" title="${t}"><img class="NavbarFooter-legalRatingDetailImage" src="${o}" alt="${t}"></a>`)), t(this, "Ratings", (e => D`<div class="NavbarFooter-legalRatingDescriptorsWrapper">${e.map((({ ratingContents: e }, t, o) => { const s = e.map((({ imageUrl: e, localizedName: t, localizedDescription: o }) => e ? D`<a class="NavbarFooter-legalLink" title="${o || ""}"><img class="NavbarFooter-legalRatingDetailImage" src="${e}" alt="${t}"></a>` : D`<div class="NavbarFooter-esrbDescriptor" title="${o || ""}" aria-label="${o || ""}">${t}</div>`)); return t !== o.length - 1 && s.push(D`<hr class="NavbarFooter-esrbHR">`), s }))}</div>`)), t(this, "CustomImage", (({ referenceUrl: e, title: t, customImageUrl: o }) => D`<a href="${e}" class="NavbarFooter-legalLink" title="${t}"><img class="NavbarFooter-legalRatingDetailImage" src="${o}" alt="${t}"></a>`)), t(this, "LegalItem", (({ ratingImageUrl: e, localizedName: t, localizedDescription: o, referenceUrl: s, ratingContentGroups: r, customImageUrl: i }) => { const n = `${t || ""} ${o || ""}`, a = this.RatingImage({ referenceUrl: s, title: n, ratingImageUrl: e }), l = this.Ratings(r), c = i && this.CustomImage({ referenceUrl: s, title: n, customImageUrl: i }); return D`<div class="NavbarFooter-legalRatingWrapper">${a}${l}</div>${c}` })), this.data = {} } static get styles() { return [we] } static get properties() { return { data: { type: Object }, theme: { type: String } } } render() { const { data: { items: e, additional: t = [] }, LegalItem: o } = this, s = t.map((({ content: e, classes: t, idSelector: o }) => D`<blz-nav-content-block id="${o}" classes="${t}" .content="${e}">`)); return D`<div class="NavbarFooter-legal">${s}<div class="NavbarFooter-legalRatings" role="presentation">${e?.map(o)}</div></div>` } }); const ze = (document.documentElement.lang || navigator.language || "en-us").toLocaleLowerCase(); class _e extends se { constructor() { super(), t(this, "queryParams", (e => new URLSearchParams(Object.fromEntries(Object.entries(e).filter((([e, t]) => "" !== t && null != t)))))), this.locale ??= ze } connectedCallback() { super.connectedCallback(); const e = document.createElement("style"); e.textContent = ce.cssText, document.head.appendChild(e) } static get styles() { return [ae, le] } static get properties() { return { entry: { type: String }, titleId: { attribute: "legal-title-id", type: String }, subtitleId: { attribute: "legal-subtitle-id", type: String }, userCountry: { attribute: "user-country", type: String }, userSubdivision: { attribute: "user-subdivision", type: String }, theme: { type: String }, china: { type: String }, region: { type: String }, locale: (e = { type: String, defaultValue: ze }, { converter: (t, o) => t ?? e.defaultValue, ...e }), regionSelection: { attribute: "region-selection", type: String }, supportedRegions: { attribute: "supported-regions", type: String }, supportedLocales: { attribute: "supported-locales", type: String }, supportedRegionLocales: { attribute: "supported-region-locales", type: String }, url: { type: String }, externalUrls: { attribute: "external-urls", type: String }, siteMapUrl: { attribute: "site-map-url", type: String }, cookiesUrl: { attribute: "cookies-url", type: String } }; var e } async firstUpdated() { this.hidden = !1 } async updated(e) { e.size > 0 && await this.fetchData() } async fetchData(e) { const { titleId: t, subtitleId: o, userCountry: s, userSubdivision: r, entry: i, china: n, siteMapUrl: a, cookiesUrl: l, locale: c } = this, d = `https://navbar.blizzard.com/base-api/v1/${c}/navfooter?` + this.queryParams({ titleId: t, subtitleId: o, userCountry: s, userSubdivision: r, entry: i, china: n, siteMapUrl: a, cookiesUrl: l }); try { const t = await fetch(d), o = await t.clone().text(); e || setTimeout((() => this.fetchData(!0)), 1e3); if (this.footerData !== o) { const { localeSelector: e, contentBlocks: s, legalData: r } = await t.json(); this.data = { localeSelector: e, contentBlocks: s, legalData: r }, this.footerData = o, this.ready = !0, this.requestUpdate() } } catch (e) { console.error(e) } } render() { const { ready: e, data: { localeSelector: { regions: t, regionsTitle: o, languagesTitle: s, regionListLabel: r, languageListLabel: i } = {}, contentBlocks: n = [], legalData: a } = {}, theme: l, region: c, locale: d, regionSelection: h, supportedLocales: p, supportedRegionLocales: g, externalUrls: u, url: f, china: v } = this, m = "limited" !== h && p && JSON.parse(p), b = "limited" === h && g && JSON.parse(g), y = t && (w = t, JSON.parse(JSON.stringify(w))); var w; const x = v ? "" : D`<blz-locale-selector .externalUrls="${u && JSON.parse(u)}" languagesTitle="${s}" languageListLabel="${i || ""}" regionsTitle="${o}" regionListLabel="${r || ""}" .regions="${y}" selectedregion="${ie(c || void 0)}" locale="${d}" region-selection="${ie(h || void 0)}" .supportedLocales="${m}" .supportedRegionLocales="${b}" theme="${ie(l || void 0)}" url="${ie(f || void 0)}"></blz-locale-selector>`, k = n.map((({ title: e, content: t, classes: o, idSelector: s }) => { const r = (i = e) && i.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.join("-").toLowerCase(); var i; return D`<blz-nav-content-block titleId="${r}" id="${s}" classes="${o}" .content="${t}" theme="${l}"><slot name="${r}" slot="${r}"></slot></blz-nav-content-block>` })), S = D`<blz-nav-legal-ratings .data="${a}" theme="${l}">`, z = D`<div role="presentation" id="blizz-logo" class="logo"><slot name="logo" class="logo"><a data-analytics="global-nav" href="${this.china ? "https://blz.cn/" : "https://blizzard.com/"}"><blz-logo-main theme="${l}"></blz-logo-main></a></slot></div>`; return e ? D`<footer theme="${l}">${x} ${z} ${k}<slot name="custom-legal"></slot>${S}</footer>` : D`loading` } } return ne("blz-nav-footer", _e), e.BlzNavFooter = _e, Object.defineProperty(e, "__esModule", { value: !0 }), e
    }({})
}