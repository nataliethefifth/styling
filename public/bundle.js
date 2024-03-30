"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/testtsc.ts
  var require_testtsc = __commonJS({
    "src/testtsc.ts"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c3 = arguments.length, r3 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r3 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i4 = decorators.length - 1; i4 >= 0; i4--)
            if (d3 = decorators[i4])
              r3 = (c3 < 3 ? d3(r3) : c3 > 3 ? d3(target, key, r3) : d3(target, key)) || r3;
        return c3 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
      };
      var __metadata = exports && exports.__metadata || function(k3, v3) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k3, v3);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.demo = exports.helloworld = void 0;
      exports.helloworld = "Hey";
      function LogMethod(target, propertyKey, descriptor) {
        console.log("target", target);
        console.log("propertyKey", propertyKey);
        console.log("descriptor", descriptor);
      }
      var Demo = class {
        foo(bar) {
          console.log("demo foo", bar);
          return bar + 100;
        }
      };
      __decorate([
        LogMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
      ], Demo.prototype, "foo", null);
      exports.demo = new Demo();
    }
  });

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var h = Array.isArray;
  function v(n2, l3) {
    for (var u4 in l3)
      n2[u4] = l3[u4];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u4, t3) {
    var i4, o3, r3, f4 = {};
    for (r3 in u4)
      "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o3 = u4[r3] : f4[r3] = u4[r3];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f4[r3] && (f4[r3] = l3.defaultProps[r3]);
    return d(l3, f4, i4, o3, null);
  }
  function d(n2, t3, i4, o3, r3) {
    var f4 = { type: n2, props: t3, key: i4, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f4), f4;
  }
  function g(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function m(n2, l3) {
    if (null == l3)
      return n2.__ ? m(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++)
      if (null != (u4 = n2.__k[l3]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n2.type ? m(n2) : null;
  }
  function w(n2) {
    var l3, u4;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
          n2.__e = n2.__c.base = u4.__e;
          break;
        }
      return w(n2);
    }
  }
  function k(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, u4, t3, o3, r3, e3, c3, s3, a3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (u4 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, s3 = [], a3 = [], (c3 = t3.__P) && ((o3 = v({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), F(c3, o3, r3, t3.__n, void 0 !== c3.ownerSVGElement, 32 & r3.__u ? [e3] : null, s3, null == e3 ? m(r3) : e3, !!(32 & r3.__u), a3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, L(s3, o3, a3), o3.__e != e3 && w(o3)), i.length > u4 && i.sort(f));
    x.__r = 0;
  }
  function C(n2, l3, u4, t3, i4, o3, r3, f4, e3, a3, h4) {
    var v3, p3, y3, d3, _, g2 = t3 && t3.__k || s, b2 = l3.length;
    for (u4.__d = e3, P(u4, l3, g2), e3 = u4.__d, v3 = 0; v3 < b2; v3++)
      null != (y3 = u4.__k[v3]) && "boolean" != typeof y3 && "function" != typeof y3 && (p3 = -1 === y3.__i ? c : g2[y3.__i] || c, y3.__i = v3, F(n2, y3, p3, i4, o3, r3, f4, e3, a3, h4), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && O(p3.ref, null, y3), h4.push(y3.ref, y3.__c || d3, y3)), null == _ && null != d3 && (_ = d3), 65536 & y3.__u || p3.__k === y3.__k ? (d3 || p3.__e != e3 || (e3 = m(p3)), e3 = S(y3, e3, n2)) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u4.__d = e3, u4.__e = _;
  }
  function P(n2, l3, u4) {
    var t3, i4, o3, r3, f4, e3 = l3.length, c3 = u4.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      r3 = t3 + a3, null != (i4 = n2.__k[t3] = null == (i4 = l3[t3]) || "boolean" == typeof i4 || "function" == typeof i4 ? null : "string" == typeof i4 || "number" == typeof i4 || "bigint" == typeof i4 || i4.constructor == String ? d(null, i4, null, null, null) : h(i4) ? d(g, { children: i4 }, null, null, null) : void 0 === i4.constructor && i4.__b > 0 ? d(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) ? (i4.__ = n2, i4.__b = n2.__b + 1, f4 = I(i4, u4, r3, s3), i4.__i = f4, o3 = null, -1 !== f4 && (s3--, (o3 = u4[f4]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f4 && a3--, "function" != typeof i4.type && (i4.__u |= 65536)) : f4 !== r3 && (f4 === r3 + 1 ? a3++ : f4 > r3 ? s3 > e3 - r3 ? a3 += f4 - r3 : a3-- : f4 < r3 ? f4 == r3 - 1 && (a3 = f4 - r3) : a3 = 0, f4 !== t3 + a3 && (i4.__u |= 65536))) : (o3 = u4[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), j(o3, o3, false), u4[r3] = null, s3--);
    if (s3)
      for (t3 = 0; t3 < c3; t3++)
        null != (o3 = u4[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = m(o3)), j(o3, o3));
  }
  function S(n2, l3, u4) {
    var t3, i4;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++)
        t3[i4] && (t3[i4].__ = n2, l3 = S(t3[i4], l3, u4));
      return l3;
    }
    n2.__e != l3 && (u4.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function I(n2, l3, u4, t3) {
    var i4 = n2.key, o3 = n2.type, r3 = u4 - 1, f4 = u4 + 1, e3 = l3[u4];
    if (null === e3 || e3 && i4 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
      return u4;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f4 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f4 < l3.length) {
          if ((e3 = l3[f4]) && 0 == (131072 & e3.__u) && i4 == e3.key && o3 === e3.type)
            return f4;
          f4++;
        }
      }
    return -1;
  }
  function H(n2, l3, u4) {
    "-" === l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || a.test(l3) ? u4 : u4 + "px";
  }
  function T(n2, l3, u4, t3, i4) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u4)
          n2.style.cssText = u4;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u4 && l3 in u4 || H(n2.style, l3, "");
          if (u4)
            for (l3 in u4)
              t3 && u4[l3] === t3[l3] || H(n2.style, l3, u4[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = Date.now(), n2.addEventListener(l3, o3 ? D : A, o3)) : n2.removeEventListener(l3, o3 ? D : A, o3);
      else {
        if (i4)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && "role" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u4 ? "" : u4;
            break n;
          } catch (n3) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u4));
      }
  }
  function A(n2) {
    if (this.l) {
      var u4 = this.l[n2.type + false];
      if (n2.t) {
        if (n2.t <= u4.u)
          return;
      } else
        n2.t = Date.now();
      return u4(l.event ? l.event(n2) : n2);
    }
  }
  function D(n2) {
    if (this.l)
      return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function F(n2, u4, t3, i4, o3, r3, f4, e3, c3, s3) {
    var a3, p3, y3, d3, _, m3, w3, k3, x2, P2, S2, $, I2, H2, T2, A2 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
    n:
      if ("function" == typeof A2)
        try {
          if (k3 = u4.props, x2 = (a3 = A2.contextType) && i4[a3.__c], P2 = a3 ? x2 ? x2.props.value : a3.__ : i4, t3.__c ? w3 = (p3 = u4.__c = t3.__c).__ = p3.__E : ("prototype" in A2 && A2.prototype.render ? u4.__c = p3 = new A2(k3, P2) : (u4.__c = p3 = new b(k3, P2), p3.constructor = A2, p3.render = z), x2 && x2.sub(p3), p3.props = k3, p3.state || (p3.state = {}), p3.context = P2, p3.__n = i4, y3 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != A2.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, A2.getDerivedStateFromProps(k3, p3.__s))), d3 = p3.props, _ = p3.state, p3.__v = u4, y3)
            null == A2.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && k3 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(k3, P2), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(k3, p3.__s, P2) || u4.__v === t3.__v)) {
              for (u4.__v !== t3.__v && (p3.props = k3, p3.state = p3.__s, p3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.forEach(function(n3) {
                n3 && (n3.__ = u4);
              }), S2 = 0; S2 < p3._sb.length; S2++)
                p3.__h.push(p3._sb[S2]);
              p3._sb = [], p3.__h.length && f4.push(p3);
              break n;
            }
            null != p3.componentWillUpdate && p3.componentWillUpdate(k3, p3.__s, P2), null != p3.componentDidUpdate && p3.__h.push(function() {
              p3.componentDidUpdate(d3, _, m3);
            });
          }
          if (p3.context = P2, p3.props = k3, p3.__P = n2, p3.__e = false, $ = l.__r, I2 = 0, "prototype" in A2 && A2.prototype.render) {
            for (p3.state = p3.__s, p3.__d = false, $ && $(u4), a3 = p3.render(p3.props, p3.state, p3.context), H2 = 0; H2 < p3._sb.length; H2++)
              p3.__h.push(p3._sb[H2]);
            p3._sb = [];
          } else
            do {
              p3.__d = false, $ && $(u4), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
            } while (p3.__d && ++I2 < 25);
          p3.state = p3.__s, null != p3.getChildContext && (i4 = v(v({}, i4), p3.getChildContext())), y3 || null == p3.getSnapshotBeforeUpdate || (m3 = p3.getSnapshotBeforeUpdate(d3, _)), C(n2, h(T2 = null != a3 && a3.type === g && null == a3.key ? a3.props.children : a3) ? T2 : [T2], u4, t3, i4, o3, r3, f4, e3, c3, s3), p3.base = u4.__e, u4.__u &= -161, p3.__h.length && f4.push(p3), w3 && (p3.__E = p3.__ = null);
        } catch (n3) {
          u4.__v = null, c3 || null != r3 ? (u4.__e = e3, u4.__u |= c3 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u4.__e = t3.__e, u4.__k = t3.__k), l.__e(n3, u4, t3);
        }
      else
        null == r3 && u4.__v === t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : u4.__e = M(t3.__e, u4, t3, i4, o3, r3, f4, c3, s3);
    (a3 = l.diffed) && a3(u4);
  }
  function L(n2, u4, t3) {
    u4.__d = void 0;
    for (var i4 = 0; i4 < t3.length; i4++)
      O(t3[i4], t3[++i4], t3[++i4]);
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function M(l3, u4, t3, i4, o3, r3, f4, e3, s3) {
    var a3, v3, y3, d3, _, g2, b2, w3 = t3.props, k3 = u4.props, x2 = u4.type;
    if ("svg" === x2 && (o3 = true), null != r3) {
      for (a3 = 0; a3 < r3.length; a3++)
        if ((_ = r3[a3]) && "setAttribute" in _ == !!x2 && (x2 ? _.localName === x2 : 3 === _.nodeType)) {
          l3 = _, r3[a3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === x2)
        return document.createTextNode(k3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", x2) : document.createElement(x2, k3.is && k3), r3 = null, e3 = false;
    }
    if (null === x2)
      w3 === k3 || e3 && l3.data === k3 || (l3.data = k3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), w3 = t3.props || c, !e3 && null != r3)
        for (w3 = {}, a3 = 0; a3 < l3.attributes.length; a3++)
          w3[(_ = l3.attributes[a3]).name] = _.value;
      for (a3 in w3)
        _ = w3[a3], "children" == a3 || ("dangerouslySetInnerHTML" == a3 ? y3 = _ : "key" === a3 || a3 in k3 || T(l3, a3, null, _, o3));
      for (a3 in k3)
        _ = k3[a3], "children" == a3 ? d3 = _ : "dangerouslySetInnerHTML" == a3 ? v3 = _ : "value" == a3 ? g2 = _ : "checked" == a3 ? b2 = _ : "key" === a3 || e3 && "function" != typeof _ || w3[a3] === _ || T(l3, a3, _, w3[a3], o3);
      if (v3)
        e3 || y3 && (v3.__html === y3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3.__html), u4.__k = [];
      else if (y3 && (l3.innerHTML = ""), C(l3, h(d3) ? d3 : [d3], u4, t3, i4, o3 && "foreignObject" !== x2, r3, f4, r3 ? r3[0] : t3.__k && m(t3, 0), e3, s3), null != r3)
        for (a3 = r3.length; a3--; )
          null != r3[a3] && p(r3[a3]);
      e3 || (a3 = "value", void 0 !== g2 && (g2 !== l3[a3] || "progress" === x2 && !g2 || "option" === x2 && g2 !== w3[a3]) && T(l3, a3, g2, w3[a3], false), a3 = "checked", void 0 !== b2 && b2 !== l3[a3] && T(l3, a3, b2, w3[a3], false));
    }
    return l3;
  }
  function O(n2, u4, t3) {
    try {
      "function" == typeof n2 ? n2(u4) : n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function j(n2, u4, t3) {
    var i4, o3;
    if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || O(i4, null, u4)), null != (i4 = n2.__c)) {
      if (i4.componentWillUnmount)
        try {
          i4.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u4);
        }
      i4.base = i4.__P = null, n2.__c = void 0;
    }
    if (i4 = n2.__k)
      for (o3 = 0; o3 < i4.length; o3++)
        i4[o3] && j(i4[o3], u4, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function z(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function N(u4, t3, i4) {
    var o3, r3, f4, e3;
    l.__ && l.__(u4, t3), r3 = (o3 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, f4 = [], e3 = [], F(t3, u4 = (!o3 && i4 || t3).__k = y(g, null, [u4]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i4 ? [i4] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f4, !o3 && i4 ? i4 : r3 ? r3.__e : t3.firstChild, o3, e3), L(f4, u4, e3);
  }
  n = s.slice, l = { __e: function(n2, l3, u4, t3) {
    for (var i4, o3, r3; l3 = l3.__; )
      if ((i4 = l3.__c) && !i4.__)
        try {
          if ((o3 = i4.constructor) && null != o3.getDerivedStateFromError && (i4.setState(o3.getDerivedStateFromError(n2)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), r3 = i4.__d), r3)
            return i4.__E = i4;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, b.prototype.setState = function(n2, l3) {
    var u4;
    u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u4), this.props)), n2 && v(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), k(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
  }, b.prototype.render = g, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, x.__r = 0, e = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l;
  var a2 = e2.__b;
  var v2 = e2.__r;
  var l2 = e2.diffed;
  var m2 = e2.__c;
  var s2 = e2.unmount;
  var d2 = e2.__;
  function h2(n2, t3) {
    e2.__h && e2.__h(r2, n2, o2 || t3), o2 = 0;
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u4.__.length && u4.__.push({ __V: c2 }), u4.__[n2];
  }
  function p2(n2) {
    return o2 = 1, y2(D2, n2);
  }
  function y2(n2, u4, i4) {
    var o3 = h2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u4) : D2(void 0, u4), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f4 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u5 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u5.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i5 = false;
        return u5.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
          }
        }), !(!i5 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u5 = c3;
          c3 = void 0, f4(n3, t3, r3), c3 = u5;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f4;
    }
    return o3.__N || o3.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], e2.__e(t3, n2.__v);
        }
  }
  e2.__b = function(n2) {
    r2 = null, a2 && a2(n2);
  }, e2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), d2 && d2(n2, t3);
  }, e2.__r = function(n2) {
    v2 && v2(n2), t2 = 0;
    var i4 = (r2 = n2.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B), i4.__h = [], t2 = 0)), u2 = r2;
  }, e2.diffed = function(n2) {
    l2 && l2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === e2.requestAnimationFrame || ((i2 = e2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
    })), u2 = r2 = null;
  }, e2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], e2.__e(r3, n3.__v);
      }
    }), m2 && m2(n2, t3);
  }, e2.unmount = function(n2) {
    s2 && s2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && e2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u4 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u4 = n2.__c;
    "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
  }
  function B(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // node_modules/@stylexjs/stylex/lib/es/stylex.mjs
  var styleq$1 = {};
  Object.defineProperty(styleq$1, "__esModule", {
    value: true
  });
  var styleq_2 = styleq$1.styleq = void 0;
  var cache = /* @__PURE__ */ new WeakMap();
  var compiledKey = "$$css";
  function createStyleq(options) {
    var disableCache;
    var disableMix;
    var transform;
    if (options != null) {
      disableCache = options.disableCache === true;
      disableMix = options.disableMix === true;
      transform = options.transform;
    }
    return function styleq2() {
      var definedProperties = [];
      var className = "";
      var inlineStyle = null;
      var nextCache = disableCache ? null : cache;
      var styles = new Array(arguments.length);
      for (var i4 = 0; i4 < arguments.length; i4++) {
        styles[i4] = arguments[i4];
      }
      while (styles.length > 0) {
        var possibleStyle = styles.pop();
        if (possibleStyle == null || possibleStyle === false) {
          continue;
        }
        if (Array.isArray(possibleStyle)) {
          for (var _i = 0; _i < possibleStyle.length; _i++) {
            styles.push(possibleStyle[_i]);
          }
          continue;
        }
        var style = transform != null ? transform(possibleStyle) : possibleStyle;
        if (style.$$css) {
          var classNameChunk = "";
          if (nextCache != null && nextCache.has(style)) {
            var cacheEntry = nextCache.get(style);
            if (cacheEntry != null) {
              classNameChunk = cacheEntry[0];
              definedProperties.push.apply(definedProperties, cacheEntry[1]);
              nextCache = cacheEntry[2];
            }
          } else {
            var definedPropertiesChunk = [];
            for (var prop in style) {
              var value = style[prop];
              if (prop === compiledKey)
                continue;
              if (typeof value === "string" || value === null) {
                if (!definedProperties.includes(prop)) {
                  definedProperties.push(prop);
                  if (nextCache != null) {
                    definedPropertiesChunk.push(prop);
                  }
                  if (typeof value === "string") {
                    classNameChunk += classNameChunk ? " " + value : value;
                  }
                }
              } else {
                console.error("styleq: ".concat(prop, " typeof ").concat(String(value), ' is not "string" or "null".'));
              }
            }
            if (nextCache != null) {
              var weakMap = /* @__PURE__ */ new WeakMap();
              nextCache.set(style, [classNameChunk, definedPropertiesChunk, weakMap]);
              nextCache = weakMap;
            }
          }
          if (classNameChunk) {
            className = className ? classNameChunk + " " + className : classNameChunk;
          }
        } else {
          if (disableMix) {
            if (inlineStyle == null) {
              inlineStyle = {};
            }
            inlineStyle = Object.assign({}, style, inlineStyle);
          } else {
            var subStyle = null;
            for (var _prop in style) {
              var _value = style[_prop];
              if (_value !== void 0) {
                if (!definedProperties.includes(_prop)) {
                  if (_value != null) {
                    if (inlineStyle == null) {
                      inlineStyle = {};
                    }
                    if (subStyle == null) {
                      subStyle = {};
                    }
                    subStyle[_prop] = _value;
                  }
                  definedProperties.push(_prop);
                  nextCache = null;
                }
              }
            }
            if (subStyle != null) {
              inlineStyle = Object.assign(subStyle, inlineStyle);
            }
          }
        }
      }
      var styleProps = [className, inlineStyle];
      return styleProps;
    };
  }
  var styleq = createStyleq();
  styleq_2 = styleq$1.styleq = styleq;
  styleq.factory = createStyleq;
  var errorForFn = (name) => new Error(`'stylex.${name}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`);
  var errorForType = (key) => errorForFn(`types.${key}`);
  function props() {
    const options = this;
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }
    if (__implementations.props) {
      return __implementations.props.call(options, styles);
    }
    const [className, style] = styleq_2(styles);
    const result = {};
    if (className != null && className !== "") {
      result.className = className;
    }
    if (style != null && Object.keys(style).length > 0) {
      result.style = style;
    }
    return result;
  }
  function attrs() {
    const {
      className,
      style
    } = props(...arguments);
    const result = {};
    if (className != null && className !== "") {
      result.class = className;
    }
    if (style != null && Object.keys(style).length > 0) {
      result.style = Object.keys(style).map((key) => `${key}:${style[key]};`).join("");
    }
    return result;
  }
  function stylexCreate(styles) {
    if (__implementations.create != null) {
      const create2 = __implementations.create;
      return create2(styles);
    }
    throw errorForFn("create");
  }
  function stylexDefineVars(styles) {
    if (__implementations.defineVars) {
      return __implementations.defineVars(styles);
    }
    throw errorForFn("defineVars");
  }
  var stylexCreateTheme = (baseTokens, overrides) => {
    if (__implementations.createTheme) {
      return __implementations.createTheme(baseTokens, overrides);
    }
    throw errorForFn("createTheme");
  };
  var stylexInclude = (styles) => {
    if (__implementations.include) {
      return __implementations.include(styles);
    }
    throw errorForFn("include");
  };
  var create = stylexCreate;
  var defineVars = stylexDefineVars;
  var createTheme = stylexCreateTheme;
  var include = stylexInclude;
  var types = {
    angle: (_v) => {
      throw errorForType("angle");
    },
    color: (_v) => {
      throw errorForType("color");
    },
    url: (_v) => {
      throw errorForType("url");
    },
    image: (_v) => {
      throw errorForType("image");
    },
    integer: (_v) => {
      throw errorForType("integer");
    },
    lengthPercentage: (_v) => {
      throw errorForType("lengthPercentage");
    },
    length: (_v) => {
      throw errorForType("length");
    },
    percentage: (_v) => {
      throw errorForType("percentage");
    },
    number: (_v) => {
      throw errorForType("number");
    },
    resolution: (_v) => {
      throw errorForType("resolution");
    },
    time: (_v) => {
      throw errorForType("time");
    },
    transformFunction: (_v) => {
      throw errorForType("transformFunction");
    },
    transformList: (_v) => {
      throw errorForType("transformList");
    }
  };
  var keyframes = (keyframes2) => {
    if (__implementations.keyframes) {
      return __implementations.keyframes(keyframes2);
    }
    throw errorForFn("keyframes");
  };
  var firstThatWorks = function() {
    if (__implementations.firstThatWorks) {
      return __implementations.firstThatWorks(...arguments);
    }
    throw errorForFn("firstThatWorks");
  };
  function _stylex() {
    for (var _len2 = arguments.length, styles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      styles[_key2] = arguments[_key2];
    }
    const [className] = styleq_2(styles);
    return className;
  }
  _stylex.props = props;
  _stylex.attrs = attrs;
  _stylex.create = create;
  _stylex.defineVars = defineVars;
  _stylex.createTheme = createTheme;
  _stylex.include = include;
  _stylex.keyframes = keyframes;
  _stylex.firstThatWorks = firstThatWorks;
  _stylex.types = types;
  var __implementations = {};

  // src/stylex/theme.stylex.ts
  var lightTheme = {
    $$css: true,
    "var(--x1eutwqo)": "x11ys03t"
  };
  var darkTheme = {
    $$css: true,
    "var(--x1eutwqo)": "xikypld"
  };
  var autoTheme = {
    $$css: true,
    "var(--x1eutwqo)": "x1cm0aa6"
  };

  // src/App.tsx
  var import_testtsc = __toESM(require_testtsc());

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f3 = 0;
  var i3 = Array.isArray;
  function u3(e3, t3, n2, o3, i4, u4) {
    var a3, c3, p3 = {};
    for (c3 in t3)
      "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
    var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i4, __self: u4 };
    if ("function" == typeof e3 && (a3 = e3.defaultProps))
      for (c3 in a3)
        void 0 === p3[c3] && (p3[c3] = a3[c3]);
    return l.vnode && l.vnode(l3), l3;
  }

  // src/App.tsx
  var st = {
    test1: {
      fontSize: "x1pvqxga",
      color: "x1awj2ng",
      backgroundColor: "xgnp6n0",
      $$css: true
    }
  };
  var calc = (x2, y3) => {
    return x2 + y3;
  };
  function App() {
    const [isLightTheme, setIsLightTheme] = p2(true);
    return /* @__PURE__ */ u3("div", { ...{
      className: "xn9wirt x1dr59a3 x78zum5 x6s0dn4 xl56j7k xjdbt1m"
    }, children: [
      /* @__PURE__ */ u3("div", { ...{
        className: "xgf44l9 x134emux x4f9axe xl56j7k x78zum5 x6s0dn4 xpwyex2 x1rge9jh"
      }, children: /* @__PURE__ */ u3("span", { children: "Blue rectangle" }) }),
      /* @__PURE__ */ u3("div", { ...props(isLightTheme ? lightTheme : darkTheme, st.test1), children: "Test1" }),
      /* @__PURE__ */ u3("button", { onClick: () => setIsLightTheme((prev) => !prev), children: "Test" }),
      /* @__PURE__ */ u3("div", { ...props(autoTheme, st.test1), children: "Test2" }),
      /* @__PURE__ */ u3("div", { ...props(autoTheme, st.test1), children: `calc => ${calc(10, 20)}` }),
      /* @__PURE__ */ u3("div", { ...props(autoTheme, st.test1), children: [
        import_testtsc.helloworld,
        " ",
        import_testtsc.demo.foo(20)
      ] })
    ] });
  }
  N(/* @__PURE__ */ u3(App, {}), document.getElementById("app"));
})();
//# sourceMappingURL=bundle.js.map
