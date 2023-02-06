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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWZyYW1lRWxlbWVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL2hlbHBlcnMvdW5pdENvbnZlcnRlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9oZWxwZXJzL2FuaW1hdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaWZyYW1lL2Rpc3QvZXMvaWZyYW1lLmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL0lmcmFtZUVsZW1lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jc3NWYWx1ZSA9IGV4cG9ydHMucGFyc2VMZW5ndGhBbmRVbml0ID0gdm9pZCAwO1xudmFyIGNzc1VuaXQgPSB7XG4gICAgY206IHRydWUsXG4gICAgbW06IHRydWUsXG4gICAgaW46IHRydWUsXG4gICAgcHg6IHRydWUsXG4gICAgcHQ6IHRydWUsXG4gICAgcGM6IHRydWUsXG4gICAgZW06IHRydWUsXG4gICAgZXg6IHRydWUsXG4gICAgY2g6IHRydWUsXG4gICAgcmVtOiB0cnVlLFxuICAgIHZ3OiB0cnVlLFxuICAgIHZoOiB0cnVlLFxuICAgIHZtaW46IHRydWUsXG4gICAgdm1heDogdHJ1ZSxcbiAgICBcIiVcIjogdHJ1ZSxcbn07XG4vKipcbiAqIElmIHNpemUgaXMgYSBudW1iZXIsIGFwcGVuZCBweCB0byB0aGUgdmFsdWUgYXMgZGVmYXVsdCB1bml0LlxuICogSWYgc2l6ZSBpcyBhIHN0cmluZywgdmFsaWRhdGUgYWdhaW5zdCBsaXN0IG9mIHZhbGlkIHVuaXRzLlxuICogSWYgdW5pdCBpcyB2YWxpZCwgcmV0dXJuIHNpemUgYXMgaXMuXG4gKiBJZiB1bml0IGlzIGludmFsaWQsIGNvbnNvbGUgd2FybiBpc3N1ZSwgcmVwbGFjZSB3aXRoIHB4IGFzIHRoZSB1bml0LlxuICpcbiAqIEBwYXJhbSB7KG51bWJlciB8IHN0cmluZyl9IHNpemVcbiAqIEByZXR1cm4ge0xlbmd0aE9iamVjdH0gTGVuZ3RoT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSB7XG4gICAgaWYgKHR5cGVvZiBzaXplID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogc2l6ZSxcbiAgICAgICAgICAgIHVuaXQ6IFwicHhcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhciB2YWx1ZVN0cmluZyA9IChzaXplLm1hdGNoKC9eWzAtOS5dKi8pIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgaWYgKHZhbHVlU3RyaW5nLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWVTdHJpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZVN0cmluZywgMTApO1xuICAgIH1cbiAgICB2YXIgdW5pdCA9IChzaXplLm1hdGNoKC9bXjAtOV0qJC8pIHx8IFwiXCIpLnRvU3RyaW5nKCk7XG4gICAgaWYgKGNzc1VuaXRbdW5pdF0pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHVuaXQ6IHVuaXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnNvbGUud2FybihcIlJlYWN0IFNwaW5uZXJzOiBcIi5jb25jYXQoc2l6ZSwgXCIgaXMgbm90IGEgdmFsaWQgY3NzIHZhbHVlLiBEZWZhdWx0aW5nIHRvIFwiKS5jb25jYXQodmFsdWUsIFwicHguXCIpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHVuaXQ6IFwicHhcIixcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJzZUxlbmd0aEFuZFVuaXQgPSBwYXJzZUxlbmd0aEFuZFVuaXQ7XG4vKipcbiAqIFRha2UgdmFsdWUgYXMgYW4gaW5wdXQgYW5kIHJldHVybiB2YWxpZCBjc3MgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyhudW1iZXIgfCBzdHJpbmcpfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSB2YWxpZCBjc3MgdmFsdWVcbiAqL1xuZnVuY3Rpb24gY3NzVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgbGVuZ3RoV2l0aHVuaXQgPSBwYXJzZUxlbmd0aEFuZFVuaXQodmFsdWUpO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChsZW5ndGhXaXRodW5pdC52YWx1ZSkuY29uY2F0KGxlbmd0aFdpdGh1bml0LnVuaXQpO1xufVxuZXhwb3J0cy5jc3NWYWx1ZSA9IGNzc1ZhbHVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUFuaW1hdGlvbiA9IHZvaWQgMDtcbnZhciBjcmVhdGVBbmltYXRpb24gPSBmdW5jdGlvbiAobG9hZGVyTmFtZSwgZnJhbWVzLCBzdWZmaXgpIHtcbiAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IFwicmVhY3Qtc3Bpbm5lcnMtXCIuY29uY2F0KGxvYWRlck5hbWUsIFwiLVwiKS5jb25jYXQoc3VmZml4KTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcInVuZGVmaW5lZFwiIHx8ICF3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbk5hbWU7XG4gICAgfVxuICAgIHZhciBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgdmFyIHN0eWxlU2hlZXQgPSBzdHlsZUVsLnNoZWV0O1xuICAgIHZhciBrZXlGcmFtZXMgPSBcIlxcbiAgICBAa2V5ZnJhbWVzIFwiLmNvbmNhdChhbmltYXRpb25OYW1lLCBcIiB7XFxuICAgICAgXCIpLmNvbmNhdChmcmFtZXMsIFwiXFxuICAgIH1cXG4gIFwiKTtcbiAgICBpZiAoc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoa2V5RnJhbWVzLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaW1hdGlvbk5hbWU7XG59O1xuZXhwb3J0cy5jcmVhdGVBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIHVuaXRDb252ZXJ0ZXJfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvdW5pdENvbnZlcnRlclwiKTtcbnZhciBhbmltYXRpb25fMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvYW5pbWF0aW9uXCIpO1xudmFyIGNsaXAgPSAoMCwgYW5pbWF0aW9uXzEuY3JlYXRlQW5pbWF0aW9uKShcIkNsaXBMb2FkZXJcIiwgXCIwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSl9IDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgwLjgpfSAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEpfVwiLCBcImNsaXBcIik7XG5mdW5jdGlvbiBDbGlwTG9hZGVyKF9hKSB7XG4gICAgdmFyIF9iID0gX2EubG9hZGluZywgbG9hZGluZyA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gX2EuY29sb3IsIGNvbG9yID0gX2MgPT09IHZvaWQgMCA/IFwiIzAwMDAwMFwiIDogX2MsIF9kID0gX2Euc3BlZWRNdWx0aXBsaWVyLCBzcGVlZE11bHRpcGxpZXIgPSBfZCA9PT0gdm9pZCAwID8gMSA6IF9kLCBfZSA9IF9hLmNzc092ZXJyaWRlLCBjc3NPdmVycmlkZSA9IF9lID09PSB2b2lkIDAgPyB7fSA6IF9lLCBfZiA9IF9hLnNpemUsIHNpemUgPSBfZiA9PT0gdm9pZCAwID8gMzUgOiBfZiwgYWRkaXRpb25hbHByb3BzID0gX19yZXN0KF9hLCBbXCJsb2FkaW5nXCIsIFwiY29sb3JcIiwgXCJzcGVlZE11bHRpcGxpZXJcIiwgXCJjc3NPdmVycmlkZVwiLCBcInNpemVcIl0pO1xuICAgIHZhciBzdHlsZSA9IF9fYXNzaWduKHsgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudCAhaW1wb3J0YW50XCIsIHdpZHRoOiAoMCwgdW5pdENvbnZlcnRlcl8xLmNzc1ZhbHVlKShzaXplKSwgaGVpZ2h0OiAoMCwgdW5pdENvbnZlcnRlcl8xLmNzc1ZhbHVlKShzaXplKSwgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIiwgYm9yZGVyOiBcIjJweCBzb2xpZFwiLCBib3JkZXJUb3BDb2xvcjogY29sb3IsIGJvcmRlckJvdHRvbUNvbG9yOiBcInRyYW5zcGFyZW50XCIsIGJvcmRlckxlZnRDb2xvcjogY29sb3IsIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBhbmltYXRpb246IFwiXCIuY29uY2F0KGNsaXAsIFwiIFwiKS5jb25jYXQoMC43NSAvIHNwZWVkTXVsdGlwbGllciwgXCJzIDBzIGluZmluaXRlIGxpbmVhclwiKSwgYW5pbWF0aW9uRmlsbE1vZGU6IFwiYm90aFwiIH0sIGNzc092ZXJyaWRlKTtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfX2Fzc2lnbih7IHN0eWxlOiBzdHlsZSB9LCBhZGRpdGlvbmFscHJvcHMpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENsaXBMb2FkZXI7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG9iamVjdEFzc2lnbiBmcm9tIFwib2JqZWN0LWFzc2lnblwiO1xuY29uc3QgSWZyYW1lID0gKHsgdXJsLCBhbGxvd0Z1bGxTY3JlZW4sIHBvc2l0aW9uLCBkaXNwbGF5LCBoZWlnaHQsIHdpZHRoLCBvdmVyZmxvdywgc3R5bGVzLCBvbkxvYWQsIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0LCBzY3JvbGxpbmcsIGlkLCBmcmFtZUJvcmRlciwgYXJpYUhpZGRlbiwgc2FuZGJveCwgYWxsb3csIGNsYXNzTmFtZSwgdGl0bGUsIGFyaWFMYWJlbCwgYXJpYUxhYmVsbGVkYnksIG5hbWUsIHRhcmdldCwgbG9hZGluZywgaW1wb3J0YW5jZSwgcmVmZXJyZXJwb2xpY3ksIGFsbG93cGF5bWVudHJlcXVlc3QsIHNyYywga2V5IH0pID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBzcmM6IHNyYyB8fCB1cmwsXG4gICAgICAgIHRhcmdldDogdGFyZ2V0IHx8IG51bGwsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24gfHwgbnVsbCxcbiAgICAgICAgICAgIGRpc3BsYXk6IGRpc3BsYXkgfHwgXCJpbml0aWFsXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogb3ZlcmZsb3cgfHwgbnVsbFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxpbmc6IHNjcm9sbGluZyB8fCBudWxsLFxuICAgICAgICBhbGxvd3BheW1lbnRyZXF1ZXN0OiBhbGxvd3BheW1lbnRyZXF1ZXN0IHx8IG51bGwsXG4gICAgICAgIGltcG9ydGFuY2U6IGltcG9ydGFuY2UgfHwgbnVsbCxcbiAgICAgICAgc2FuZGJveDogKHNhbmRib3ggJiYgWy4uLnNhbmRib3hdLmpvaW4oXCIgXCIpKSB8fCBudWxsLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8IG51bGwsXG4gICAgICAgIHN0eWxlczogc3R5bGVzIHx8IG51bGwsXG4gICAgICAgIG5hbWU6IG5hbWUgfHwgbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgICAgYWxsb3dGdWxsU2NyZWVuOiBcImFsbG93RnVsbFNjcmVlblwiIHx8IG51bGwsXG4gICAgICAgIHJlZmVycmVycG9saWN5OiByZWZlcnJlcnBvbGljeSB8fCBudWxsLFxuICAgICAgICB0aXRsZTogdGl0bGUgfHwgbnVsbCxcbiAgICAgICAgYWxsb3c6IGFsbG93IHx8IG51bGwsXG4gICAgICAgIGlkOiBpZCB8fCBudWxsLFxuICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieSB8fCBudWxsLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IGFyaWFIaWRkZW4gfHwgbnVsbCxcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCB8fCBudWxsLFxuICAgICAgICB3aWR0aDogd2lkdGggfHwgbnVsbCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgbnVsbCxcbiAgICAgICAgb25Mb2FkOiBvbkxvYWQgfHwgbnVsbCxcbiAgICAgICAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyIHx8IG51bGwsXG4gICAgICAgIG9uTW91c2VPdXQ6IG9uTW91c2VPdXQgfHwgbnVsbCxcbiAgICAgICAga2V5OiBrZXkgfHwgXCJpZnJhbWVcIlxuICAgIH0pO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgZm9yIChsZXQgcHJvcCBvZiBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgIGlmIChkZWZhdWx0UHJvcHNbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSBkZWZhdWx0UHJvcHNbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSBvZiBPYmplY3Qua2V5cyhwcm9wcy5zdHlsZSkpIHtcbiAgICAgICAgaWYgKHByb3BzLnN0eWxlW2ldID09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9wcy5zdHlsZVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMuc3R5bGVzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcm9wcy5zdHlsZXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5zdHlsZVtrZXldID0gcHJvcHMuc3R5bGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMuc3R5bGVzKS5wb3AoKSA9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHMuc3R5bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChhbGxvd0Z1bGxTY3JlZW4pIHtcbiAgICAgICAgaWYgKFwiYWxsb3dcIiBpbiBwcm9wcykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEFsbG93ID0gcHJvcHMuYWxsb3cucmVwbGFjZShcImZ1bGxzY3JlZW5cIiwgXCJcIik7XG4gICAgICAgICAgICBwcm9wcy5hbGxvdyA9IGBmdWxsc2NyZWVuICR7Y3VycmVudEFsbG93LnRyaW0oKX1gLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLmFsbG93ID0gXCJmdWxsc2NyZWVuXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYW1lQm9yZGVyID49IDApIHtcbiAgICAgICAgaWYgKCFwcm9wcy5zdHlsZS5oYXNPd25Qcm9wZXJ0eShcImJvcmRlclwiKSkge1xuICAgICAgICAgICAgcHJvcHMuc3R5bGUuYm9yZGVyID0gZnJhbWVCb3JkZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJZnJhbWU7XG4iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElmcmFtZUVsZW1lbnRDb250YWluZXJQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL0lmcmFtZUVsZW1lbnRQcm9wc1wiO1xuaW1wb3J0IENsaXBMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXJcIjtcbmltcG9ydCBJZnJhbWUgZnJvbSBcInJlYWN0LWlmcmFtZVwiO1xuaW1wb3J0IFwiLi91aS9JZnJhbWVFbGVtZW50LmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gSWZyYW1lRWxlbWVudCh7XG4gICAgZmlsZSxcbiAgICB3aWR0aCA9IFwiMTAwJVwiLFxuICAgIGhlaWdodCA9IFwiMTAwJVwiLFxuICAgIHVybCxcbiAgICBzcmMsXG4gICAgc291cmNlXG59OiBJZnJhbWVFbGVtZW50Q29udGFpbmVyUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbaWZyYW1lVXJsLCBzZXRJZnJhbWVVcmxdID0gdXNlU3RhdGU8c3RyaW5nPihzb3VyY2UgPT09IFwiZmlsZURvY3VtZW50XCIgPyBcIlwiIDogdXJsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc291cmNlID09PSBcImZpbGVEb2N1bWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0QmxvYiA9IGFzeW5jICh1cmk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVyaSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgc2V0SWZyYW1lVXJsKGJsb2JVcmwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChmaWxlPy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRCbG9iKGZpbGUudmFsdWUudXJpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0sIFtmaWxlLCBzb3VyY2VdKTtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2xpcExvYWRlclxuICAgICAgICAgICAgICAgIGNvbG9yPXtcIiMwMDAwMDBcIn1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgc2l6ZT17MTUwfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICghaWZyYW1lVXJsIHx8IGlmcmFtZVVybCA9PT0gbnVsbCB8fCBpZnJhbWVVcmwgPT09IFwiXCIpICYmICFzcmMgPyAoXG4gICAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SWZyYW1lIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHVybD17aWZyYW1lVXJsfSBzcmM9e3NyY30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJjc3NVbml0IiwiY20iLCJtbSIsImluIiwicHgiLCJwdCIsInBjIiwiZW0iLCJleCIsImNoIiwicmVtIiwidnciLCJ2aCIsInZtaW4iLCJ2bWF4IiwicGFyc2VMZW5ndGhBbmRVbml0Iiwic2l6ZSIsInVuaXQiLCJ2YWx1ZVN0cmluZyIsIm1hdGNoIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImNvbnNvbGUiLCJ3YXJuIiwiY29uY2F0IiwiY3NzVmFsdWUiLCJsZW5ndGhXaXRodW5pdCIsImNyZWF0ZUFuaW1hdGlvbiIsImxvYWRlck5hbWUiLCJmcmFtZXMiLCJzdWZmaXgiLCJhbmltYXRpb25OYW1lIiwid2luZG93IiwiZG9jdW1lbnQiLCJzdHlsZUVsIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJzaGVldCIsImtleUZyYW1lcyIsImluc2VydFJ1bGUiLCJfX2Fzc2lnbiIsInRoaXMiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiX19jcmVhdGVCaW5kaW5nIiwiY3JlYXRlIiwibyIsIm0iLCJrIiwiazIiLCJ1bmRlZmluZWQiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX19lc01vZHVsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsInYiLCJfX2ltcG9ydFN0YXIiLCJtb2QiLCJyZXN1bHQiLCJfX3Jlc3QiLCJlIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiUmVhY3QiLCJyZXF1aXJlIiwidW5pdENvbnZlcnRlcl8xIiwiYW5pbWF0aW9uXzEiLCJjbGlwIiwiQ2xpcExvYWRlciIsIl9hIiwiX2IiLCJsb2FkaW5nIiwiX2MiLCJjb2xvciIsIl9kIiwic3BlZWRNdWx0aXBsaWVyIiwiX2UiLCJjc3NPdmVycmlkZSIsIl9mIiwiYWRkaXRpb25hbHByb3BzIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJib3JkZXJUb3BDb2xvciIsImJvcmRlckJvdHRvbUNvbG9yIiwiYm9yZGVyTGVmdENvbG9yIiwiYm9yZGVyUmlnaHRDb2xvciIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJhbmltYXRpb25GaWxsTW9kZSIsInByb3BJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwibWFwIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsIm1vZHVsZSIsInRhcmdldCIsInNvdXJjZSIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJrZXkiLCJJZnJhbWUiLCJ1cmwiLCJhbGxvd0Z1bGxTY3JlZW4iLCJwb3NpdGlvbiIsIm92ZXJmbG93Iiwic3R5bGVzIiwib25Mb2FkIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwic2Nyb2xsaW5nIiwiaWQiLCJmcmFtZUJvcmRlciIsImFyaWFIaWRkZW4iLCJzYW5kYm94IiwiYWxsb3ciLCJjbGFzc05hbWUiLCJ0aXRsZSIsImFyaWFMYWJlbCIsImFyaWFMYWJlbGxlZGJ5IiwibmFtZSIsImltcG9ydGFuY2UiLCJyZWZlcnJlcnBvbGljeSIsImFsbG93cGF5bWVudHJlcXVlc3QiLCJzcmMiLCJkZWZhdWx0UHJvcHMiLCJvYmplY3RBc3NpZ24iLCJwcm9wcyIsInByb3AiLCJwb3AiLCJjdXJyZW50QWxsb3ciLCJyZXBsYWNlIiwidHJpbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Q0FDQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLGFBQU8sRUFBRSxZQUFZLEVBQUU7Q0FBRUMsRUFBQUEsS0FBSyxFQUFFLElBQUE7Q0FBSyxDQUFDLENBQUMsQ0FBQTtDQUM3REQsYUFBQUEsQ0FBQUEsUUFBZ0IsR0FBR0EsYUFBQUEsQ0FBQUEsa0JBQTBCLEdBQUcsS0FBSyxF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
