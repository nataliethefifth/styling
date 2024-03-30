"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/preact/dist/preact.module.js
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
  function $(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
      $(n3, l3);
    }) : l3.push(n2)), l3;
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
    var a3, p3, y3, d3, _, m3, w3, k3, x2, P3, S2, $2, I2, H2, T2, A3 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
    n:
      if ("function" == typeof A3)
        try {
          if (k3 = u4.props, x2 = (a3 = A3.contextType) && i4[a3.__c], P3 = a3 ? x2 ? x2.props.value : a3.__ : i4, t3.__c ? w3 = (p3 = u4.__c = t3.__c).__ = p3.__E : ("prototype" in A3 && A3.prototype.render ? u4.__c = p3 = new A3(k3, P3) : (u4.__c = p3 = new b(k3, P3), p3.constructor = A3, p3.render = z), x2 && x2.sub(p3), p3.props = k3, p3.state || (p3.state = {}), p3.context = P3, p3.__n = i4, y3 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != A3.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, A3.getDerivedStateFromProps(k3, p3.__s))), d3 = p3.props, _ = p3.state, p3.__v = u4, y3)
            null == A3.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
          else {
            if (null == A3.getDerivedStateFromProps && k3 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(k3, P3), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(k3, p3.__s, P3) || u4.__v === t3.__v)) {
              for (u4.__v !== t3.__v && (p3.props = k3, p3.state = p3.__s, p3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.forEach(function(n3) {
                n3 && (n3.__ = u4);
              }), S2 = 0; S2 < p3._sb.length; S2++)
                p3.__h.push(p3._sb[S2]);
              p3._sb = [], p3.__h.length && f4.push(p3);
              break n;
            }
            null != p3.componentWillUpdate && p3.componentWillUpdate(k3, p3.__s, P3), null != p3.componentDidUpdate && p3.__h.push(function() {
              p3.componentDidUpdate(d3, _, m3);
            });
          }
          if (p3.context = P3, p3.props = k3, p3.__P = n2, p3.__e = false, $2 = l.__r, I2 = 0, "prototype" in A3 && A3.prototype.render) {
            for (p3.state = p3.__s, p3.__d = false, $2 && $2(u4), a3 = p3.render(p3.props, p3.state, p3.context), H2 = 0; H2 < p3._sb.length; H2++)
              p3.__h.push(p3._sb[H2]);
            p3._sb = [];
          } else
            do {
              p3.__d = false, $2 && $2(u4), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
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
  function B(l3, u4, t3) {
    var i4, o3, r3, f4, e3 = v({}, l3.props);
    for (r3 in l3.type && l3.type.defaultProps && (f4 = l3.type.defaultProps), u4)
      "key" == r3 ? i4 = u4[r3] : "ref" == r3 ? o3 = u4[r3] : e3[r3] = void 0 === u4[r3] && void 0 !== f4 ? f4[r3] : u4[r3];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), d(l3.type, e3, i4 || l3.key, o3 || l3.ref, null);
  }
  function E(n2, l3) {
    var u4 = { __c: l3 = "__cC" + e++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u5, t3;
      return this.getChildContext || (u5 = [], (t3 = {})[l3] = this, this.getChildContext = function() {
        return t3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u5.some(function(n5) {
          n5.__e = true, k(n5);
        });
      }, this.sub = function(n4) {
        u5.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u5.splice(u5.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u4.Provider.__ = u4.Consumer.contextType = u4;
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, h;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      h = Array.isArray;
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
    }
  });

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
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
  var f3, i3;
  var init_jsxRuntime_module = __esm({
    "node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
      init_preact_module();
      init_preact_module();
      f3 = 0;
      i3 = Array.isArray;
    }
  });

  // src/pages/About.tsx
  var About_exports = {};
  __export(About_exports, {
    default: () => About
  });
  function About() {
    return /* @__PURE__ */ u3(g, { children: "About" });
  }
  var init_About = __esm({
    "src/pages/About.tsx"() {
      "use strict";
      init_jsxRuntime_module();
    }
  });

  // src/App.tsx
  init_preact_module();

  // node_modules/preact-iso/src/router.js
  init_preact_module();

  // node_modules/preact/hooks/dist/hooks.module.js
  init_preact_module();
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
  function A2(n2, u4) {
    var i4 = h2(t2++, 4);
    !e2.__s && C2(i4.__H, u4) && (i4.__ = n2, i4.i = u4, r2.__h.push(i4));
  }
  function F2(n2) {
    return o2 = 5, q(function() {
      return { current: n2 };
    }, []);
  }
  function q(n2, r3) {
    var u4 = h2(t2++, 7);
    return C2(u4.__H, r3) ? (u4.__V = n2(), u4.i = r3, u4.__h = n2, u4.__V) : u4.__;
  }
  function P2(n2) {
    var u4 = r2.context[n2.__c], i4 = h2(t2++, 9);
    return i4.c = n2, u4 ? (null == i4.__ && (i4.__ = true, u4.sub(r2)), u4.props.value) : n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
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
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u2 = r2;
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
          return !n4.__ || B2(n4);
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
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // node_modules/preact-iso/src/router.js
  var push;
  var UPDATE = (state, url) => {
    push = void 0;
    if (url && url.type === "click") {
      if (url.ctrlKey || url.metaKey || url.altKey || url.shiftKey || url.button !== 0) {
        return state;
      }
      const link = url.target.closest("a[href]");
      if (!link || link.origin != location.origin || /^#/.test(link.getAttribute("href")) || !/^(_?self)?$/i.test(link.target)) {
        return state;
      }
      push = true;
      url.preventDefault();
      url = link.href.replace(location.origin, "");
    } else if (typeof url === "string") {
      push = true;
    } else if (url && url.url) {
      push = !url.replace;
      url = url.url;
    } else {
      url = location.pathname + location.search;
    }
    if (push === true)
      history.pushState(null, "", url);
    else if (push === false)
      history.replaceState(null, "", url);
    return url;
  };
  var exec = (url, route, matches) => {
    url = url.split("/").filter(Boolean);
    route = (route || "").split("/").filter(Boolean);
    for (let i4 = 0, val, rest; i4 < Math.max(url.length, route.length); i4++) {
      let [, m3, param, flag] = (route[i4] || "").match(/^(:?)(.*?)([+*?]?)$/);
      val = url[i4];
      if (!m3 && param == val)
        continue;
      if (!m3 && val && flag == "*") {
        matches.rest = "/" + url.slice(i4).map(decodeURIComponent).join("/");
        break;
      }
      if (!m3 || !val && flag != "?" && flag != "*")
        return;
      rest = flag == "+" || flag == "*";
      if (rest)
        val = url.slice(i4).map(decodeURIComponent).join("/");
      else if (val)
        val = decodeURIComponent(val);
      matches.params[param] = val;
      if (!(param in matches))
        matches[param] = val;
      if (rest)
        break;
    }
    return matches;
  };
  function LocationProvider(props) {
    const [url, route] = y2(UPDATE, props.url || location.pathname + location.search);
    const wasPush = push === true;
    const value = q(() => {
      const u4 = new URL(url, location.origin);
      const path = u4.pathname.replace(/(.)\/$/g, "$1");
      return {
        url,
        path,
        query: Object.fromEntries(u4.searchParams),
        route: (url2, replace) => route({ url: url2, replace }),
        wasPush
      };
    }, [url]);
    A2(() => {
      addEventListener("click", route);
      addEventListener("popstate", route);
      return () => {
        removeEventListener("click", route);
        removeEventListener("popstate", route);
      };
    }, []);
    return y(LocationProvider.ctx.Provider, { value }, props.children);
  }
  var RESOLVED = Promise.resolve();
  function Router(props) {
    const [c3, update] = y2((c4) => c4 + 1, 0);
    const { url, query, wasPush, path } = useLocation();
    const { rest = path, params = {} } = P2(RouteContext);
    const isLoading = F2(false);
    const prevRoute = F2(path);
    const count = F2(0);
    const cur = F2();
    const prev = F2();
    const pendingBase = F2();
    const hasEverCommitted = F2(false);
    const didSuspend = F2();
    didSuspend.current = false;
    cur.current = q(() => {
      if (this.__v && this.__v.__k)
        this.__v.__k.reverse();
      count.current++;
      prev.current = cur.current;
      let p4, d3, m3;
      $(props.children).some((vnode) => {
        const matches = exec(rest, vnode.props.path, m3 = { path: rest, query, params, rest: "" });
        if (matches)
          return p4 = B(vnode, m3);
        if (vnode.props.default)
          d3 = B(vnode, m3);
      });
      return y(RouteContext.Provider, { value: m3 }, p4 || d3);
    }, [url]);
    const p3 = prev.current;
    prev.current = null;
    this.__c = (e3) => {
      didSuspend.current = true;
      prev.current = p3;
      if (props.onLoadStart)
        props.onLoadStart(url);
      isLoading.current = true;
      let c4 = count.current;
      e3.then(() => {
        if (c4 !== count.current)
          return;
        prev.current = null;
        RESOLVED.then(update);
      });
    };
    A2(() => {
      const currentDom = this.__v && this.__v.__e;
      if (didSuspend.current) {
        if (!hasEverCommitted.current && !pendingBase.current) {
          pendingBase.current = currentDom;
        }
        return;
      }
      if (!hasEverCommitted.current && pendingBase.current) {
        if (pendingBase.current !== currentDom)
          pendingBase.current.remove();
        pendingBase.current = null;
      }
      hasEverCommitted.current = true;
      if (prevRoute.current !== path) {
        if (wasPush)
          scrollTo(0, 0);
        if (props.onLoadEnd && isLoading.current)
          props.onLoadEnd(url);
        if (props.onRouteChange)
          props.onRouteChange(url);
        isLoading.current = false;
        prevRoute.current = path;
      }
    }, [path, wasPush, c3]);
    return [y(RenderRef, { r: cur }), y(RenderRef, { r: prev })];
  }
  var RenderRef = ({ r: r3 }) => r3.current;
  Router.Provider = LocationProvider;
  LocationProvider.ctx = E(
    /** @type {RouteInfo} */
    {}
  );
  var RouteContext = E({});
  var useLocation = () => P2(LocationProvider.ctx);

  // node_modules/preact-iso/src/lazy.js
  init_preact_module();
  function lazy(load) {
    let p3, c3;
    return (props) => {
      const [, update] = p2(0);
      const r3 = F2(c3);
      if (!p3)
        p3 = load().then((m3) => c3 = m3 && m3.default || m3);
      if (c3 !== void 0)
        return y(c3, props);
      if (!r3.current)
        r3.current = p3.then(() => update(1));
      throw p3;
    };
  }
  var oldCatchError = l.__e;
  l.__e = (err, newVNode, oldVNode) => {
    if (err && err.then) {
      let v3 = newVNode;
      while (v3 = v3.__) {
        if (v3.__c && v3.__c.__c) {
          if (newVNode.__e == null) {
            newVNode.__e = oldVNode.__e;
            newVNode.__k = oldVNode.__k;
          }
          if (!newVNode.__k)
            newVNode.__k = [];
          return v3.__c.__c(err, newVNode);
        }
      }
    }
    if (oldCatchError)
      oldCatchError(err, newVNode, oldVNode);
  };
  function ErrorBoundary(props) {
    this.__c = childDidSuspend;
    this.componentDidCatch = props.onError;
    return props.children;
  }
  function childDidSuspend(err) {
    err.then(() => this.forceUpdate());
  }

  // node_modules/preact-iso/src/hydrate.js
  init_preact_module();

  // src/App.tsx
  init_jsxRuntime_module();
  function Home() {
    return /* @__PURE__ */ u3(g, { children: "Home" });
  }
  var About2 = lazy(() => Promise.resolve().then(() => (init_About(), About_exports)));
  function App() {
    const [isLightTheme, setIsLightTheme] = p2(true);
    return (
      // <div {...stylex.props(styles.main)}>
      //   <div {...stylex.props(styles.card)}>
      //     <span>Blue rectangle</span>
      //   </div>
      //   <div {...stylex.props(isLightTheme ? lightTheme : darkTheme, st.test1)}>Test1</div>
      //   <button onClick={() => setIsLightTheme(prev => !prev)}>Test</button>
      //   <div {...stylex.props(autoTheme, st.test1)}>Test2</div>
      //   <div {...stylex.props(autoTheme, st.test1)}>{`calc => ${calc(10, 20)}`}</div>
      //   <div {...stylex.props(autoTheme, st.test1)}>{helloworld} {demo.foo(20)}</div>
      // </div>
      /* @__PURE__ */ u3(ErrorBoundary, { children: /* @__PURE__ */ u3(Router, { children: [
        /* @__PURE__ */ u3(Home, { path: "/" }),
        /* @__PURE__ */ u3(About2, { path: "/about" })
      ] }) })
    );
  }
  N(/* @__PURE__ */ u3(App, {}), document.getElementById("app"));
})();
//# sourceMappingURL=bundle.js.map
