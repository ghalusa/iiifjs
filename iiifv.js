/* IiifViewer; Copyright (C) 2014 - Klokan Technologies GmbH; Powered by OpenLayers 3 */
(function() {
  var k, aa = aa || {}, u = this;
  function x(a) {
    return void 0 !== a
  }
  function ba() {}
  function ca(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array)
          return "array";
        if (a instanceof Object)
          return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)
          return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
          return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
          return "function"
      } else
        return "null";
    else if ("function" == b && "undefined" == typeof a.call)
      return "object";
    return b
  }
  function da(a) {
    return "array" == ca(a)
  }
  function ea(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
  }
  function C(a) {
    return "string" == typeof a
  }
  function H(a) {
    return "number" == typeof a
  }
  function fa(a) {
    return "function" == ca(a)
  }
  function ga(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
  }
  function I(a) {
    return a[ha] || (a[ha] = ++ia)
  }
  var ha = "closure_uid_" + (1E9 * Math.random() >>> 0)
    , ia = 0;
  function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }
  function ka(a, b, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c)
      }
    }
    return function() {
      return a.apply(b, arguments)
    }
  }
  function J(a, b, c) {
    J = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
    return J.apply(null , arguments)
  }
  function la(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b)
    }
  }
  var ma = Date.now || function() {
    return +new Date
  }
  ;
  function na(a, b) {
    var c = a.split(".")
      , d = u;
    c[0]in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift()); )
      !c.length && x(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
  }
  function K(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.G = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Xk = function(a, c, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
        g[h - 2] = arguments[h];
      return b.prototype[c].apply(a, g)
    }
  }
  ;var oa;
  var pa = String.prototype.trim ? function(a) {
    return a.trim()
  }
  : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
  }
  ;
  function qa(a) {
    if (!ra.test(a))
      return a;
    -1 != a.indexOf("\x26") && (a = a.replace(sa, "\x26amp;"));
    -1 != a.indexOf("\x3c") && (a = a.replace(ta, "\x26lt;"));
    -1 != a.indexOf("\x3e") && (a = a.replace(ua, "\x26gt;"));
    -1 != a.indexOf('"') && (a = a.replace(va, "\x26quot;"));
    -1 != a.indexOf("'") && (a = a.replace(wa, "\x26#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(xa, "\x26#0;"));
    return a
  }
  var sa = /&/g
    , ta = /</g
    , ua = />/g
    , va = /"/g
    , wa = /'/g
    , xa = /\x00/g
    , ra = /[\x00&<>"']/;
  function ya(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  }
  ;var za = Array.prototype.indexOf ? function(a, b, c) {
    return Array.prototype.indexOf.call(a, b, c)
  }
  : function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (C(a))
      return C(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
      if (c in a && a[c] === b)
        return c;
    return -1
  }
    , Aa = Array.prototype.forEach ? function(a, b, c) {
    Array.prototype.forEach.call(a, b, c)
  }
  : function(a, b, c) {
    for (var d = a.length, e = C(a) ? a.split("") : a, f = 0; f < d; f++)
      f in e && b.call(c, e[f], f, a)
  }
    , Ba = Array.prototype.filter ? function(a, b, c) {
    return Array.prototype.filter.call(a, b, c)
  }
  : function(a, b, c) {
    for (var d = a.length, e = [], f = 0, g = C(a) ? a.split("") : a, h = 0; h < d; h++)
      if (h in g) {
        var l = g[h];
        b.call(c, l, h, a) && (e[f++] = l)
      }
    return e
  }
    , Ea = Array.prototype.map ? function(a, b, c) {
    return Array.prototype.map.call(a, b, c)
  }
  : function(a, b, c) {
    for (var d = a.length, e = Array(d), f = C(a) ? a.split("") : a, g = 0; g < d; g++)
      g in f && (e[g] = b.call(c, f[g], g, a));
    return e
  }
  ;
  function Fa(a) {
    var b;
    a: {
      b = Ga;
      for (var c = a.length, d = C(a) ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a
        }
      b = -1
    }
    return 0 > b ? null : C(a) ? a.charAt(b) : a[b]
  }
  function Ha(a, b) {
    var c = za(a, b), d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d
  }
  function Ia(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
  }
  function Ja(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
      return c
    }
    return []
  }
  function Ka(a, b, c, d) {
    Array.prototype.splice.apply(a, La(arguments, 1))
  }
  function La(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
  }
  function Ma(a, b) {
    a.sort(b || Na)
  }
  function Oa(a) {
    for (var b = Pa, c = 0; c < a.length; c++)
      a[c] = {
        index: c,
        value: a[c]
      };
    var d = b || Na;
    Ma(a, function(a, b) {
      return d(a.value, b.value) || a.index - b.index
    });
    for (c = 0; c < a.length; c++)
      a[c] = a[c].value
  }
  function Qa(a, b) {
    if (!ea(a) || !ea(b) || a.length != b.length)
      return !1;
    for (var c = a.length, d = Ra, e = 0; e < c; e++)
      if (!d(a[e], b[e]))
        return !1;
    return !0
  }
  function Na(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  }
  function Ra(a, b) {
    return a === b
  }
  ;function Sa() {
    0 != Ta && (Ua[I(this)] = this);
    this.Pb = this.Pb;
    this.Fb = this.Fb
  }
  var Ta = 0
    , Ua = {};
  Sa.prototype.Pb = !1;
  Sa.prototype.Ee = function() {
    if (!this.Pb && (this.Pb = !0,
    this.f(),
    0 != Ta)) {
      var a = I(this);
      delete Ua[a]
    }
  }
  ;
  function Va(a, b) {
    var c = la(Wa, b);
    a.Pb ? c.call(void 0) : (a.Fb || (a.Fb = []),
    a.Fb.push(x(void 0) ? J(c, void 0) : c))
  }
  Sa.prototype.f = function() {
    if (this.Fb)
      for (; this.Fb.length; )
        this.Fb.shift()()
  }
  ;
  function Wa(a) {
    a && "function" == typeof a.Ee && a.Ee()
  }
  ;var Ya;
  a: {
    var Za = u.navigator;
    if (Za) {
      var $a = Za.userAgent;
      if ($a) {
        Ya = $a;
        break a
      }
    }
    Ya = ""
  }
  function M(a) {
    return -1 != Ya.indexOf(a)
  }
  ;function ab(a, b) {
    for (var c in a)
      b.call(void 0, a[c], c, a)
  }
  function bb(a, b) {
    for (var c in a)
      if (b.call(void 0, a[c], c, a))
        return !0;
    return !1
  }
  function cb(a) {
    var b = 0, c;
    for (c in a)
      b++;
    return b
  }
  function db(a) {
    var b = [], c = 0, d;
    for (d in a)
      b[c++] = a[d];
    return b
  }
  function eb(a) {
    var b = [], c = 0, d;
    for (d in a)
      b[c++] = d;
    return b
  }
  function fb(a, b) {
    return null !== a && b in a
  }
  function gb(a, b) {
    for (var c in a)
      if (b.call(void 0, a[c], c, a))
        return c
  }
  function hb(a) {
    for (var b in a)
      return !1;
    return !0
  }
  function ib(a) {
    for (var b in a)
      delete a[b]
  }
  function jb(a) {
    var b = {}, c;
    for (c in a)
      b[c] = a[c];
    return b
  }
  var kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function lb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (var f = 0; f < kb.length; f++)
        c = kb[f],
        Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
  ;var mb = M("Opera") || M("OPR")
    , N = M("Trident") || M("MSIE")
    , ob = M("Edge")
    , pb = M("Gecko") && !(-1 != Ya.toLowerCase().indexOf("webkit") && !M("Edge")) && !(M("Trident") || M("MSIE")) && !M("Edge")
    , R = -1 != Ya.toLowerCase().indexOf("webkit") && !M("Edge")
    , qb = M("Macintosh")
    , rb = M("Windows")
    , sb = M("Linux") || M("CrOS");
  function tb() {
    var a = Ya;
    if (pb)
      return /rv\:([^\);]+)(\)|;)/.exec(a);
    if (ob)
      return /Edge\/([\d\.]+)/.exec(a);
    if (N)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (R)
      return /WebKit\/(\S+)/.exec(a)
  }
  function ub() {
    var a = u.document;
    return a ? a.documentMode : void 0
  }
  var vb = function() {
    if (mb && u.opera) {
      var a;
      var b = u.opera.version;
      try {
        a = b()
      } catch (c) {
        a = b
      }
      return a
    }
    a = "";
    (b = tb()) && (a = b ? b[1] : "");
    return N && (b = ub(),
    b > parseFloat(a)) ? String(b) : a
  }()
    , wb = {};
  function xb(a) {
    var b;
    if (!(b = wb[a])) {
      b = 0;
      for (var c = pa(String(vb)).split("."), d = pa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || ""
          , h = d[f] || ""
          , l = RegExp("(\\d*)(\\D*)", "g")
          , m = RegExp("(\\d*)(\\D*)", "g");
        do {
          var n = l.exec(g) || ["", "", ""]
            , p = m.exec(h) || ["", "", ""];
          if (0 == n[0].length && 0 == p[0].length)
            break;
          b = ya(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || ya(0 == n[2].length, 0 == p[2].length) || ya(n[2], p[2])
        } while (0 == b)
      }
      b = wb[a] = 0 <= b
    }
    return b
  }
  var yb = u.document
    , zb = yb && N ? ub() || ("CSS1Compat" == yb.compatMode ? parseInt(vb, 10) : 5) : void 0;
  var Ab = !N || 9 <= zb
    , Bb = !N || 9 <= zb
    , Cb = N && !xb("9");
  !R || xb("528");
  pb && xb("1.9b") || N && xb("8") || mb && xb("9.5") || R && xb("528");
  pb && !xb("8") || N && xb("9");
  function S(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Hb = !1;
    this.Qg = !0
  }
  S.prototype.stopPropagation = function() {
    this.Hb = !0
  }
  ;
  S.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.Qg = !1
  }
  ;
  function Db(a) {
    a.stopPropagation()
  }
  function Eb(a) {
    a.preventDefault()
  }
  ;var Fb = N ? "focusout" : "DOMFocusOut";
  function Gb(a) {
    Gb[" "](a);
    return a
  }
  Gb[" "] = ba;
  function Hb(a, b) {
    S.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null ;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null ;
    this.Pd = !1;
    this.s = null ;
    if (a) {
      var c = this.type = a.type
        , d = a.changedTouches ? a.changedTouches[0] : null ;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      var e = a.relatedTarget;
      if (e) {
        if (pb) {
          var f;
          a: {
            try {
              Gb(e.nodeName);
              f = !0;
              break a
            } catch (g) {}
            f = !1
          }
          f || (e = null )
        }
      } else
        "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
      this.relatedTarget = e;
      null === d ? (this.offsetX = R || void 0 !== a.offsetX ? a.offsetX : a.layerX,
      this.offsetY = R || void 0 !== a.offsetY ? a.offsetY : a.layerY,
      this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
      this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
      this.screenX = a.screenX || 0,
      this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
      this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
      this.screenX = d.screenX || 0,
      this.screenY = d.screenY || 0);
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.Pd = qb ? a.metaKey : a.ctrlKey;
      this.state = a.state;
      this.s = a;
      a.defaultPrevented && this.preventDefault()
    }
  }
  K(Hb, S);
  var Ib = [1, 4, 2];
  function Jb(a) {
    return (Ab ? 0 == a.s.button : "click" == a.type ? !0 : !!(a.s.button & Ib[0])) && !(R && qb && a.ctrlKey)
  }
  Hb.prototype.stopPropagation = function() {
    Hb.G.stopPropagation.call(this);
    this.s.stopPropagation ? this.s.stopPropagation() : this.s.cancelBubble = !0
  }
  ;
  Hb.prototype.preventDefault = function() {
    Hb.G.preventDefault.call(this);
    var a = this.s;
    if (a.preventDefault)
      a.preventDefault();
    else if (a.returnValue = !1,
    Cb)
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
          a.keyCode = -1
      } catch (b) {}
  }
  ;
  var Kb = "closure_listenable_" + (1E6 * Math.random() | 0);
  function Lb(a) {
    return !(!a || !a[Kb])
  }
  var Mb = 0;
  function Nb(a, b, c, d, e) {
    this.listener = a;
    this.Sd = null ;
    this.src = b;
    this.type = c;
    this.uc = !!d;
    this.rd = e;
    this.key = ++Mb;
    this.lc = this.ad = !1
  }
  function Ob(a) {
    a.lc = !0;
    a.listener = null ;
    a.Sd = null ;
    a.src = null ;
    a.rd = null
  }
  ;function Pb(a) {
    this.src = a;
    this.R = {};
    this.Yc = 0
  }
  Pb.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.R[f];
    a || (a = this.R[f] = [],
    this.Yc++);
    var g = Qb(a, b, d, e);
    -1 < g ? (b = a[g],
    c || (b.ad = !1)) : (b = new Nb(b,this.src,f,!!d,e),
    b.ad = c,
    a.push(b));
    return b
  }
  ;
  Pb.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.R))
      return !1;
    var e = this.R[a];
    b = Qb(e, b, c, d);
    return -1 < b ? (Ob(e[b]),
    Array.prototype.splice.call(e, b, 1),
    0 == e.length && (delete this.R[a],
    this.Yc--),
    !0) : !1
  }
  ;
  function Rb(a, b) {
    var c = b.type;
    if (!(c in a.R))
      return !1;
    var d = Ha(a.R[c], b);
    d && (Ob(b),
    0 == a.R[c].length && (delete a.R[c],
    a.Yc--));
    return d
  }
  Pb.prototype.Ke = function(a, b, c, d) {
    a = this.R[a.toString()];
    var e = -1;
    a && (e = Qb(a, b, c, d));
    return -1 < e ? a[e] : null
  }
  ;
  Pb.prototype.hasListener = function(a, b) {
    var c = x(a)
      , d = c ? a.toString() : ""
      , e = x(b);
    return bb(this.R, function(a) {
      for (var g = 0; g < a.length; ++g)
        if (!(c && a[g].type != d || e && a[g].uc != b))
          return !0;
      return !1
    })
  }
  ;
  function Qb(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.lc && f.listener == b && f.uc == !!c && f.rd == d)
        return e
    }
    return -1
  }
  ;var Sb = "closure_lm_" + (1E6 * Math.random() | 0)
    , Tb = {}
    , Ub = 0;
  function U(a, b, c, d, e) {
    if (da(b)) {
      for (var f = 0; f < b.length; f++)
        U(a, b[f], c, d, e);
      return null
    }
    c = Vb(c);
    return Lb(a) ? Wb(a, b, c, d, e) : Xb(a, b, c, !1, d, e)
  }
  function Xb(a, b, c, d, e, f) {
    if (!b)
      throw Error("Invalid event type");
    var g = !!e
      , h = Yb(a);
    h || (a[Sb] = h = new Pb(a));
    c = h.add(b, c, d, e, f);
    if (c.Sd)
      return c;
    d = Zb();
    c.Sd = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      a.addEventListener(b.toString(), d, g);
    else if (a.attachEvent)
      a.attachEvent($b(b.toString()), d);
    else
      throw Error("addEventListener and attachEvent are unavailable.");
    Ub++;
    return c
  }
  function Zb() {
    var a = ac
      , b = Bb ? function(c) {
      return a.call(b.src, b.listener, c)
    }
    : function(c) {
      c = a.call(b.src, b.listener, c);
      if (!c)
        return c
    }
    ;
    return b
  }
  function bc(a, b, c, d, e) {
    if (da(b)) {
      for (var f = 0; f < b.length; f++)
        bc(a, b[f], c, d, e);
      return null
    }
    c = Vb(c);
    return Lb(a) ? a.Ea.add(String(b), c, !0, d, e) : Xb(a, b, c, !0, d, e)
  }
  function cc(a, b, c, d, e) {
    if (da(b))
      for (var f = 0; f < b.length; f++)
        cc(a, b[f], c, d, e);
    else
      c = Vb(c),
      Lb(a) ? a.Ea.remove(String(b), c, d, e) : a && (a = Yb(a)) && (b = a.Ke(b, c, !!d, e)) && V(b)
  }
  function V(a) {
    if (H(a) || !a || a.lc)
      return !1;
    var b = a.src;
    if (Lb(b))
      return Rb(b.Ea, a);
    var c = a.type
      , d = a.Sd;
    b.removeEventListener ? b.removeEventListener(c, d, a.uc) : b.detachEvent && b.detachEvent($b(c), d);
    Ub--;
    (c = Yb(b)) ? (Rb(c, a),
    0 == c.Yc && (c.src = null ,
    b[Sb] = null )) : Ob(a);
    return !0
  }
  function $b(a) {
    return a in Tb ? Tb[a] : Tb[a] = "on" + a
  }
  function dc(a, b, c, d) {
    var e = !0;
    if (a = Yb(a))
      if (b = a.R[b.toString()])
        for (b = b.concat(),
        a = 0; a < b.length; a++) {
          var f = b[a];
          f && f.uc == c && !f.lc && (f = ec(f, d),
          e = e && !1 !== f)
        }
    return e
  }
  function ec(a, b) {
    var c = a.listener
      , d = a.rd || a.src;
    a.ad && V(a);
    return c.call(d, b)
  }
  function ac(a, b) {
    if (a.lc)
      return !0;
    if (!Bb) {
      var c;
      if (!(c = b))
        a: {
          c = ["window", "event"];
          for (var d = u, e; e = c.shift(); )
            if (null != d[e])
              d = d[e];
            else {
              c = null ;
              break a
            }
          c = d
        }
      e = c;
      c = new Hb(e,this);
      d = !0;
      if (!(0 > e.keyCode || void 0 != e.returnValue)) {
        a: {
          var f = !1;
          if (0 == e.keyCode)
            try {
              e.keyCode = -1;
              break a
            } catch (l) {
              f = !0
            }
          if (f || void 0 == e.returnValue)
            e.returnValue = !0
        }
        e = [];
        for (f = c.currentTarget; f; f = f.parentNode)
          e.push(f);
        for (var f = a.type, g = e.length - 1; !c.Hb && 0 <= g; g--) {
          c.currentTarget = e[g];
          var h = dc(e[g], f, !0, c)
            , d = d && h
        }
        for (g = 0; !c.Hb && g < e.length; g++)
          c.currentTarget = e[g],
          h = dc(e[g], f, !1, c),
          d = d && h
      }
      return d
    }
    return ec(a, new Hb(b,this))
  }
  function Yb(a) {
    a = a[Sb];
    return a instanceof Pb ? a : null
  }
  var fc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  function Vb(a) {
    if (fa(a))
      return a;
    a[fc] || (a[fc] = function(b) {
      return a.handleEvent(b)
    }
    );
    return a[fc]
  }
  ;function gc(a) {
    return function() {
      return a
    }
  }
  var hc = gc(!1)
    , ic = gc(!0);
  function jc(a) {
    var b;
    b = b || 0;
    return function() {
      return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
  }
  function kc(a) {
    var b = arguments
      , c = b.length;
    return function() {
      for (var a = 0; a < c; a++)
        if (!b[a].apply(this, arguments))
          return !1;
      return !0
    }
  }
  ;function lc(a, b, c) {
    Sa.call(this);
    this.Ha = null ;
    this.Bf = !1;
    this.$i = a;
    this.Oi = c;
    this.Na = b || window;
    this.pe = J(this.Lh, this)
  }
  K(lc, Sa);
  k = lc.prototype;
  k.start = function() {
    this.stop();
    this.Bf = !1;
    var a = mc(this)
      , b = nc(this);
    a && !b && this.Na.mozRequestAnimationFrame ? (this.Ha = U(this.Na, "MozBeforePaint", this.pe),
    this.Na.mozRequestAnimationFrame(null ),
    this.Bf = !0) : this.Ha = a && b ? a.call(this.Na, this.pe) : this.Na.setTimeout(jc(this.pe), 20)
  }
  ;
  k.stop = function() {
    if (this.Qe()) {
      var a = mc(this)
        , b = nc(this);
      a && !b && this.Na.mozRequestAnimationFrame ? V(this.Ha) : a && b ? b.call(this.Na, this.Ha) : this.Na.clearTimeout(this.Ha)
    }
    this.Ha = null
  }
  ;
  k.Qe = function() {
    return null != this.Ha
  }
  ;
  k.Lh = function() {
    this.Bf && this.Ha && V(this.Ha);
    this.Ha = null ;
    this.$i.call(this.Oi, ma())
  }
  ;
  k.f = function() {
    this.stop();
    lc.G.f.call(this)
  }
  ;
  function mc(a) {
    a = a.Na;
    return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
  }
  function nc(a) {
    a = a.Na;
    return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
  }
  ;var oc;
  function pc() {
    var a = u.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !M("Presto") && (a = function() {
      var a = document.createElement("IFRAME");
      a.style.display = "none";
      a.src = "";
      document.documentElement.appendChild(a);
      var b = a.contentWindow
        , a = b.document;
      a.open();
      a.write("");
      a.close();
      var c = "callImmediate" + Math.random()
        , d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host
        , a = J(function(a) {
        if (("*" == d || a.origin == d) && a.data == c)
          this.port1.onmessage()
      }, this);
      b.addEventListener("message", a, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function() {
          b.postMessage(c, d)
        }
      }
    }
    );
    if ("undefined" !== typeof a && !M("Trident") && !M("MSIE")) {
      var b = new a
        , c = {}
        , d = c;
      b.port1.onmessage = function() {
        if (x(c.next)) {
          c = c.next;
          var a = c.Of;
          c.Of = null ;
          a()
        }
      }
      ;
      return function(a) {
        d.next = {
          Of: a
        };
        d = d.next;
        b.port2.postMessage(0)
      }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("SCRIPT") ? function(a) {
      var b = document.createElement("SCRIPT");
      b.onreadystatechange = function() {
        b.onreadystatechange = null ;
        b.parentNode.removeChild(b);
        b = null ;
        a();
        a = null
      }
      ;
      document.documentElement.appendChild(b)
    }
    : function(a) {
      u.setTimeout(a, 0)
    }
  }
  ;function qc(a) {
    if (a.ma && "function" == typeof a.ma)
      return a.ma();
    if (C(a))
      return a.split("");
    if (ea(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
      return b
    }
    return db(a)
  }
  function rc(a, b, c) {
    if (a.forEach && "function" == typeof a.forEach)
      a.forEach(b, c);
    else if (ea(a) || C(a))
      Aa(a, b, c);
    else {
      var d;
      if (a.ra && "function" == typeof a.ra)
        d = a.ra();
      else if (a.ma && "function" == typeof a.ma)
        d = void 0;
      else if (ea(a) || C(a)) {
        d = [];
        for (var e = a.length, f = 0; f < e; f++)
          d.push(f)
      } else
        d = eb(a);
      for (var e = qc(a), f = e.length, g = 0; g < f; g++)
        b.call(c, e[g], d && d[g], a)
    }
  }
  ;function sc(a, b) {
    var c = a % b;
    return 0 > c * b ? c + b : c
  }
  ;function tc(a, b) {
    this.a = {};
    this.P = [];
    this.g = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2)
        throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1])
    } else
      a && this.addAll(a)
  }
  k = tc.prototype;
  k.Cc = function() {
    return this.g
  }
  ;
  k.ma = function() {
    vc(this);
    for (var a = [], b = 0; b < this.P.length; b++)
      a.push(this.a[this.P[b]]);
    return a
  }
  ;
  k.ra = function() {
    vc(this);
    return this.P.concat()
  }
  ;
  k.Ca = function(a) {
    return wc(this.a, a)
  }
  ;
  k.wd = function() {
    return 0 == this.g
  }
  ;
  k.clear = function() {
    this.a = {};
    this.g = this.P.length = 0
  }
  ;
  k.remove = function(a) {
    return wc(this.a, a) ? (delete this.a[a],
    this.g--,
    this.P.length > 2 * this.g && vc(this),
    !0) : !1
  }
  ;
  function vc(a) {
    if (a.g != a.P.length) {
      for (var b = 0, c = 0; b < a.P.length; ) {
        var d = a.P[b];
        wc(a.a, d) && (a.P[c++] = d);
        b++
      }
      a.P.length = c
    }
    if (a.g != a.P.length) {
      for (var e = {}, c = b = 0; b < a.P.length; )
        d = a.P[b],
        wc(e, d) || (a.P[c++] = d,
        e[d] = 1),
        b++;
      a.P.length = c
    }
  }
  k.get = function(a, b) {
    return wc(this.a, a) ? this.a[a] : b
  }
  ;
  k.set = function(a, b) {
    wc(this.a, a) || (this.g++,
    this.P.push(a));
    this.a[a] = b
  }
  ;
  k.addAll = function(a) {
    var b;
    a instanceof tc ? (b = a.ra(),
    a = a.ma()) : (b = eb(a),
    a = db(a));
    for (var c = 0; c < b.length; c++)
      this.set(b[c], a[c])
  }
  ;
  k.forEach = function(a, b) {
    for (var c = this.ra(), d = 0; d < c.length; d++) {
      var e = c[d]
        , f = this.get(e);
      a.call(b, f, e, this)
    }
  }
  ;
  k.clone = function() {
    return new tc(this)
  }
  ;
  function wc(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }
  ;function xc() {
    this.Ig = ma()
  }
  new xc;
  xc.prototype.set = function(a) {
    this.Ig = a
  }
  ;
  xc.prototype.reset = function() {
    this.set(ma())
  }
  ;
  xc.prototype.get = function() {
    return this.Ig
  }
  ;
  var yc = !N || 9 <= zb;
  !pb && !N || N && 9 <= zb || pb && xb("1.9.1");
  N && xb("9");
  function zc(a, b) {
    this.x = x(a) ? a : 0;
    this.y = x(b) ? b : 0
  }
  k = zc.prototype;
  k.clone = function() {
    return new zc(this.x,this.y)
  }
  ;
  k.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
  }
  ;
  k.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
  }
  ;
  k.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  }
  ;
  k.translate = function(a, b) {
    a instanceof zc ? (this.x += a.x,
    this.y += a.y) : (this.x += a,
    H(b) && (this.y += b));
    return this
  }
  ;
  k.scale = function(a, b) {
    var c = H(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
  }
  ;
  function Ac(a, b) {
    this.width = a;
    this.height = b
  }
  k = Ac.prototype;
  k.clone = function() {
    return new Ac(this.width,this.height)
  }
  ;
  k.Ch = function() {
    return this.width * this.height
  }
  ;
  k.wd = function() {
    return !this.Ch()
  }
  ;
  k.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  }
  ;
  k.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  }
  ;
  k.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  }
  ;
  k.scale = function(a, b) {
    var c = H(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
  }
  ;
  function Bc(a) {
    var b = document;
    return C(a) ? b.getElementById(a) : a
  }
  function Cc(a, b) {
    ab(b, function(b, d) {
      "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Dc.hasOwnProperty(d) ? a.setAttribute(Dc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
  }
  var Dc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };
  function Ec(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Ac(a.clientWidth,a.clientHeight)
  }
  function Fc(a, b, c) {
    var d = arguments
      , e = document
      , f = d[0]
      , g = d[1];
    if (!yc && g && (g.name || g.type)) {
      f = ["\x3c", f];
      g.name && f.push(' name\x3d"', qa(g.name), '"');
      if (g.type) {
        f.push(' type\x3d"', qa(g.type), '"');
        var h = {};
        lb(h, g);
        delete h.type;
        g = h
      }
      f.push("\x3e");
      f = f.join("")
    }
    f = e.createElement(f);
    g && (C(g) ? f.className = g : da(g) ? f.className = g.join(" ") : Cc(f, g));
    2 < d.length && Gc(e, f, d, 2);
    return f
  }
  function Gc(a, b, c, d) {
    function e(c) {
      c && b.appendChild(C(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
      var f = c[d];
      !ea(f) || ga(f) && 0 < f.nodeType ? e(f) : Aa(Hc(f) ? Ja(f) : f, e)
    }
  }
  function Ic(a, b, c) {
    a.insertBefore(b, a.childNodes[c] || null )
  }
  function Jc(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
  }
  function Kc(a, b) {
    if (a.contains && 1 == b.nodeType)
      return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; )
      b = b.parentNode;
    return b == a
  }
  function Lc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }
  function Hc(a) {
    if (a && "number" == typeof a.length) {
      if (ga(a))
        return "function" == typeof a.item || "string" == typeof a.item;
      if (fa(a))
        return "function" == typeof a.item
    }
    return !1
  }
  function Mc(a) {
    this.Ge = a || u.document || document
  }
  k = Mc.prototype;
  k.Rc = Cc;
  k.createElement = function(a) {
    return this.Ge.createElement(a)
  }
  ;
  k.createTextNode = function(a) {
    return this.Ge.createTextNode(String(a))
  }
  ;
  k.appendChild = function(a, b) {
    a.appendChild(b)
  }
  ;
  k.append = function(a, b) {
    Gc(Lc(a), a, arguments, 1)
  }
  ;
  k.canHaveChildren = function(a) {
    if (1 != a.nodeType)
      return !1;
    switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
      return !1
    }
    return !0
  }
  ;
  k.removeNode = Jc;
  k.contains = Kc;
  function W() {
    Sa.call(this);
    this.Ea = new Pb(this);
    this.vh = this;
    this.hf = null
  }
  K(W, Sa);
  W.prototype[Kb] = !0;
  k = W.prototype;
  k.addEventListener = function(a, b, c, d) {
    U(this, a, b, c, d)
  }
  ;
  k.removeEventListener = function(a, b, c, d) {
    cc(this, a, b, c, d)
  }
  ;
  k.dispatchEvent = function(a) {
    var b, c = this.hf;
    if (c)
      for (b = []; c; c = c.hf)
        b.push(c);
    var c = this.vh
      , d = a.type || a;
    if (C(a))
      a = new S(a,c);
    else if (a instanceof S)
      a.target = a.target || c;
    else {
      var e = a;
      a = new S(d,c);
      lb(a, e)
    }
    var e = !0, f;
    if (b)
      for (var g = b.length - 1; !a.Hb && 0 <= g; g--)
        f = a.currentTarget = b[g],
        e = Nc(f, d, !0, a) && e;
    a.Hb || (f = a.currentTarget = c,
    e = Nc(f, d, !0, a) && e,
    a.Hb || (e = Nc(f, d, !1, a) && e));
    if (b)
      for (g = 0; !a.Hb && g < b.length; g++)
        f = a.currentTarget = b[g],
        e = Nc(f, d, !1, a) && e;
    return e
  }
  ;
  k.f = function() {
    W.G.f.call(this);
    if (this.Ea) {
      var a = this.Ea, b = 0, c;
      for (c in a.R) {
        for (var d = a.R[c], e = 0; e < d.length; e++)
          ++b,
          Ob(d[e]);
        delete a.R[c];
        a.Yc--
      }
    }
    this.hf = null
  }
  ;
  function Wb(a, b, c, d, e) {
    return a.Ea.add(String(b), c, !1, d, e)
  }
  function Nc(a, b, c, d) {
    b = a.Ea.R[String(b)];
    if (!b)
      return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.lc && g.uc == c) {
        var h = g.listener
          , l = g.rd || g.src;
        g.ad && Rb(a.Ea, g);
        e = !1 !== h.call(l, d) && e
      }
    }
    return e && 0 != d.Qg
  }
  k.Ke = function(a, b, c, d) {
    return this.Ea.Ke(String(a), b, c, d)
  }
  ;
  k.hasListener = function(a, b) {
    return this.Ea.hasListener(x(a) ? String(a) : void 0, b)
  }
  ;
  function Oc(a) {
    W.call(this);
    this.he = a || window;
    this.$e = U(this.he, "resize", this.Ei, !1, this);
    this.Tc = Ec(this.he || window)
  }
  K(Oc, W);
  Oc.prototype.Cb = function() {
    return this.Tc ? this.Tc.clone() : null
  }
  ;
  Oc.prototype.f = function() {
    Oc.G.f.call(this);
    this.$e && (V(this.$e),
    this.$e = null );
    this.Tc = this.he = null
  }
  ;
  Oc.prototype.Ei = function() {
    var a = Ec(this.he || window)
      , b = this.Tc;
    a == b || a && b && a.width == b.width && a.height == b.height || (this.Tc = a,
    this.dispatchEvent("resize"))
  }
  ;
  function Pc(a) {
    if (a.classList)
      return a.classList;
    a = a.className;
    return C(a) && a.match(/\S+/g) || []
  }
  function Qc(a, b) {
    var c;
    a.classList ? c = a.classList.contains(b) : (c = Pc(a),
    c = 0 <= za(c, b));
    return c
  }
  function Rc(a, b) {
    a.classList ? a.classList.add(b) : Qc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
  }
  function Sc(a, b) {
    a.classList ? a.classList.remove(b) : Qc(a, b) && (a.className = Ba(Pc(a), function(a) {
      return a != b
    }).join(" "))
  }
  ;function Tc(a, b, c, d, e) {
    if (!(N || ob || R && xb("525")))
      return !0;
    if (qb && e)
      return Uc(a);
    if (e && !d)
      return !1;
    H(b) && (b = Vc(b));
    if (!c && (17 == b || 18 == b || qb && 91 == b))
      return !1;
    if ((R || ob) && d && c)
      switch (a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1
      }
    if (N && d && b == a)
      return !1;
    switch (a) {
    case 13:
      return !0;
    case 27:
      return !(R || ob)
    }
    return Uc(a)
  }
  function Uc(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (R || ob) && 0 == a)
      return !0;
    switch (a) {
    case 32:
    case 43:
    case 63:
    case 64:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
      return !0;
    default:
      return !1
    }
  }
  function Vc(a) {
    if (pb)
      a = Wc(a);
    else if (qb && R)
      a: switch (a) {
      case 93:
        a = 91;
        break a
      }
    return a
  }
  function Wc(a) {
    switch (a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
    }
  }
  ;function Xc(a, b) {
    W.call(this);
    a && Yc(this, a, b)
  }
  K(Xc, W);
  k = Xc.prototype;
  k.D = null ;
  k.yd = null ;
  k.Se = null ;
  k.zd = null ;
  k.ba = -1;
  k.ib = -1;
  k.me = !1;
  var Zc = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
  }
    , $c = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
  }
    , ad = N || ob || R && xb("525")
    , bd = qb && pb;
  k = Xc.prototype;
  k.ni = function(a) {
    if (R || ob)
      if (17 == this.ba && !a.ctrlKey || 18 == this.ba && !a.altKey || qb && 91 == this.ba && !a.metaKey)
        this.ib = this.ba = -1;
    -1 == this.ba && (a.ctrlKey && 17 != a.keyCode ? this.ba = 17 : a.altKey && 18 != a.keyCode ? this.ba = 18 : a.metaKey && 91 != a.keyCode && (this.ba = 91));
    ad && !Tc(a.keyCode, this.ba, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ib = Vc(a.keyCode),
    bd && (this.me = a.altKey))
  }
  ;
  k.oi = function(a) {
    this.ib = this.ba = -1;
    this.me = a.altKey
  }
  ;
  k.handleEvent = function(a) {
    var b = a.s, c, d, e = b.altKey;
    N && "keypress" == a.type ? (c = this.ib,
    d = 13 != c && 27 != c ? b.keyCode : 0) : (R || ob) && "keypress" == a.type ? (c = this.ib,
    d = 0 <= b.charCode && 63232 > b.charCode && Uc(c) ? b.charCode : 0) : mb && !R ? (c = this.ib,
    d = Uc(c) ? b.keyCode : 0) : (c = b.keyCode || this.ib,
    d = b.charCode || 0,
    bd && (e = this.me),
    qb && 63 == d && 224 == c && (c = 191));
    var f = c = Vc(c)
      , g = b.keyIdentifier;
    c ? 63232 <= c && c in Zc ? f = Zc[c] : 25 == c && a.shiftKey && (f = 9) : g && g in $c && (f = $c[g]);
    a = f == this.ba;
    this.ba = f;
    b = new cd(f,d,a,b);
    b.altKey = e;
    this.dispatchEvent(b)
  }
  ;
  function Yc(a, b, c) {
    a.zd && a.detach();
    a.D = b;
    a.yd = U(a.D, "keypress", a, c);
    a.Se = U(a.D, "keydown", a.ni, c, a);
    a.zd = U(a.D, "keyup", a.oi, c, a)
  }
  k.detach = function() {
    this.yd && (V(this.yd),
    V(this.Se),
    V(this.zd),
    this.zd = this.Se = this.yd = null );
    this.D = null ;
    this.ib = this.ba = -1
  }
  ;
  k.f = function() {
    Xc.G.f.call(this);
    this.detach()
  }
  ;
  function cd(a, b, c, d) {
    Hb.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
  }
  K(cd, Hb);
  function dd(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  }
  k = dd.prototype;
  k.Vb = function() {
    return this.right - this.left
  }
  ;
  k.Tb = function() {
    return this.bottom - this.top
  }
  ;
  k.clone = function() {
    return new dd(this.top,this.right,this.bottom,this.left)
  }
  ;
  k.contains = function(a) {
    return this && a ? a instanceof dd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
  }
  ;
  k.expand = function(a, b, c, d) {
    ga(a) ? (this.top -= a.top,
    this.right += a.right,
    this.bottom += a.bottom,
    this.left -= a.left) : (this.top -= a,
    this.right += b,
    this.bottom += c,
    this.left -= d);
    return this
  }
  ;
  k.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  }
  ;
  k.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  }
  ;
  k.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  }
  ;
  k.translate = function(a, b) {
    a instanceof zc ? (this.left += a.x,
    this.right += a.x,
    this.top += a.y,
    this.bottom += a.y) : (this.left += a,
    this.right += a,
    H(b) && (this.top += b,
    this.bottom += b));
    return this
  }
  ;
  k.scale = function(a, b) {
    var c = H(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
  }
  ;
  function ed(a, b) {
    var c = Lc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null )) ? c[b] || c.getPropertyValue(b) || "" : ""
  }
  function fd(a) {
    if (1 == a.nodeType) {
      var b;
      a: {
        try {
          b = a.getBoundingClientRect()
        } catch (c) {
          b = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          };
          break a
        }
        N && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop)
      }
      return new zc(b.left,b.top)
    }
    b = a.changedTouches ? a.changedTouches[0] : a;
    return new zc(b.clientX,b.clientY)
  }
  function gd(a, b) {
    a.style.display = b ? "" : "none"
  }
  function hd(a, b, c, d) {
    if (/^\d+px?$/.test(b))
      return parseInt(b, 10);
    var e = a.style[c]
      , f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return b
  }
  function id(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null ;
    return c ? hd(a, c, "left", "pixelLeft") : 0
  }
  var jd = {
    thin: 2,
    medium: 4,
    thick: 6
  };
  function kd(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null ))
      return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null ;
    return c in jd ? jd[c] : hd(a, c, "left", "pixelLeft")
  }
  ;function ld(a, b) {
    W.call(this);
    var c = this.D = a, c = ga(c) && 1 == c.nodeType ? this.D : this.D ? this.D.body : null , d;
    if (d = !!c)
      d = "rtl" == (ed(c, "direction") || (c.currentStyle ? c.currentStyle.direction : null ) || c.style && c.style.direction);
    this.Xi = d;
    this.qg = U(this.D, pb ? "DOMMouseScroll" : "mousewheel", this, b)
  }
  K(ld, W);
  ld.prototype.handleEvent = function(a) {
    var b = 0
      , c = 0
      , d = 0;
    a = a.s;
    if ("mousewheel" == a.type) {
      c = 1;
      if (N || R && (rb || xb("532.0")))
        c = 40;
      d = md(-a.wheelDelta, c);
      x(a.wheelDeltaX) ? (b = md(-a.wheelDeltaX, c),
      c = md(-a.wheelDeltaY, c)) : c = d
    } else
      d = a.detail,
      100 < d ? d = 3 : -100 > d && (d = -3),
      x(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    H(this.rg) && (b = Math.min(Math.max(b, -this.rg), this.rg));
    H(this.sg) && (c = Math.min(Math.max(c, -this.sg), this.sg));
    this.Xi && (b = -b);
    b = new nd(d,a,b,c);
    this.dispatchEvent(b)
  }
  ;
  function md(a, b) {
    return R && (qb || sb) && 0 != a % b ? a : a / b
  }
  ld.prototype.f = function() {
    ld.G.f.call(this);
    V(this.qg);
    this.qg = null
  }
  ;
  function nd(a, b, c, d) {
    Hb.call(this, b);
    this.type = "mousewheel";
    this.detail = a;
    this.deltaX = c;
    this.deltaY = d
  }
  K(nd, Hb);
  function od(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++)
      this[b] = a[b] || 0
  }
  od.prototype.BYTES_PER_ELEMENT = 4;
  od.prototype.set = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)
      this[b + c] = a[c]
  }
  ;
  od.prototype.toString = Array.prototype.join;
  "undefined" == typeof Float32Array && (od.BYTES_PER_ELEMENT = 4,
  od.prototype.BYTES_PER_ELEMENT = od.prototype.BYTES_PER_ELEMENT,
  od.prototype.set = od.prototype.set,
  od.prototype.toString = od.prototype.toString,
  na("Float32Array", od));
  function pd(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++)
      this[b] = a[b] || 0
  }
  pd.prototype.BYTES_PER_ELEMENT = 8;
  pd.prototype.set = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)
      this[b + c] = a[c]
  }
  ;
  pd.prototype.toString = Array.prototype.join;
  if ("undefined" == typeof Float64Array) {
    try {
      pd.BYTES_PER_ELEMENT = 8
    } catch (a) {}
    pd.prototype.BYTES_PER_ELEMENT = pd.prototype.BYTES_PER_ELEMENT;
    pd.prototype.set = pd.prototype.set;
    pd.prototype.toString = pd.prototype.toString;
    na("Float64Array", pd)
  }
  ;function qd() {
    var a = Array(16);
    rd(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    return a
  }
  function rd(a, b, c, d, e, f, g, h, l, m, n, p, r, t, v, z, q) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e;
    a[4] = f;
    a[5] = g;
    a[6] = h;
    a[7] = l;
    a[8] = m;
    a[9] = n;
    a[10] = p;
    a[11] = r;
    a[12] = t;
    a[13] = v;
    a[14] = z;
    a[15] = q
  }
  function td(a, b, c) {
    var d = a[1] * b + a[5] * c + 0 * a[9] + a[13]
      , e = a[2] * b + a[6] * c + 0 * a[10] + a[14]
      , f = a[3] * b + a[7] * c + 0 * a[11] + a[15];
    a[12] = a[0] * b + a[4] * c + 0 * a[8] + a[12];
    a[13] = d;
    a[14] = e;
    a[15] = f
  }
  new Float64Array(3);
  new Float64Array(3);
  new Float64Array(4);
  new Float64Array(4);
  new Float64Array(4);
  new Float64Array(16);
  function ud() {
    W.call(this);
    this.Ya = 0
  }
  K(ud, W);
  ud.prototype.F = function() {
    ++this.Ya;
    this.dispatchEvent("change")
  }
  ;
  function vd(a, b, c) {
    U(a, "moveend", b, !1, c)
  }
  ;function wd(a, b, c) {
    S.call(this, a);
    this.key = b;
    this.oldValue = c
  }
  K(wd, S);
  function X(a) {
    ud.call(this);
    I(this);
    this.rc = {};
    void 0 !== a && this.Rc(a)
  }
  K(X, ud);
  var xd = {};
  function yd(a) {
    return xd.hasOwnProperty(a) ? xd[a] : xd[a] = "change:" + a
  }
  X.prototype.get = function(a) {
    var b;
    this.rc.hasOwnProperty(a) && (b = this.rc[a]);
    return b
  }
  ;
  X.prototype.ra = function() {
    return Object.keys(this.rc)
  }
  ;
  X.prototype.set = function(a, b, c) {
    c ? this.rc[a] = b : (c = this.rc[a],
    this.rc[a] = b,
    b = yd(a),
    this.dispatchEvent(new wd(b,a,c)),
    this.dispatchEvent(new wd("propertychange",a,c)))
  }
  ;
  X.prototype.Rc = function(a, b) {
    for (var c in a)
      this.set(c, a[c], b)
  }
  ;
  function zd(a, b, c) {
    S.call(this, a, c);
    this.element = b
  }
  K(zd, S);
  function Ad(a) {
    X.call(this);
    this.Aa = a ? a : [];
    Bd(this)
  }
  K(Ad, X);
  k = Ad.prototype;
  k.clear = function() {
    for (; 0 < this.get("length"); )
      this.pop()
  }
  ;
  k.extend = function(a) {
    var b, c;
    b = 0;
    for (c = a.length; b < c; ++b)
      this.push(a[b]);
    return this
  }
  ;
  k.forEach = function(a, b) {
    this.Aa.forEach(a, b)
  }
  ;
  k.item = function(a) {
    return this.Aa[a]
  }
  ;
  k.pop = function() {
    return Cd(this, this.get("length") - 1)
  }
  ;
  k.push = function(a) {
    var b = this.Aa.length;
    Ka(this.Aa, b, 0, a);
    Bd(this);
    this.dispatchEvent(new zd("add",a,this));
    return b
  }
  ;
  k.remove = function(a) {
    var b = this.Aa, c, d;
    c = 0;
    for (d = b.length; c < d; ++c)
      if (b[c] === a)
        return Cd(this, c)
  }
  ;
  function Cd(a, b) {
    var c = a.Aa[b];
    Array.prototype.splice.call(a.Aa, b, 1);
    Bd(a);
    a.dispatchEvent(new zd("remove",c,a));
    return c
  }
  function Bd(a) {
    a.set("length", a.Aa.length)
  }
  ;function Dd() {}
  ;function Ed(a, b) {
    a[0] += b[0];
    a[1] += b[1]
  }
  function Fd(a, b) {
    var c = Math.cos(b)
      , d = Math.sin(b)
      , e = a[1] * c + a[0] * d;
    a[0] = a[0] * c - a[1] * d;
    a[1] = e
  }
  ;function Gd(a, b, c) {
    S.call(this, a);
    this.map = b;
    this.frameState = void 0 !== c ? c : null
  }
  K(Gd, S);
  function Hd(a, b, c) {
    S.call(this, a);
    this.U = b;
    a = c ? c : {};
    this.buttons = Id(a);
    this.pressure = Jd(a, this.buttons);
    this.bubbles = "bubbles"in a ? a.bubbles : !1;
    this.cancelable = "cancelable"in a ? a.cancelable : !1;
    this.view = "view"in a ? a.view : null ;
    this.detail = "detail"in a ? a.detail : null ;
    this.screenX = "screenX"in a ? a.screenX : 0;
    this.screenY = "screenY"in a ? a.screenY : 0;
    this.clientX = "clientX"in a ? a.clientX : 0;
    this.clientY = "clientY"in a ? a.clientY : 0;
    this.ctrlKey = "ctrlKey"in a ? a.ctrlKey : !1;
    this.altKey = "altKey"in a ? a.altKey : !1;
    this.shiftKey = "shiftKey"in a ? a.shiftKey : !1;
    this.metaKey = "metaKey"in a ? a.metaKey : !1;
    this.button = "button"in a ? a.button : 0;
    this.relatedTarget = "relatedTarget"in a ? a.relatedTarget : null ;
    this.pointerId = "pointerId"in a ? a.pointerId : 0;
    this.width = "width"in a ? a.width : 0;
    this.height = "height"in a ? a.height : 0;
    this.tiltX = "tiltX"in a ? a.tiltX : 0;
    this.tiltY = "tiltY"in a ? a.tiltY : 0;
    this.pointerType = "pointerType"in a ? a.pointerType : "";
    this.hwTimestamp = "hwTimestamp"in a ? a.hwTimestamp : 0;
    this.isPrimary = "isPrimary"in a ? a.isPrimary : !1;
    b.preventDefault && (this.preventDefault = function() {
      b.preventDefault()
    }
    )
  }
  K(Hd, S);
  function Id(a) {
    if (a.buttons || Kd)
      a = a.buttons;
    else
      switch (a.which) {
      case 1:
        a = 1;
        break;
      case 2:
        a = 4;
        break;
      case 3:
        a = 2;
        break;
      default:
        a = 0
      }
    return a
  }
  function Jd(a, b) {
    var c = 0;
    return c = a.pressure ? a.pressure : b ? .5 : 0
  }
  var Kd = !1;
  try {
    Kd = 1 === (new MouseEvent("click",{
      buttons: 1
    })).buttons
  } catch (a) {}
  ;function Ld(a, b) {
    var c = document.createElement("CANVAS");
    a && (c.width = a);
    b && (c.height = b);
    return c.getContext("2d")
  }
  var Md = function() {
    var a;
    return function() {
      if (void 0 === a)
        if (u.getComputedStyle) {
          var b = document.createElement("P"), c, d = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
          };
          document.body.appendChild(b);
          for (var e in d)
            e in b.style && (b.style[e] = "translate(1px,1px)",
            c = u.getComputedStyle(b).getPropertyValue(d[e]));
          Jc(b);
          a = c && "none" !== c
        } else
          a = !1;
      return a
    }
  }()
    , Nd = function() {
    var a;
    return function() {
      if (void 0 === a)
        if (u.getComputedStyle) {
          var b = document.createElement("P"), c, d = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
          };
          document.body.appendChild(b);
          for (var e in d)
            e in b.style && (b.style[e] = "translate3d(1px,1px,1px)",
            c = u.getComputedStyle(b).getPropertyValue(d[e]));
          Jc(b);
          a = c && "none" !== c
        } else
          a = !1;
      return a
    }
  }();
  function Od(a, b) {
    var c = a.style;
    c.WebkitTransform = b;
    c.MozTransform = b;
    c.Ek = b;
    c.msTransform = b;
    c.transform = b;
    N && xb("9.0") && (a.style.transformOrigin = "0 0")
  }
  ;var Pd = u.devicePixelRatio || 1
    , Qd = !1
    , Rd = function() {
    if (!("HTMLCanvasElement"in u))
      return !1;
    try {
      var a = Ld();
      return a ? (void 0 !== a.setLineDash && (Qd = !0),
      !0) : !1
    } catch (b) {
      return !1
    }
  }()
    , Sd = "ontouchstart"in u
    , Td = "PointerEvent"in u
    , Ud = !!u.navigator.msPointerEnabled;
  function Vd(a, b) {
    this.c = a;
    this.Jd = b
  }
  ;function Wd(a) {
    Vd.call(this, a, {
      mousedown: this.nj,
      mousemove: this.oj,
      mouseup: this.rj,
      mouseover: this.qj,
      mouseout: this.pj
    });
    this.B = a.B;
    this.pg = []
  }
  K(Wd, Vd);
  function Xd(a, b) {
    for (var c = a.pg, d = b.clientX, e = b.clientY, f = 0, g = c.length, h; f < g && (h = c[f]); f++) {
      var l = Math.abs(e - h[1]);
      if (25 >= Math.abs(d - h[0]) && 25 >= l)
        return !0
    }
    return !1
  }
  function Yd(a) {
    var b = Zd(a, a.s)
      , c = b.preventDefault;
    b.preventDefault = function() {
      a.preventDefault();
      c()
    }
    ;
    b.pointerId = 1;
    b.isPrimary = !0;
    b.pointerType = "mouse";
    return b
  }
  k = Wd.prototype;
  k.nj = function(a) {
    if (!Xd(this, a)) {
      (1).toString()in this.B && this.cancel(a);
      var b = Yd(a);
      this.B[(1).toString()] = a;
      this.c.fireEvent($d, b, a)
    }
  }
  ;
  k.oj = function(a) {
    if (!Xd(this, a)) {
      var b = Yd(a);
      this.c.move(b, a)
    }
  }
  ;
  k.rj = function(a) {
    if (!Xd(this, a)) {
      var b = this.B[(1).toString()];
      b && b.button === a.button && (b = Yd(a),
      this.c.fireEvent(ae, b, a),
      delete this.B[(1).toString()])
    }
  }
  ;
  k.qj = function(a) {
    if (!Xd(this, a)) {
      var b = Yd(a);
      be(this.c, b, a)
    }
  }
  ;
  k.pj = function(a) {
    if (!Xd(this, a)) {
      var b = Yd(a);
      ce(this.c, b, a)
    }
  }
  ;
  k.cancel = function(a) {
    var b = Yd(a);
    this.c.cancel(b, a);
    delete this.B[(1).toString()]
  }
  ;
  function de(a) {
    Vd.call(this, a, {
      MSPointerDown: this.wj,
      MSPointerMove: this.xj,
      MSPointerUp: this.Aj,
      MSPointerOut: this.yj,
      MSPointerOver: this.zj,
      MSPointerCancel: this.vj,
      MSGotPointerCapture: this.tj,
      MSLostPointerCapture: this.uj
    });
    this.B = a.B;
    this.nh = ["", "unavailable", "touch", "pen", "mouse"]
  }
  K(de, Vd);
  function ee(a, b) {
    var c = b;
    H(b.s.pointerType) && (c = Zd(b, b.s),
    c.pointerType = a.nh[b.s.pointerType]);
    return c
  }
  k = de.prototype;
  k.wj = function(a) {
    this.B[a.s.pointerId.toString()] = a;
    var b = ee(this, a);
    this.c.fireEvent($d, b, a)
  }
  ;
  k.xj = function(a) {
    var b = ee(this, a);
    this.c.move(b, a)
  }
  ;
  k.Aj = function(a) {
    var b = ee(this, a);
    this.c.fireEvent(ae, b, a);
    delete this.B[a.s.pointerId.toString()]
  }
  ;
  k.yj = function(a) {
    var b = ee(this, a);
    ce(this.c, b, a)
  }
  ;
  k.zj = function(a) {
    var b = ee(this, a);
    be(this.c, b, a)
  }
  ;
  k.vj = function(a) {
    var b = ee(this, a);
    this.c.cancel(b, a);
    delete this.B[a.s.pointerId.toString()]
  }
  ;
  k.uj = function(a) {
    this.c.dispatchEvent(new Hd("lostpointercapture",a,a.s))
  }
  ;
  k.tj = function(a) {
    this.c.dispatchEvent(new Hd("gotpointercapture",a,a.s))
  }
  ;
  function fe(a) {
    Vd.call(this, a, {
      pointerdown: this.Mj,
      pointermove: this.Nj,
      pointerup: this.Qj,
      pointerout: this.Oj,
      pointerover: this.Pj,
      pointercancel: this.Lj,
      gotpointercapture: this.gi,
      lostpointercapture: this.hj
    })
  }
  K(fe, Vd);
  k = fe.prototype;
  k.Mj = function(a) {
    ge(this.c, a)
  }
  ;
  k.Nj = function(a) {
    ge(this.c, a)
  }
  ;
  k.Qj = function(a) {
    ge(this.c, a)
  }
  ;
  k.Oj = function(a) {
    ge(this.c, a)
  }
  ;
  k.Pj = function(a) {
    ge(this.c, a)
  }
  ;
  k.Lj = function(a) {
    ge(this.c, a)
  }
  ;
  k.hj = function(a) {
    ge(this.c, a)
  }
  ;
  k.gi = function(a) {
    ge(this.c, a)
  }
  ;
  function he(a, b) {
    Vd.call(this, a, {
      touchstart: this.qk,
      touchmove: this.pk,
      touchend: this.nk,
      touchcancel: this.mk
    });
    this.B = a.B;
    this.mj = b;
    this.Ac = void 0;
    this.ue = 0;
    this.Pc = void 0
  }
  K(he, Vd);
  k = he.prototype;
  k.Og = function() {
    this.ue = 0;
    this.Pc = void 0
  }
  ;
  function ie(a, b, c) {
    b = Zd(b, c);
    b.pointerId = c.identifier + 2;
    b.bubbles = !0;
    b.cancelable = !0;
    b.detail = a.ue;
    b.button = 0;
    b.buttons = 1;
    b.width = c.webkitRadiusX || c.radiusX || 0;
    b.height = c.webkitRadiusY || c.radiusY || 0;
    b.pressure = c.webkitForce || c.force || .5;
    b.isPrimary = a.Ac === c.identifier;
    b.pointerType = "touch";
    b.clientX = c.clientX;
    b.clientY = c.clientY;
    b.screenX = c.screenX;
    b.screenY = c.screenY;
    return b
  }
  function je(a, b, c) {
    function d() {
      b.preventDefault()
    }
    var e = Array.prototype.slice.call(b.s.changedTouches), f = e.length, g, h;
    for (g = 0; g < f; ++g)
      h = ie(a, b, e[g]),
      h.preventDefault = d,
      c.call(a, b, h)
  }
  k.qk = function(a) {
    var b = a.s.touches
      , c = eb(this.B)
      , d = c.length;
    if (d >= b.length) {
      var e = [], f, g, h;
      for (f = 0; f < d; ++f) {
        g = c[f];
        h = this.B[g];
        var l;
        if (!(l = 1 == g))
          a: {
            l = b.length;
            for (var m = void 0, n = 0; n < l; n++)
              if (m = b[n],
              m.identifier === g - 2) {
                l = !0;
                break a
              }
            l = !1
          }
        l || e.push(h.Gb)
      }
      for (f = 0; f < e.length; ++f)
        this.re(a, e[f])
    }
    b = cb(this.B);
    if (0 === b || 1 === b && fb(this.B, (1).toString()))
      this.Ac = a.s.changedTouches[0].identifier,
      void 0 !== this.Pc && u.clearTimeout(this.Pc);
    ke(this, a);
    this.ue++;
    je(this, a, this.Fj)
  }
  ;
  k.Fj = function(a, b) {
    this.B[b.pointerId] = {
      target: b.target,
      Gb: b,
      Ag: b.target
    };
    var c = this.c;
    b.bubbles = !0;
    c.fireEvent(le, b, a);
    c = this.c;
    b.bubbles = !1;
    c.fireEvent(me, b, a);
    this.c.fireEvent($d, b, a)
  }
  ;
  k.pk = function(a) {
    a.preventDefault();
    je(this, a, this.sj)
  }
  ;
  k.sj = function(a, b) {
    var c = this.B[b.pointerId];
    if (c) {
      var d = c.Gb
        , e = c.Ag;
      this.c.move(b, a);
      d && e !== b.target && (d.relatedTarget = b.target,
      b.relatedTarget = e,
      d.target = e,
      b.target ? (ce(this.c, d, a),
      be(this.c, b, a)) : (b.target = e,
      b.relatedTarget = null ,
      this.re(a, b)));
      c.Gb = b;
      c.Ag = b.target
    }
  }
  ;
  k.nk = function(a) {
    ke(this, a);
    je(this, a, this.rk)
  }
  ;
  k.rk = function(a, b) {
    this.c.fireEvent(ae, b, a);
    this.c.Gb(b, a);
    var c = this.c;
    b.bubbles = !1;
    c.fireEvent(ne, b, a);
    delete this.B[b.pointerId];
    b.isPrimary && (this.Ac = void 0,
    this.Pc = u.setTimeout(J(this.Og, this), 200))
  }
  ;
  k.mk = function(a) {
    je(this, a, this.re)
  }
  ;
  k.re = function(a, b) {
    this.c.cancel(b, a);
    this.c.Gb(b, a);
    var c = this.c;
    b.bubbles = !1;
    c.fireEvent(ne, b, a);
    delete this.B[b.pointerId];
    b.isPrimary && (this.Ac = void 0,
    this.Pc = u.setTimeout(J(this.Og, this), 200))
  }
  ;
  function ke(a, b) {
    var c = a.mj.pg
      , d = b.s.changedTouches[0];
    if (a.Ac === d.identifier) {
      var e = [d.clientX, d.clientY];
      c.push(e);
      u.setTimeout(function() {
        Ha(c, e)
      }, 2500)
    }
  }
  ;function oe(a) {
    W.call(this);
    this.D = a;
    this.B = {};
    this.Xf = {};
    this.zc = [];
    Td ? pe(this, new fe(this)) : Ud ? pe(this, new de(this)) : (a = new Wd(this),
    pe(this, a),
    Sd && pe(this, new he(this,a)));
    a = this.zc.length;
    for (var b, c = 0; c < a; c++)
      b = this.zc[c],
      qe(this, Object.keys(b.Jd))
  }
  K(oe, W);
  function pe(a, b) {
    var c = Object.keys(b.Jd);
    c && (c.forEach(function(a) {
      var c = b.Jd[a];
      c && (this.Xf[a] = J(c, b))
    }, a),
    a.zc.push(b))
  }
  k = oe.prototype;
  k.Wf = function(a) {
    var b = this.Xf[a.type];
    b && b(a)
  }
  ;
  function qe(a, b) {
    b.forEach(function(a) {
      U(this.D, a, this.Wf, !1, this)
    }, a)
  }
  function re(a, b) {
    b.forEach(function(a) {
      cc(this.D, a, this.Wf, !1, this)
    }, a)
  }
  function Zd(a, b) {
    for (var c = {}, d, e = 0, f = se.length; e < f; e++)
      d = se[e][0],
      c[d] = a[d] || b[d] || se[e][1];
    return c
  }
  k.move = function(a, b) {
    this.fireEvent(te, a, b)
  }
  ;
  k.Gb = function(a, b) {
    a.bubbles = !0;
    this.fireEvent(ue, a, b)
  }
  ;
  k.cancel = function(a, b) {
    this.fireEvent(ve, a, b)
  }
  ;
  function ce(a, b, c) {
    a.Gb(b, c);
    var d = b.relatedTarget;
    d && Kc(b.target, d) || (b.bubbles = !1,
    a.fireEvent(ne, b, c))
  }
  function be(a, b, c) {
    b.bubbles = !0;
    a.fireEvent(le, b, c);
    var d = b.relatedTarget;
    d && Kc(b.target, d) || (b.bubbles = !1,
    a.fireEvent(me, b, c))
  }
  k.fireEvent = function(a, b, c) {
    this.dispatchEvent(new Hd(a,c,b))
  }
  ;
  function ge(a, b) {
    a.dispatchEvent(new Hd(b.type,b,b.s))
  }
  k.f = function() {
    for (var a = this.zc.length, b, c = 0; c < a; c++)
      b = this.zc[c],
      re(this, Object.keys(b.Jd));
    oe.G.f.call(this)
  }
  ;
  var te = "pointermove"
    , $d = "pointerdown"
    , ae = "pointerup"
    , le = "pointerover"
    , ue = "pointerout"
    , me = "pointerenter"
    , ne = "pointerleave"
    , ve = "pointercancel"
    , se = [["bubbles", !1], ["cancelable", !1], ["view", null ], ["detail", null ], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null ], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null ], ["currentTarget", null ], ["which", 0]];
  function we(a, b, c, d, e) {
    Gd.call(this, a, b, e);
    this.U = c;
    this.originalEvent = c.s;
    c = b.H;
    a = fd(this.originalEvent);
    c = fd(c);
    a = new zc(a.x - c.x,a.y - c.y);
    this.pixel = [a.x, a.y];
    this.coordinate = b.Bc(this.pixel);
    this.dragging = void 0 !== d ? d : !1
  }
  K(we, Gd);
  we.prototype.preventDefault = function() {
    we.G.preventDefault.call(this);
    this.U.preventDefault()
  }
  ;
  we.prototype.stopPropagation = function() {
    we.G.stopPropagation.call(this);
    this.U.stopPropagation()
  }
  ;
  function xe(a, b, c, d, e) {
    we.call(this, a, b, c.U, d, e);
    this.Dg = c
  }
  K(xe, we);
  function ye(a) {
    W.call(this);
    this.a = a;
    this.vc = 0;
    this.dd = !1;
    this.eb = this.Qd = this.zb = null ;
    a = this.a.H;
    this.If = 0;
    this.yf = {};
    this.ic = new oe(a);
    this.cb = null ;
    this.Qd = U(this.ic, $d, this.Ai, !1, this);
    this.lf = U(this.ic, te, this.Uj, !1, this)
  }
  K(ye, W);
  function ze(a, b) {
    var c;
    c = new xe(Ae,a.a,b);
    a.dispatchEvent(c);
    0 !== a.vc ? (u.clearTimeout(a.vc),
    a.vc = 0,
    c = new xe(Be,a.a,b),
    a.dispatchEvent(c)) : a.vc = u.setTimeout(J(function() {
      this.vc = 0;
      var a = new xe(Ce,this.a,b);
      this.dispatchEvent(a)
    }, a), 250)
  }
  function De(a, b) {
    b.type == Ee || b.type == Fe ? delete a.yf[b.pointerId] : b.type == Ge && (a.yf[b.pointerId] = !0);
    a.If = cb(a.yf)
  }
  k = ye.prototype;
  k.eg = function(a) {
    De(this, a);
    var b = new xe(Ee,this.a,a);
    this.dispatchEvent(b);
    !this.dd && 0 === a.button && ze(this, this.eb);
    0 === this.If && (this.zb.forEach(V),
    this.zb = null ,
    this.dd = !1,
    this.eb = null ,
    Wa(this.cb),
    this.cb = null )
  }
  ;
  k.Ai = function(a) {
    De(this, a);
    var b = new xe(Ge,this.a,a);
    this.dispatchEvent(b);
    this.eb = a;
    this.zb || (this.cb = new oe(document),
    this.zb = [U(this.cb, He, this.Bi, !1, this), U(this.cb, Ee, this.eg, !1, this), U(this.ic, Fe, this.eg, !1, this)])
  }
  ;
  k.Bi = function(a) {
    if (a.clientX != this.eb.clientX || a.clientY != this.eb.clientY) {
      this.dd = !0;
      var b = new xe(Ie,this.a,a,this.dd);
      this.dispatchEvent(b)
    }
    a.preventDefault()
  }
  ;
  k.Uj = function(a) {
    this.dispatchEvent(new xe(a.type,this.a,a,!(!this.eb || a.clientX == this.eb.clientX && a.clientY == this.eb.clientY)))
  }
  ;
  k.f = function() {
    this.lf && (V(this.lf),
    this.lf = null );
    this.Qd && (V(this.Qd),
    this.Qd = null );
    this.zb && (this.zb.forEach(V),
    this.zb = null );
    this.cb && (Wa(this.cb),
    this.cb = null );
    this.ic && (Wa(this.ic),
    this.ic = null );
    ye.G.f.call(this)
  }
  ;
  var Ce = "singleclick"
    , Ae = "click"
    , Be = "dblclick"
    , Ie = "pointerdrag"
    , He = "pointermove"
    , Ge = "pointerdown"
    , Ee = "pointerup"
    , Fe = "pointercancel"
    , Je = {
    Ok: Ce,
    Ck: Ae,
    Dk: Be,
    Hk: Ie,
    Kk: He,
    Gk: Ge,
    Nk: Ee,
    Mk: "pointerover",
    Lk: "pointerout",
    Ik: "pointerenter",
    Jk: "pointerleave",
    Fk: Fe
  };
  function Ke(a, b) {
    if (da(a))
      return a;
    void 0 === b ? b = [a, a] : (b[0] = a,
    b[1] = a);
    return b
  }
  ;function Le(a) {
    for (var b = Me(), c = 0, d = a.length; c < d; ++c)
      Ne(b, a[c]);
    return b
  }
  function Me() {
    return [Infinity, Infinity, -Infinity, -Infinity]
  }
  function Oe(a, b, c, d, e) {
    return e ? (e[0] = a,
    e[1] = b,
    e[2] = c,
    e[3] = d,
    e) : [a, b, c, d]
  }
  function Pe(a, b, c, d) {
    d = Oe(Infinity, Infinity, -Infinity, -Infinity, d);
    for (var e = 0; e < b; e += c) {
      var f = d
        , g = a[e]
        , h = a[e + 1];
      f[0] = Math.min(f[0], g);
      f[1] = Math.min(f[1], h);
      f[2] = Math.max(f[2], g);
      f[3] = Math.max(f[3], h)
    }
    return d
  }
  function Ne(a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[0] > a[2] && (a[2] = b[0]);
    b[1] < a[1] && (a[1] = b[1]);
    b[1] > a[3] && (a[3] = b[1])
  }
  function Qe(a) {
    var b = 0;
    a[2] < a[0] || a[3] < a[1] || (b = Re(a) * Se(a));
    return b
  }
  function Te(a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
  }
  function Ue(a, b, c, d) {
    var e = b * d[0] / 2
      , f = b * d[1] / 2;
    b = Math.cos(c);
    d = Math.sin(c);
    e = [-e, -e, e, e];
    c = [-f, f, -f, f];
    for (var g, h, f = 0; 4 > f; ++f)
      g = e[f],
      h = c[f],
      e[f] = a[0] + g * b - h * d,
      c[f] = a[1] + g * d + h * b;
    a = Math.min.apply(null , e);
    b = Math.min.apply(null , c);
    e = Math.max.apply(null , e);
    c = Math.max.apply(null , c);
    return Oe(a, b, e, c, void 0)
  }
  function Se(a) {
    return a[3] - a[1]
  }
  function Ve(a, b) {
    var c = Me();
    We(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0],
    c[1] = a[1] > b[1] ? a[1] : b[1],
    c[2] = a[2] < b[2] ? a[2] : b[2],
    c[3] = a[3] < b[3] ? a[3] : b[3]);
    return c
  }
  function Xe(a) {
    return [a[0], a[3]]
  }
  function Re(a) {
    return a[2] - a[0]
  }
  function We(a, b) {
    return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
  }
  ;function Ze(a, b, c) {
    return Math.min(Math.max(a, b), c)
  }
  var $e = "cosh"in Math ? Math.cosh : function(a) {
    a = Math.exp(a);
    return (a + 1 / a) / 2
  }
  ;
  function af(a, b, c) {
    return a + "/" + b + "/" + c
  }
  function bf(a) {
    return af(a[0], a[1], a[2])
  }
  ;function cf(a, b, c, d) {
    this.A = a;
    this.S = b;
    this.K = c;
    this.J = d
  }
  k = cf.prototype;
  k.contains = function(a) {
    return this.xc(a[1], a[2])
  }
  ;
  k.xc = function(a, b) {
    return this.A <= a && a <= this.S && this.K <= b && b <= this.J
  }
  ;
  k.extend = function(a) {
    a.A < this.A && (this.A = a.A);
    a.S > this.S && (this.S = a.S);
    a.K < this.K && (this.K = a.K);
    a.J > this.J && (this.J = a.J)
  }
  ;
  k.Tb = function() {
    return this.J - this.K + 1
  }
  ;
  k.Cb = function() {
    return [this.Vb(), this.Tb()]
  }
  ;
  k.Vb = function() {
    return this.S - this.A + 1
  }
  ;
  /*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
  function df(a) {
    this.kf = a
  }
  function ef(a, b) {
    var c = a[1] * Math.PI / 180
      , d = b[1] * Math.PI / 180
      , e = (d - c) / 2
      , f = (b[0] - a[0]) * Math.PI / 180 / 2
      , c = Math.sin(e) * Math.sin(e) + Math.sin(f) * Math.sin(f) * Math.cos(c) * Math.cos(d);
    return 2 * ff.kf * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
  }
  df.prototype.offset = function(a, b, c) {
    var d = a[1] * Math.PI / 180;
    b /= this.kf;
    var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
    return [180 * (a[0] * Math.PI / 180 + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
  }
  ;
  var ff = new df(6370997);
  var gf = {};
  gf.degrees = 2 * Math.PI * ff.kf / 360;
  gf.ft = .3048;
  gf.m = 1;
  gf["us-ft"] = 1200 / 3937;
  function hf(a) {
    this.wb = a.code;
    this.qb = a.units;
    this.N = void 0 !== a.extent ? a.extent : null ;
    this.od = void 0 !== a.global ? a.global : !1;
    this.qe = !(!this.od || !this.N);
    this.di = void 0 !== a.Ub ? a.Ub : this.ei;
    this.Vf = null
  }
  hf.prototype.j = function() {
    return this.N
  }
  ;
  hf.prototype.ei = function(a, b) {
    if ("degrees" == this.qb)
      return a;
    var c = jf(this, kf("EPSG:4326"))
      , d = [b[0] - a / 2, b[1], b[0] + a / 2, b[1], b[0], b[1] - a / 2, b[0], b[1] + a / 2]
      , d = c(d, d, 2)
      , c = (ef(d.slice(0, 2), d.slice(2, 4)) + ef(d.slice(4, 6), d.slice(6, 8))) / 2
      , d = gf[this.qb];
    void 0 !== d && (c /= d);
    return c
  }
  ;
  hf.prototype.Ub = function(a, b) {
    return this.di(a, b)
  }
  ;
  var lf = {}
    , mf = {};
  function nf(a) {
    of(a);
    a.forEach(function(b) {
      a.forEach(function(a) {
        b !== a && pf(b, a, qf)
      })
    })
  }
  function rf(a) {
    lf[a.wb] = a;
    pf(a, a, qf)
  }
  function of(a) {
    var b = [];
    a.forEach(function(a) {
      b.push(rf(a))
    })
  }
  function sf(a) {
    return a ? C(a) ? kf(a) : a : kf("EPSG:3857")
  }
  function pf(a, b, c) {
    a = a.wb;
    b = b.wb;
    fb(mf, a) || (mf[a] = {});
    mf[a][b] = c
  }
  function kf(a) {
    return a instanceof hf ? a : C(a) ? lf[a] : null
  }
  function tf(a, b) {
    return a === b ? !0 : a.wb === b.wb ? a.qb === b.qb : jf(a, b) === qf
  }
  function uf(a, b) {
    var c = kf(a)
      , d = kf(b);
    return jf(c, d)
  }
  function jf(a, b) {
    var c = a.wb, d = b.wb, e;
    fb(mf, c) && fb(mf[c], d) && (e = mf[c][d]);
    void 0 === e && (e = vf);
    return e
  }
  function vf(a, b) {
    if (void 0 !== b && a !== b) {
      for (var c = 0, d = a.length; c < d; ++c)
        b[c] = a[c];
      a = b
    }
    return a
  }
  function qf(a, b) {
    var c;
    if (void 0 !== b) {
      c = 0;
      for (var d = a.length; c < d; ++c)
        b[c] = a[c];
      c = b
    } else
      c = a.slice();
    return c
  }
  ;function wf(a) {
    X.call(this);
    this.Wa = kf(a.projection);
    this.Dh = void 0 !== a.Pa ? a.Pa : null ;
    this.fj = a.ta;
    this.dk = void 0 !== a.state ? a.state : "ready";
    this.xk = void 0 !== a.Mb ? a.Mb : !1
  }
  K(wf, X);
  wf.prototype.I = function() {
    return this.dk
  }
  ;
  function xf(a) {
    X.call(this);
    var b = jb(a);
    b.opacity = void 0 !== a.opacity ? a.opacity : 1;
    b.visible = void 0 !== a.visible ? a.visible : !0;
    b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
    b.maxResolution = void 0 !== a.Ua ? a.Ua : Infinity;
    b.minResolution = void 0 !== a.Ja ? a.Ja : 0;
    this.Rc(b)
  }
  K(xf, X);
  function yf(a) {
    var b = a.get("opacity")
      , c = a.ag()
      , d = a.get("visible")
      , e = a.j()
      , f = a.get("zIndex")
      , g = a.get("maxResolution")
      , h = a.get("minResolution");
    return {
      Cd: a,
      opacity: Ze(b, 0, 1),
      Tg: c,
      visible: d,
      ij: !0,
      extent: e,
      zIndex: f,
      Ua: g,
      Ja: Math.max(h, 0)
    }
  }
  xf.prototype.j = function() {
    return this.get("extent")
  }
  ;
  function zf(a, b, c, d, e, f) {
    S.call(this, a, b);
    this.vectorContext = c;
    this.frameState = d;
    this.context = e;
    this.glContext = f
  }
  K(zf, S);
  function Af(a) {
    var b = jb(a);
    delete b.source;
    xf.call(this, b);
    this.Wd = this.bf = this.af = null ;
    a.map && this.setMap(a.map);
    U(this, yd("source"), this.Hi, !1, this);
    this.set("source", a.source ? a.source : null )
  }
  K(Af, xf);
  k = Af.prototype;
  k.Je = function(a) {
    a = a ? a : [];
    a.push(yf(this));
    return a
  }
  ;
  function Bf(a) {
    return a.get("source") || null
  }
  k.ag = function() {
    var a = Bf(this);
    return a ? a.I() : "undefined"
  }
  ;
  k.Gi = function() {
    this.F()
  }
  ;
  k.Hi = function() {
    this.Wd && (V(this.Wd),
    this.Wd = null );
    var a = Bf(this);
    a && (this.Wd = U(a, "change", this.Gi, !1, this));
    this.F()
  }
  ;
  k.setMap = function(a) {
    V(this.af);
    this.af = null ;
    a || this.F();
    V(this.bf);
    this.bf = null ;
    a && (this.af = U(a, "precompose", function(a) {
      var c = yf(this);
      c.ij = !1;
      c.zIndex = Infinity;
      a.frameState.Fd.push(c);
      a.frameState.Ed[I(this)] = c
    }, !1, this),
    this.bf = U(this, "change", a.render, !1, a),
    this.F())
  }
  ;
  function Cf(a, b) {
    W.call(this);
    this.l = a;
    this.state = b
  }
  K(Cf, W);
  Cf.prototype.F = function() {
    this.dispatchEvent("change")
  }
  ;
  Cf.prototype.getKey = function() {
    return I(this).toString()
  }
  ;
  Cf.prototype.I = function() {
    return this.state
  }
  ;
  function Df() {
    this.g = 0;
    this.yc = {};
    this.oa = this.va = null
  }
  k = Df.prototype;
  k.clear = function() {
    this.g = 0;
    this.yc = {};
    this.oa = this.va = null
  }
  ;
  k.Ca = function(a) {
    return this.yc.hasOwnProperty(a)
  }
  ;
  k.forEach = function(a, b) {
    for (var c = this.va; c; )
      a.call(b, c.qc, c.Ue, this),
      c = c.ua
  }
  ;
  k.get = function(a) {
    a = this.yc[a];
    if (a === this.oa)
      return a.qc;
    a === this.va ? (this.va = this.va.ua,
    this.va.lb = null ) : (a.ua.lb = a.lb,
    a.lb.ua = a.ua);
    a.ua = null ;
    a.lb = this.oa;
    this.oa = this.oa.ua = a;
    return a.qc
  }
  ;
  k.Cc = function() {
    return this.g
  }
  ;
  k.ra = function() {
    var a = Array(this.g), b = 0, c;
    for (c = this.oa; c; c = c.lb)
      a[b++] = c.Ue;
    return a
  }
  ;
  k.ma = function() {
    var a = Array(this.g), b = 0, c;
    for (c = this.oa; c; c = c.lb)
      a[b++] = c.qc;
    return a
  }
  ;
  k.pop = function() {
    var a = this.va;
    delete this.yc[a.Ue];
    a.ua && (a.ua.lb = null );
    this.va = a.ua;
    this.va || (this.oa = null );
    --this.g;
    return a.qc
  }
  ;
  k.set = function(a, b) {
    var c = {
      Ue: a,
      ua: null ,
      lb: this.oa,
      qc: b
    };
    this.oa ? this.oa.ua = c : this.va = c;
    this.oa = c;
    this.yc[a] = c;
    ++this.g
  }
  ;
  function Ef(a) {
    Df.call(this);
    this.Pi = void 0 !== a ? a : 2048
  }
  K(Ef, Df);
  Ef.prototype.vb = function() {
    return this.Cc() > this.Pi
  }
  ;
  Ef.prototype.Rb = function(a) {
    for (var b, c; this.vb() && !(b = this.va.qc,
    c = b.l[0].toString(),
    c in a && a[c].contains(b.l)); )
      this.pop().Ee()
  }
  ;
  function Ff(a, b, c) {
    var d = a.length;
    if (a[0] <= b)
      return 0;
    if (!(b <= a[d - 1]))
      if (0 < c)
        for (c = 1; c < d; ++c) {
          if (a[c] < b)
            return c - 1
        }
      else if (0 > c)
        for (c = 1; c < d; ++c) {
          if (a[c] <= b)
            return c
        }
      else
        for (c = 1; c < d; ++c) {
          if (a[c] == b)
            return c;
          if (a[c] < b)
            return a[c - 1] - b < b - a[c] ? c - 1 : c
        }
    return d - 1
  }
  ;function Gf(a) {
    this.Va = void 0 !== a.Va ? a.Va : 0;
    this.Ud = a.Jb;
    this.kb = this.Ud.length - 1;
    this.hc = void 0 !== a.origin ? a.origin : null ;
    this.cf = null ;
    void 0 !== a.Ej && (this.cf = a.Ej);
    var b = a.extent;
    void 0 === b || this.hc || this.cf || (this.hc = Xe(b));
    this.wf = null ;
    void 0 !== a.lk && (this.wf = a.lk);
    this.$g = void 0 !== a.Vc ? a.Vc : this.wf ? null : 256;
    this.N = void 0 !== b ? b : null ;
    this.Sb = null ;
    void 0 !== a.sizes ? this.Sb = a.sizes.map(function(a) {
      return new cf(Math.min(0, a[0]),Math.max(a[0] - 1, -1),Math.min(0, a[1]),Math.max(a[1] - 1, -1))
    }, this) : b && Hf(this, b);
    this.Kb = [0, 0]
  }
  var If = [0, 0, 0];
  function Jf(a, b, c, d, e) {
    e = Kf(a, b, e);
    for (b = b[0] - 1; b >= a.Va; ) {
      if (c.call(null , b, Lf(a, e, b, d)))
        return !0;
      --b
    }
    return !1
  }
  Gf.prototype.j = function() {
    return this.N
  }
  ;
  Gf.prototype.Ec = function(a) {
    return this.hc ? this.hc : this.cf[a]
  }
  ;
  Gf.prototype.h = function(a) {
    return this.Ud[a]
  }
  ;
  function Mf(a, b, c, d) {
    return b[0] < a.kb ? (d = Kf(a, b, d),
    Lf(a, d, b[0] + 1, c)) : null
  }
  function Nf(a, b, c, d) {
    Of(a, b[0], b[1], c, !1, If);
    var e = If[1]
      , f = If[2];
    Of(a, b[2], b[3], c, !0, If);
    a = If[1];
    b = If[2];
    void 0 !== d ? (d.A = e,
    d.S = a,
    d.K = f,
    d.J = b) : d = new cf(e,a,f,b);
    return d
  }
  function Lf(a, b, c, d) {
    c = a.h(c);
    return Nf(a, b, c, d)
  }
  function Pf(a, b) {
    var c = a.Ec(b[0])
      , d = a.h(b[0])
      , e = Ke(Qf(a, b[0]), a.Kb);
    return [c[0] + (b[1] + .5) * e[0] * d, c[1] + (b[2] + .5) * e[1] * d]
  }
  function Kf(a, b, c) {
    var d = a.Ec(b[0])
      , e = a.h(b[0]);
    a = Ke(Qf(a, b[0]), a.Kb);
    var f = d[0] + b[1] * a[0] * e;
    b = d[1] + b[2] * a[1] * e;
    return Oe(f, b, f + a[0] * e, b + a[1] * e, c)
  }
  function Of(a, b, c, d, e, f) {
    var g = Rf(a, d)
      , h = d / a.h(g)
      , l = a.Ec(g);
    a = Ke(Qf(a, g), a.Kb);
    b = h * Math.floor((b - l[0]) / d + (e ? .5 : 0)) / a[0];
    c = h * Math.floor((c - l[1]) / d + (e ? 0 : .5)) / a[1];
    e ? (b = Math.ceil(b) - 1,
    c = Math.ceil(c) - 1) : (b = Math.floor(b),
    c = Math.floor(c));
    e = b;
    void 0 !== f ? (f[0] = g,
    f[1] = e,
    f[2] = c) : f = [g, e, c];
    return f
  }
  function Sf(a, b, c) {
    c = a.h(c);
    return Of(a, b[0], b[1], c, !1, void 0)
  }
  function Qf(a, b) {
    return a.$g ? a.$g : a.wf[b]
  }
  function Rf(a, b) {
    var c = Ff(a.Ud, b, 0);
    return Ze(c, a.Va, a.kb)
  }
  function Hf(a, b) {
    for (var c = a.Ud.length, d = Array(c), e = a.Va; e < c; ++e)
      d[e] = Lf(a, b, e);
    a.Sb = d
  }
  function Tf(a) {
    var b = a.Vf;
    if (!b) {
      for (var b = Uf(a), c = Se(b), d = Re(b), e = Ke(256), c = Math.max(d / e[0], c / e[1]), d = Array(43), e = 0; 43 > e; ++e)
        d[e] = c / Math.pow(2, e);
      b = new Gf({
        extent: b,
        origin: Xe(b),
        Jb: d,
        Vc: void 0
      });
      a.Vf = b
    }
    return b
  }
  function Uf(a) {
    a = kf(a);
    var b = a.j();
    b || (a = 180 * gf.degrees / gf[a.qb],
    b = Oe(-a, -a, a, a));
    return b
  }
  ;function Vf(a) {
    wf.call(this, {
      Pa: a.Pa,
      extent: a.extent,
      ta: a.ta,
      projection: a.projection,
      state: a.state,
      Mb: a.Mb
    });
    this.Dj = void 0 !== a.Jc ? a.Jc : !1;
    this.Yg = void 0 !== a.pc ? a.pc : 1;
    this.ga = void 0 !== a.ga ? a.ga : null ;
    this.fa = new Ef(a.Lf);
    this.dh = [0, 0]
  }
  K(Vf, wf);
  k = Vf.prototype;
  k.vb = function() {
    return this.fa.vb()
  }
  ;
  k.Rb = function(a, b) {
    var c = this.Fc(a);
    c && c.Rb(b)
  }
  ;
  function Wf(a, b, c, d, e) {
    b = a.Fc(b);
    if (!b)
      return !1;
    for (var f = !0, g, h, l = d.A; l <= d.S; ++l)
      for (var m = d.K; m <= d.J; ++m)
        g = a.jd(c, l, m),
        h = !1,
        b.Ca(g) && (g = b.get(g),
        (h = 2 === g.I()) && (h = !1 !== e(g))),
        h || (f = !1);
    return f
  }
  k.jd = af;
  k.gb = function(a) {
    return this.ga ? this.ga : Tf(a)
  }
  ;
  k.Fc = function(a) {
    var b = this.Wa;
    return b && !tf(b, a) ? null : this.fa
  }
  ;
  function Xf(a, b, c) {
    c = a.gb(c);
    b = Ke(Qf(c, b), a.dh);
    c = a.Yg;
    a = a.dh;
    void 0 === a && (a = [0, 0]);
    a[0] = b[0] * c + .5 | 0;
    a[1] = b[1] * c + .5 | 0;
    return a
  }
  k.hh = Dd;
  function Yf(a, b) {
    S.call(this, a);
    this.tile = b
  }
  K(Yf, S);
  function Zf(a, b, c, d, e, f, g, h) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    0 === b && 0 === c || td(a, b, c);
    1 == d && 1 == e || rd(a, a[0] * d, a[1] * d, a[2] * d, a[3] * d, a[4] * e, a[5] * e, a[6] * e, a[7] * e, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15]);
    if (0 !== f) {
      b = a[0];
      c = a[1];
      d = a[2];
      e = a[3];
      var l = a[4]
        , m = a[5]
        , n = a[6]
        , p = a[7]
        , r = Math.cos(f);
      f = Math.sin(f);
      a[0] = b * r + l * f;
      a[1] = c * r + m * f;
      a[2] = d * r + n * f;
      a[3] = e * r + p * f;
      a[4] = b * -f + l * r;
      a[5] = c * -f + m * r;
      a[6] = d * -f + n * r;
      a[7] = e * -f + p * r
    }
    0 === g && 0 === h || td(a, g, h);
    return a
  }
  function $f(a, b, c) {
    var d = a[1]
      , e = a[5]
      , f = a[13]
      , g = b[0];
    b = b[1];
    c[0] = a[0] * g + a[4] * b + a[12];
    c[1] = d * g + e * b + f;
    return c
  }
  ;function ag(a) {
    ud.call(this);
    this.Ye = a
  }
  K(ag, ud);
  function bg(a, b, c) {
    return function(d, e) {
      return Wf(a, b, d, e, function(a) {
        c[d] || (c[d] = {});
        c[d][a.l.toString()] = a
      })
    }
  }
  function cg(a, b) {
    b.vb() && a.Mc.push(la(function(a, b, e) {
      b = I(a).toString();
      a.Rb(e.i.projection, e.fe[b])
    }, b))
  }
  function dg(a, b) {
    var c = b.fj;
    void 0 !== c && (C(c) ? a.gc[c] = "" : ga(c) && (a.gc[c.src] = c.href))
  }
  function eg(a, b, c, d) {
    b = I(b).toString();
    c = c.toString();
    b in a ? c in a[b] ? a[b][c].extend(d) : a[b][c] = d : (a[b] = {},
    a[b][c] = d)
  }
  function fg(a, b, c) {
    return [b * (Math.round(a[0] / b) + c[0] % 2 / 2), b * (Math.round(a[1] / b) + c[1] % 2 / 2)]
  }
  function gg(a, b, c, d, e, f, g, h) {
    var l = I(b).toString();
    l in a.sc || (a.sc[l] = {});
    var m = a.sc[l];
    a = a.kk;
    var n = c.Va, p, r, t, v, z, q;
    for (q = g; q >= n; --q)
      for (r = Lf(c, f, q, r),
      t = c.h(q),
      v = r.A; v <= r.S; ++v)
        for (z = r.K; z <= r.J; ++z)
          g - q <= h ? (p = hg(b, q, v, z, d, e),
          0 == p.I() && (m[bf(p.l)] = !0,
          p.getKey()in a.Nc || a.enqueue([p, l, Pf(c, p.l), t]))) : b.hh(q, v, z, e)
  }
  ;function ig() {
    this.ub = {};
    this.$c = 0;
    this.kj = 32
  }
  ig.ci = function() {
    return ig.mg ? ig.mg : ig.mg = new ig
  }
  ;
  ig.prototype.clear = function() {
    this.ub = {};
    this.$c = 0
  }
  ;
  ig.prototype.get = function(a, b) {
    var c = b + ":" + a;
    return c in this.ub ? this.ub[c] : null
  }
  ;
  ig.prototype.set = function(a, b, c) {
    this.ub[b + ":" + a] = c;
    ++this.$c
  }
  ;
  function jg(a, b) {
    Sa.call(this);
    this.a = b;
    this.Ia = {};
    this.Xe = {}
  }
  K(jg, Sa);
  function kg(a) {
    var b = a.i
      , c = a.Ob;
    Zf(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
    a = a.Cg;
    var b = c[0]
      , d = c[1]
      , e = c[2]
      , f = c[3]
      , g = c[4]
      , h = c[5]
      , l = c[6]
      , m = c[7]
      , n = c[8]
      , p = c[9]
      , r = c[10]
      , t = c[11]
      , v = c[12]
      , z = c[13]
      , q = c[14]
      , c = c[15]
      , w = b * h - d * g
      , B = b * l - e * g
      , D = b * m - f * g
      , E = d * l - e * h
      , A = d * m - f * h
      , G = e * m - f * l
      , T = n * z - p * v
      , O = n * q - r * v
      , Q = n * c - t * v
      , F = p * q - r * z
      , y = p * c - t * z
      , L = r * c - t * q
      , P = w * L - B * y + D * F + E * Q - A * O + G * T;
    0 != P && (P = 1 / P,
    a[0] = (h * L - l * y + m * F) * P,
    a[1] = (-d * L + e * y - f * F) * P,
    a[2] = (z * G - q * A + c * E) * P,
    a[3] = (-p * G + r * A - t * E) * P,
    a[4] = (-g * L + l * Q - m * O) * P,
    a[5] = (b * L - e * Q + f * O) * P,
    a[6] = (-v * G + q * D - c * B) * P,
    a[7] = (n * G - r * D + t * B) * P,
    a[8] = (g * y - h * Q + m * T) * P,
    a[9] = (-b * y + d * Q - f * T) * P,
    a[10] = (v * A - z * D + c * w) * P,
    a[11] = (-n * A + p * D - t * w) * P,
    a[12] = (-g * F + h * O - l * T) * P,
    a[13] = (b * F - d * O + e * T) * P,
    a[14] = (-v * E + z * B - q * w) * P,
    a[15] = (n * E - p * B + r * w) * P)
  }
  k = jg.prototype;
  k.f = function() {
    ab(this.Ia, Wa);
    jg.G.f.call(this)
  }
  ;
  function lg() {
    var a = ig.ci();
    if (a.$c > a.kj) {
      var b = 0, c, d;
      for (c in a.ub) {
        d = a.ub[c];
        var e;
        if (e = 0 === (b++ & 3))
          Lb(d) ? d = d.hasListener(void 0, void 0) : (d = Yb(d),
          d = !!d && d.hasListener(void 0, void 0)),
          e = !d;
        e && (delete a.ub[c],
        --a.$c)
      }
    }
  }
  function mg(a, b) {
    var c = I(b).toString();
    if (c in a.Ia)
      return a.Ia[c];
    var d = a.Tf(b);
    a.Ia[c] = d;
    a.Xe[c] = U(d, "change", a.ti, !1, a);
    return d
  }
  k.ld = function() {
    return this.a
  }
  ;
  k.ti = function() {
    this.a.render()
  }
  ;
  k.mf = Dd;
  k.Vj = function(a, b) {
    for (var c in this.Ia)
      if (!(b && c in b.Ed)) {
        var d = c
          , e = this.Ia[d];
        delete this.Ia[d];
        V(this.Xe[d]);
        delete this.Xe[d];
        Wa(e)
      }
  }
  ;
  function ng(a, b) {
    for (var c in a.Ia)
      if (!(c in b.Ed)) {
        b.Mc.push(J(a.Vj, a));
        break
      }
  }
  function Pa(a, b) {
    return a.zIndex - b.zIndex
  }
  ;function og(a, b) {
    this.Hg = a;
    this.Te = b;
    this.Da = [];
    this.kc = [];
    this.Nc = {}
  }
  og.prototype.clear = function() {
    this.Da.length = 0;
    this.kc.length = 0;
    ib(this.Nc)
  }
  ;
  og.prototype.enqueue = function(a) {
    var b = this.Hg(a);
    Infinity != b && (this.Da.push(a),
    this.kc.push(b),
    this.Nc[this.Te(a)] = !0,
    pg(this, 0, this.Da.length - 1))
  }
  ;
  og.prototype.Cc = function() {
    return this.Da.length
  }
  ;
  og.prototype.wd = function() {
    return 0 === this.Da.length
  }
  ;
  function qg(a, b) {
    for (var c = a.Da, d = a.kc, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1; ) {
      var l = 2 * b + 1
        , m = 2 * b + 2
        , l = m < e && d[m] < d[l] ? m : l;
      c[b] = c[l];
      d[b] = d[l];
      b = l
    }
    c[b] = f;
    d[b] = g;
    pg(a, h, b)
  }
  function pg(a, b, c) {
    var d = a.Da;
    a = a.kc;
    for (var e = d[c], f = a[c]; c > b; ) {
      var g = c - 1 >> 1;
      if (a[g] > f)
        d[c] = d[g],
        a[c] = a[g],
        c = g;
      else
        break
    }
    d[c] = e;
    a[c] = f
  }
  ;function rg(a, b) {
    og.call(this, function(b) {
      return a.apply(null , b)
    }, function(a) {
      return a[0].getKey()
    });
    this.ik = b;
    this.ce = 0
  }
  K(rg, og);
  rg.prototype.qd = function(a) {
    a = a.target;
    var b = a.I();
    if (2 === b || 3 === b || 4 === b)
      cc(a, "change", this.qd, !1, this),
      --this.ce,
      this.ik()
  }
  ;
  function sg(a) {
    return function(b) {
      if (b)
        return [Ze(b[0], a[0], a[2]), Ze(b[1], a[1], a[3])]
    }
  }
  function tg(a) {
    return a
  }
  ;function ug(a) {
    return function(b, c, d) {
      if (void 0 !== b)
        return b = Ff(a, b, d),
        b = Ze(b + c, 0, a.length - 1),
        a[b]
    }
  }
  function vg(a, b, c) {
    return function(d, e, f) {
      if (void 0 !== d)
        return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (0 < f ? 0 : 0 > f ? 1 : .5)) + e, 0),
        void 0 !== c && (d = Math.min(d, c)),
        b / Math.pow(a, d)
    }
  }
  ;function wg(a) {
    if (void 0 !== a)
      return 0
  }
  function xg(a, b) {
    if (void 0 !== a)
      return a + b
  }
  function yg(a) {
    var b = 2 * Math.PI / a;
    return function(a, d) {
      if (void 0 !== a)
        return a = Math.floor((a + d) / b + .5) * b
    }
  }
  function zg() {
    var a = 5 * Math.PI / 180;
    return function(b, c) {
      if (void 0 !== b)
        return Math.abs(b + c) <= a ? 0 : b + c
    }
  }
  ;function Ag(a, b, c) {
    this.center = a;
    this.resolution = b;
    this.rotation = c
  }
  ;function Bg() {
    X.call(this);
    this.N = Me();
    this.Yf = -1
  }
  K(Bg, X);
  Bg.prototype.xc = hc;
  Bg.prototype.j = function(a) {
    this.Yf != this.Ya && (this.N = Pe(this.$, this.$.length, this.xa, this.N),
    this.Yf = this.Ya);
    var b = this.N;
    a ? (a[0] = b[0],
    a[1] = b[1],
    a[2] = b[2],
    a[3] = b[3]) : a = b;
    return a
  }
  ;
  Bg.prototype.transform = function(a, b) {
    var c = uf(a, b);
    this.$ && (c(this.$, this.$, this.xa),
    this.F());
    return this
  }
  ;
  function Cg(a, b, c, d, e, f) {
    var g = e[0]
      , h = e[1]
      , l = e[4]
      , m = e[5]
      , n = e[12];
    e = e[13];
    for (var p = f ? f : [], r = 0; b < c; b += d) {
      var t = a[b]
        , v = a[b + 1];
      p[r++] = g * t + l * v + n;
      p[r++] = h * t + m * v + e
    }
    f && p.length != r && (p.length = r);
    return p
  }
  ;function Dg() {
    Bg.call(this);
    this.Gd = "XY";
    this.xa = 2;
    this.$ = null
  }
  K(Dg, Bg);
  function Eg(a) {
    if ("XY" == a)
      return 2;
    if ("XYZ" == a || "XYM" == a)
      return 3;
    if ("XYZM" == a)
      return 4
  }
  Dg.prototype.xc = hc;
  Dg.prototype.fb = function() {
    return this.$
  }
  ;
  Dg.prototype.Ga = function() {
    return this.xa
  }
  ;
  Dg.prototype.translate = function(a, b) {
    var c = this.fb();
    if (c) {
      var d = this.Ga(), e = c.length, f = c ? c : [], g = 0, h, l;
      for (h = 0; h < e; h += d)
        for (f[g++] = c[h] + a,
        f[g++] = c[h + 1] + b,
        l = h + 2; l < h + d; ++l)
          f[g++] = c[l];
      c && f.length != g && (f.length = g);
      this.F()
    }
  }
  ;
  function Fg(a, b, c, d, e, f) {
    for (var g = !1, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
      var m = a[b]
        , n = a[b + 1];
      l > f != n > f && e < (m - h) * (f - l) / (n - l) + h && (g = !g);
      h = m;
      l = n
    }
    return g
  }
  function Gg(a, b, c, d, e) {
    if (0 === b.length || !Fg(a, 0, b[0], c, d, e))
      return !1;
    var f, g;
    f = 1;
    for (g = b.length; f < g; ++f)
      if (Fg(a, b[f - 1], b[f], c, d, e))
        return !1;
    return !0
  }
  ;function Hg(a, b, c, d) {
    for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d)
      var h = a[b]
        , l = a[b + 1]
        , e = e + (h - f) * (l + g)
        , f = h
        , g = l;
    return 0 < e
  }
  ;function Ig(a, b) {
    Dg.call(this);
    this.qa = [];
    this.Zf = -1;
    this.$f = null ;
    this.zg = -1;
    this.Kc = null ;
    Jg(this, a, b)
  }
  K(Ig, Dg);
  Ig.prototype.clone = function() {
    var a = new Ig(null );
    Kg(a, this.Gd, this.$.slice(), this.qa.slice());
    return a
  }
  ;
  Ig.prototype.xc = function(a, b) {
    return Gg(this.Dc(), this.qa, this.xa, a, b)
  }
  ;
  Ig.prototype.Dc = function() {
    if (this.zg != this.Ya) {
      var a = this.$, b;
      a: {
        b = this.qa;
        var c = 0, d, e;
        d = 0;
        for (e = b.length; d < e; ++d) {
          var f = b[d]
            , c = Hg(a, c, f, this.xa);
          if (0 === d) {
            if (!c) {
              b = !1;
              break a
            }
          } else if (c) {
            b = !1;
            break a
          }
          c = f
        }
        b = !0
      }
      if (b)
        this.Kc = a;
      else {
        b = a = this.Kc = a.slice();
        d = this.qa;
        e = this.xa;
        for (var g = 0, f = 0, c = d.length; f < c; ++f) {
          var h = d[f]
            , l = Hg(b, g, h, e);
          if (0 === f ? !l : l)
            for (var l = b, m = h, n = e; g < m - n; ) {
              var p;
              for (p = 0; p < n; ++p) {
                var r = l[g + p];
                l[g + p] = l[m - n + p];
                l[m - n + p] = r
              }
              g += n;
              m -= n
            }
          g = h
        }
        a.length = g
      }
      this.zg = this.Ya
    }
    return this.Kc
  }
  ;
  Ig.prototype.nd = function() {
    return "Polygon"
  }
  ;
  function Jg(a, b, c) {
    if (b) {
      a: {
        var d = b;
        if (c)
          d = Eg(c);
        else {
          for (c = 0; 2 > c; ++c) {
            if (0 === d.length) {
              a.Gd = "XY";
              a.xa = 2;
              break a
            }
            d = d[0]
          }
          d = d.length;
          c = 2 == d ? "XY" : 3 == d ? "XYZ" : 4 == d ? "XYZM" : void 0
        }
        a.Gd = c;
        a.xa = d
      }
      a.$ || (a.$ = []);
      c = a.$;
      var d = a.xa, e = a.qa, f = 0, e = e ? e : [], g = 0, h, l;
      h = 0;
      for (l = b.length; h < l; ++h) {
        var m;
        m = c;
        for (var n = b[h], p = d, r = void 0, t = void 0, r = 0, t = n.length; r < t; ++r) {
          var v = n[r], z;
          for (z = 0; z < p; ++z)
            m[f++] = v[z]
        }
        m = f;
        f = e[g++] = m
      }
      e.length = g;
      a.$.length = 0 === e.length ? 0 : e[e.length - 1];
      a.F()
    } else
      Kg(a, "XY", null , a.qa)
  }
  function Kg(a, b, c, d) {
    a.xa = Eg(b);
    a.Gd = b;
    a.$ = c;
    a.qa = d;
    a.F()
  }
  ;function Lg(a) {
    X.call(this);
    a = a || {};
    this.Me = [0, 0];
    var b = {};
    b.center = void 0 !== a.center ? a.center : null ;
    this.Wa = sf(a.projection);
    var c, d, e, f = void 0 !== a.Va ? a.Va : 0;
    c = void 0 !== a.kb ? a.kb : 28;
    var g = void 0 !== a.mh ? a.mh : 2;
    if (void 0 !== a.Jb)
      c = a.Jb,
      d = c[0],
      e = c[c.length - 1],
      c = ug(c);
    else {
      d = sf(a.projection);
      e = d.j();
      var h = (e ? Math.max(Re(e), Se(e)) : 360 * gf.degrees / gf[d.qb]) / 256 / Math.pow(2, 0)
        , l = h / Math.pow(2, 28);
      d = a.Ua;
      void 0 !== d ? f = 0 : d = h / Math.pow(g, f);
      e = a.Ja;
      void 0 === e && (e = void 0 !== a.kb ? void 0 !== a.Ua ? d / Math.pow(g, c) : h / Math.pow(g, c) : l);
      c = f + Math.floor(Math.log(d / e) / Math.log(g));
      e = d / Math.pow(g, c - f);
      c = vg(g, d, c - f)
    }
    this.Kd = d;
    this.lj = e;
    this.Md = f;
    f = void 0 !== a.extent ? sg(a.extent) : tg;
    (void 0 !== a.Wh ? a.Wh : 1) ? (d = a.ze,
    d = void 0 === d || !0 === d ? zg() : !1 === d ? xg : H(d) ? yg(d) : xg) : d = wg;
    this.wc = new Ag(f,c,d);
    void 0 !== a.resolution ? b.resolution = a.resolution : void 0 !== a.zoom && (b.resolution = this.Y(this.Kd, a.zoom - this.Md));
    b.rotation = void 0 !== a.rotation ? a.rotation : 0;
    this.Rc(b)
  }
  K(Lg, X);
  function Mg(a, b, c) {
    var d, e = Ng(a);
    a = a.h();
    void 0 !== e && void 0 !== a && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]);
    return d
  }
  k = Lg.prototype;
  k.Y = function(a, b, c) {
    return this.wc.resolution(a, b || 0, c || 0)
  }
  ;
  k.ze = function(a, b) {
    return this.wc.rotation(a, b || 0)
  }
  ;
  function Ng(a) {
    return a.get("center")
  }
  k.h = function() {
    return this.get("resolution")
  }
  ;
  function Og(a) {
    return a.get("rotation")
  }
  k.I = function() {
    var a = Ng(this)
      , b = this.Wa
      , c = this.h()
      , d = Og(this);
    return {
      center: [Math.round(a[0] / c) * c, Math.round(a[1] / c) * c],
      projection: void 0 !== b ? b : null ,
      resolution: c,
      rotation: d
    }
  }
  ;
  function Pg(a, b, c) {
    if (!(b instanceof Dg)) {
      var d = b[0]
        , e = b[1]
        , f = b[2]
        , g = b[3]
        , d = [d, e, d, g, f, g, f, e, d, e]
        , e = new Ig(null );
      Kg(e, "XY", d, [d.length]);
      b = e
    }
    var e = {}, d = void 0 !== e.padding ? e.padding : [0, 0, 0, 0], h = void 0 !== e.Y ? e.Y : !0, f = void 0 !== e.Bj ? e.Bj : !1, l;
    l = void 0 !== e.Ja ? e.Ja : void 0 !== e.kb ? a.Y(a.Kd, e.kb - a.Md, 0) : 0;
    var m = b.fb()
      , g = Og(a)
      , e = Math.cos(-g)
      , g = Math.sin(-g)
      , n = Infinity
      , p = Infinity
      , r = -Infinity
      , t = -Infinity;
    b = b.Ga();
    for (var v = 0, z = m.length; v < z; v += b)
      var q = m[v] * e - m[v + 1] * g
        , w = m[v] * g + m[v + 1] * e
        , n = Math.min(n, q)
        , p = Math.min(p, w)
        , r = Math.max(r, q)
        , t = Math.max(t, w);
    m = [n, p, r, t];
    c = [c[0] - d[1] - d[3], c[1] - d[0] - d[2]];
    c = Math.max(Re(m) / c[0], Se(m) / c[1]);
    c = isNaN(c) ? l : Math.max(c, l);
    h && (h = a.Y(c, 0, 0),
    !f && h < c && (h = a.Y(h, -1, 0)),
    c = h);
    Qg(a, c);
    g = -g;
    f = (n + r) / 2 + (d[1] - d[3]) / 2 * c;
    c = (p + t) / 2 + (d[0] - d[2]) / 2 * c;
    Rg(a, [f * e - c * g, c * e + f * g])
  }
  k.Re = function() {
    return !!Ng(this) && void 0 !== this.h()
  }
  ;
  k.rotate = function(a, b) {
    if (void 0 !== b) {
      var c, d = Ng(this);
      void 0 !== d && (c = [d[0] - b[0], d[1] - b[1]],
      Fd(c, a - Og(this)),
      Ed(c, b));
      Rg(this, c)
    }
    this.set("rotation", a)
  }
  ;
  function Rg(a, b) {
    a.set("center", b)
  }
  function Sg(a, b) {
    a.Me[1] += b
  }
  function Qg(a, b) {
    a.set("resolution", b)
  }
  ;function Tg(a) {
    X.call(this);
    this.element = a.element ? a.element : null ;
    this.a = this.pf = null ;
    this.Hd = [];
    this.render = a.render ? a.render : Dd;
    a.target && this.Sg(a.target)
  }
  K(Tg, X);
  Tg.prototype.f = function() {
    Jc(this.element);
    Tg.G.f.call(this)
  }
  ;
  Tg.prototype.ld = function() {
    return this.a
  }
  ;
  Tg.prototype.setMap = function(a) {
    this.a && Jc(this.element);
    0 < this.Hd.length && (this.Hd.forEach(V),
    this.Hd.length = 0);
    if (this.a = a)
      (this.pf ? this.pf : a.df).appendChild(this.element),
      this.render !== Dd && this.Hd.push(U(a, "postrender", this.render, !1, this)),
      a.render()
  }
  ;
  Tg.prototype.Sg = function(a) {
    this.pf = Bc(a)
  }
  ;
  function Ug(a) {
    a = a ? a : {};
    this.ee = document.createElement("UL");
    this.Id = document.createElement("LI");
    this.ee.appendChild(this.Id);
    gd(this.Id, !1);
    this.Nb = void 0 !== a.collapsed ? a.collapsed : !0;
    this.cd = void 0 !== a.Ih ? a.Ih : !0;
    this.cd || (this.Nb = !1);
    var b = a.className ? a.className : "ol-attribution"
      , c = a.xf ? a.xf : "Attributions"
      , d = a.Hh ? a.Hh : "\u00bb";
    this.ve = C(d) ? Fc("SPAN", {}, d) : d;
    d = a.label ? a.label : "i";
    this.sa = C(d) ? Fc("SPAN", {}, d) : d;
    c = Fc("BUTTON", {
      type: "button",
      title: c
    }, this.cd && !this.Nb ? this.ve : this.sa);
    U(c, "click", this.Wb, !1, this);
    U(c, ["mouseout", Fb], function() {
      this.blur()
    }, !1);
    b = Fc("DIV", b + " ol-unselectable ol-control" + (this.Nb && this.cd ? " ol-collapsed" : "") + (this.cd ? "" : " ol-uncollapsible"), this.ee, c);
    Tg.call(this, {
      element: b,
      render: a.render ? a.render : Vg,
      target: a.target
    });
    this.L = !0;
    this.tb = {};
    this.ab = {};
    this.ej = {}
  }
  K(Ug, Tg);
  function Vg(a) {
    if (a = a.frameState) {
      var b, c, d, e, f, g, h, l, m, n, p = a.Fd, r = jb(a.Pa), t = {}, v = a.i.projection;
      c = 0;
      for (b = p.length; c < b; c++)
        if (g = Bf(p[c].Cd))
          if (n = I(g).toString(),
          m = g.Dh)
            for (d = 0,
            e = m.length; d < e; d++)
              if (h = m[d],
              l = I(h).toString(),
              !(l in r)) {
                if (f = a.fe[n]) {
                  var z = g.gb(v);
                  f = h.cl(f, z, v)
                } else
                  f = !1;
                f ? (l in t && delete t[l],
                r[l] = h) : t[l] = h
              }
      b = [r, t];
      c = b[0];
      b = b[1];
      for (var q in this.tb)
        q in c ? (this.ab[q] || (gd(this.tb[q], !0),
        this.ab[q] = !0),
        delete c[q]) : q in b ? (this.ab[q] && (gd(this.tb[q], !1),
        delete this.ab[q]),
        delete b[q]) : (Jc(this.tb[q]),
        delete this.tb[q],
        delete this.ab[q]);
      for (q in c)
        d = document.createElement("LI"),
        d.innerHTML = c[q].ai(),
        this.ee.appendChild(d),
        this.tb[q] = d,
        this.ab[q] = !0;
      for (q in b)
        d = document.createElement("LI"),
        d.innerHTML = b[q].ai(),
        gd(d, !1),
        this.ee.appendChild(d),
        this.tb[q] = d;
      q = !hb(this.ab) || !hb(a.gc);
      this.L != q && (gd(this.element, q),
      this.L = q);
      q && hb(this.ab) ? Rc(this.element, "ol-logo-only") : Sc(this.element, "ol-logo-only");
      var w;
      a = a.gc;
      q = this.ej;
      for (w in q)
        w in a || (Jc(q[w]),
        delete q[w]);
      for (var B in a)
        B in q || (w = new Image,
        w.src = B,
        c = a[B],
        "" === c ? c = w : (c = Fc("A", {
          href: c
        }),
        c.appendChild(w)),
        this.Id.appendChild(c),
        q[B] = c);
      gd(this.Id, !hb(a))
    } else
      this.L && (gd(this.element, !1),
      this.L = !1)
  }
  Ug.prototype.Wb = function(a) {
    a.preventDefault();
    a = this.element;
    Qc(a, "ol-collapsed") ? Sc(a, "ol-collapsed") : Rc(a, "ol-collapsed");
    if (this.Nb) {
      a = this.sa;
      var b = a.parentNode;
      b && b.replaceChild(this.ve, a)
    } else
      a = this.ve,
      (b = a.parentNode) && b.replaceChild(this.sa, a);
    this.Nb = !this.Nb
  }
  ;
  function Wg(a) {
    return 1 - Math.pow(1 - a, 3)
  }
  function Xg(a) {
    return 3 * a * a - 2 * a * a * a
  }
  function Yg(a) {
    return a
  }
  ;function Zg(a) {
    var b = a.source
      , c = a.start ? a.start : Date.now()
      , d = b[0]
      , e = b[1]
      , f = void 0 !== a.duration ? a.duration : 1E3
      , g = a.M ? a.M : Xg;
    return function(a, b) {
      if (b.time < c)
        return b.sb = !0,
        b.O[0] += 1,
        !0;
      if (b.time < c + f) {
        var m = 1 - g((b.time - c) / f)
          , n = d - b.i.center[0]
          , p = e - b.i.center[1];
        b.sb = !0;
        b.i.center[0] += m * n;
        b.i.center[1] += m * p;
        b.O[0] += 1;
        return !0
      }
      return !1
    }
  }
  function $g(a) {
    var b = a.rotation ? a.rotation : 0
      , c = a.start ? a.start : Date.now()
      , d = void 0 !== a.duration ? a.duration : 1E3
      , e = a.M ? a.M : Xg
      , f = a.anchor ? a.anchor : null ;
    return function(a, h) {
      if (h.time < c)
        return h.sb = !0,
        h.O[0] += 1,
        !0;
      if (h.time < c + d) {
        var l = 1 - e((h.time - c) / d)
          , l = (b - h.i.rotation) * l;
        h.sb = !0;
        h.i.rotation += l;
        if (f) {
          var m = h.i.center;
          m[0] -= f[0];
          m[1] -= f[1];
          Fd(m, l);
          Ed(m, f)
        }
        h.O[0] += 1;
        return !0
      }
      return !1
    }
  }
  function ah(a) {
    var b = a.resolution
      , c = a.start ? a.start : Date.now()
      , d = void 0 !== a.duration ? a.duration : 1E3
      , e = a.M ? a.M : Xg;
    return function(a, g) {
      if (g.time < c)
        return g.sb = !0,
        g.O[0] += 1,
        !0;
      if (g.time < c + d) {
        var h = 1 - e((g.time - c) / d)
          , l = b - g.i.resolution;
        g.sb = !0;
        g.i.resolution += h * l;
        g.O[0] += 1;
        return !0
      }
      return !1
    }
  }
  ;function bh(a) {
    a = a ? a : {};
    var b = a.className ? a.className : "ol-rotate"
      , c = a.label ? a.label : "\u21e7";
    this.sa = null ;
    C(c) ? this.sa = Fc("SPAN", "ol-compass", c) : (this.sa = c,
    Rc(this.sa, "ol-compass"));
    c = Fc("BUTTON", {
      "class": b + "-reset",
      type: "button",
      title: a.xf ? a.xf : "Reset rotation"
    }, this.sa);
    U(c, "click", bh.prototype.Wb, !1, this);
    b = Fc("DIV", b + " ol-unselectable ol-control", c);
    Tg.call(this, {
      element: b,
      render: a.render ? a.render : ch,
      target: a.target
    });
    this.v = a.duration ? a.duration : 250;
    this.Kf = void 0 !== a.Eh ? a.Eh : !0;
    this.Rg = void 0;
    this.Kf && Rc(this.element, "ol-hidden")
  }
  K(bh, Tg);
  bh.prototype.Wb = function(a) {
    a.preventDefault();
    a = this.a;
    var b = Y(a);
    if (b) {
      var c = Og(b);
      void 0 !== c && (0 < this.v && (c %= 2 * Math.PI,
      c < -Math.PI && (c += 2 * Math.PI),
      c > Math.PI && (c -= 2 * Math.PI),
      a.ia($g({
        rotation: c,
        duration: this.v,
        M: Wg
      }))),
      b.set("rotation", 0))
    }
  }
  ;
  function ch(a) {
    if (a = a.frameState) {
      a = a.i.rotation;
      if (a != this.Rg) {
        var b = "rotate(" + a + "rad)";
        if (this.Kf) {
          var c = this.element;
          0 === a ? Rc(c, "ol-hidden") : Sc(c, "ol-hidden")
        }
        this.sa.style.msTransform = b;
        this.sa.style.webkitTransform = b;
        this.sa.style.transform = b
      }
      this.Rg = a
    }
  }
  ;function dh(a) {
    a = a ? a : {};
    var b = a.className ? a.className : "ol-zoom"
      , c = a.xb ? a.xb : 1
      , d = a.Ak ? a.Ak : "\u2212"
      , e = a.Bk ? a.Bk : "Zoom out"
      , f = Fc("BUTTON", {
      "class": b + "-in",
      type: "button",
      title: a.zk ? a.zk : "Zoom in"
    }, a.yk ? a.yk : "+");
    U(f, "click", la(dh.prototype.Wb, c), !1, this);
    d = Fc("BUTTON", {
      "class": b + "-out",
      type: "button",
      title: e
    }, d);
    U(d, "click", la(dh.prototype.Wb, -c), !1, this);
    b = Fc("DIV", b + " ol-unselectable ol-control", f, d);
    Tg.call(this, {
      element: b,
      target: a.target
    });
    this.v = void 0 !== a.duration ? a.duration : 250
  }
  K(dh, Tg);
  dh.prototype.Wb = function(a, b) {
    b.preventDefault();
    var c = this.a
      , d = Y(c);
    if (d) {
      var e = d.h();
      e && (0 < this.v && c.ia(ah({
        resolution: e,
        duration: this.v,
        M: Wg
      })),
      c = d.Y(e, a),
      Qg(d, c))
    }
  }
  ;
  function eh(a, b, c) {
    this.De = a;
    this.Ld = b;
    this.Kh = c;
    this.pa = [];
    this.ac = this.ne = 0
  }
  eh.prototype.update = function(a, b) {
    this.pa.push(a, b, Date.now())
  }
  ;
  eh.prototype.end = function() {
    if (6 > this.pa.length)
      return !1;
    var a = Date.now() - this.Kh
      , b = this.pa.length - 3;
    if (this.pa[b + 2] < a)
      return !1;
    for (var c = b - 3; 0 < c && this.pa[c + 2] > a; )
      c -= 3;
    var a = this.pa[b + 2] - this.pa[c + 2]
      , d = this.pa[b] - this.pa[c]
      , b = this.pa[b + 1] - this.pa[c + 1];
    this.ne = Math.atan2(b, d);
    this.ac = Math.sqrt(d * d + b * b) / a;
    return this.ac > this.Ld
  }
  ;
  eh.prototype.pan = function(a) {
    var b = this.De
      , c = this.ac
      , d = this.Ld - c
      , e = Math.log(this.Ld / this.ac) / this.De;
    return Zg({
      source: a,
      duration: e,
      M: function(a) {
        return c * (Math.exp(b * a * e) - 1) / d
      }
    })
  }
  ;
  function Z(a) {
    X.call(this);
    this.a = null ;
    this.setActive(!0);
    this.handleEvent = a.handleEvent
  }
  K(Z, X);
  Z.prototype.ld = function() {
    return this.a
  }
  ;
  Z.prototype.setActive = function(a) {
    this.set("active", a)
  }
  ;
  Z.prototype.setMap = function(a) {
    this.a = a
  }
  ;
  function fh(a, b, c, d, e) {
    if (void 0 !== c) {
      var f = Og(b)
        , g = Ng(b);
      void 0 !== f && g && e && 0 < e && (a.ia($g({
        rotation: f,
        duration: e,
        M: Wg
      })),
      d && a.ia(Zg({
        source: g,
        duration: e,
        M: Wg
      })));
      b.rotate(c, d)
    }
  }
  function gh(a, b, c, d, e) {
    var f = b.h();
    c = b.Y(f, c, 0);
    hh(a, b, c, d, e)
  }
  function hh(a, b, c, d, e) {
    if (c) {
      var f = b.h()
        , g = Ng(b);
      void 0 !== f && g && c !== f && e && 0 < e && (a.ia(ah({
        resolution: f,
        duration: e,
        M: Wg
      })),
      d && a.ia(Zg({
        source: g,
        duration: e,
        M: Wg
      })));
      d && (a = Mg(b, c, d),
      Rg(b, a));
      Qg(b, c)
    }
  }
  ;function ih(a) {
    a = a ? a : {};
    this.C = a.xb ? a.xb : 1;
    Z.call(this, {
      handleEvent: jh
    });
    this.v = a.duration ? a.duration : 250
  }
  K(ih, Z);
  function jh(a) {
    var b = !1
      , c = a.U;
    if (a.type == Be) {
      var b = a.map
        , d = a.coordinate
        , c = c.shiftKey ? -this.C : this.C
        , e = Y(b);
      gh(b, e, c, d, this.v);
      a.preventDefault();
      b = !0
    }
    return !b
  }
  ;function kh(a) {
    a = a.U;
    return a.altKey && !a.Pd && a.shiftKey
  }
  function lh(a) {
    a = a.U;
    return !a.altKey && !a.Pd && !a.shiftKey
  }
  function mh(a) {
    a = a.U;
    return !a.altKey && !a.Pd && a.shiftKey
  }
  function nh(a) {
    a = a.U.target.tagName;
    return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
  }
  function oh(a) {
    return "mouse" == a.Dg.pointerType
  }
  ;function ph(a) {
    a = a ? a : {};
    Z.call(this, {
      handleEvent: a.handleEvent ? a.handleEvent : qh
    });
    this.ii = a.Xb ? a.Xb : hc;
    this.ji = a.Yb ? a.Yb : Dd;
    this.zi = a.yi ? a.yi : Dd;
    this.Li = a.Zb ? a.Zb : hc;
    this.$b = !1;
    this.Xc = {};
    this.V = []
  }
  K(ph, Z);
  function rh(a) {
    for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)
      c += a[e].clientX,
      d += a[e].clientY;
    return [c / b, d / b]
  }
  function qh(a) {
    if (!(a instanceof xe))
      return !0;
    var b = !1
      , c = a.type;
    if (c === Ge || c === Ie || c === Ee)
      c = a.Dg,
      a.type == Ee ? delete this.Xc[c.pointerId] : a.type == Ge ? this.Xc[c.pointerId] = c : c.pointerId in this.Xc && (this.Xc[c.pointerId] = c),
      this.V = db(this.Xc);
    this.$b && (a.type == Ie ? this.ji(a) : a.type == Ee && (this.$b = this.Li(a)));
    a.type == Ge ? (this.$b = a = this.ii(a),
    b = this.Sc(a)) : a.type == He && this.zi(a);
    return !b
  }
  ph.prototype.Sc = function(a) {
    return a
  }
  ;
  function sh(a) {
    ph.call(this, {
      Xb: th,
      Yb: uh,
      Zb: vh
    });
    a = a ? a : {};
    this.Ra = a.Zi;
    this.cc = this.Ic = null ;
    this.Qa = a.ja ? a.ja : lh;
    this.vg = !1
  }
  K(sh, ph);
  function uh(a) {
    var b = rh(this.V);
    this.Ra && this.Ra.update(b[0], b[1]);
    if (this.cc) {
      var c = this.cc[0] - b[0]
        , d = b[1] - this.cc[1];
      a = a.map;
      var e = Y(a)
        , f = e.I()
        , d = c = [c, d]
        , g = f.resolution;
      d[0] *= g;
      d[1] *= g;
      Fd(c, f.rotation);
      Ed(c, f.center);
      c = e.wc.center(c);
      a.render();
      Rg(e, c)
    }
    this.cc = b
  }
  function vh(a) {
    a = a.map;
    var b = Y(a);
    if (0 === this.V.length) {
      if (!this.vg && this.Ra && this.Ra.end()) {
        var c;
        c = this.Ra;
        c = (c.Ld - c.ac) / c.De;
        var d = this.Ra.ne
          , e = Ng(b);
        this.Ic = this.Ra.pan(e);
        a.ia(this.Ic);
        var f;
        (f = a.Bb) ? (e = e.slice(0, 2),
        f = $f(f.Ob, e, e)) : f = null ;
        c = a.Bc([f[0] - c * Math.cos(d), f[1] - c * Math.sin(d)]);
        c = b.wc.center(c);
        Rg(b, c)
      }
      Sg(b, -1);
      a.render();
      return !1
    }
    this.cc = null ;
    return !0
  }
  function th(a) {
    if (0 < this.V.length && this.Qa(a)) {
      var b = a.map
        , c = Y(b);
      this.cc = null ;
      this.$b || Sg(c, 1);
      b.render();
      this.Ic && Ha(b.Rd, this.Ic) && (Rg(c, a.frameState.i.center),
      this.Ic = null );
      this.Ra && (a = this.Ra,
      a.pa.length = 0,
      a.ne = 0,
      a.ac = 0);
      this.vg = 1 < this.V.length;
      return !0
    }
    return !1
  }
  sh.prototype.Sc = hc;
  function wh(a) {
    a = a ? a : {};
    ph.call(this, {
      Xb: xh,
      Yb: yh,
      Zb: zh
    });
    this.Qa = a.ja ? a.ja : kh;
    this.Ta = void 0;
    this.v = a.duration ? a.duration : 250
  }
  K(wh, ph);
  function yh(a) {
    if (oh(a)) {
      var b = a.map
        , c = b.Cb();
      a = a.pixel;
      c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
      if (void 0 !== this.Ta) {
        a = c - this.Ta;
        var d = Y(b)
          , e = Og(d);
        b.render();
        fh(b, d, e - a)
      }
      this.Ta = c
    }
  }
  function zh(a) {
    if (!oh(a))
      return !0;
    a = a.map;
    var b = Y(a);
    Sg(b, -1);
    var c = Og(b)
      , d = this.v
      , c = b.ze(c, 0);
    fh(a, b, c, void 0, d);
    return !1
  }
  function xh(a) {
    return oh(a) && Jb(a.U) && this.Qa(a) ? (a = a.map,
    Sg(Y(a), 1),
    a.render(),
    this.Ta = void 0,
    !0) : !1
  }
  wh.prototype.Sc = hc;
  function Ah(a) {
    this.gd = null ;
    this.D = document.createElement("div");
    this.D.style.position = "absolute";
    this.D.className = "ol-box " + a;
    this.ed = this.wa = this.a = null
  }
  K(Ah, Sa);
  Ah.prototype.f = function() {
    this.setMap(null );
    Ah.G.f.call(this)
  }
  ;
  function Bh(a) {
    var b = a.wa
      , c = a.ed;
    a = a.D.style;
    a.left = Math.min(b[0], c[0]) + "px";
    a.top = Math.min(b[1], c[1]) + "px";
    a.width = Math.abs(c[0] - b[0]) + "px";
    a.height = Math.abs(c[1] - b[1]) + "px"
  }
  Ah.prototype.setMap = function(a) {
    if (this.a) {
      this.a.ef.removeChild(this.D);
      var b = this.D.style;
      b.left = b.top = b.width = b.height = "inherit"
    }
    (this.a = a) && this.a.ef.appendChild(this.D)
  }
  ;
  function Ch(a) {
    var b = a.wa
      , c = a.ed
      , b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.a.Bc, a.a);
    b[4] = b[0].slice();
    a.gd ? Jg(a.gd, [b]) : a.gd = new Ig([b])
  }
  Ah.prototype.hd = function() {
    return this.gd
  }
  ;
  function Dh(a, b) {
    S.call(this, a);
    this.coordinate = b
  }
  K(Dh, S);
  function Eh(a) {
    ph.call(this, {
      Xb: Fh,
      Yb: Gh,
      Zb: Hh
    });
    a = a ? a : {};
    this.tc = new Ah(a.className || "ol-dragbox");
    this.wa = null ;
    this.Qa = a.ja ? a.ja : ic
  }
  K(Eh, ph);
  function Gh(a) {
    if (oh(a)) {
      var b = this.tc;
      a = a.pixel;
      b.wa = this.wa;
      b.ed = a;
      Ch(b);
      Bh(b)
    }
  }
  Eh.prototype.hd = function() {
    return this.tc.hd()
  }
  ;
  Eh.prototype.wg = Dd;
  function Hh(a) {
    if (!oh(a))
      return !0;
    this.tc.setMap(null );
    var b = a.pixel[0] - this.wa[0]
      , c = a.pixel[1] - this.wa[1];
    64 <= b * b + c * c && (this.wg(a),
    this.dispatchEvent(new Dh("boxend",a.coordinate)));
    return !1
  }
  function Fh(a) {
    if (oh(a) && Jb(a.U) && this.Qa(a)) {
      this.wa = a.pixel;
      this.tc.setMap(a.map);
      var b = this.tc
        , c = this.wa;
      b.wa = this.wa;
      b.ed = c;
      Ch(b);
      Bh(b);
      this.dispatchEvent(new Dh("boxstart",a.coordinate));
      return !0
    }
    return !1
  }
  ;function Ih(a) {
    a = a ? a : {};
    var b = a.ja ? a.ja : mh;
    this.v = void 0 !== a.duration ? a.duration : 200;
    Eh.call(this, {
      ja: b,
      className: a.className || "ol-dragzoom"
    })
  }
  K(Ih, Eh);
  Ih.prototype.wg = function() {
    var a = this.a
      , b = Y(a)
      , c = a.Cb()
      , d = this.hd().j()
      , c = b.Y(Math.max(Re(d) / c[0], Se(d) / c[1]))
      , e = b.h()
      , f = Ng(b);
    a.ia(ah({
      resolution: e,
      duration: this.v,
      M: Wg
    }));
    a.ia(Zg({
      source: f,
      duration: this.v,
      M: Wg
    }));
    Rg(b, Te(d));
    Qg(b, c)
  }
  ;
  function Jh(a) {
    Z.call(this, {
      handleEvent: Kh
    });
    a = a || {};
    this.Qa = void 0 !== a.ja ? a.ja : kc(lh, nh);
    this.v = void 0 !== a.duration ? a.duration : 100;
    this.Jj = void 0 !== a.Ij ? a.Ij : 128
  }
  K(Jh, Z);
  function Kh(a) {
    var b = !1;
    if ("key" == a.type) {
      var c = a.U.keyCode;
      if (this.Qa(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
        var d = a.map
          , b = Y(d)
          , e = b.h() * this.Jj
          , f = 0
          , g = 0;
        40 == c ? g = -e : 37 == c ? f = -e : 39 == c ? f = e : g = e;
        c = [f, g];
        Fd(c, Og(b));
        e = this.v;
        if (f = Ng(b))
          e && 0 < e && d.ia(Zg({
            source: f,
            duration: e,
            M: Yg
          })),
          d = b.wc.center([f[0] + c[0], f[1] + c[1]]),
          Rg(b, d);
        a.preventDefault();
        b = !0
      }
    }
    return !b
  }
  ;function Lh(a) {
    Z.call(this, {
      handleEvent: Mh
    });
    a = a ? a : {};
    this.Qa = a.ja ? a.ja : nh;
    this.C = a.xb ? a.xb : 1;
    this.v = void 0 !== a.duration ? a.duration : 100
  }
  K(Lh, Z);
  function Mh(a) {
    var b = !1;
    if ("key" == a.type) {
      var c = a.U.charCode;
      if (this.Qa(a) && (43 == c || 45 == c)) {
        b = a.map;
        c = 43 == c ? this.C : -this.C;
        b.render();
        var d = Y(b);
        gh(b, d, c, void 0, this.v);
        a.preventDefault();
        b = !0
      }
    }
    return !b
  }
  ;function Nh(a) {
    Z.call(this, {
      handleEvent: Oh
    });
    a = a || {};
    this.C = 0;
    this.v = void 0 !== a.duration ? a.duration : 250;
    this.tk = void 0 !== a.sk ? a.sk : !0;
    this.Sa = null ;
    this.ob = this.Zd = void 0
  }
  K(Nh, Z);
  function Oh(a) {
    var b = !1;
    if ("mousewheel" == a.type) {
      var b = a.map
        , c = a.U;
      this.tk && (this.Sa = a.coordinate);
      this.C += c.deltaY;
      void 0 === this.Zd && (this.Zd = Date.now());
      c = Math.max(80 - (Date.now() - this.Zd), 0);
      u.clearTimeout(this.ob);
      this.ob = u.setTimeout(J(this.Fe, this, b), c);
      a.preventDefault();
      b = !0
    }
    return !b
  }
  Nh.prototype.Fe = function(a) {
    var b = Ze(this.C, -1, 1)
      , c = Y(a);
    a.render();
    gh(a, c, -b, this.Sa, this.v);
    this.C = 0;
    this.Sa = null ;
    this.ob = this.Zd = void 0
  }
  ;
  function Ph(a) {
    ph.call(this, {
      Xb: Qh,
      Yb: Rh,
      Zb: Sh
    });
    a = a || {};
    this.Oa = null ;
    this.Ta = void 0;
    this.Qc = !1;
    this.Vd = 0;
    this.hk = void 0 !== a.threshold ? a.threshold : .3;
    this.v = void 0 !== a.duration ? a.duration : 250
  }
  K(Ph, ph);
  function Rh(a) {
    var b = 0
      , c = this.V[0]
      , d = this.V[1]
      , c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
    void 0 !== this.Ta && (b = c - this.Ta,
    this.Vd += b,
    !this.Qc && Math.abs(this.Vd) > this.hk && (this.Qc = !0));
    this.Ta = c;
    a = a.map;
    c = fd(a.H);
    d = rh(this.V);
    d[0] -= c.x;
    d[1] -= c.y;
    this.Oa = a.Bc(d);
    this.Qc && (c = Y(a),
    d = Og(c),
    a.render(),
    fh(a, c, d + b, this.Oa))
  }
  function Sh(a) {
    if (2 > this.V.length) {
      a = a.map;
      var b = Y(a);
      Sg(b, -1);
      if (this.Qc) {
        var c = Og(b)
          , d = this.Oa
          , e = this.v
          , c = b.ze(c, 0);
        fh(a, b, c, d, e)
      }
      return !1
    }
    return !0
  }
  function Qh(a) {
    return 2 <= this.V.length ? (a = a.map,
    this.Oa = null ,
    this.Ta = void 0,
    this.Qc = !1,
    this.Vd = 0,
    this.$b || Sg(Y(a), 1),
    a.render(),
    !0) : !1
  }
  Ph.prototype.Sc = hc;
  function Th(a) {
    ph.call(this, {
      Xb: Uh,
      Yb: Vh,
      Zb: Wh
    });
    a = a ? a : {};
    this.Oa = null ;
    this.v = void 0 !== a.duration ? a.duration : 400;
    this.Ad = void 0;
    this.Ve = 1
  }
  K(Th, ph);
  function Vh(a) {
    var b = 1
      , c = this.V[0]
      , d = this.V[1]
      , e = c.clientX - d.clientX
      , c = c.clientY - d.clientY
      , e = Math.sqrt(e * e + c * c);
    void 0 !== this.Ad && (b = this.Ad / e);
    this.Ad = e;
    1 != b && (this.Ve = b);
    a = a.map;
    var e = Y(a)
      , c = e.h()
      , d = fd(a.H)
      , f = rh(this.V);
    f[0] -= d.x;
    f[1] -= d.y;
    this.Oa = a.Bc(f);
    a.render();
    hh(a, e, c * b, this.Oa)
  }
  function Wh(a) {
    if (2 > this.V.length) {
      a = a.map;
      var b = Y(a);
      Sg(b, -1);
      var c = b.h()
        , d = this.Oa
        , e = this.v
        , c = b.Y(c, 0, this.Ve - 1);
      hh(a, b, c, d, e);
      return !1
    }
    return !0
  }
  function Uh(a) {
    return 2 <= this.V.length ? (a = a.map,
    this.Oa = null ,
    this.Ad = void 0,
    this.Ve = 1,
    this.$b || Sg(Y(a), 1),
    a.render(),
    !0) : !1
  }
  Th.prototype.Sc = hc;
  function Xh(a) {
    a = a ? a : {};
    var b = new Ad
      , c = new eh(-.005,.05,100);
    (void 0 !== a.Bh ? a.Bh : 1) && b.push(new wh);
    (void 0 !== a.Mh ? a.Mh : 1) && b.push(new ih({
      xb: a.lh,
      duration: a.ke
    }));
    (void 0 !== a.Nh ? a.Nh : 1) && b.push(new sh({
      Zi: c
    }));
    (void 0 !== a.Gj ? a.Gj : 1) && b.push(new Ph);
    (void 0 !== a.Hj ? a.Hj : 1) && b.push(new Th({
      duration: a.ke
    }));
    if (void 0 !== a.Yi ? a.Yi : 1)
      b.push(new Jh),
      b.push(new Lh({
        xb: a.lh,
        duration: a.ke
      }));
    (void 0 !== a.ug ? a.ug : 1) && b.push(new Nh({
      duration: a.ke
    }));
    (void 0 !== a.bk ? a.bk : 1) && b.push(new Ih({
      duration: a.ke
    }));
    return b
  }
  ;function Yh(a) {
    var b = a || {};
    a = jb(b);
    delete a.dc;
    b = b.dc;
    xf.call(this, a);
    this.Ze = [];
    this.fc = {};
    U(this, yd("layers"), this.vi, !1, this);
    b ? da(b) && (b = new Ad(b.slice())) : b = new Ad;
    this.set("layers", b)
  }
  K(Yh, xf);
  k = Yh.prototype;
  k.pd = function() {
    this.get("visible") && this.F()
  }
  ;
  k.vi = function() {
    this.Ze.forEach(V);
    this.Ze.length = 0;
    var a = this.kd();
    this.Ze.push(U(a, "add", this.ui, !1, this), U(a, "remove", this.wi, !1, this));
    ab(this.fc, function(a) {
      a.forEach(V)
    });
    ib(this.fc);
    var a = a.Aa, b, c, d;
    b = 0;
    for (c = a.length; b < c; b++)
      d = a[b],
      this.fc[I(d).toString()] = [U(d, "propertychange", this.pd, !1, this), U(d, "change", this.pd, !1, this)];
    this.F()
  }
  ;
  k.ui = function(a) {
    a = a.element;
    var b = I(a).toString();
    this.fc[b] = [U(a, "propertychange", this.pd, !1, this), U(a, "change", this.pd, !1, this)];
    this.F()
  }
  ;
  k.wi = function(a) {
    a = I(a.element).toString();
    this.fc[a].forEach(V);
    delete this.fc[a];
    this.F()
  }
  ;
  k.kd = function() {
    return this.get("layers")
  }
  ;
  k.Je = function(a) {
    var b = void 0 !== a ? a : []
      , c = b.length;
    this.kd().forEach(function(a) {
      a.Je(b)
    });
    a = yf(this);
    var d, e;
    for (d = b.length; c < d; c++)
      e = b[c],
      e.opacity *= a.opacity,
      e.visible = e.visible && a.visible,
      e.Ua = Math.min(e.Ua, a.Ua),
      e.Ja = Math.max(e.Ja, a.Ja),
      void 0 !== a.extent && (e.extent = void 0 !== e.extent ? Ve(e.extent, a.extent) : a.extent);
    return b
  }
  ;
  k.ag = function() {
    return "ready"
  }
  ;
  function Zh(a) {
    hf.call(this, {
      code: a,
      units: "m",
      extent: $h,
      global: !0,
      wk: ai
    })
  }
  K(Zh, hf);
  Zh.prototype.Ub = function(a, b) {
    return a / $e(b[1] / 6378137)
  }
  ;
  var bi = 6378137 * Math.PI
    , $h = [-bi, -bi, bi, bi]
    , ai = [-180, -85, 180, 85]
    , ci = "EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(a) {
    return new Zh(a)
  });
  function di(a, b, c) {
    var d = a.length;
    c = 1 < c ? c : 2;
    void 0 === b && (b = 2 < c ? a.slice() : Array(d));
    for (var e = 0; e < d; e += c)
      b[e] = 6378137 * Math.PI * a[e] / 180,
      b[e + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
    return b
  }
  function ei(a, b, c) {
    var d = a.length;
    c = 1 < c ? c : 2;
    void 0 === b && (b = 2 < c ? a.slice() : Array(d));
    for (var e = 0; e < d; e += c)
      b[e] = 180 * a[e] / (6378137 * Math.PI),
      b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
    return b
  }
  ;function fi(a, b) {
    hf.call(this, {
      code: a,
      units: "degrees",
      extent: gi,
      Wk: b,
      global: !0,
      wk: gi
    })
  }
  K(fi, hf);
  fi.prototype.Ub = function(a) {
    return a
  }
  ;
  var gi = [-180, -90, 180, 90]
    , hi = [new fi("CRS:84"), new fi("EPSG:4326","neu"), new fi("urn:ogc:def:crs:EPSG::4326","neu"), new fi("urn:ogc:def:crs:EPSG:6.6:4326","neu"), new fi("urn:ogc:def:crs:OGC:1.3:CRS84"), new fi("urn:ogc:def:crs:OGC:2:84"), new fi("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"), new fi("urn:x-ogc:def:crs:EPSG:4326","neu")];
  function ii(a) {
    a = a ? a : {};
    var b = jb(a);
    delete b.Fg;
    delete b.gh;
    Af.call(this, b);
    this.set("preload", void 0 !== a.Fg ? a.Fg : 0);
    this.set("useInterimTilesOnError", void 0 !== a.gh ? a.gh : !0)
  }
  K(ii, Af);
  function ji(a, b, c, d, e) {
    this.Nf = {};
    this.u = a;
    this.Od = b;
    this.N = c;
    this.X = d;
    this.uk = e;
    this.aa = this.T = this.la = this.Sf = this.Rf = this.Qf = null ;
    this.Ri = this.Qi = this.Oe = this.ig = this.hg = this.gg = 0;
    this.Si = !1;
    this.td = this.Ti = 0;
    this.Ui = !1;
    this.kg = 0;
    this.La = "";
    this.be = this.rf = this.fk = this.ek = 0;
    this.Wg = this.sf = this.qf = null ;
    this.Nd = [];
    this.bh = qd()
  }
  function ki(a, b, c) {
    if (a.aa) {
      b = Cg(b, 0, c, 2, a.X, a.Nd);
      c = a.u;
      var d = a.bh
        , e = c.globalAlpha;
      1 != a.Oe && (c.globalAlpha = e * a.Oe);
      var f = a.Ti;
      a.Si && (f += a.uk);
      var g, h;
      g = 0;
      for (h = b.length; g < h; g += 2) {
        var l = b[g] - a.gg
          , m = b[g + 1] - a.hg;
        a.Ui && (l = l + .5 | 0,
        m = m + .5 | 0);
        if (0 !== f || 1 != a.td) {
          var n = l + a.gg
            , p = m + a.hg;
          Zf(d, n, p, a.td, a.td, f, -n, -p);
          c.setTransform(d[0], d[1], d[4], d[5], d[12], d[13])
        }
        c.drawImage(a.aa, a.Qi, a.Ri, a.kg, a.ig, l, m, a.kg, a.ig)
      }
      0 === f && 1 == a.td || c.setTransform(1, 0, 0, 1, 0, 0);
      1 != a.Oe && (c.globalAlpha = e)
    }
  }
  function li(a, b, c, d) {
    var e = 0;
    if (a.Wg && "" !== a.La) {
      a.qf && mi(a, a.qf);
      a.sf && ni(a, a.sf);
      var f = a.Wg
        , g = a.u
        , h = a.Sf;
      h ? (h.font != f.font && (h.font = g.font = f.font),
      h.textAlign != f.textAlign && (h.textAlign = g.textAlign = f.textAlign),
      h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font,
      g.textAlign = f.textAlign,
      g.textBaseline = f.textBaseline,
      a.Sf = {
        font: f.font,
        textAlign: f.textAlign,
        textBaseline: f.textBaseline
      });
      b = Cg(b, e, c, d, a.X, a.Nd);
      for (f = a.u; e < c; e += d) {
        g = b[e] + a.ek;
        h = b[e + 1] + a.fk;
        if (0 !== a.rf || 1 != a.be) {
          var l = Zf(a.bh, g, h, a.be, a.be, a.rf, -g, -h);
          f.setTransform(l[0], l[1], l[4], l[5], l[12], l[13])
        }
        a.sf && f.strokeText(a.La, g, h);
        a.qf && f.fillText(a.La, g, h)
      }
      0 === a.rf && 1 == a.be || f.setTransform(1, 0, 0, 1, 0, 0)
    }
  }
  function oi(a, b, c, d, e, f) {
    var g = a.u;
    a = Cg(b, c, d, e, a.X, a.Nd);
    g.moveTo(a[0], a[1]);
    for (b = 2; b < a.length; b += 2)
      g.lineTo(a[b], a[b + 1]);
    f && g.lineTo(a[0], a[1]);
    return d
  }
  function pi(a, b, c, d, e) {
    var f = a.u, g, h;
    g = 0;
    for (h = d.length; g < h; ++g)
      c = oi(a, b, c, d[g], e, !0),
      f.closePath();
    return c
  }
  k = ji.prototype;
  k.Oh = function(a) {
    if (We(this.N, a.j())) {
      if (this.la || this.T) {
        this.la && mi(this, this.la);
        this.T && ni(this, this.T);
        var b;
        b = this.X;
        var c = this.Nd
          , d = a.fb();
        if (d) {
          var e = a.Ga();
          b = Cg(d, 0, d.length, e, b, c)
        } else
          b = null ;
        c = b[2] - b[0];
        d = b[3] - b[1];
        c = Math.sqrt(c * c + d * d);
        d = this.u;
        d.beginPath();
        d.arc(b[0], b[1], c, 0, 2 * Math.PI);
        this.la && d.fill();
        this.T && d.stroke()
      }
      "" !== this.La && li(this, Ng(a), 2, 2)
    }
  }
  ;
  k.Ph = function(a, b) {
    var c = a.bl(), d, e;
    d = 0;
    for (e = c.length; d < e; ++d) {
      var f = c[d];
      qi[f.nd()].call(this, f, b)
    }
  }
  ;
  k.Uh = function(a) {
    var b = a.fb();
    a = a.Ga();
    this.aa && ki(this, b, b.length);
    "" !== this.La && li(this, b, b.length, a)
  }
  ;
  k.Sh = function(a) {
    var b = a.fb();
    a = a.Ga();
    this.aa && ki(this, b, b.length);
    "" !== this.La && li(this, b, b.length, a)
  }
  ;
  k.Qh = function(a) {
    if (We(this.N, a.j())) {
      if (this.T) {
        ni(this, this.T);
        var b = this.u
          , c = a.fb();
        b.beginPath();
        oi(this, c, 0, c.length, a.Ga(), !1);
        b.stroke()
      }
      "" !== this.La && (a = a.$k(),
      li(this, a, 2, 2))
    }
  }
  ;
  k.Rh = function(a) {
    var b = a.j();
    if (We(this.N, b)) {
      if (this.T) {
        ni(this, this.T);
        var b = this.u
          , c = a.fb()
          , d = 0
          , e = a.qa
          , f = a.Ga();
        b.beginPath();
        var g, h;
        g = 0;
        for (h = e.length; g < h; ++g)
          d = oi(this, c, d, e[g], f, !1);
        b.stroke()
      }
      "" !== this.La && (a = a.al(),
      li(this, a, a.length, 2))
    }
  }
  ;
  k.Vh = function(a) {
    if (We(this.N, a.j())) {
      if (this.T || this.la) {
        this.la && mi(this, this.la);
        this.T && ni(this, this.T);
        var b = this.u;
        b.beginPath();
        pi(this, a.Dc(), 0, a.qa, a.Ga());
        this.la && b.fill();
        this.T && b.stroke()
      }
      if ("" !== this.La) {
        if (a.Zf != a.Ya) {
          b = Te(a.j());
          var c = a.Dc(), d = a.qa, e = a.xa, f, g, h, l, m, n = b[1], p = [], r = d[0];
          h = c[r - e];
          m = c[r - e + 1];
          for (f = 0; f < r; f += e) {
            l = c[f];
            g = c[f + 1];
            if (n <= m && g <= n || m <= n && n <= g)
              h = (n - m) / (g - m) * (l - h) + h,
              p.push(h);
            h = l;
            m = g
          }
          r = NaN;
          m = -Infinity;
          p.sort();
          h = p[0];
          f = 1;
          for (g = p.length; f < g; ++f) {
            l = p[f];
            var t = Math.abs(l - h);
            t > m && (h = (h + l) / 2,
            Gg(c, d, e, h, n) && (r = h,
            m = t));
            h = l
          }
          isNaN(r) && (r = b[0]);
          b = [r, n];
          a.$f = b;
          a.Zf = a.Ya
        }
        li(this, a.$f, 2, 2)
      }
    }
  }
  ;
  k.Th = function(a) {
    if (We(this.N, a.j())) {
      if (this.T || this.la) {
        this.la && mi(this, this.la);
        this.T && ni(this, this.T);
        var b = this.u, c = a.Dc(), d = 0, e = a.Yk(), f = a.Ga(), g, h;
        g = 0;
        for (h = e.length; g < h; ++g) {
          var l = e[g];
          b.beginPath();
          d = pi(this, c, d, l, f);
          this.la && b.fill();
          this.T && b.stroke()
        }
      }
      "" !== this.La && (a = a.Zk(),
      li(this, a, a.length, 2))
    }
  }
  ;
  k.flush = function() {
    var a = Object.keys(this.Nf).map(Number);
    Ma(a);
    var b, c, d, e, f;
    b = 0;
    for (c = a.length; b < c; ++b)
      for (d = this.Nf[a[b].toString()],
      e = 0,
      f = d.length; e < f; ++e)
        d[e](this)
  }
  ;
  function mi(a, b) {
    var c = a.u
      , d = a.Qf;
    d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle,
    a.Qf = {
      fillStyle: b.fillStyle
    })
  }
  function ni(a, b) {
    var c = a.u
      , d = a.Rf;
    d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap),
    Qd && !Qa(d.ec, b.ec) && c.setLineDash(d.ec = b.ec),
    d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin),
    d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth),
    d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit),
    d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) : (c.lineCap = b.lineCap,
    Qd && c.setLineDash(b.ec),
    c.lineJoin = b.lineJoin,
    c.lineWidth = b.lineWidth,
    c.miterLimit = b.miterLimit,
    c.strokeStyle = b.strokeStyle,
    a.Rf = {
      lineCap: b.lineCap,
      ec: b.ec,
      lineJoin: b.lineJoin,
      lineWidth: b.lineWidth,
      miterLimit: b.miterLimit,
      strokeStyle: b.strokeStyle
    })
  }
  var qi = {
    Point: ji.prototype.Uh,
    LineString: ji.prototype.Qh,
    Polygon: ji.prototype.Vh,
    MultiPoint: ji.prototype.Sh,
    MultiLineString: ji.prototype.Rh,
    MultiPolygon: ji.prototype.Th,
    GeometryCollection: ji.prototype.Ph,
    Circle: ji.prototype.Oh
  };
  function ri(a) {
    ag.call(this, a);
    this.X = qd()
  }
  K(ri, ag);
  ri.prototype.ye = function(a, b, c) {
    this.bb("precompose", c, a, void 0);
    var d = this.Fa();
    if (d) {
      var e = b.extent
        , f = void 0 !== e;
      if (f) {
        var g = a.da
          , h = Xe(e)
          , l = [e[2], e[3]]
          , m = [e[2], e[1]]
          , e = [e[0], e[1]];
        $f(a.Ob, h, h);
        $f(a.Ob, l, l);
        $f(a.Ob, m, m);
        $f(a.Ob, e, e);
        c.save();
        c.beginPath();
        c.moveTo(h[0] * g, h[1] * g);
        c.lineTo(l[0] * g, l[1] * g);
        c.lineTo(m[0] * g, m[1] * g);
        c.lineTo(e[0] * g, e[1] * g);
        c.clip()
      }
      g = this.jg;
      h = c.globalAlpha;
      c.globalAlpha = b.opacity;
      0 === a.i.rotation ? c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(g[12]), Math.round(g[13]), Math.round(d.width * g[0]), Math.round(d.height * g[5])) : (c.setTransform(g[0], g[1], g[4], g[5], g[12], g[13]),
      c.drawImage(d, 0, 0),
      c.setTransform(1, 0, 0, 1, 0, 0));
      c.globalAlpha = h;
      f && c.restore()
    }
    this.bb("postcompose", c, a, void 0)
  }
  ;
  ri.prototype.bb = function(a, b, c, d) {
    var e = this.Ye;
    e.hasListener(a) && (d = void 0 !== d ? d : this.Le(c, 0),
    d = new ji(b,c.da,c.extent,d,c.i.rotation),
    e.dispatchEvent(new zf(a,e,d,c,b,null )),
    d.flush())
  }
  ;
  ri.prototype.Le = function(a, b) {
    var c = a.i
      , d = a.da;
    return Zf(this.X, d * a.size[0] / 2, d * a.size[1] / 2, d / c.resolution, -d / c.resolution, -c.rotation, -c.center[0] + b, -c.center[1])
  }
  ;
  var si = function() {
    var a = null
      , b = null ;
    return function(c) {
      if (!a) {
        a = Ld(1, 1);
        b = a.createImageData(1, 1);
        var d = b.data;
        d[0] = 42;
        d[1] = 84;
        d[2] = 126;
        d[3] = 255
      }
      var d = a.canvas
        , e = c[0] <= d.width && c[1] <= d.height;
      e || (d.width = c[0],
      d.height = c[1],
      d = c[0] - 1,
      c = c[1] - 1,
      a.putImageData(b, d, c),
      c = a.getImageData(d, c, 1, 1),
      e = Qa(b.data, c.data));
      return e
    }
  }();
  function ti(a, b, c, d) {
    this.eh = a;
    this.fd = b;
    this.qa = c;
    this.Sj = d
  }
  k = ti.prototype;
  k.get = function(a) {
    return this.Sj[a]
  }
  ;
  k.j = function() {
    if (!this.N) {
      var a;
      if ("Point" === this.eh) {
        var b = this.fd;
        a = b[0];
        b = b[1];
        a = Oe(a, b, a, b, void 0)
      } else
        a = Pe(this.fd, this.fd.length, 2);
      this.N = a
    }
    return this.N
  }
  ;
  k.fb = ti.prototype.Dc = function() {
    return this.fd
  }
  ;
  k.hd = function() {
    return this
  }
  ;
  k.Ga = gc(2);
  k.nd = function() {
    return this.eh
  }
  ;
  var ui = !((M("Chrome") || M("CriOS")) && !M("Opera") && !M("OPR") && !M("Edge")) || M("iPhone") && !M("iPod") && !M("iPad") || M("iPad") || M("iPod");
  function vi(a, b, c, d) {
    a = c - a;
    b = d - b;
    var e = Math.sqrt(a * a + b * b);
    return [Math.round(c + a / e), Math.round(d + b / e)]
  }
  function wi(a, b, c, d, e, f, g, h, l, m) {
    var n = Ld(Math.round(c * a), Math.round(c * b));
    if (0 === l.length)
      return n.canvas;
    n.scale(c, c);
    var p = Me();
    l.forEach(function(a) {
      a = a.extent;
      a[0] < p[0] && (p[0] = a[0]);
      a[2] > p[2] && (p[2] = a[2]);
      a[1] < p[1] && (p[1] = a[1]);
      a[3] > p[3] && (p[3] = a[3])
    });
    var r = Ld(Math.round(c * Re(p) / d), Math.round(c * Se(p) / d));
    r.scale(c / d, c / d);
    r.translate(-p[0], p[3]);
    l.forEach(function(a) {
      r.drawImage(a.image, a.extent[0], -a.extent[3], Re(a.extent), Se(a.extent))
    });
    var t = Xe(g);
    h.pb.forEach(function(a) {
      var b = a.source
        , e = a.target
        , g = b[1][0]
        , h = b[1][1]
        , l = b[2][0]
        , m = b[2][1];
      a = (e[0][0] - t[0]) / f;
      var A = -(e[0][1] - t[1]) / f
        , G = (e[1][0] - t[0]) / f
        , T = -(e[1][1] - t[1]) / f
        , O = (e[2][0] - t[0]) / f
        , Q = -(e[2][1] - t[1]) / f
        , e = b[0][0]
        , b = b[0][1]
        , g = g - e
        , h = h - b
        , l = l - e
        , m = m - b;
      a: {
        g = [[g, h, 0, 0, G - a], [l, m, 0, 0, O - a], [0, 0, g, h, T - A], [0, 0, l, m, Q - A]];
        h = g.length;
        for (l = 0; l < h; l++) {
          for (var m = l, F = Math.abs(g[l][l]), y = l + 1; y < h; y++) {
            var L = Math.abs(g[y][l]);
            L > F && (F = L,
            m = y)
          }
          if (0 === F) {
            g = null ;
            break a
          }
          F = g[m];
          g[m] = g[l];
          g[l] = F;
          for (m = l + 1; m < h; m++)
            for (F = -g[m][l] / g[l][l],
            y = l; y < h + 1; y++)
              g[m][y] = l == y ? 0 : g[m][y] + F * g[l][y]
        }
        l = Array(h);
        for (m = h - 1; 0 <= m; m--)
          for (l[m] = g[m][h] / g[m][m],
          F = m - 1; 0 <= F; F--)
            g[F][h] -= g[F][m] * l[m];
        g = l
      }
      g && (n.save(),
      n.beginPath(),
      ui ? (l = (a + G + O) / 3,
      m = (A + T + Q) / 3,
      h = vi(l, m, a, A),
      G = vi(l, m, G, T),
      O = vi(l, m, O, Q),
      n.moveTo(h[0], h[1]),
      n.lineTo(G[0], G[1]),
      n.lineTo(O[0], O[1])) : (n.moveTo(a, A),
      n.lineTo(G, T),
      n.lineTo(O, Q)),
      n.closePath(),
      n.clip(),
      n.transform(g[0], g[2], g[1], g[3], a, A),
      n.translate(p[0] - e, p[3] - b),
      n.scale(d / c, -d / c),
      n.drawImage(r.canvas, 0, 0),
      n.restore())
    });
    m && (n.save(),
    n.strokeStyle = "black",
    n.lineWidth = 1,
    h.pb.forEach(function(a) {
      var b = a.target;
      a = (b[0][0] - t[0]) / f;
      var c = -(b[0][1] - t[1]) / f
        , d = (b[1][0] - t[0]) / f
        , e = -(b[1][1] - t[1]) / f
        , g = (b[2][0] - t[0]) / f
        , b = -(b[2][1] - t[1]) / f;
      n.beginPath();
      n.moveTo(a, c);
      n.lineTo(d, e);
      n.lineTo(g, b);
      n.closePath();
      n.stroke()
    }),
    n.restore());
    return n.canvas
  }
  ;function xi(a, b, c, d, e) {
    this.nb = a;
    this.$d = b;
    var f = {}
      , g = uf(this.$d, this.nb);
    this.Za = function(a) {
      var b = a[0] + "/" + a[1];
      f[b] || (f[b] = g(a));
      return f[b]
    }
    ;
    this.tg = d;
    this.Xh = e * e;
    this.pb = [];
    this.kh = !1;
    this.Gh = this.nb.qe && !!d && !!this.nb.j() && Re(d) == Re(this.nb.j());
    this.ea = this.nb.j() ? Re(this.nb.j()) : null ;
    this.Vg = this.$d.j() ? Re(this.$d.j()) : null ;
    a = Xe(c);
    b = [c[2], c[3]];
    d = [c[2], c[1]];
    c = [c[0], c[1]];
    e = this.Za(a);
    var h = this.Za(b)
      , l = this.Za(d)
      , m = this.Za(c);
    yi(this, a, b, d, c, e, h, l, m, 10);
    if (this.kh) {
      var n = Infinity;
      this.pb.forEach(function(a) {
        n = Math.min(n, a.source[0][0], a.source[1][0], a.source[2][0])
      });
      this.pb.forEach(function(a) {
        if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.ea / 2) {
          var b = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
          b[0][0] - n > this.ea / 2 && (b[0][0] -= this.ea);
          b[1][0] - n > this.ea / 2 && (b[1][0] -= this.ea);
          b[2][0] - n > this.ea / 2 && (b[2][0] -= this.ea);
          Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.ea / 2 && (a.source = b)
        }
      }, this)
    }
    f = {}
  }
  function yi(a, b, c, d, e, f, g, h, l, m) {
    var n = Le([f, g, h, l])
      , p = a.ea ? Re(n) / a.ea : null
      , r = a.nb.qe && .5 < p && 1 > p
      , t = !1;
    if (0 < m) {
      if (a.$d.od && a.Vg)
        var v = Le([b, c, d, e])
          , t = t | .25 < Re(v) / a.Vg;
      !r && a.nb.od && p && (t |= .25 < p)
    }
    if (t || !a.tg || We(n, a.tg)) {
      if (!(t || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1])))
        if (0 < m)
          t = !0;
        else
          return;
      if (0 < m && (t || (p = a.Za([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]),
      n = r ? (sc(f[0], a.ea) + sc(h[0], a.ea)) / 2 - sc(p[0], a.ea) : (f[0] + h[0]) / 2 - p[0],
      p = (f[1] + h[1]) / 2 - p[1],
      t = n * n + p * p > a.Xh),
      t)) {
        Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2],
        n = a.Za(r),
        p = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2],
        t = a.Za(p),
        yi(a, b, c, r, p, f, g, n, t, m - 1),
        yi(a, p, r, d, e, t, n, h, l, m - 1)) : (r = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2],
        n = a.Za(r),
        p = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2],
        t = a.Za(p),
        yi(a, b, r, p, e, f, n, t, l, m - 1),
        yi(a, r, c, d, p, n, g, h, t, m - 1));
        return
      }
      if (r) {
        if (!a.Gh)
          return;
        a.kh = !0
      }
      a.pb.push({
        source: [f, h, l],
        target: [b, d, e]
      });
      a.pb.push({
        source: [f, g, h],
        target: [b, c, d]
      })
    }
  }
  function zi(a) {
    var b = Me();
    a.pb.forEach(function(a) {
      a = a.source;
      Ne(b, a[0]);
      Ne(b, a[1]);
      Ne(b, a[2])
    });
    return b
  }
  ;function Ai(a, b, c) {
    if (fa(a))
      c && (a = J(a, c));
    else if (a && "function" == typeof a.handleEvent)
      a = J(a.handleEvent, a);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : u.setTimeout(a, b || 0)
  }
  ;function Bi(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
      try {
        return eval("(" + a + ")")
      } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  }
  ;function Ci() {}
  Ci.prototype.Mf = null ;
  function Di(a) {
    return a.Mf || (a.Mf = a.ng())
  }
  ;var Ei;
  function Fi() {}
  K(Fi, Ci);
  Fi.prototype.Be = function() {
    var a = Gi(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest
  }
  ;
  Fi.prototype.ng = function() {
    var a = {};
    Gi(this) && (a[0] = !0,
    a[1] = !0);
    return a
  }
  ;
  function Gi(a) {
    if (!a.fg && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {
          return new ActiveXObject(d),
          a.fg = d
        } catch (e) {}
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.fg
  }
  Ei = new Fi;
  var Hi = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
  function Ii(a, b) {
    if (a)
      for (var c = a.split("\x26"), d = 0; d < c.length; d++) {
        var e = c[d].indexOf("\x3d")
          , f = null
          , g = null ;
        0 <= e ? (f = c[d].substring(0, e),
        g = c[d].substring(e + 1)) : f = c[d];
        b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
      }
  }
  ;function Ji(a) {
    W.call(this);
    this.headers = new tc;
    this.je = a || null ;
    this.$a = !1;
    this.ie = this.b = null ;
    this.Bd = this.We = "";
    this.Db = this.Pe = this.ud = this.He = !1;
    this.de = 0;
    this.ob = null ;
    this.Pg = Ki;
    this.Af = this.Rj = this.vk = !1
  }
  K(Ji, W);
  var Ki = ""
    , Li = /^https?$/i
    , Mi = ["POST", "PUT"];
  k = Ji.prototype;
  k.send = function(a, b, c, d) {
    if (this.b)
      throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.We + "; newUri\x3d" + a);
    b = b ? b.toUpperCase() : "GET";
    this.We = a;
    this.Bd = "";
    this.He = !1;
    this.$a = !0;
    this.b = this.je ? this.je.Be() : Ei.Be();
    this.ie = this.je ? Di(this.je) : Di(Ei);
    this.b.onreadystatechange = J(this.yg, this);
    this.Rj && "onprogress"in this.b && (this.b.onprogress = J(function(a) {
      this.xg(a, !0)
    }, this),
    this.b.upload && (this.b.upload.onprogress = J(this.xg, this)));
    try {
      this.Pe = !0,
      this.b.open(b, String(a), !0),
      this.Pe = !1
    } catch (f) {
      Ni(this, f);
      return
    }
    a = c || "";
    var e = this.headers.clone();
    d && rc(d, function(a, b) {
      e.set(b, a)
    });
    d = Fa(e.ra());
    c = u.FormData && a instanceof u.FormData;
    !(0 <= za(Mi, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
    e.forEach(function(a, b) {
      this.b.setRequestHeader(b, a)
    }, this);
    this.Pg && (this.b.responseType = this.Pg);
    fb(this.b, "withCredentials") && (this.b.withCredentials = this.vk);
    try {
      Oi(this),
      0 < this.de && ((this.Af = Pi(this.b)) ? (this.b.timeout = this.de,
      this.b.ontimeout = J(this.ah, this)) : this.ob = Ai(this.ah, this.de, this)),
      this.ud = !0,
      this.b.send(a),
      this.ud = !1
    } catch (f) {
      Ni(this, f)
    }
  }
  ;
  function Pi(a) {
    return N && xb(9) && H(a.timeout) && x(a.ontimeout)
  }
  function Ga(a) {
    return "content-type" == a.toLowerCase()
  }
  k.ah = function() {
    "undefined" != typeof aa && this.b && (this.Bd = "Timed out after " + this.de + "ms, aborting",
    this.dispatchEvent("timeout"),
    this.abort(8))
  }
  ;
  function Ni(a, b) {
    a.$a = !1;
    a.b && (a.Db = !0,
    a.b.abort(),
    a.Db = !1);
    a.Bd = b;
    Qi(a);
    Ri(a)
  }
  function Qi(a) {
    a.He || (a.He = !0,
    a.dispatchEvent("complete"),
    a.dispatchEvent("error"))
  }
  k.abort = function() {
    this.b && this.$a && (this.$a = !1,
    this.Db = !0,
    this.b.abort(),
    this.Db = !1,
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    Ri(this))
  }
  ;
  k.f = function() {
    this.b && (this.$a && (this.$a = !1,
    this.Db = !0,
    this.b.abort(),
    this.Db = !1),
    Ri(this, !0));
    Ji.G.f.call(this)
  }
  ;
  k.yg = function() {
    this.Pb || (this.Pe || this.ud || this.Db ? Si(this) : this.Cj())
  }
  ;
  k.Cj = function() {
    Si(this)
  }
  ;
  function Si(a) {
    if (a.$a && "undefined" != typeof aa && (!a.ie[1] || 4 != Ti(a) || 2 != Ui(a)))
      if (a.ud && 4 == Ti(a))
        Ai(a.yg, 0, a);
      else if (a.dispatchEvent("readystatechange"),
      4 == Ti(a)) {
        a.$a = !1;
        try {
          if (Vi(a))
            a.dispatchEvent("complete"),
            a.dispatchEvent("success");
          else {
            var b;
            try {
              b = 2 < Ti(a) ? a.b.statusText : ""
            } catch (c) {
              b = ""
            }
            a.Bd = b + " [" + Ui(a) + "]";
            Qi(a)
          }
        } finally {
          Ri(a)
        }
      }
  }
  k.xg = function(a, b) {
    this.dispatchEvent(Wi(a, "progress"));
    this.dispatchEvent(Wi(a, b ? "downloadprogress" : "uploadprogress"))
  }
  ;
  function Wi(a, b) {
    return {
      type: b,
      lengthComputable: a.lengthComputable,
      loaded: a.loaded,
      total: a.total
    }
  }
  function Ri(a, b) {
    if (a.b) {
      Oi(a);
      var c = a.b
        , d = a.ie[0] ? ba : null ;
      a.b = null ;
      a.ie = null ;
      b || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d
      } catch (e) {}
    }
  }
  function Oi(a) {
    a.b && a.Af && (a.b.ontimeout = null );
    H(a.ob) && (u.clearTimeout(a.ob),
    a.ob = null )
  }
  k.Qe = function() {
    return !!this.b
  }
  ;
  function Vi(a) {
    var b = Ui(a), c;
    a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      c = !0;
      break a;
    default:
      c = !1
    }
    if (!c) {
      if (b = 0 === b)
        a = String(a.We).match(Hi)[1] || null ,
        !a && u.self && u.self.location && (a = u.self.location.protocol,
        a = a.substr(0, a.length - 1)),
        b = !Li.test(a ? a.toLowerCase() : "");
      c = b
    }
    return c
  }
  function Ti(a) {
    return a.b ? a.b.readyState : 0
  }
  function Ui(a) {
    try {
      return 2 < Ti(a) ? a.b.status : -1
    } catch (b) {
      return -1
    }
  }
  k.getResponseHeader = function(a) {
    return this.b && 4 == Ti(this) ? this.b.getResponseHeader(a) : void 0
  }
  ;
  k.getAllResponseHeaders = function() {
    return this.b && 4 == Ti(this) ? this.b.getAllResponseHeaders() : ""
  }
  ;
  function Xi() {
    if (!N)
      return !1;
    try {
      return new ActiveXObject("MSXML2.DOMDocument"),
      !0
    } catch (a) {
      return !1
    }
  }
  var Yi = N && Xi();
  a: if (!document.implementation || !document.implementation.createDocument) {
    if (Yi) {
      var Zi = new ActiveXObject("MSXML2.DOMDocument");
      if (Zi) {
        Zi.resolveExternals = !1;
        Zi.validateOnParse = !1;
        try {
          Zi.setProperty("ProhibitDTD", !0),
          Zi.setProperty("MaxXMLSize", 2048),
          Zi.setProperty("MaxElementDepth", 256)
        } catch (a) {}
      }
      if (Zi)
        break a
    }
    throw Error("Your browser does not support creating new documents");
  }
  ;(function() {
    var a = {
      Yh: {}
    };
    (function() {
      function b(a, c) {
        if (!(this instanceof b))
          return new b(a,c);
        this.le = Math.max(4, a || 9);
        this.Gf = Math.max(2, Math.ceil(.4 * this.le));
        c && this.th(c);
        this.clear()
      }
      function c(a, b) {
        a.bbox = d(a, 0, a.children.length, b)
      }
      function d(a, b, c, d) {
        for (var f = [Infinity, Infinity, -Infinity, -Infinity], g; b < c; b++)
          g = a.children[b],
          e(f, a.W ? d(g) : g.bbox);
        return f
      }
      function e(a, b) {
        a[0] = Math.min(a[0], b[0]);
        a[1] = Math.min(a[1], b[1]);
        a[2] = Math.max(a[2], b[2]);
        a[3] = Math.max(a[3], b[3])
      }
      function f(a, b) {
        return a.bbox[0] - b.bbox[0]
      }
      function g(a, b) {
        return a.bbox[1] - b.bbox[1]
      }
      function h(a) {
        return (a[2] - a[0]) * (a[3] - a[1])
      }
      function l(a) {
        return a[2] - a[0] + (a[3] - a[1])
      }
      function m(a, b) {
        return a[0] <= b[0] && a[1] <= b[1] && b[2] <= a[2] && b[3] <= a[3]
      }
      function n(a, b) {
        return b[0] <= a[2] && b[1] <= a[3] && b[2] >= a[0] && b[3] >= a[1]
      }
      function p(a, b, c, d, e) {
        for (var f = [b, c], g; f.length; )
          c = f.pop(),
          b = f.pop(),
          c - b <= d || (g = b + Math.ceil((c - b) / d / 2) * d,
          r(a, b, c, g, e),
          f.push(b, g, g, c))
      }
      function r(a, b, c, d, e) {
        for (var f, g, h, l, m; c > b; ) {
          600 < c - b && (f = c - b + 1,
          g = d - b + 1,
          h = Math.log(f),
          l = .5 * Math.exp(2 * h / 3),
          m = .5 * Math.sqrt(h * l * (f - l) / f) * (0 > g - f / 2 ? -1 : 1),
          h = Math.max(b, Math.floor(d - g * l / f + m)),
          g = Math.min(c, Math.floor(d + (f - g) * l / f + m)),
          r(a, h, g, d, e));
          f = a[d];
          g = b;
          l = c;
          t(a, b, d);
          for (0 < e(a[c], f) && t(a, b, c); g < l; ) {
            t(a, g, l);
            g++;
            for (l--; 0 > e(a[g], f); )
              g++;
            for (; 0 < e(a[l], f); )
              l--
          }
          0 === e(a[b], f) ? t(a, b, l) : (l++,
          t(a, l, c));
          l <= d && (b = l + 1);
          d <= l && (c = l - 1)
        }
      }
      function t(a, b, c) {
        var d = a[b];
        a[b] = a[c];
        a[c] = d
      }
      b.prototype = {
        all: function() {
          return this.Cf(this.data, [])
        },
        search: function(a) {
          var b = this.data
            , c = []
            , d = this.ha;
          if (!n(a, b.bbox))
            return c;
          for (var e = [], f, g, h, l; b; ) {
            f = 0;
            for (g = b.children.length; f < g; f++)
              h = b.children[f],
              l = b.W ? d(h) : h.bbox,
              n(a, l) && (b.W ? c.push(h) : m(a, l) ? this.Cf(h, c) : e.push(h));
            b = e.pop()
          }
          return c
        },
        load: function(a) {
          if (!a || !a.length)
            return this;
          if (a.length < this.Gf) {
            for (var b = 0, c = a.length; b < c; b++)
              this.Vi(a[b]);
            return this
          }
          a = this.Ef(a.slice(), 0, a.length - 1, 0);
          this.data.children.length ? this.data.height === a.height ? this.Hf(this.data, a) : (this.data.height < a.height && (b = this.data,
          this.data = a,
          a = b),
          this.Ff(a, this.data.height - a.height - 1, !0)) : this.data = a;
          return this
        },
        Vi: function(a) {
          a && this.Ff(a, this.data.height - 1);
          return this
        },
        clear: function() {
          this.data = {
            children: [],
            height: 1,
            bbox: [Infinity, Infinity, -Infinity, -Infinity],
            W: !0
          };
          return this
        },
        remove: function(a) {
          if (!a)
            return this;
          for (var b = this.data, c = this.ha(a), d = [], e = [], f, g, h, l; b || d.length; ) {
            b || (b = d.pop(),
            g = d[d.length - 1],
            f = e.pop(),
            l = !0);
            if (b.W && (h = b.children.indexOf(a),
            -1 !== h)) {
              b.children.splice(h, 1);
              d.push(b);
              this.sh(d);
              break
            }
            l || b.W || !m(b.bbox, c) ? g ? (f++,
            b = g.children[f],
            l = !1) : b = null : (d.push(b),
            e.push(f),
            f = 0,
            g = b,
            b = b.children[0])
          }
          return this
        },
        ha: function(a) {
          return a
        },
        we: function(a, b) {
          return a[0] - b[0]
        },
        xe: function(a, b) {
          return a[1] - b[1]
        },
        toJSON: function() {
          return this.data
        },
        Cf: function(a, b) {
          for (var c = []; a; )
            a.W ? b.push.apply(b, a.children) : c.push.apply(c, a.children),
            a = c.pop();
          return b
        },
        Ef: function(a, b, d, e) {
          var f = d - b + 1, g = this.le, h;
          if (f <= g)
            return h = {
              children: a.slice(b, d + 1),
              height: 1,
              bbox: null ,
              W: !0
            },
            c(h, this.ha),
            h;
          e || (e = Math.ceil(Math.log(f) / Math.log(g)),
          g = Math.ceil(f / Math.pow(g, e - 1)));
          h = {
            children: [],
            height: e,
            bbox: null
          };
          var f = Math.ceil(f / g), g = f * Math.ceil(Math.sqrt(g)), l, m, n;
          for (p(a, b, d, g, this.we); b <= d; b += g)
            for (m = Math.min(b + g - 1, d),
            p(a, b, m, f, this.xe),
            l = b; l <= m; l += f)
              n = Math.min(l + f - 1, m),
              h.children.push(this.Ef(a, l, n, e - 1));
          c(h, this.ha);
          return h
        },
        rh: function(a, b, c, d) {
          for (var e, f, g, l, m, n, p, r; ; ) {
            d.push(b);
            if (b.W || d.length - 1 === c)
              break;
            p = r = Infinity;
            e = 0;
            for (f = b.children.length; e < f; e++)
              g = b.children[e],
              m = h(g.bbox),
              n = g.bbox,
              n = (Math.max(n[2], a[2]) - Math.min(n[0], a[0])) * (Math.max(n[3], a[3]) - Math.min(n[1], a[1])) - m,
              n < r ? (r = n,
              p = m < p ? m : p,
              l = g) : n === r && m < p && (p = m,
              l = g);
            b = l
          }
          return b
        },
        Ff: function(a, b, c) {
          var d = this.ha;
          c = c ? a.bbox : d(a);
          var d = []
            , f = this.rh(c, this.data, b, d);
          f.children.push(a);
          for (e(f.bbox, c); 0 <= b; )
            if (d[b].children.length > this.le)
              this.uh(d, b),
              b--;
            else
              break;
          this.oh(c, d, b)
        },
        uh: function(a, b) {
          var d = a[b]
            , e = d.children.length
            , f = this.Gf;
          this.ph(d, f, e);
          e = this.qh(d, f, e);
          e = {
            children: d.children.splice(e, d.children.length - e),
            height: d.height
          };
          d.W && (e.W = !0);
          c(d, this.ha);
          c(e, this.ha);
          b ? a[b - 1].children.push(e) : this.Hf(d, e)
        },
        Hf: function(a, b) {
          this.data = {
            children: [a, b],
            height: a.height + 1
          };
          c(this.data, this.ha)
        },
        qh: function(a, b, c) {
          var e, f, g, l, m, n, p;
          m = n = Infinity;
          for (e = b; e <= c - b; e++)
            f = d(a, 0, e, this.ha),
            g = d(a, e, c, this.ha),
            l = Math.max(0, Math.min(f[2], g[2]) - Math.max(f[0], g[0])) * Math.max(0, Math.min(f[3], g[3]) - Math.max(f[1], g[1])),
            f = h(f) + h(g),
            l < m ? (m = l,
            p = e,
            n = f < n ? f : n) : l === m && f < n && (n = f,
            p = e);
          return p
        },
        ph: function(a, b, c) {
          var d = a.W ? this.we : f
            , e = a.W ? this.xe : g
            , h = this.Df(a, b, c, d);
          b = this.Df(a, b, c, e);
          h < b && a.children.sort(d)
        },
        Df: function(a, b, c, f) {
          a.children.sort(f);
          f = this.ha;
          var g = d(a, 0, b, f), h = d(a, c - b, c, f), m = l(g) + l(h), n, p;
          for (n = b; n < c - b; n++)
            p = a.children[n],
            e(g, a.W ? f(p) : p.bbox),
            m += l(g);
          for (n = c - b - 1; n >= b; n--)
            p = a.children[n],
            e(h, a.W ? f(p) : p.bbox),
            m += l(h);
          return m
        },
        oh: function(a, b, c) {
          for (; 0 <= c; c--)
            e(b[c].bbox, a)
        },
        sh: function(a) {
          for (var b = a.length - 1, d; 0 <= b; b--)
            0 === a[b].children.length ? 0 < b ? (d = a[b - 1].children,
            d.splice(d.indexOf(a[b]), 1)) : this.clear() : c(a[b], this.ha)
        },
        th: function(a) {
          var b = ["return a", " - b", ";"];
          this.we = new Function("a","b",b.join(a[0]));
          this.xe = new Function("a","b",b.join(a[1]));
          this.ha = new Function("a","return [a" + a.join(", a") + "];")
        }
      };
      "undefined" !== typeof a ? a.Yh = b : "undefined" !== typeof self ? self.Tj = b : window.Tj = b
    })()
  })();
  function $i(a) {
    ri.call(this, a);
    this.Ba = this.o = null ;
    this.se = !1;
    this.u = null ;
    this.jg = qd();
    this.Lg = this.Mg = this.Jg = NaN;
    this.Td = this.Ib = null ;
    this.Kb = [0, 0]
  }
  K($i, ri);
  $i.prototype.Fa = function() {
    return this.o
  }
  ;
  $i.prototype.jf = function(a, b) {
    var c = a.da, d = a.i, e = d.projection, f = this.Ye, g = Bf(f), h = g.gb(e), l = Rf(h, d.resolution), m = Xf(g, l, e), n = m[0] / Ke(Qf(h, l), this.Kb)[0], p = h.h(l), n = p / n, r = d.center, t;
    p == d.resolution ? (r = fg(r, p, a.size),
    t = Ue(r, p, d.rotation, a.size)) : t = a.extent;
    void 0 !== b.extent && (t = Ve(t, b.extent));
    if (t[2] < t[0] || t[3] < t[1])
      return !1;
    var v = Nf(h, t, p), z = m[0] * v.Vb(), q = m[1] * v.Tb(), w, B;
    this.o ? (w = this.o,
    B = this.u,
    this.Ba[0] < z || this.Ba[1] < q || this.Mg !== m[0] || this.Lg !== m[1] || this.se && (this.Ba[0] > z || this.Ba[1] > q) ? (w.width = z,
    w.height = q,
    this.Ba = [z, q],
    this.se = !si(this.Ba),
    this.Ib = null ) : (z = this.Ba[0],
    q = this.Ba[1],
    (w = l != this.Jg) || (w = this.Ib,
    w = !(w.A <= v.A && v.S <= w.S && w.K <= v.K && v.J <= w.J)),
    w && (this.Ib = null ))) : (B = Ld(z, q),
    this.o = B.canvas,
    this.Ba = [z, q],
    this.u = B,
    this.se = !si(this.Ba));
    var D, E;
    this.Ib ? (q = this.Ib,
    z = q.Vb()) : (z /= m[0],
    q /= m[1],
    D = v.A - Math.floor((z - v.Vb()) / 2),
    E = v.K - Math.floor((q - v.Tb()) / 2),
    this.Jg = l,
    this.Mg = m[0],
    this.Lg = m[1],
    this.Ib = new cf(D,D + z - 1,E,E + q - 1),
    this.Td = Array(z * q),
    q = this.Ib);
    w = {};
    w[l] = {};
    var A = [], G = bg(g, e, w), T = f.get("useInterimTilesOnError"), O = Me(), Q = new cf(0,0,0,0), F, y, L;
    for (E = v.A; E <= v.S; ++E)
      for (L = v.K; L <= v.J; ++L)
        y = hg(g, l, E, L, c, e),
        D = y.I(),
        2 == D || 4 == D || 3 == D && !T ? w[l][bf(y.l)] = y : (F = Jf(h, y.l, G, Q, O),
        F || (A.push(y),
        (F = Mf(h, y.l, Q, O)) && G(l + 1, F)));
    G = 0;
    for (F = A.length; G < F; ++G)
      y = A[G],
      E = m[0] * (y.l[1] - q.A),
      L = m[1] * (q.J - y.l[2]),
      B.clearRect(E, L, m[0], m[1]);
    A = Object.keys(w).map(Number);
    Ma(A);
    var P = g.Dj, Ca = Xe(Kf(h, [l, q.A, q.J], O)), Xa, Da, sd, uc, nb, Ye, G = 0;
    for (F = A.length; G < F; ++G)
      if (Xa = A[G],
      m = Xf(g, Xa, e),
      uc = w[Xa],
      Xa == l)
        for (sd in uc)
          y = uc[sd],
          Da = (y.l[2] - q.K) * z + (y.l[1] - q.A),
          this.Td[Da] != y && (E = m[0] * (y.l[1] - q.A),
          L = m[1] * (q.J - y.l[2]),
          D = y.I(),
          4 != D && (3 != D || T) && P || B.clearRect(E, L, m[0], m[1]),
          2 == D && B.drawImage(y.Fa(), 0, 0, m[0], m[1], E, L, m[0], m[1]),
          this.Td[Da] = y);
      else
        for (sd in Xa = h.h(Xa) / p,
        uc)
          for (y = uc[sd],
          Da = Kf(h, y.l, O),
          E = (Da[0] - Ca[0]) / n,
          L = (Ca[1] - Da[3]) / n,
          Ye = Xa * m[0],
          nb = Xa * m[1],
          D = y.I(),
          4 != D && P || B.clearRect(E, L, Ye, nb),
          2 == D && B.drawImage(y.Fa(), 0, 0, m[0], m[1], E, L, Ye, nb),
          y = Lf(h, Da, l, Q),
          D = Math.max(y.A, q.A),
          L = Math.min(y.S, q.S),
          E = Math.max(y.K, q.K),
          y = Math.min(y.J, q.J); D <= L; ++D)
            for (nb = E; nb <= y; ++nb)
              Da = (nb - q.K) * z + (D - q.A),
              this.Td[Da] = void 0;
    eg(a.fe, g, l, v);
    gg(a, g, h, c, e, t, l, f.get("preload"));
    cg(a, g);
    dg(a, g);
    Zf(this.jg, c * a.size[0] / 2, c * a.size[1] / 2, c * n / d.resolution, c * n / d.resolution, d.rotation, (Ca[0] - r[0]) / n, (r[1] - Ca[1]) / n);
    return !0
  }
  ;
  function aj(a, b) {
    var c = /\{z\}/g
      , d = /\{x\}/g
      , e = /\{y\}/g
      , f = /\{-y\}/g;
    return function(g) {
      if (g)
        return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function() {
          return (-g[2] - 1).toString()
        }).replace(f, function() {
          return ((b.Sb ? b.Sb[g[0]] : null ).Tb() + g[2]).toString()
        })
    }
  }
  function bj(a, b) {
    for (var c = a.length, d = Array(c), e = 0; e < c; ++e)
      d[e] = aj(a[e], b);
    return cj(d)
  }
  function cj(a) {
    return 1 === a.length ? a[0] : function(b, c, d) {
      if (b)
        return a[sc((b[1] << b[0]) + b[2], a.length)](b, c, d)
    }
  }
  function dj() {}
  ;function ej(a) {
    Vf.call(this, {
      Pa: a.Pa,
      Lf: a.Lf,
      extent: a.extent,
      ta: a.ta,
      Jc: a.Jc,
      projection: a.projection,
      state: a.state ? a.state : void 0,
      ga: a.ga,
      pc: a.pc,
      Mb: a.Mb
    });
    this.oc = a.oc;
    this.Ma = a.Ma ? a.Ma : dj;
    this.rb = null ;
    if (a.rb)
      if (a.Ma)
        this.rb = a.rb;
      else {
        var b = a.rb;
        fj(this, bj(b, this.ga));
        this.rb = b
      }
    else if (a.url) {
      var b = a.url
        , c = []
        , d = /\{(\d)-(\d)\}/.exec(b) || /\{([a-z])-([a-z])\}/.exec(b);
      if (d) {
        var e = d[2].charCodeAt(0), f;
        for (f = d[1].charCodeAt(0); f <= e; ++f)
          c.push(b.replace(d[0], String.fromCharCode(f)))
      } else
        c.push(b);
      fj(this, bj(c, this.ga));
      this.rb = [b]
    }
    a.Ma && fj(this, a.Ma)
  }
  K(ej, Vf);
  ej.prototype.qd = function(a) {
    a = a.target;
    switch (a.I()) {
    case 1:
      this.dispatchEvent(new Yf("tileloadstart",a));
      break;
    case 2:
      this.dispatchEvent(new Yf("tileloadend",a));
      break;
    case 3:
      this.dispatchEvent(new Yf("tileloaderror",a))
    }
  }
  ;
  function gj(a, b) {
    a.fa.clear();
    a.oc = b;
    a.F()
  }
  function fj(a, b) {
    a.fa.clear();
    a.Ma = b;
    a.F()
  }
  ej.prototype.hh = function(a, b, c) {
    a = this.jd(a, b, c);
    this.fa.Ca(a) && this.fa.get(a)
  }
  ;
  function hj(a, b) {
    jg.call(this, 0, b);
    this.u = Ld();
    this.o = this.u.canvas;
    this.o.style.width = "100%";
    this.o.style.height = "100%";
    this.o.className = "ol-unselectable";
    Ic(a, this.o, 0);
    this.L = !0;
    this.X = qd()
  }
  K(hj, jg);
  k = hj.prototype;
  k.Tf = function(a) {
    return a instanceof ii ? new $i(a) : null
  }
  ;
  k.bb = function(a, b) {
    var c = this.a
      , d = this.u;
    if (c.hasListener(a)) {
      var e = b.extent
        , f = b.da
        , g = b.i.rotation
        , h = this.Le(b)
        , e = new ji(d,f,e,h,g);
      c.dispatchEvent(new zf(a,c,e,b,d,null ));
      e.flush()
    }
  }
  ;
  k.Le = function(a) {
    var b = a.da;
    a = a.i;
    var c = a.resolution;
    return Zf(this.X, this.o.width / 2, this.o.height / 2, b / c, -b / c, -a.rotation, -a.center[0], -a.center[1])
  }
  ;
  k.nd = function() {
    return "canvas"
  }
  ;
  k.mf = function(a) {
    if (a) {
      var b = this.u
        , c = a.size[0] * a.da
        , d = a.size[1] * a.da;
      this.o.width != c || this.o.height != d ? (this.o.width = c,
      this.o.height = d) : b.clearRect(0, 0, this.o.width, this.o.height);
      kg(a);
      this.bb("precompose", a);
      c = a.Fd;
      Oa(c);
      var d = a.i.resolution, e, f, g, h;
      e = 0;
      for (f = c.length; e < f; ++e)
        h = c[e],
        g = h.Cd,
        g = mg(this, g),
        h.visible && d >= h.Ja && d < h.Ua && "ready" == h.Tg && g.jf(a, h) && g.ye(a, h, b);
      this.bb("postcompose", a);
      this.L || (gd(this.o, !0),
      this.L = !0);
      ng(this, a);
      a.Mc.push(lg)
    } else
      this.L && (gd(this.o, !1),
      this.L = !1)
  }
  ;
  function ij(a, b) {
    ag.call(this, a);
    this.target = b
  }
  K(ij, ag);
  ij.prototype.Pf = Dd;
  ij.prototype.ye = Dd;
  ij.prototype.md = function() {
    return this.target
  }
  ;
  function jj(a) {
    var b = document.createElement("DIV");
    b.style.position = "absolute";
    ij.call(this, a, b);
    this.L = !0;
    this.Kg = 1;
    this.nf = 0;
    this.ya = {}
  }
  K(jj, ij);
  jj.prototype.Pf = function() {
    for (var a = this.target, b; b = a.firstChild; )
      a.removeChild(b);
    this.nf = 0
  }
  ;
  jj.prototype.jf = function(a, b) {
    if (!b.visible)
      return this.L && (gd(this.target, !1),
      this.L = !1),
      !0;
    var c = a.da, d = a.i, e = d.projection, f = this.Ye, g = Bf(f), h = g.gb(e), l = Rf(h, d.resolution), m = h.h(l), n = d.center, p;
    m == d.resolution ? (n = fg(n, m, a.size),
    p = Ue(n, m, d.rotation, a.size)) : p = a.extent;
    void 0 !== b.extent && (p = Ve(p, b.extent));
    var m = Nf(h, p, m)
      , r = {};
    r[l] = {};
    var t = bg(g, e, r), v = f.get("useInterimTilesOnError"), z = Me(), q = new cf(0,0,0,0), w, B, D, E;
    for (D = m.A; D <= m.S; ++D)
      for (E = m.K; E <= m.J; ++E)
        w = hg(g, l, D, E, c, e),
        B = w.I(),
        2 == B ? r[l][bf(w.l)] = w : 4 == B || 3 == B && !v || (B = Jf(h, w.l, t, q, z),
        B || (w = Mf(h, w.l, q, z)) && t(l + 1, w));
    var A;
    if (this.nf != g.Ya) {
      for (A in this.ya)
        v = this.ya[+A],
        Jc(v.target);
      this.ya = {};
      this.nf = g.Ya
    }
    z = Object.keys(r).map(Number);
    Ma(z);
    var t = {}, G;
    D = 0;
    for (E = z.length; D < E; ++D) {
      A = z[D];
      A in this.ya ? v = this.ya[A] : (v = Sf(h, n, A),
      v = new kj(h,v),
      t[A] = !0,
      this.ya[A] = v);
      A = r[A];
      for (G in A) {
        w = v;
        B = A[G];
        var T = B.l
          , O = T[0]
          , Q = T[1]
          , F = T[2]
          , T = bf(T);
        if (!(T in w.Wc)) {
          var O = Ke(Qf(w.Xg, O), w.Kb)
            , y = B.Fa(w)
            , L = y.style;
          L.maxWidth = "none";
          var P = void 0
            , Ca = void 0;
          L.width = O[0] + "px";
          L.height = O[1] + "px";
          P = y;
          Ca = L;
          Ca.position = "absolute";
          Ca.left = (Q - w.uf[1]) * O[0] + "px";
          Ca.top = (w.uf[2] - F) * O[1] + "px";
          w.Qb || (w.Qb = document.createDocumentFragment());
          w.Qb.appendChild(P);
          w.Wc[T] = B
        }
      }
      v.Qb && (v.target.appendChild(v.Qb),
      v.Qb = null )
    }
    G = Object.keys(this.ya).map(Number);
    Ma(G);
    E = qd();
    z = 0;
    for (D = G.length; z < D; ++z)
      if (A = G[z],
      v = this.ya[A],
      A in r)
        if (B = v.h(),
        w = v.Ec(),
        Zf(E, a.size[0] / 2, a.size[1] / 2, B / d.resolution, B / d.resolution, d.rotation, (w[0] - n[0]) / B, (n[1] - w[1]) / B),
        v.setTransform(E),
        A in t) {
          for (--A; 0 <= A; --A)
            if (A in this.ya) {
              w = this.ya[A].target;
              w.parentNode && w.parentNode.insertBefore(v.target, w.nextSibling);
              break
            }
          0 > A && Ic(this.target, v.target, 0)
        } else {
          if (!a.O[0] && !a.O[1]) {
            Q = Lf(v.Xg, p, v.uf[0], q);
            A = [];
            B = w = void 0;
            for (B in v.Wc)
              w = v.Wc[B],
              Q.contains(w.l) || A.push(w);
            F = Q = void 0;
            Q = 0;
            for (F = A.length; Q < F; ++Q)
              w = A[Q],
              B = bf(w.l),
              Jc(w.Fa(v)),
              delete v.Wc[B]
          }
        }
      else
        Jc(v.target),
        delete this.ya[A];
    b.opacity != this.Kg && (this.Kg = this.target.style.opacity = b.opacity);
    b.visible && !this.L && (gd(this.target, !0),
    this.L = !0);
    eg(a.fe, g, l, m);
    gg(a, g, h, c, e, p, l, f.get("preload"));
    cg(a, g);
    dg(a, g);
    return !0
  }
  ;
  function kj(a, b) {
    this.target = document.createElement("DIV");
    this.target.style.position = "absolute";
    this.target.style.width = "100%";
    this.target.style.height = "100%";
    this.Xg = a;
    this.uf = b;
    this.hc = Xe(Kf(a, b));
    this.ak = a.h(b[0]);
    this.Wc = {};
    this.Qb = null ;
    var c = Array(16);
    rd(c, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    this.X = c;
    this.Kb = [0, 0]
  }
  kj.prototype.Ec = function() {
    return this.hc
  }
  ;
  kj.prototype.h = function() {
    return this.ak
  }
  ;
  kj.prototype.setTransform = function(a) {
    var b = this.X;
    if (a[0] != b[0] || a[1] != b[1] || a[4] != b[4] || a[5] != b[5] || a[12] != b[12] || a[13] != b[13]) {
      var b = this.target, c;
      if (Nd()) {
        var d = Array(16);
        for (c = 0; 16 > c; ++c)
          d[c] = a[c].toFixed(6);
        Od(b, "matrix3d(" + d.join(",") + ")")
      } else if (Md()) {
        var d = [a[0], a[1], a[4], a[5], a[12], a[13]]
          , e = Array(6);
        for (c = 0; 6 > c; ++c)
          e[c] = d[c].toFixed(6);
        Od(b, "matrix(" + e.join(",") + ")")
      } else
        b.style.left = Math.round(a[12]) + "px",
        b.style.top = Math.round(a[13]) + "px";
      b = this.X;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      b[3] = a[3];
      b[4] = a[4];
      b[5] = a[5];
      b[6] = a[6];
      b[7] = a[7];
      b[8] = a[8];
      b[9] = a[9];
      b[10] = a[10];
      b[11] = a[11];
      b[12] = a[12];
      b[13] = a[13];
      b[14] = a[14];
      b[15] = a[15]
    }
  }
  ;
  function lj(a, b) {
    jg.call(this, 0, b);
    this.u = Ld();
    var c = this.u.canvas;
    c.style.position = "absolute";
    c.style.width = "100%";
    c.style.height = "100%";
    c.className = "ol-unselectable";
    Ic(a, c, 0);
    this.X = qd();
    this.jb = document.createElement("DIV");
    this.jb.className = "ol-unselectable";
    c = this.jb.style;
    c.position = "absolute";
    c.width = "100%";
    c.height = "100%";
    U(this.jb, "touchstart", Eb);
    Ic(a, this.jb, 0);
    this.L = !0
  }
  K(lj, jg);
  k = lj.prototype;
  k.f = function() {
    Jc(this.jb);
    lj.G.f.call(this)
  }
  ;
  k.Tf = function(a) {
    if (a instanceof ii)
      a = new jj(a);
    else
      return null ;
    return a
  }
  ;
  k.bb = function(a, b) {
    var c = this.a;
    if (c.hasListener(a)) {
      var d = b.extent
        , e = b.da
        , f = b.i
        , g = f.rotation
        , h = this.u
        , l = h.canvas;
      Zf(this.X, l.width / 2, l.height / 2, e / f.resolution, -e / f.resolution, -f.rotation, -f.center[0], -f.center[1]);
      d = new ji(h,e,d,this.X,g);
      c.dispatchEvent(new zf(a,c,d,b,h,null ));
      d.flush()
    }
  }
  ;
  k.nd = function() {
    return "dom"
  }
  ;
  k.mf = function(a) {
    if (a) {
      var b = this.a;
      if (b.hasListener("precompose") || b.hasListener("postcompose")) {
        var b = this.u.canvas
          , c = a.da;
        b.width = a.size[0] * c;
        b.height = a.size[1] * c
      }
      this.bb("precompose", a);
      b = a.Fd;
      Oa(b);
      var c = a.i.resolution, d, e, f, g;
      d = 0;
      for (e = b.length; d < e; ++d)
        g = b[d],
        f = g.Cd,
        f = mg(this, f),
        Ic(this.jb, f.md(), d),
        g.visible && c >= g.Ja && c < g.Ua && "ready" == g.Tg ? f.jf(a, g) && f.ye(a, g) : f.Pf();
      var b = a.Ed, h;
      for (h in this.Ia)
        h in b || (f = this.Ia[h],
        Jc(f.md()));
      this.L || (gd(this.jb, !0),
      this.L = !0);
      kg(a);
      ng(this, a);
      a.Mc.push(lg);
      this.bb("postcompose", a)
    } else
      this.L && (gd(this.jb, !1),
      this.L = !1)
  }
  ;
  var mj = ["canvas", "webgl", "dom"];
  function nj(a) {
    X.call(this);
    var b = oj(a);
    this.bj = void 0 !== a.aj ? a.aj : !1;
    this.dj = void 0 !== a.cj ? a.cj : !1;
    this.Od = void 0 !== a.da ? a.da : Pd;
    this.gj = b.gc;
    this.oe = new lc(this.Xj,void 0,this);
    Va(this, this.oe);
    this.Jh = qd();
    this.Kj = qd();
    this.$h = 0;
    this.Bb = null ;
    this.Gg = Me();
    this.Dd = this.ge = null ;
    this.H = Fc("DIV", "ol-viewport");
    this.H.style.position = "relative";
    this.H.style.overflow = "hidden";
    this.H.style.width = "100%";
    this.H.style.height = "100%";
    this.H.style.msTouchAction = "none";
    this.H.style.touchAction = "none";
    Sd && Rc(this.H, "ol-touch");
    this.ef = Fc("DIV", "ol-overlaycontainer");
    this.H.appendChild(this.ef);
    this.df = Fc("DIV", "ol-overlaycontainer-stopevent");
    U(this.df, ["click", "dblclick", "mousedown", "touchstart", "MSPointerDown", Ge, pb ? "DOMMouseScroll" : "mousewheel"], Db);
    this.H.appendChild(this.df);
    a = new ye(this);
    U(a, db(Je), this.dg, !1, this);
    Va(this, a);
    this.og = b.Hc;
    this.xd = new Xc;
    U(this.xd, "key", this.bg, !1, this);
    Va(this, this.xd);
    a = new ld(this.H);
    U(a, "mousewheel", this.bg, !1, this);
    Va(this, a);
    this.Ae = b.controls;
    this.Gc = b.bc;
    this.ff = b.Lc;
    this.Bg = {};
    this.Ng = new b.Zj(this.H,this);
    Va(this, this.Ng);
    this.jh = new Oc;
    Va(this, this.jh);
    this.Ie = this.Zc = null ;
    this.Rd = [];
    this.Eg = [];
    this.Zg = new rg(J(this.fi, this),J(this.Ji, this));
    this.ck = {};
    U(this, yd("layergroup"), this.pi, !1, this);
    U(this, yd("view"), this.Mi, !1, this);
    U(this, yd("size"), this.Fi, !1, this);
    U(this, yd("target"), this.Ii, !1, this);
    this.Rc(b.values);
    this.Ae.forEach(function(a) {
      a.setMap(this)
    }, this);
    U(this.Ae, "add", function(a) {
      a.element.setMap(this)
    }, !1, this);
    U(this.Ae, "remove", function(a) {
      a.element.setMap(null )
    }, !1, this);
    this.Gc.forEach(function(a) {
      a.setMap(this)
    }, this);
    U(this.Gc, "add", function(a) {
      a.element.setMap(this)
    }, !1, this);
    U(this.Gc, "remove", function(a) {
      a.element.setMap(null )
    }, !1, this);
    this.ff.forEach(this.Jf, this);
    U(this.ff, "add", function(a) {
      this.Jf(a.element)
    }, !1, this);
    U(this.ff, "remove", function(a) {
      var b = a.element.bi();
      void 0 !== b && delete this.Bg[b.toString()];
      a.element.setMap(null )
    }, !1, this)
  }
  K(nj, X);
  k = nj.prototype;
  k.Jf = function(a) {
    var b = a.bi();
    void 0 !== b && (this.Bg[b.toString()] = a);
    a.setMap(this)
  }
  ;
  k.ia = function(a) {
    this.render();
    Array.prototype.push.apply(this.Rd, arguments)
  }
  ;
  k.f = function() {
    Jc(this.H);
    nj.G.f.call(this)
  }
  ;
  k.md = function() {
    return this.get("target")
  }
  ;
  function pj(a) {
    a = a.md();
    return void 0 !== a ? Bc(a) : null
  }
  k.Bc = function(a) {
    var b = this.Bb;
    return b ? (a = a.slice(),
    $f(b.Cg, a, a)) : null
  }
  ;
  k.kd = function() {
    return this.get("layergroup").kd()
  }
  ;
  k.Cb = function() {
    return this.get("size")
  }
  ;
  function Y(a) {
    return a.get("view")
  }
  k.fi = function(a, b, c, d) {
    var e = this.Bb;
    if (!(e && b in e.sc && e.sc[b][bf(a.l)]))
      return Infinity;
    a = c[0] - e.focus[0];
    c = c[1] - e.focus[1];
    return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
  }
  ;
  k.bg = function(a, b) {
    var c = new we(b || a.type,this,a);
    this.dg(c)
  }
  ;
  k.dg = function(a) {
    if (this.Bb) {
      this.Ie = a.coordinate;
      a.frameState = this.Bb;
      var b = this.Gc.Aa, c;
      if (!1 !== this.dispatchEvent(a))
        for (c = b.length - 1; 0 <= c; c--) {
          var d = b[c];
          if (d.get("active") && !d.handleEvent(a))
            break
        }
    }
  }
  ;
  k.Ci = function() {
    var a = this.Bb
      , b = this.Zg;
    if (!b.wd()) {
      var c = 16
        , d = c
        , e = 0;
      a && (e = a.O,
      e[0] && (c = this.bj ? 8 : 0,
      d = 2),
      e[1] && (c = this.dj ? 8 : 0,
      d = 2),
      e = cb(a.sc));
      c *= e;
      d *= e;
      if (b.ce < c) {
        var e = b.Hg, f = b.Da, g = b.kc, h = 0, l = f.length, m, n, p;
        for (n = 0; n < l; ++n)
          m = f[n],
          p = e(m),
          Infinity == p ? delete b.Nc[b.Te(m)] : (g[h] = p,
          f[h++] = m);
        f.length = h;
        g.length = h;
        for (e = (b.Da.length >> 1) - 1; 0 <= e; e--)
          qg(b, e);
        for (e = 0; b.ce < c && e < d && 0 < b.Cc(); )
          f = b,
          h = f.Da,
          l = f.kc,
          g = h[0],
          1 == h.length ? (h.length = 0,
          l.length = 0) : (h[0] = h.pop(),
          l[0] = l.pop(),
          qg(f, 0)),
          h = f.Te(g),
          delete f.Nc[h],
          f = g[0],
          0 === f.I() && (U(f, "change", b.qd, !1, b),
          f.load(),
          ++b.ce,
          ++e)
      }
    }
    b = this.Eg;
    d = 0;
    for (c = b.length; d < c; ++d)
      b[d](this, a);
    b.length = 0
  }
  ;
  k.Fi = function() {
    this.render()
  }
  ;
  k.Ii = function() {
    var a = pj(this);
    this.xd.detach();
    a ? (a.appendChild(this.H),
    Yc(this.xd, this.og ? this.og : a),
    this.Zc || (this.Zc = U(this.jh, "resize", this.fh, !1, this))) : (Jc(this.H),
    this.Zc && (V(this.Zc),
    this.Zc = null ));
    this.fh()
  }
  ;
  k.Ji = function() {
    this.render()
  }
  ;
  k.Ni = function() {
    this.render()
  }
  ;
  k.Mi = function() {
    this.ge && (V(this.ge),
    this.ge = null );
    var a = Y(this);
    a && (this.ge = U(a, "propertychange", this.Ni, !1, this));
    this.render()
  }
  ;
  k.ri = function() {
    this.render()
  }
  ;
  k.si = function() {
    this.render()
  }
  ;
  k.pi = function() {
    this.Dd && (this.Dd.forEach(V),
    this.Dd = null );
    var a = this.get("layergroup");
    a && (this.Dd = [U(a, "propertychange", this.si, !1, this), U(a, "change", this.ri, !1, this)]);
    this.render()
  }
  ;
  k.Re = function() {
    if (!Kc(document, this.H) || "none" == this.H.style.display)
      return !1;
    var a = this.Cb();
    return !a || 0 >= a[0] || 0 >= a[1] ? !1 : (a = Y(this)) && a.Re() ? !0 : !1
  }
  ;
  k.render = function() {
    this.oe.Qe() || this.oe.start()
  }
  ;
  k.Xj = function(a) {
    var b, c, d, e = this.Cb(), f = Y(this), g = null ;
    if (void 0 !== e && 0 < e[0] && 0 < e[1] && f && f.Re()) {
      var g = f.Me.slice()
        , h = this.get("layergroup").Je()
        , l = {};
      b = 0;
      for (c = h.length; b < c; ++b)
        l[I(h[b].Cd)] = h[b];
      d = f.I();
      g = {
        sb: !1,
        Pa: {},
        Ob: this.Jh,
        extent: null ,
        focus: this.Ie ? this.Ie : d.center,
        index: this.$h++,
        Ed: l,
        Fd: h,
        gc: jb(this.gj),
        da: this.Od,
        Cg: this.Kj,
        Mc: [],
        size: e,
        gl: this.ck,
        kk: this.Zg,
        time: a,
        fe: {},
        i: d,
        O: g,
        sc: {}
      }
    }
    if (g) {
      a = this.Rd;
      b = e = 0;
      for (c = a.length; b < c; ++b)
        f = a[b],
        f(this, g) && (a[e++] = f);
      a.length = e;
      g.extent = Ue(d.center, d.resolution, d.rotation, g.size)
    }
    this.Bb = g;
    this.Ng.mf(g);
    if (g) {
      g.sb && this.render();
      Array.prototype.push.apply(this.Eg, g.Mc);
      if (b = 0 === this.Rd.length && !g.O[0] && !g.O[1])
        b = g.extent,
        c = this.Gg,
        b = !(b[0] == c[0] && b[2] == c[2] && b[1] == c[1] && b[3] == c[3]);
      b && (this.dispatchEvent(new Gd("moveend",this,g)),
      b = g.extent,
      c = this.Gg) && (c[0] = b[0],
      c[1] = b[1],
      c[2] = b[2],
      c[3] = b[3])
    }
    this.dispatchEvent(new Gd("postrender",this,g));
    b = g = this.Ci;
    this && (b = J(g, this));
    !fa(u.setImmediate) || u.Window && u.Window.prototype && u.Window.prototype.setImmediate == u.setImmediate ? (oc || (oc = pc()),
    oc(b)) : u.setImmediate(b)
  }
  ;
  k.Sg = function(a) {
    this.set("target", a)
  }
  ;
  k.fh = function() {
    var a = pj(this);
    if (a) {
      var b = Lc(a), c = N && a.currentStyle, d;
      if (d = c)
        d = "CSS1Compat" == (b ? new Mc(Lc(b)) : oa || (oa = new Mc)).Ge.compatMode;
      if (d && "auto" != c.width && "auto" != c.height && !c.boxSizing)
        b = hd(a, c.width, "width", "pixelWidth"),
        a = hd(a, c.height, "height", "pixelHeight"),
        a = new Ac(b,a);
      else {
        c = new Ac(a.offsetWidth,a.offsetHeight);
        if (N) {
          b = id(a, "paddingLeft");
          d = id(a, "paddingRight");
          var e = id(a, "paddingTop")
            , f = id(a, "paddingBottom")
            , b = new dd(e,d,f,b)
        } else
          b = ed(a, "paddingLeft"),
          d = ed(a, "paddingRight"),
          e = ed(a, "paddingTop"),
          f = ed(a, "paddingBottom"),
          b = new dd(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(b));
        !N || 9 <= zb ? (d = ed(a, "borderLeftWidth"),
        e = ed(a, "borderRightWidth"),
        f = ed(a, "borderTopWidth"),
        a = ed(a, "borderBottomWidth"),
        a = new dd(parseFloat(f),parseFloat(e),parseFloat(a),parseFloat(d))) : (d = kd(a, "borderLeft"),
        e = kd(a, "borderRight"),
        f = kd(a, "borderTop"),
        a = kd(a, "borderBottom"),
        a = new dd(f,e,a,d));
        a = new Ac(c.width - a.left - b.left - b.right - a.right,c.height - a.top - b.top - b.bottom - a.bottom)
      }
      this.set("size", [a.width, a.height])
    } else
      this.set("size", void 0)
  }
  ;
  function oj(a) {
    var b = null ;
    void 0 !== a.Hc && (b = C(a.Hc) ? document.getElementById(a.Hc) : a.Hc);
    var c = {}
      , d = {};
    if (void 0 === a.ta || "boolean" == typeof a.ta && a.ta)
      d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "http://openlayers.org/";
    else {
      var e = a.ta;
      C(e) ? d[e] = "" : ga(e) && (d[e.src] = e.href)
    }
    e = a.dc instanceof Yh ? a.dc : new Yh({
      dc: a.dc
    });
    c.layergroup = e;
    c.target = a.target;
    c.view = void 0 !== a.view ? a.view : new Lg;
    var e = jg, f;
    void 0 !== a.Oc ? da(a.Oc) ? f = a.Oc : C(a.Oc) && (f = [a.Oc]) : f = mj;
    var g, h;
    g = 0;
    for (h = f.length; g < h; ++g) {
      var l = f[g];
      if ("canvas" == l) {
        if (Rd) {
          e = hj;
          break
        }
      } else if ("dom" == l) {
        e = lj;
        break
      }
    }
    void 0 !== a.controls ? f = da(a.controls) ? new Ad(a.controls.slice()) : a.controls : (f = {},
    g = new Ad,
    (void 0 !== f.zoom ? f.zoom : 1) && g.push(new dh(f.hl)),
    (void 0 !== f.rotate ? f.rotate : 1) && g.push(new bh(f.fl)),
    (void 0 !== f.attribution ? f.attribution : 1) && g.push(new Ug(f.Vk)),
    f = g);
    g = void 0 !== a.bc ? da(a.bc) ? new Ad(a.bc.slice()) : a.bc : Xh();
    a = void 0 !== a.Lc ? da(a.Lc) ? new Ad(a.Lc.slice()) : a.Lc : new Ad;
    return {
      controls: f,
      bc: g,
      Hc: b,
      gc: d,
      Lc: a,
      Zj: e,
      values: c
    }
  }
  nf(ci);
  nf(hi);
  hi.forEach(function(a) {
    ci.forEach(function(b) {
      pf(a, b, di);
      pf(b, a, ei)
    })
  });
  function qj(a, b, c, d, e) {
    Cf.call(this, a, b);
    this.Ug = c;
    this.aa = new Image;
    null !== d && (this.aa.crossOrigin = d);
    this.sd = {};
    this.Ne = null ;
    this.jk = e
  }
  K(qj, Cf);
  k = qj.prototype;
  k.f = function() {
    1 == this.state && rj(this);
    qj.G.f.call(this)
  }
  ;
  k.Fa = function(a) {
    if (void 0 !== a) {
      var b = I(a);
      if (b in this.sd)
        return this.sd[b];
      a = hb(this.sd) ? this.aa : this.aa.cloneNode(!1);
      return this.sd[b] = a
    }
    return this.aa
  }
  ;
  k.getKey = function() {
    return this.Ug
  }
  ;
  k.li = function() {
    this.state = 3;
    rj(this);
    this.F()
  }
  ;
  k.mi = function() {
    this.state = this.aa.naturalWidth && this.aa.naturalHeight ? 2 : 4;
    rj(this);
    this.F()
  }
  ;
  k.load = function() {
    0 == this.state && (this.state = 1,
    this.F(),
    this.Ne = [bc(this.aa, "error", this.li, !1, this), bc(this.aa, "load", this.mi, !1, this)],
    this.jk(this, this.Ug))
  }
  ;
  function rj(a) {
    a.Ne.forEach(V);
    a.Ne = null
  }
  ;function sj(a, b, c, d, e, f, g, h, l, m, n) {
    Cf.call(this, [e, f, g], 0);
    this.Wj = void 0 !== n ? n : !1;
    this.Od = h;
    this.o = null ;
    this.bd = {};
    this.Xd = b;
    this.ae = d;
    this.mc = [];
    this.nc = null ;
    this.Yd = 0;
    g = Kf(d, this.l);
    n = this.ae.j();
    f = this.Xd.j();
    g = n ? Ve(g, n) : g;
    if (0 === Qe(g))
      this.state = 4;
    else if ((n = a.j()) && (f = f ? Ve(f, n) : n),
    e = d.h(e),
    n = Te(g),
    d = uf(c, a)(n, void 0, n.length),
    e = c.Ub(e, n),
    n = gf[c.qb],
    void 0 !== n && (e *= n),
    n = gf[a.qb],
    void 0 !== n && (e /= n),
    d = a.Ub(e, d) / e,
    isFinite(d) && !isNaN(d) && 0 < d && (e /= d),
    d = e,
    !isFinite(d) || isNaN(d) || 0 >= d)
      this.state = 4;
    else if (this.zf = new xi(a,c,g,f,d * (void 0 !== m ? m : .5)),
    0 === this.zf.pb.length)
      this.state = 4;
    else if (this.Yd = Rf(b, d),
    c = zi(this.zf),
    f && (a.qe ? (c[1] = Ze(c[1], f[1], f[3]),
    c[3] = Ze(c[3], f[1], f[3])) : c = Ve(c, f)),
    Qe(c))
      if (a = Lf(b, c, this.Yd),
      100 > a.Vb() * a.Tb()) {
        for (b = a.A; b <= a.S; b++)
          for (c = a.K; c <= a.J; c++)
            (m = l(this.Yd, b, c, h)) && this.mc.push(m);
        0 === this.mc.length && (this.state = 4)
      } else
        this.state = 3;
    else
      this.state = 4
  }
  K(sj, Cf);
  sj.prototype.f = function() {
    1 == this.state && (this.nc.forEach(V),
    this.nc = null );
    sj.G.f.call(this)
  }
  ;
  sj.prototype.Fa = function(a) {
    if (void 0 !== a) {
      var b = I(a);
      if (b in this.bd)
        return this.bd[b];
      a = hb(this.bd) ? this.o : this.o.cloneNode(!1);
      return this.bd[b] = a
    }
    return this.o
  }
  ;
  function tj(a) {
    var b = [];
    a.mc.forEach(function(a) {
      a && 2 == a.I() && b.push({
        extent: Kf(this.Xd, a.l),
        image: a.Fa()
      })
    }, a);
    a.mc.length = 0;
    var c = a.l
      , d = c[0]
      , e = Qf(a.ae, d)
      , f = H(e) ? e : e[0]
      , e = H(e) ? e : e[1]
      , d = a.ae.h(d)
      , g = a.Xd.h(a.Yd)
      , c = Kf(a.ae, c);
    a.o = wi(f, e, a.Od, g, a.Xd.j(), d, c, a.zf, b, a.Wj);
    a.state = 2;
    a.F()
  }
  sj.prototype.load = function() {
    if (0 == this.state) {
      this.state = 1;
      this.F();
      var a = 0;
      this.nc = [];
      this.mc.forEach(function(b) {
        var c = b.I();
        if (0 == c || 1 == c) {
          a++;
          var d;
          d = Wb(b, "change", function() {
            var c = b.I();
            if (2 == c || 3 == c || 4 == c)
              V(d),
              a--,
              0 === a && (this.nc.forEach(V),
              this.nc = null ,
              tj(this))
          }, !1, this);
          this.nc.push(d)
        }
      }, this);
      this.mc.forEach(function(a) {
        0 == a.I() && a.load()
      });
      0 === a && tj(this)
    }
  }
  ;
  function uj(a) {
    ej.call(this, {
      Pa: a.Pa,
      extent: a.extent,
      ta: a.ta,
      Jc: a.Jc,
      projection: a.projection,
      state: void 0 !== a.state ? a.state : void 0,
      ga: a.ga,
      oc: a.oc ? a.oc : vj,
      pc: a.pc,
      Ma: a.Ma,
      url: a.url,
      rb: a.rb,
      Mb: a.Mb
    });
    this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null ;
    this.tf = void 0 !== a.tf ? a.tf : qj;
    this.Uc = {};
    this.vf = {};
    this.$j = a.el;
    this.Yj = !1
  }
  K(uj, ej);
  uj.prototype.vb = function() {
    return this.fa.vb() ? !0 : bb(this.Uc, function(a) {
      return a.vb()
    })
  }
  ;
  uj.prototype.Rb = function(a, b) {
    var c = this.Fc(a);
    this.fa.Rb(this.fa == c ? b : {});
    ab(this.Uc, function(a) {
      a.Rb(a == c ? b : {})
    })
  }
  ;
  uj.prototype.gb = function(a) {
    var b = this.Wa;
    return !this.ga || b && !tf(b, a) ? (b = I(a).toString(),
    b in this.vf || (this.vf[b] = Tf(a)),
    this.vf[b]) : this.ga
  }
  ;
  uj.prototype.Fc = function(a) {
    var b = this.Wa;
    if (!b || tf(b, a))
      return this.fa;
    a = I(a).toString();
    a in this.Uc || (this.Uc[a] = new Ef);
    return this.Uc[a]
  }
  ;
  function hg(a, b, c, d, e, f) {
    if (a.Wa && f && !tf(a.Wa, f)) {
      e = a.Fc(f);
      var g = a.jd(b, c, d);
      if (e.Ca(g))
        return e.get(g);
      var h = a.Wa
        , l = a.gb(h)
        , m = a.gb(f);
      a = new sj(h,l,f,m,b,c,d,a.Yg,J(function(a, b, c, d) {
        return wj(this, a, b, c, d, h)
      }, a),a.$j,a.Yj);
      e.set(g, a);
      return a
    }
    return wj(a, b, c, d, e, f)
  }
  function wj(a, b, c, d, e, f) {
    var g = a.jd(b, c, d);
    if (a.fa.Ca(g))
      return a.fa.get(g);
    d = b = [b, c, d];
    var h = void 0 !== f ? f : a.Wa;
    c = a.gb(h);
    if (a.xk && h.od) {
      var l = d;
      d = l[0];
      var m = Pf(c, l)
        , h = Uf(h)
        , n = m[0]
        , p = m[1];
      h[0] <= n && n <= h[2] && h[1] <= p && p <= h[3] ? d = l : (l = Re(h),
      m[0] += l * Math.ceil((h[0] - m[0]) / l),
      d = Sf(c, m, d))
    }
    h = d[0];
    m = d[1];
    l = d[2];
    c = c.Va > h || h > c.kb ? !1 : (c = (n = c.j()) ? Lf(c, n, h) : c.Sb ? c.Sb[h] : null ) ? c.xc(m, l) : !0;
    e = (c = c ? d : null ) ? a.Ma(c, e, f) : void 0;
    e = new a.tf(b,void 0 !== e ? 0 : 4,void 0 !== e ? e : "",a.crossOrigin,a.oc);
    U(e, "change", a.qd, !1, a);
    a.fa.set(g, e);
    return e
  }
  function vj(a, b) {
    a.Fa().src = b
  }
  ;function xj(a, b) {
    this.ca = a;
    this.Eb = b;
    this.gk = 20;
    this.ka = null
  }
  k = xj.prototype;
  k.hb = function() {
    if (null === this.ka) {
      var a = this.Eb;
      "auto" !== a && null != a ? a.indexOf(["l", "p", "landscape", "portrait"]) || (a = "l") : a = window.innerWidth > window.innerHeight ? "l" : "p";
      this.Eb = a.substring(0, 1);
      var a = this.ca
        , b = {
        Pk: [1189, 841],
        Qk: [841, 594],
        Rk: [594, 420],
        Sk: [420, 297],
        Tk: [297, 210],
        Uk: [210, 148]
      };
      "auto" !== a && null != a ? a = da(a) || null == b[a.toLowerCase()] ? da(a) && null != a[0] && null != a[1] ? a : [297, 210] : b[a.toLowerCase()] : (a = window.innerWidth,
      b = window.innerHeight,
      a = a > b ? [a / 4, b / 4] : [b / 4, a / 4]);
      this.ca = a;
      this.ka = new jsPDF(this.Eb,"mm",this.ca)
    }
  }
  ;
  k.Ah = function(a, b, c, d, e) {
    this.hb();
    null !== c && this.ka.setTextColor(c[0], c[1], c[2]);
    null === b && (b = this.gk);
    this.ka.setFontSize(b);
    b = yj(this, d, e);
    this.ka.text(a, b[0], b[1]);
    this.ka.setTextColor(0, 0, 0)
  }
  ;
  k.wh = function(a, b, c, d, e) {
    this.hb();
    b = yj(this, b, c);
    this.ka.addImage(a, "JPEG", b[0], b[1], d, e)
  }
  ;
  k.xh = function(a, b, c) {
    var d = document;
    a = Bc(a) || d;
    a = a.querySelectorAll && a.querySelector ? a.querySelectorAll("CANVAS") : a.getElementsByTagName("CANVAS");
    a = a[0];
    d = a.getContext("2d");
    d.globalCompositeOperation = "destination-over";
    d.fillStyle = "#ffffff";
    d.fillRect(0, 0, a.width, a.height);
    var d = a.toDataURL("image/jpeg"), e, f;
    if ("auto" === this.ca)
      this.ca = [a.width / 4, a.height / 4],
      e = a.width / 4,
      f = a.height / 4,
      this.hb();
    else {
      this.hb();
      var g;
      a.width > a.height ? (e = 0 < this.Eb.indexOf(["l", "landscape"]) ? this.ca[1] : this.ca[0],
      g = a.width / e,
      f = a.height / g) : (f = 0 < this.Eb.indexOf(["p", "portrait"]) ? this.ca[1] : this.ca[0],
      g = a.height / f,
      e = a.width / g)
    }
    b = yj(this, b || 0, c || 0);
    this.ka.addImage(d, "JPEG", b[0], b[1], e, f)
  }
  ;
  k.save = function(a) {
    a = null != a ? ".pdf" === a.slice(-4) ? a : a + ".pdf" : "doc";
    this.ka.save(a)
  }
  ;
  k.zh = function(a, b, c, d, e) {
    this.hb();
    this.ka.setFillColor(e[0], e[1], e[2]);
    a = yj(this, a, b);
    this.ka.rect(a[0], a[1], c, d, "F");
    this.ka.setFillColor(0, 0, 0)
  }
  ;
  function yj(a, b, c) {
    0 > b && (b = "l" === a.Eb ? b + a.ca[0] : b + a.ca[1]);
    0 > c && (c = "l" === a.Eb ? c + a.ca[1] : c + a.ca[0]);
    return [b, c]
  }
  na("IiifPrint", xj);
  na("IiifPrint.prototype.addText", xj.prototype.Ah);
  na("IiifPrint.prototype.addBase64Image", xj.prototype.wh);
  na("IiifPrint.prototype.addDocument", xj.prototype.xh);
  na("IiifPrint.prototype.addRectangle", xj.prototype.zh);
  na("IiifPrint.prototype.save", xj.prototype.save);
  function zj(a, b) {
    this.yb = this.Lb = this.mb = "";
    this.jc = null ;
    this.Ab = this.Ka = "";
    this.na = this.Wi = !1;
    var c;
    if (a instanceof zj)
      this.na = x(b) ? b : a.na,
      Aj(this, a.mb),
      c = a.Lb,
      Bj(this),
      this.Lb = c,
      Cj(this, a.yb),
      Dj(this, a.jc),
      c = a.Ka,
      Bj(this),
      this.Ka = c,
      Ej(this, a.Xa.clone()),
      c = a.Ab,
      Bj(this),
      this.Ab = c;
    else if (a && (c = String(a).match(Hi))) {
      this.na = !!b;
      Aj(this, c[1] || "", !0);
      var d = c[2] || "";
      Bj(this);
      this.Lb = Fj(d);
      Cj(this, c[3] || "", !0);
      Dj(this, c[4]);
      d = c[5] || "";
      Bj(this);
      this.Ka = Fj(d, !0);
      Ej(this, c[6] || "", !0);
      c = c[7] || "";
      Bj(this);
      this.Ab = Fj(c)
    } else
      this.na = !!b,
      this.Xa = new Gj(null ,0,this.na)
  }
  zj.prototype.toString = function() {
    var a = []
      , b = this.mb;
    b && a.push(Hj(b, Ij, !0), ":");
    var c = this.yb;
    if (c || "file" == b)
      a.push("//"),
      (b = this.Lb) && a.push(Hj(b, Ij, !0), "@"),
      a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      c = this.jc,
      null != c && a.push(":", String(c));
    if (c = this.Ka)
      this.yb && "/" != c.charAt(0) && a.push("/"),
      a.push(Hj(c, "/" == c.charAt(0) ? Jj : Kj, !0));
    (c = this.Xa.toString()) && a.push("?", c);
    (c = this.Ab) && a.push("#", Hj(c, Lj));
    return a.join("")
  }
  ;
  zj.prototype.resolve = function(a) {
    var b = this.clone()
      , c = !!a.mb;
    c ? Aj(b, a.mb) : c = !!a.Lb;
    if (c) {
      var d = a.Lb;
      Bj(b);
      b.Lb = d
    } else
      c = !!a.yb;
    c ? Cj(b, a.yb) : c = null != a.jc;
    d = a.Ka;
    if (c)
      Dj(b, a.jc);
    else if (c = !!a.Ka) {
      if ("/" != d.charAt(0))
        if (this.yb && !this.Ka)
          d = "/" + d;
        else {
          var e = b.Ka.lastIndexOf("/");
          -1 != e && (d = b.Ka.substr(0, e + 1) + d)
        }
      e = d;
      if (".." == e || "." == e)
        d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length; ) {
          var h = e[g++];
          "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
          d && g == e.length && f.push("")) : (f.push(h),
          d = !0)
        }
        d = f.join("/")
      } else
        d = e
    }
    c ? (Bj(b),
    b.Ka = d) : c = "" !== a.Xa.toString();
    c ? Ej(b, Fj(a.Xa.toString())) : c = !!a.Ab;
    c && (a = a.Ab,
    Bj(b),
    b.Ab = a);
    return b
  }
  ;
  zj.prototype.clone = function() {
    return new zj(this)
  }
  ;
  function Aj(a, b, c) {
    Bj(a);
    a.mb = c ? Fj(b, !0) : b;
    a.mb && (a.mb = a.mb.replace(/:$/, ""))
  }
  function Cj(a, b, c) {
    Bj(a);
    a.yb = c ? Fj(b, !0) : b
  }
  function Dj(a, b) {
    Bj(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
      a.jc = b
    } else
      a.jc = null
  }
  function Ej(a, b, c) {
    Bj(a);
    b instanceof Gj ? (a.Xa = b,
    a.Xa.of(a.na)) : (c || (b = Hj(b, Mj)),
    a.Xa = new Gj(b,0,a.na))
  }
  function Bj(a) {
    if (a.Wi)
      throw Error("Tried to modify a read-only Uri");
  }
  zj.prototype.of = function(a) {
    this.na = a;
    this.Xa && this.Xa.of(a);
    return this
  }
  ;
  function Fj(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
  }
  function Hj(a, b, c) {
    return C(a) ? (a = encodeURI(a).replace(b, Nj),
    c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
    a) : null
  }
  function Nj(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
  }
  var Ij = /[#\/\?@]/g
    , Kj = /[\#\?:]/g
    , Jj = /[\#\?]/g
    , Mj = /[\#\?@]/g
    , Lj = /#/g;
  function Gj(a, b, c) {
    this.g = this.w = null ;
    this.Z = a || null ;
    this.na = !!c
  }
  function Oj(a) {
    a.w || (a.w = new tc,
    a.g = 0,
    a.Z && Ii(a.Z, function(b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
    }))
  }
  k = Gj.prototype;
  k.Cc = function() {
    Oj(this);
    return this.g
  }
  ;
  k.add = function(a, b) {
    Oj(this);
    this.Z = null ;
    a = Pj(this, a);
    var c = this.w.get(a);
    c || this.w.set(a, c = []);
    c.push(b);
    this.g++;
    return this
  }
  ;
  k.remove = function(a) {
    Oj(this);
    a = Pj(this, a);
    return this.w.Ca(a) ? (this.Z = null ,
    this.g -= this.w.get(a).length,
    this.w.remove(a)) : !1
  }
  ;
  k.clear = function() {
    this.w = this.Z = null ;
    this.g = 0
  }
  ;
  k.wd = function() {
    Oj(this);
    return 0 == this.g
  }
  ;
  k.Ca = function(a) {
    Oj(this);
    a = Pj(this, a);
    return this.w.Ca(a)
  }
  ;
  k.ra = function() {
    Oj(this);
    for (var a = this.w.ma(), b = this.w.ra(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]);
    return c
  }
  ;
  k.ma = function(a) {
    Oj(this);
    var b = [];
    if (C(a))
      this.Ca(a) && (b = Ia(b, this.w.get(Pj(this, a))));
    else {
      a = this.w.ma();
      for (var c = 0; c < a.length; c++)
        b = Ia(b, a[c])
    }
    return b
  }
  ;
  k.set = function(a, b) {
    Oj(this);
    this.Z = null ;
    a = Pj(this, a);
    this.Ca(a) && (this.g -= this.w.get(a).length);
    this.w.set(a, [b]);
    this.g++;
    return this
  }
  ;
  k.get = function(a, b) {
    var c = a ? this.ma(a) : [];
    return 0 < c.length ? String(c[0]) : b
  }
  ;
  k.toString = function() {
    if (this.Z)
      return this.Z;
    if (!this.w)
      return "";
    for (var a = [], b = this.w.ra(), c = 0; c < b.length; c++)
      for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ma(d), f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "\x3d" + encodeURIComponent(String(d[f])));
        a.push(g)
      }
    return this.Z = a.join("\x26")
  }
  ;
  k.clone = function() {
    var a = new Gj;
    a.Z = this.Z;
    this.w && (a.w = this.w.clone(),
    a.g = this.g);
    return a
  }
  ;
  function Pj(a, b) {
    var c = String(b);
    a.na && (c = c.toLowerCase());
    return c
  }
  k.of = function(a) {
    a && !this.na && (Oj(this),
    this.Z = null ,
    this.w.forEach(function(a, c) {
      var d = c.toLowerCase();
      c != d && (this.remove(c),
      this.remove(d),
      0 < a.length && (this.Z = null ,
      this.w.set(Pj(this, d), Ja(a)),
      this.g += a.length))
    }, this));
    this.na = a
  }
  ;
  k.extend = function(a) {
    for (var b = 0; b < arguments.length; b++)
      rc(arguments[b], function(a, b) {
        this.add(b, a)
      }, this)
  }
  ;
  function Qj() {}
  K(Qj, Ci);
  Qj.prototype.Be = function() {
    var a = new XMLHttpRequest;
    if ("withCredentials"in a)
      return a;
    if ("undefined" != typeof XDomainRequest)
      return new Rj;
    throw Error("Unsupported browser");
  }
  ;
  Qj.prototype.ng = function() {
    return {}
  }
  ;
  function Rj() {
    this.za = new XDomainRequest;
    this.readyState = 0;
    this.responseText = this.onreadystatechange = null ;
    this.status = -1;
    this.statusText = this.responseXML = null ;
    this.za.onload = J(this.xi, this);
    this.za.onerror = J(this.cg, this);
    this.za.onprogress = J(this.Di, this);
    this.za.ontimeout = J(this.Ki, this)
  }
  k = Rj.prototype;
  k.open = function(a, b, c) {
    if (null != c && !c)
      throw Error("Only async requests are supported.");
    this.za.open(a, b)
  }
  ;
  k.send = function(a) {
    if (a)
      if ("string" == typeof a)
        this.za.send(a);
      else
        throw Error("Only string data is supported");
    else
      this.za.send()
  }
  ;
  k.abort = function() {
    this.za.abort()
  }
  ;
  k.setRequestHeader = function() {}
  ;
  k.getResponseHeader = function(a) {
    return "content-type" == a.toLowerCase() ? this.za.contentType : ""
  }
  ;
  k.xi = function() {
    this.status = 200;
    this.responseText = this.za.responseText;
    Sj(this, 4)
  }
  ;
  k.cg = function() {
    this.status = 500;
    this.responseText = null ;
    Sj(this, 4)
  }
  ;
  k.Ki = function() {
    this.cg()
  }
  ;
  k.Di = function() {
    this.status = 200;
    Sj(this, 1)
  }
  ;
  function Sj(a, b) {
    a.readyState = b;
    if (a.onreadystatechange)
      a.onreadystatechange()
  }
  k.getAllResponseHeaders = function() {
    return "content-type: " + this.za.contentType
  }
  ;
  function Uj(a) {
    for (var b = a.Fh, c = a.Zh || "jpg", d = a.dl || "native", e = a.width, f = a.height, g = a.Vc || 256, h = Math.max(Math.ceil(Math.log(e / g) / Math.LN2), Math.ceil(Math.log(f / g) / Math.LN2)), l = [], m = 0; m <= h; m++) {
      var n = Math.pow(2, h - m);
      l.push([Math.ceil(Math.ceil(e / n) / g), Math.ceil(Math.ceil(f / n) / g)])
    }
    var p = Math.min(window.devicePixelRatio || 1, 4)
      , m = g / p
      , n = 1 == p ? a.Jb : Ea(a.Jb, function(a) {
      return a * p
    });
    uj.call(this, {
      pc: p,
      ga: new Gf({
        Jb: n.reverse(),
        origin: [0, 0],
        Vc: m
      }),
      Ma: function(a) {
        var m = a[0];
        if (!(h < m)) {
          var n = l[m];
          if (n) {
            var p = a[1];
            a = -a[2] - 1;
            if (!(0 > p || n[0] <= p || 0 > a || n[1] <= a)) {
              var n = Math.pow(2, h - m)
                , q = g * n
                , w = p * q
                , B = a * q
                , D = Math.min(w + q, e)
                , q = Math.min(B + q, f)
                , D = n * Math.floor(D / n)
                , q = n * Math.floor(q / n)
                , n = "/" + w + "," + B + "," + (D - w) + "," + (q - B) + "/pct:" + 100 / n + "/0/" + d + "." + c;
              return (da(b) ? b[sc((p << m) + a, b.length)] : b) + n
            }
          }
        }
      },
      crossOrigin: a.crossOrigin
    });
    Rd && gj(this, function(a, b) {
      var c = a.Fa();
      bc(c, "load", function() {
        if (0 < c.naturalWidth && (c.naturalWidth != g || c.naturalHeight != g)) {
          var b = document.createElement("CANVAS");
          b.width = g;
          b.height = g;
          b.getContext("2d").drawImage(c, 0, 0);
          var d = gb(a, function(a) {
            return a == c
          });
          d && (a[d] = b)
        }
      }, !0);
      c.src = b
    })
  }
  K(Uj, uj);
  function Vj(a, b, c, d, e, f) {
    a = Bc(a);
    if (!a)
      throw Error("Invalid element");
    this.jj = a;
    this.Ce = this.a = null ;
    this.Uf = d;
    this.ih = 1 == e;
    this.gf = f || null ;
    this.lg = c || null ;
    this.hi = C(b) ? b.substring(0, b.lastIndexOf("/")) : null ;
    this.hb(b)
  }
  Vj.prototype.ld = function() {
    return this.a
  }
  ;
  function Wj(a, b) {
    var c = b.width
      , d = b.height
      , e = b["@id"];
    if (!e) {
      var f = b.image_host
        , g = b.identifier;
      f && g && (e = f + g)
    }
    e || (e = a.hi);
    if (!e)
      throw Error("Unable to determine base url");
    if ((f = b.domains) && 0 < f.length) {
      var h = new zj(e)
        , e = [];
      Aa(f, function(a) {
        Cj(h, a);
        e.push(h.toString())
      })
    }
    g = (b.tiles || [{}])[0];
    f = new hf({
      code: "IIIF",
      units: "pixels",
      extent: [0, -d, c, 0]
    });
    g = new Uj({
      Fh: e,
      width: c,
      height: d,
      Jb: b.scale_factors || g.scaleFactors,
      Zh: (b.formats || [])[0],
      Vc: b.tile_width || g.width || void 0,
      projection: f,
      crossOrigin: C(a.Uf) ? a.Uf : a.ih ? "" : void 0
    });
    g = new ii({
      source: g
    });
    a.a = new nj({
      dc: [g],
      target: a.jj,
      Oc: a.ih ? "webgl" : void 0,
      view: new Lg({
        projection: f,
        extent: [0, -d, c, 0],
        mh: 1.1
      }),
      bc: Xh({
        ug: null == a.gf,
        lh: Math.round(Xj)
      }),
      controls: [],
      ta: !1
    });
    a.gf && a.a.Gc.push(a.gf);
    d = window.location.hash;
    if (0 < d.length && (0 < d.indexOf("lat\x3d") || 0 < d.indexOf("x\x3d"))) {
      c = [];
      d = d.split("\x26");
      d[0] = d[0].substring(1);
      for (f = 0; f < d.length; f++)
        g = d[f].split("\x3d"),
        c[g[0]] = g[1];
      x(c.zoom) ? (Rg(Y(a.a), [parseFloat(c.lon), parseFloat(c.lat) - a.Ce.height]),
      Yj(a, parseFloat(c.zoom))) : (Rg(Y(a.a), [parseFloat(c.y), -parseFloat(c.x)]),
      Qg(Y(a.a), c.res))
    } else
      Pg(Y(a.a), f.j(), a.a.Cb() || null );
    a.lg && a.lg(a)
  }
  Vj.prototype.hb = function(a) {
    if (C(a)) {
      var b = new Ji(new Qj);
      U(b, "complete", function() {
        if (Vi(b)) {
          var a;
          a = b.b ? Bi(b.b.responseText) : void 0;
          this.hb(a)
        }
      }, !1, this);
      b.send(a)
    } else
      this.Ce = a,
      Wj(this, a)
  }
  ;
  var Xj = Math.LN2 / Math.log(1.1);
  function Yj(a, b) {
    var c = Xj * b
      , d = Y(a.a)
      , c = d.Y(d.Kd, Math.round(c) - d.Md, 0);
    Qg(d, c)
  }
  Vj.prototype.yh = function(a) {
    if (!1 !== a) {
      var b = null != a.accuracy ? a.accuracy : 2
        , c = this.Ce.height;
      vd(this.a, function() {
        var d = Y(this.a)
          , e = Ng(d)
          , f = ""
          , f = parseFloat(e[1]);
        if (null != a.geoFormat && !1 === a.geoFormat)
          f = "res\x3d" + d.h() + "\x26x\x3d" + Math.abs(f.toFixed(b)) + "\x26y\x3d" + e[0].toFixed(b);
        else {
          var f = f + c, g, d = Y(this.a), h = d.h();
          if (void 0 !== h) {
            var l, m = 0;
            do {
              l = d.Y(d.Kd, m);
              if (l == h) {
                g = m;
                break
              }
              ++m
            } while (l > d.lj)
          }
          (g = void 0 !== g ? d.Md + g : g) && (g /= Xj);
          f = "zoom\x3d" + g.toFixed(b) + "\x26lat\x3d" + f.toFixed(b) + "\x26lon\x3d" + e[0].toFixed(b)
        }
        null != a.addToEnd && (f += "\x26" + a.addToEnd);
        window.location.hash = f
      }, this)
    }
  }
  ;
  function Zj() {
    Z.call(this, {
      handleEvent: J(this.ki, this)
    });
    this.C = 0;
    this.Sa = null ;
    this.te = !1;
    this.vd = null
  }
  K(Zj, Z);
  Zj.prototype.setMap = function(a) {
    Zj.G.setMap.call(this, a);
    a && (a = Y(a),
    U(a, yd("center"), function() {
      this.te || (this.Sa = null )
    }, !1, this))
  }
  ;
  Zj.prototype.ki = function(a) {
    var b = !1;
    if ("mousewheel" == a.type) {
      var b = a.map
        , c = a.U;
      this.Sa = a.coordinate;
      var d = c.deltaY / 12;
      this.C = 0 < this.C == 0 < c.deltaY ? this.C + d : d;
      this.C = Math.min(Math.max(this.C, -1), 1);
      null == this.vd && (this.vd = u.setInterval(J(this.Fe, this, b), 200));
      a.preventDefault();
      b = !0
    }
    return !b
  }
  ;
  Zj.prototype.Fe = function(a) {
    var b = Y(a)
      , c = b.I()
      , d = c.resolution
      , c = c.center;
    x(d) && x(c) && (a.ia(ah({
      resolution: d,
      duration: 200,
      M: Yg
    })),
    this.Sa && a.ia(Zg({
      source: c,
      duration: 200,
      M: Yg
    })));
    a = Math.pow(2, this.C) * d;
    a = b.Y(a);
    this.Sa && (d = Mg(b, a, this.Sa),
    this.te = !0,
    Rg(b, d),
    this.te = !1);
    Qg(b, a);
    this.C /= 2;
    .01 > Math.abs(this.C) && (this.C = 0,
    u.clearInterval(this.vd),
    this.vd = null )
  }
  ;
  function ak(a, b, c, d) {
    Vj.call(this, a, b, c, d, void 0, new Zj)
  }
  K(ak, Vj);
  na("IiifViewer", ak);
  na("IiifViewer.prototype.getMap", Vj.prototype.ld);
  na("IiifViewer.prototype.addPermalink", Vj.prototype.yh);
})();
