
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
define(['exports', 'react'], (function (exports, React$1) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var ClipLoader$1 = {};

	var unitConverter = {};

	Object.defineProperty(unitConverter, "__esModule", {
	  value: true
	});
	unitConverter.cssValue = unitConverter.parseLengthAndUnit = void 0;
	var cssUnit = {
	  cm: true,
	  mm: true,
	  in: true,
	  px: true,
	  pt: true,
	  pc: true,
	  em: true,
	  ex: true,
	  ch: true,
	  rem: true,
	  vw: true,
	  vh: true,
	  vmin: true,
	  vmax: true,
	  "%": true
	};
	/**
	 * If size is a number, append px to the value as default unit.
	 * If size is a string, validate against list of valid units.
	 * If unit is valid, return size as is.
	 * If unit is invalid, console warn issue, replace with px as the unit.
	 *
	 * @param {(number | string)} size
	 * @return {LengthObject} LengthObject
	 */
	function parseLengthAndUnit(size) {
	  if (typeof size === "number") {
	    return {
	      value: size,
	      unit: "px"
	    };
	  }
	  var value;
	  var valueString = (size.match(/^[0-9.]*/) || "").toString();
	  if (valueString.includes(".")) {
	    value = parseFloat(valueString);
	  } else {
	    value = parseInt(valueString, 10);
	  }
	  var unit = (size.match(/[^0-9]*$/) || "").toString();
	  if (cssUnit[unit]) {
	    return {
	      value: value,
	      unit: unit
	    };
	  }
	  console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
	  return {
	    value: value,
	    unit: "px"
	  };
	}
	unitConverter.parseLengthAndUnit = parseLengthAndUnit;
	/**
	 * Take value as an input and return valid css value
	 *
	 * @param {(number | string)} value
	 * @return {string} valid css value
	 */
	function cssValue(value) {
	  var lengthWithunit = parseLengthAndUnit(value);
	  return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
	}
	unitConverter.cssValue = cssValue;

	var animation = {};

	Object.defineProperty(animation, "__esModule", {
	  value: true
	});
	animation.createAnimation = void 0;
	var createAnimation = function (loaderName, frames, suffix) {
	  var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
	  if (typeof window == "undefined" || !window.document) {
	    return animationName;
	  }
	  var styleEl = document.createElement("style");
	  document.head.appendChild(styleEl);
	  var styleSheet = styleEl.sheet;
	  var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
	  if (styleSheet) {
	    styleSheet.insertRule(keyFrames, 0);
	  }
	  return animationName;
	};
	animation.createAnimation = createAnimation;

	var __assign = commonjsGlobal && commonjsGlobal.__assign || function () {
	  __assign = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];
	      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	    }
	    return t;
	  };
	  return __assign.apply(this, arguments);
	};
	var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  var desc = Object.getOwnPropertyDescriptor(m, k);
	  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	    desc = {
	      enumerable: true,
	      get: function () {
	        return m[k];
	      }
	    };
	  }
	  Object.defineProperty(o, k2, desc);
	} : function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  o[k2] = m[k];
	});
	var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
	  Object.defineProperty(o, "default", {
	    enumerable: true,
	    value: v
	  });
	} : function (o, v) {
	  o["default"] = v;
	});
	var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	  __setModuleDefault(result, mod);
	  return result;
	};
	var __rest = commonjsGlobal && commonjsGlobal.__rest || function (s, e) {
	  var t = {};
	  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};
	Object.defineProperty(ClipLoader$1, "__esModule", {
	  value: true
	});
	var React = __importStar(require("react"));
	var unitConverter_1 = unitConverter;
	var animation_1 = animation;
	var clip = (0, animation_1.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
	function ClipLoader(_a) {
	  var _b = _a.loading,
	    loading = _b === void 0 ? true : _b,
	    _c = _a.color,
	    color = _c === void 0 ? "#000000" : _c,
	    _d = _a.speedMultiplier,
	    speedMultiplier = _d === void 0 ? 1 : _d,
	    _e = _a.cssOverride,
	    cssOverride = _e === void 0 ? {} : _e,
	    _f = _a.size,
	    size = _f === void 0 ? 35 : _f,
	    additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
	  var style = __assign({
	    background: "transparent !important",
	    width: (0, unitConverter_1.cssValue)(size),
	    height: (0, unitConverter_1.cssValue)(size),
	    borderRadius: "100%",
	    border: "2px solid",
	    borderTopColor: color,
	    borderBottomColor: "transparent",
	    borderLeftColor: color,
	    borderRightColor: color,
	    display: "inline-block",
	    animation: "".concat(clip, " ").concat(0.75 / speedMultiplier, "s 0s infinite linear"),
	    animationFillMode: "both"
	  }, cssOverride);
	  if (!loading) {
	    return null;
	  }
	  return React.createElement("span", __assign({
	    style: style
	  }, additionalprops));
	}
	var _default = ClipLoader$1.default = ClipLoader;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }
	  return Object(val);
	}
	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    }

	    // Detect buggy property enumeration order in older V8 versions.

	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
	    test1[5] = 'de';
	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test2 = {};
	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }
	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });
	    if (order2.join('') !== '0123456789') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });
	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }
	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}
	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;
	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);
	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }
	  return to;
	};

	const Iframe = ({
	  url,
	  allowFullScreen,
	  position,
	  display,
	  height,
	  width,
	  overflow,
	  styles,
	  onLoad,
	  onMouseOver,
	  onMouseOut,
	  scrolling,
	  id,
	  frameBorder,
	  ariaHidden,
	  sandbox,
	  allow,
	  className,
	  title,
	  ariaLabel,
	  ariaLabelledby,
	  name,
	  target,
	  loading,
	  importance,
	  referrerpolicy,
	  allowpaymentrequest,
	  src,
	  key
	}) => {
	  const defaultProps = objectAssign({
	    src: src || url,
	    target: target || null,
	    style: {
	      position: position || null,
	      display: display || "initial",
	      overflow: overflow || null
	    },
	    scrolling: scrolling || null,
	    allowpaymentrequest: allowpaymentrequest || null,
	    importance: importance || null,
	    sandbox: sandbox && [...sandbox].join(" ") || null,
	    loading: loading || null,
	    styles: styles || null,
	    name: name || null,
	    className: className || null,
	    allowFullScreen: "allowFullScreen" ,
	    referrerpolicy: referrerpolicy || null,
	    title: title || null,
	    allow: allow || null,
	    id: id || null,
	    "aria-labelledby": ariaLabelledby || null,
	    "aria-hidden": ariaHidden || null,
	    "aria-label": ariaLabel || null,
	    width: width || null,
	    height: height || null,
	    onLoad: onLoad || null,
	    onMouseOver: onMouseOver || null,
	    onMouseOut: onMouseOut || null,
	    key: key || "iframe"
	  });
	  let props = Object.create(null);
	  for (let prop of Object.keys(defaultProps)) {
	    if (defaultProps[prop] != null) {
	      props[prop] = defaultProps[prop];
	    }
	  }
	  for (let i of Object.keys(props.style)) {
	    if (props.style[i] == null) {
	      delete props.style[i];
	    }
	  }
	  if (props.styles) {
	    for (let key of Object.keys(props.styles)) {
	      if (props.styles.hasOwnProperty(key)) {
	        props.style[key] = props.styles[key];
	      }
	      if (Object.keys(props.styles).pop() == key) {
	        delete props.styles;
	      }
	    }
	  }
	  if (allowFullScreen) {
	    if ("allow" in props) {
	      const currentAllow = props.allow.replace("fullscreen", "");
	      props.allow = `fullscreen ${currentAllow.trim()}`.trim();
	    } else {
	      props.allow = "fullscreen";
	    }
	  }
	  if (frameBorder >= 0) {
	    if (!props.style.hasOwnProperty("border")) {
	      props.style.border = frameBorder;
	    }
	  }
	  return React__default["default"].createElement("iframe", Object.assign({}, props));
	};

	function IframeElement({ file, width = "100%", height = "100%", url, src, source }) {
	    const [isLoading, setIsLoading] = React$1.useState(true);
	    const [iframeUrl, setIframeUrl] = React$1.useState(source === "fileDocument" ? "" : url);
	    React$1.useEffect(() => {
	        if (source === "fileDocument") {
	            const convertBlob = async (uri) => {
	                const res = await fetch(uri);
	                const blob = await res.blob();
	                const blobUrl = URL.createObjectURL(blob);
	                setIframeUrl(blobUrl);
	            };
	            if (file === null || file === void 0 ? void 0 : file.value) {
	                convertBlob(file.value.uri);
	            }
	        }
	        setIsLoading(false);
	    }, [file, source]);
	    if (isLoading) {
	        return (React$1.createElement(_default, { color: "#000000", loading: isLoading, size: 150, "aria-label": "Loading Spinner", "data-testid": "loader" }));
	    }
	    else {
	        return (!iframeUrl || iframeUrl === null || iframeUrl === "") && !src ? (React$1.createElement("div", null)) : (React$1.createElement(Iframe, { width: width, height: height, url: iframeUrl, src: src }));
	    }
	}

	exports.IframeElement = IframeElement;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWZyYW1lRWxlbWVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL2hlbHBlcnMvdW5pdENvbnZlcnRlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9oZWxwZXJzL2FuaW1hdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaWZyYW1lL2Rpc3QvZXMvaWZyYW1lLmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL0lmcmFtZUVsZW1lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jc3NWYWx1ZSA9IGV4cG9ydHMucGFyc2VMZW5ndGhBbmRVbml0ID0gdm9pZCAwO1xudmFyIGNzc1VuaXQgPSB7XG4gICAgY206IHRydWUsXG4gICAgbW06IHRydWUsXG4gICAgaW46IHRydWUsXG4gICAgcHg6IHRydWUsXG4gICAgcHQ6IHRydWUsXG4gICAgcGM6IHRydWUsXG4gICAgZW06IHRydWUsXG4gICAgZXg6IHRydWUsXG4gICAgY2g6IHRydWUsXG4gICAgcmVtOiB0cnVlLFxuICAgIHZ3OiB0cnVlLFxuICAgIHZoOiB0cnVlLFxuICAgIHZtaW46IHRydWUsXG4gICAgdm1heDogdHJ1ZSxcbiAgICBcIiVcIjogdHJ1ZSxcbn07XG4vKipcbiAqIElmIHNpemUgaXMgYSBudW1iZXIsIGFwcGVuZCBweCB0byB0aGUgdmFsdWUgYXMgZGVmYXVsdCB1bml0LlxuICogSWYgc2l6ZSBpcyBhIHN0cmluZywgdmFsaWRhdGUgYWdhaW5zdCBsaXN0IG9mIHZhbGlkIHVuaXRzLlxuICogSWYgdW5pdCBpcyB2YWxpZCwgcmV0dXJuIHNpemUgYXMgaXMuXG4gKiBJZiB1bml0IGlzIGludmFsaWQsIGNvbnNvbGUgd2FybiBpc3N1ZSwgcmVwbGFjZSB3aXRoIHB4IGFzIHRoZSB1bml0LlxuICpcbiAqIEBwYXJhbSB7KG51bWJlciB8IHN0cmluZyl9IHNpemVcbiAqIEByZXR1cm4ge0xlbmd0aE9iamVjdH0gTGVuZ3RoT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSB7XG4gICAgaWYgKHR5cGVvZiBzaXplID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogc2l6ZSxcbiAgICAgICAgICAgIHVuaXQ6IFwicHhcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhciB2YWx1ZVN0cmluZyA9IChzaXplLm1hdGNoKC9eWzAtOS5dKi8pIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgaWYgKHZhbHVlU3RyaW5nLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWVTdHJpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZVN0cmluZywgMTApO1xuICAgIH1cbiAgICB2YXIgdW5pdCA9IChzaXplLm1hdGNoKC9bXjAtOV0qJC8pIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgaWYgKGNzc1VuaXRbdW5pdF0pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHVuaXQ6IHVuaXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnNvbGUud2FybihcIlJlYWN0IFNwaW5uZXJzOiBcIi5jb25jYXQoc2l6ZSwgXCIgaXMgbm90IGEgdmFsaWQgY3NzIHZhbHVlLiBEZWZhdWx0aW5nIHRvIFwiKS5jb25jYXQodmFsdWUsIFwicHguXCIpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHVuaXQ6IFwicHhcIixcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJzZUxlbmd0aEFuZFVuaXQgPSBwYXJzZUxlbmd0aEFuZFVuaXQ7XG4vKipcbiAqIFRha2UgdmFsdWUgYXMgYW4gaW5wdXQgYW5kIHJldHVybiB2YWxpZCBjc3MgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyhudW1iZXIgfCBzdHJpbmcpfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSB2YWxpZCBjc3MgdmFsdWVcbiAqL1xuZnVuY3Rpb24gY3NzVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgbGVuZ3RoV2l0aHVuaXQgPSBwYXJzZUxlbmd0aEFuZFVuaXQodmFsdWUpO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChsZW5ndGhXaXRodW5pdC52YWx1ZSkuY29uY2F0KGxlbmd0aFdpdGh1bml0LnVuaXQpO1xufVxuZXhwb3J0cy5jc3NWYWx1ZSA9IGNzc1ZhbHVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUFuaW1hdGlvbiA9IHZvaWQgMDtcbnZhciBjcmVhdGVBbmltYXRpb24gPSBmdW5jdGlvbiAobG9hZGVyTmFtZSwgZnJhbWVzLCBzdWZmaXgpIHtcbiAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IFwicmVhY3Qtc3Bpbm5lcnMtXCIuY29uY2F0KGxvYWRlck5hbWUsIFwiLVwiKS5jb25jYXQoc3VmZml4KTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcInVuZGVmaW5lZFwiIHx8ICF3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbk5hbWU7XG4gICAgfVxuICAgIHZhciBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgdmFyIHN0eWxlU2hlZXQgPSBzdHlsZUVsLnNoZWV0O1xuICAgIHZhciBrZXlGcmFtZXMgPSBcIlxcbiAgICBAa2V5ZnJhbWVzIFwiLmNvbmNhdChhbmltYXRpb25OYW1lLCBcIiB7XFxuICAgICAgXCIpLmNvbmNhdChmcmFtZXMsIFwiXFxuICAgIH1cXG4gIFwiKTtcbiAgICBpZiAoc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoa2V5RnJhbWVzLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaW1hdGlvbk5hbWU7XG59O1xuZXhwb3J0cy5jcmVhdGVBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHVuaXRDb252ZXJ0ZXJfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvdW5pdENvbnZlcnRlclwiKTtcbnZhciBhbmltYXRpb25fMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvYW5pbWF0aW9uXCIpO1xudmFyIGNsaXAgPSAoMCwgYW5pbWF0aW9uXzEuY3JlYXRlQW5pbWF0aW9uKShcIkNsaXBMb2FkZXJcIiwgXCIwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSl9IDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgwLjgpfSAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEpfVwiLCBcImNsaXBcIik7XG5mdW5jdGlvbiBDbGlwTG9hZGVyKF9hKSB7XG4gICAgdmFyIF9iID0gX2EubG9hZGluZywgbG9hZGluZyA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gX2EuY29sb3IsIGNvbG9yID0gX2MgPT09IHZvaWQgMCA/IFwiIzAwMDAwMFwiIDogX2MsIF9kID0gX2Euc3BlZWRNdWx0aXBsaWVyLCBzcGVlZE11bHRpcGxpZXIgPSBfZCA9PT0gdm9pZCAwID8gMSA6IF9kLCBfZSA9IF9hLmNzc092ZXJyaWRlLCBjc3NPdmVycmlkZSA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lLCBfZiA9IF9hLnNpemUsIHNpemUgPSBfZiA9PT0gdm9pZCAwID8gMzUgOiBfZiwgYWRkaXRpb25hbHByb3BzID0gX19yZXN0KF9hLCBbXCJsb2FkaW5nXCIsIFwiY29sb3JcIiwgXCJzcGVlZE11bHRpcGxpZXJcIiwgXCJjc3NPdmVycmlkZVwiLCBcInNpemVcIl0pO1xuICAgIHZhciBzdHlsZSA9IF9fYXNzaWduKHsgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudCAhaW1wb3J0YW50XCIsIHdpZHRoOiAoMCwgdW5pdENvbnZlcnRlcl8xLmNzc1ZhbHVlKShzaXplKSwgaGVpZ2h0OiAoMCwgdW5pdENvbnZlcnRlcl8xLmNzc1ZhbHVlKShzaXplKSwgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIiwgYm9yZGVyOiBcIjJweCBzb2xpZFwiLCBib3JkZXJUb3BDb2xvcjogY29sb3IsIGJvcmRlckJvdHRvbUNvbG9yOiBcInRyYW5zcGFyZW50XCIsIGJvcmRlckxlZnRDb2xvcjogY29sb3IsIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBhbmltYXRpb246IFwiXCIuY29uY2F0KGNsaXAsIFwiIFwiKS5jb25jYXQoMC43NSAvIHNwZWVkTXVsdGlwbGllciwgXCJzIDBzIGluZmluaXRlIGxpbmVhclwiKSwgYW5pbWF0aW9uRmlsbE1vZGU6IFwiYm90aFwiIH0sIGNzc092ZXJyaWRlKTtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfX2Fzc2lnbih7IHN0eWxlOiBzdHlsZSB9LCBhZGRpdGlvbmFscHJvcHMpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENsaXBMb2FkZXI7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG9iamVjdEFzc2lnbiBmcm9tIFwib2JqZWN0LWFzc2lnblwiO1xuY29uc3QgSWZyYW1lID0gKHsgdXJsLCBhbGxvd0Z1bGxTY3JlZW4sIHBvc2l0aW9uLCBkaXNwbGF5LCBoZWlnaHQsIHdpZHRoLCBvdmVyZmxvdywgc3R5bGVzLCBvbkxvYWQsIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0LCBzY3JvbGxpbmcsIGlkLCBmcmFtZUJvcmRlciwgYXJpYUhpZGRlbiwgc2FuZGJveCwgYWxsb3csIGNsYXNzTmFtZSwgdGl0bGUsIGFyaWFMYWJlbCwgYXJpYUxhYmVsbGVkYnksIG5hbWUsIHRhcmdldCwgbG9hZGluZywgaW1wb3J0YW5jZSwgcmVmZXJyZXJwb2xpY3ksIGFsbG93cGF5bWVudHJlcXVlc3QsIHNyYywga2V5IH0pID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBzcmM6IHNyYyB8fCB1cmwsXG4gICAgICAgIHRhcmdldDogdGFyZ2V0IHx8IG51bGwsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24gfHwgbnVsbCxcbiAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXkgfHwgXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogb3ZlcmZsb3cgfHwgbnVsbFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxpbmc6IHNjcm9sbGluZyB8fCBudWxsLFxuICAgICAgICBhbGxvd3BheW1lbnRyZXF1ZXN0OiBhbGxvd3BheW1lbnRyZXF1ZXN0IHx8IG51bGwsXG4gICAgICAgIGltcG9ydGFuY2U6IGltcG9ydGFuY2UgfHwgbnVsbCxcbiAgICAgICAgc2FuZGJveDogKHNhbmRib3ggJiYgWy4uLnNhbmRib3hdLmpvaW4oXCIgXCIpKSB8fCBudWxsLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8IG51bGwsXG4gICAgICAgIHN0eWxlczogc3R5bGVzIHx8IG51bGwsXG4gICAgICAgIG5hbWU6IG5hbWUgfHwgbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgICAgYWxsb3dGdWxsU2NyZWVuOiBcImFsbG93RnVsbFNjcmVlblwiIHx8IG51bGwsXG4gICAgICAgIHJlZmVycmVycG9saWN5OiByZWZlcnJlcnBvbGljeSB8fCBudWxsLFxuICAgICAgICB0aXRsZTogdGl0bGUgfHwgbnVsbCxcbiAgICAgICAgYWxsb3c6IGFsbG93IHx8IG51bGwsXG4gICAgICAgIGlkOiBpZCB8fCBudWxsLFxuICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieSB8fCBudWxsLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IGFyaWFIaWRkZW4gfHwgbnVsbCxcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCB8fCBudWxsLFxuICAgICAgICB3aWR0aDogd2lkdGggfHwgbnVsbCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgbnVsbCxcbiAgICAgICAgb25Mb2FkOiBvbkxvYWQgfHwgbnVsbCxcbiAgICAgICAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyIHx8IG51bGwsXG4gICAgICAgIG9uTW91c2VPdXQ6IG9uTW91c2VPdXQgfHwgbnVsbCxcbiAgICAgICAga2V5OiBrZXkgfHwgXCJpZnJhbWVcIlxuICAgIH0pO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgZm9yIChsZXQgcHJvcCBvZiBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgIGlmIChkZWZhdWx0UHJvcHNbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSBkZWZhdWx0UHJvcHNbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSBvZiBPYmplY3Qua2V5cyhwcm9wcy5zdHlsZSkpIHtcbiAgICAgICAgaWYgKHByb3BzLnN0eWxlW2ldID09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9wcy5zdHlsZVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMuc3R5bGVzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcm9wcy5zdHlsZXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZVtrZXldID0gcHJvcHMuc3R5bGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMuc3R5bGVzKS5wb3AoKSA9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHMuc3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChhbGxvd0Z1bGxTY3JlZW4pIHtcbiAgICAgICAgaWYgKFwiYWxsb3dcIiBpbiBwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEFsbG93ID0gcHJvcHMuYWxsb3cucmVwbGFjZShcImZ1bGxzY3JlZW5cIiwgXCJcIik7XG4gICAgICAgICAgICBwcm9wcy5hbGxvdyA9IGBmdWxsc2NyZWVuICR7Y3VycmVudEFsbG93LnRyaW0oKX1gLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLmFsbG93ID0gXCJmdWxsc2NyZWVuXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYW1lQm9yZGVyID49IDApIHtcbiAgICAgICAgaWYgKCFwcm9wcy5zdHlsZS5oYXNPd25Qcm9wZXJ0eShcImJvcmRlclwiKSkge1xuICAgICAgICAgICAgcHJvcHMuc3R5bGUuYm9yZGVyID0gZnJhbWVCb3JkZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJZnJhbWU7XG4iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElmcmFtZUVsZW1lbnRDb250YWluZXJQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL0lmcmFtZUVsZW1lbnRQcm9wc1wiO1xuaW1wb3J0IENsaXBMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXJcIjtcbmltcG9ydCBJZnJhbWUgZnJvbSBcInJlYWN0LWlmcmFtZVwiO1xuaW1wb3J0IFwiLi91aS9JZnJhbWVFbGVtZW50LmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gSWZyYW1lRWxlbWVudCh7XG4gICAgZmlsZSxcbiAgICB3aWR0aCA9IFwiMTAwJVwiLFxuICAgIGhlaWdodCA9IFwiMTAwJVwiLFxuICAgIHVybCxcbiAgICBzcmMsXG4gICAgc291cmNlXG59OiBJZnJhbWVFbGVtZW50Q29udGFpbmVyUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbaWZyYW1lVXJsLCBzZXRJZnJhbWVVcmxdID0gdXNlU3RhdGU8c3RyaW5nPihzb3VyY2UgPT09IFwiZmlsZURvY3VtZW50XCIgPyBcIlwiIDogdXJsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc291cmNlID09PSBcImZpbGVEb2N1bWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0QmxvYiA9IGFzeW5jICh1cmk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVyaSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgc2V0SWZyYW1lVXJsKGJsb2JVcmwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChmaWxlPy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRCbG9iKGZpbGUudmFsdWUudXJpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0sIFtmaWxlLCBzb3VyY2VdKTtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2xpcExvYWRlclxuICAgICAgICAgICAgICAgIGNvbG9yPXtcIiMwMDAwMDBcIn1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgc2l6ZT17MTUwfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICghaWZyYW1lVXJsIHx8IGlmcmFtZVVybCA9PT0gbnVsbCB8fCBpZnJhbWVVcmwgPT09IFwiXCIpICYmICFzcmMgPyAoXG4gICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SWZyYW1lIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHVybD17aWZyYW1lVXJsfSBzcmM9e3NyY30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjc3NVbml0IiwiY20iLCJtbSIsImluIiwicHgiLCJwdCIsInBjIiwiZW0iLCJleCIsImNoIiwicmVtIiwidnciLCJ2aCIsInZtaW4iLCJ2bWF4IiwicGFyc2VMZW5ndGhBbmRVbml0Iiwic2l6ZSIsInVuaXQiLCJ2YWx1ZVN0cmluZyIsIm1hdGNoIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImNvbnNvbGUiLCJ3YXJuIiwiY29uY2F0IiwiY3NzVmFsdWUiLCJsZW5ndGhXaXRodW5pdCIsImNyZWF0ZUFuaW1hdGlvbiIsImxvYWRlck5hbWUiLCJmcmFtZXMiLCJzdWZmaXgiLCJhbmltYXRpb25OYW1lIiwid2luZG93IiwiZG9jdW1lbnQiLCJzdHlsZUVsIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJzaGVldCIsImtleUZyYW1lcyIsImluc2VydFJ1bGUiLCJfX2Fzc2lnbiIsInRoaXMiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX19lc01vZHVsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsInYiLCJfX2ltcG9ydFN0YXIiLCJtb2QiLCJyZXN1bHQiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiUmVhY3QiLCJyZXF1aXJlIiwidW5pdENvbnZlcnRlcl8xIiwiYW5pbWF0aW9uXzEiLCJjbGlwIiwiQ2xpcExvYWRlciIsIl9hIiwiX2IiLCJsb2FkaW5nIiwiX2MiLCJjb2xvciIsIl9kIiwic3BlZWRNdWx0aXBsaWVyIiwiX2UiLCJjc3NPdmVycmlkZSIsIl9mIiwiYWRkaXRpb25hbHByb3BzIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3JkZXJUb3BDb2xvciIsImJvcmRlckJvdHRvbUNvbG9yIiwiYm9yZGVyTGVmdENvbG9yIiwiYm9yZGVyUmlnaHRDb2xvciIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJhbmltYXRpb25GaWxsTW9kZSIsInByb3BJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwibWFwIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsIm1vZHVsZSIsInRhcmdldCIsInNvdXJjZSIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJrZXkiLCJJZnJhbWUiLCJ1cmwiLCJhbGxvd0Z1bGxTY3JlZW4iLCJwb3NpdGlvbiIsIm92ZXJmbG93Iiwic3R5bGVzIiwib25Mb2FkIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwic2Nyb2xsaW5nIiwiaWQiLCJmcmFtZUJvcmRlciIsImFyaWFIaWRkZW4iLCJzYW5kYm94IiwiYWxsb3ciLCJjbGFzc05hbWUiLCJ0aXRsZSIsImFyaWFMYWJlbCIsImFyaWFMYWJlbGxlZGJ5IiwibmFtZSIsImltcG9ydGFuY2UiLCJyZWZlcnJlcnBvbGljeSIsImFsbG93cGF5bWVudHJlcXVlc3QiLCJzcmMiLCJkZWZhdWx0UHJvcHMiLCJvYmplY3RBc3NpZ24iLCJwcm9wcyIsInByb3AiLCJwb3AiLCJjdXJyZW50QWxsb3ciLCJyZXBsYWNlIiwidHJpbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztDQUNBQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsYUFBTyxFQUFFLFlBQVksRUFBRTtDQUFFQyxFQUFBQSxLQUFLLEVBQUUsSUFBQTtDQUFLLENBQUMsQ0FBQyxDQUFBO0NBQzdERCxhQUFBQSxDQUFBQSxRQUFnQixHQUFHQSxhQUFBQSxDQUFBQSxrQkFBMEIsR0FBRyxLQUFL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
