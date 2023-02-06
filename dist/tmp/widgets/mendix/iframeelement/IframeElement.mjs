
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import React$1, { useState, useEffect, createElement } from 'react';

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
  return React$1.createElement("iframe", Object.assign({}, props));
};

function IframeElement({ file, width = "100%", height = "100%", url, src, source }) {
    const [isLoading, setIsLoading] = useState(true);
    const [iframeUrl, setIframeUrl] = useState(source === "fileDocument" ? "" : url);
    useEffect(() => {
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
        return (createElement(_default, { color: "#000000", loading: isLoading, size: 150, "aria-label": "Loading Spinner", "data-testid": "loader" }));
    }
    else {
        return (!iframeUrl || iframeUrl === null || iframeUrl === "") && !src ? (createElement("div", null)) : (createElement(Iframe, { width: width, height: height, url: iframeUrl, src: src }));
    }
}

export { IframeElement };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWZyYW1lRWxlbWVudC5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlubmVycy9oZWxwZXJzL3VuaXRDb252ZXJ0ZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvaGVscGVycy9hbmltYXRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lcnMvQ2xpcExvYWRlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlmcmFtZS9kaXN0L2VzL2lmcmFtZS5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9JZnJhbWVFbGVtZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3NzVmFsdWUgPSBleHBvcnRzLnBhcnNlTGVuZ3RoQW5kVW5pdCA9IHZvaWQgMDtcbnZhciBjc3NVbml0ID0ge1xuICAgIGNtOiB0cnVlLFxuICAgIG1tOiB0cnVlLFxuICAgIGluOiB0cnVlLFxuICAgIHB4OiB0cnVlLFxuICAgIHB0OiB0cnVlLFxuICAgIHBjOiB0cnVlLFxuICAgIGVtOiB0cnVlLFxuICAgIGV4OiB0cnVlLFxuICAgIGNoOiB0cnVlLFxuICAgIHJlbTogdHJ1ZSxcbiAgICB2dzogdHJ1ZSxcbiAgICB2aDogdHJ1ZSxcbiAgICB2bWluOiB0cnVlLFxuICAgIHZtYXg6IHRydWUsXG4gICAgXCIlXCI6IHRydWUsXG59O1xuLyoqXG4gKiBJZiBzaXplIGlzIGEgbnVtYmVyLCBhcHBlbmQgcHggdG8gdGhlIHZhbHVlIGFzIGRlZmF1bHQgdW5pdC5cbiAqIElmIHNpemUgaXMgYSBzdHJpbmcsIHZhbGlkYXRlIGFnYWluc3QgbGlzdCBvZiB2YWxpZCB1bml0cy5cbiAqIElmIHVuaXQgaXMgdmFsaWQsIHJldHVybiBzaXplIGFzIGlzLlxuICogSWYgdW5pdCBpcyBpbnZhbGlkLCBjb25zb2xlIHdhcm4gaXNzdWUsIHJlcGxhY2Ugd2l0aCBweCBhcyB0aGUgdW5pdC5cbiAqXG4gKiBAcGFyYW0geyhudW1iZXIgfCBzdHJpbmcpfSBzaXplXG4gKiBAcmV0dXJuIHtMZW5ndGhPYmplY3R9IExlbmd0aE9iamVjdFxuICovXG5mdW5jdGlvbiBwYXJzZUxlbmd0aEFuZFVuaXQoc2l6ZSkge1xuICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHNpemUsXG4gICAgICAgICAgICB1bml0OiBcInB4XCIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgdmFsdWVTdHJpbmcgPSAoc2l6ZS5tYXRjaCgvXlswLTkuXSovKSB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIGlmICh2YWx1ZVN0cmluZy5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlU3RyaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWVTdHJpbmcsIDEwKTtcbiAgICB9XG4gICAgdmFyIHVuaXQgPSAoc2l6ZS5tYXRjaCgvW14wLTldKiQvKSB8fCBcIlwiKS50b1N0cmluZygpO1xuICAgIGlmIChjc3NVbml0W3VuaXRdKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICB1bml0OiB1bml0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oXCJSZWFjdCBTcGlubmVyczogXCIuY29uY2F0KHNpemUsIFwiIGlzIG5vdCBhIHZhbGlkIGNzcyB2YWx1ZS4gRGVmYXVsdGluZyB0byBcIikuY29uY2F0KHZhbHVlLCBcInB4LlwiKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB1bml0OiBcInB4XCIsXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyc2VMZW5ndGhBbmRVbml0ID0gcGFyc2VMZW5ndGhBbmRVbml0O1xuLyoqXG4gKiBUYWtlIHZhbHVlIGFzIGFuIGlucHV0IGFuZCByZXR1cm4gdmFsaWQgY3NzIHZhbHVlXG4gKlxuICogQHBhcmFtIHsobnVtYmVyIHwgc3RyaW5nKX0gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ30gdmFsaWQgY3NzIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGNzc1ZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIGxlbmd0aFdpdGh1bml0ID0gcGFyc2VMZW5ndGhBbmRVbml0KHZhbHVlKTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQobGVuZ3RoV2l0aHVuaXQudmFsdWUpLmNvbmNhdChsZW5ndGhXaXRodW5pdC51bml0KTtcbn1cbmV4cG9ydHMuY3NzVmFsdWUgPSBjc3NWYWx1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVBbmltYXRpb24gPSB2b2lkIDA7XG52YXIgY3JlYXRlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGxvYWRlck5hbWUsIGZyYW1lcywgc3VmZml4KSB7XG4gICAgdmFyIGFuaW1hdGlvbk5hbWUgPSBcInJlYWN0LXNwaW5uZXJzLVwiLmNvbmNhdChsb2FkZXJOYW1lLCBcIi1cIikuY29uY2F0KHN1ZmZpeCk7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJ1bmRlZmluZWRcIiB8fCAhd2luZG93LmRvY3VtZW50KSB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb25OYW1lO1xuICAgIH1cbiAgICB2YXIgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIHZhciBzdHlsZVNoZWV0ID0gc3R5bGVFbC5zaGVldDtcbiAgICB2YXIga2V5RnJhbWVzID0gXCJcXG4gICAgQGtleWZyYW1lcyBcIi5jb25jYXQoYW5pbWF0aW9uTmFtZSwgXCIge1xcbiAgICAgIFwiKS5jb25jYXQoZnJhbWVzLCBcIlxcbiAgICB9XFxuICBcIik7XG4gICAgaWYgKHN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKGtleUZyYW1lcywgMCk7XG4gICAgfVxuICAgIHJldHVybiBhbmltYXRpb25OYW1lO1xufTtcbmV4cG9ydHMuY3JlYXRlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciB1bml0Q29udmVydGVyXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3VuaXRDb252ZXJ0ZXJcIik7XG52YXIgYW5pbWF0aW9uXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2FuaW1hdGlvblwiKTtcbnZhciBjbGlwID0gKDAsIGFuaW1hdGlvbl8xLmNyZWF0ZUFuaW1hdGlvbikoXCJDbGlwTG9hZGVyXCIsIFwiMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpfSA1MCUge3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgc2NhbGUoMC44KX0gMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKX1cIiwgXCJjbGlwXCIpO1xuZnVuY3Rpb24gQ2xpcExvYWRlcihfYSkge1xuICAgIHZhciBfYiA9IF9hLmxvYWRpbmcsIGxvYWRpbmcgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IF9hLmNvbG9yLCBjb2xvciA9IF9jID09PSB2b2lkIDAgPyBcIiMwMDAwMDBcIiA6IF9jLCBfZCA9IF9hLnNwZWVkTXVsdGlwbGllciwgc3BlZWRNdWx0aXBsaWVyID0gX2QgPT09IHZvaWQgMCA/IDEgOiBfZCwgX2UgPSBfYS5jc3NPdmVycmlkZSwgY3NzT3ZlcnJpZGUgPSBfZSA9PT0gdm9pZCAwID8ge30gOiBfZSwgX2YgPSBfYS5zaXplLCBzaXplID0gX2YgPT09IHZvaWQgMCA/IDM1IDogX2YsIGFkZGl0aW9uYWxwcm9wcyA9IF9fcmVzdChfYSwgW1wibG9hZGluZ1wiLCBcImNvbG9yXCIsIFwic3BlZWRNdWx0aXBsaWVyXCIsIFwiY3NzT3ZlcnJpZGVcIiwgXCJzaXplXCJdKTtcbiAgICB2YXIgc3R5bGUgPSBfX2Fzc2lnbih7IGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnQgIWltcG9ydGFudFwiLCB3aWR0aDogKDAsIHVuaXRDb252ZXJ0ZXJfMS5jc3NWYWx1ZSkoc2l6ZSksIGhlaWdodDogKDAsIHVuaXRDb252ZXJ0ZXJfMS5jc3NWYWx1ZSkoc2l6ZSksIGJvcmRlclJhZGl1czogXCIxMDAlXCIsIGJvcmRlcjogXCIycHggc29saWRcIiwgYm9yZGVyVG9wQ29sb3I6IGNvbG9yLCBib3JkZXJCb3R0b21Db2xvcjogXCJ0cmFuc3BhcmVudFwiLCBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yLCBib3JkZXJSaWdodENvbG9yOiBjb2xvciwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgYW5pbWF0aW9uOiBcIlwiLmNvbmNhdChjbGlwLCBcIiBcIikuY29uY2F0KDAuNzUgLyBzcGVlZE11bHRpcGxpZXIsIFwicyAwcyBpbmZpbml0ZSBsaW5lYXJcIiksIGFuaW1hdGlvbkZpbGxNb2RlOiBcImJvdGhcIiB9LCBjc3NPdmVycmlkZSk7XG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX19hc3NpZ24oeyBzdHlsZTogc3R5bGUgfSwgYWRkaXRpb25hbHByb3BzKSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDbGlwTG9hZGVyO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBvYmplY3RBc3NpZ24gZnJvbSBcIm9iamVjdC1hc3NpZ25cIjtcbmNvbnN0IElmcmFtZSA9ICh7IHVybCwgYWxsb3dGdWxsU2NyZWVuLCBwb3NpdGlvbiwgZGlzcGxheSwgaGVpZ2h0LCB3aWR0aCwgb3ZlcmZsb3csIHN0eWxlcywgb25Mb2FkLCBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dCwgc2Nyb2xsaW5nLCBpZCwgZnJhbWVCb3JkZXIsIGFyaWFIaWRkZW4sIHNhbmRib3gsIGFsbG93LCBjbGFzc05hbWUsIHRpdGxlLCBhcmlhTGFiZWwsIGFyaWFMYWJlbGxlZGJ5LCBuYW1lLCB0YXJnZXQsIGxvYWRpbmcsIGltcG9ydGFuY2UsIHJlZmVycmVycG9saWN5LCBhbGxvd3BheW1lbnRyZXF1ZXN0LCBzcmMsIGtleSB9KSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFByb3BzID0gb2JqZWN0QXNzaWduKHtcbiAgICAgICAgc3JjOiBzcmMgfHwgdXJsLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCB8fCBudWxsLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uIHx8IG51bGwsXG4gICAgICAgICAgICBkaXNwbGF5OiBkaXNwbGF5IHx8IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IG92ZXJmbG93IHx8IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsaW5nOiBzY3JvbGxpbmcgfHwgbnVsbCxcbiAgICAgICAgYWxsb3dwYXltZW50cmVxdWVzdDogYWxsb3dwYXltZW50cmVxdWVzdCB8fCBudWxsLFxuICAgICAgICBpbXBvcnRhbmNlOiBpbXBvcnRhbmNlIHx8IG51bGwsXG4gICAgICAgIHNhbmRib3g6IChzYW5kYm94ICYmIFsuLi5zYW5kYm94XS5qb2luKFwiIFwiKSkgfHwgbnVsbCxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCBudWxsLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyB8fCBudWxsLFxuICAgICAgICBuYW1lOiBuYW1lIHx8IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lIHx8IG51bGwsXG4gICAgICAgIGFsbG93RnVsbFNjcmVlbjogXCJhbGxvd0Z1bGxTY3JlZW5cIiB8fCBudWxsLFxuICAgICAgICByZWZlcnJlcnBvbGljeTogcmVmZXJyZXJwb2xpY3kgfHwgbnVsbCxcbiAgICAgICAgdGl0bGU6IHRpdGxlIHx8IG51bGwsXG4gICAgICAgIGFsbG93OiBhbGxvdyB8fCBudWxsLFxuICAgICAgICBpZDogaWQgfHwgbnVsbCxcbiAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkYnkgfHwgbnVsbCxcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBhcmlhSGlkZGVuIHx8IG51bGwsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwgfHwgbnVsbCxcbiAgICAgICAgd2lkdGg6IHdpZHRoIHx8IG51bGwsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0IHx8IG51bGwsXG4gICAgICAgIG9uTG9hZDogb25Mb2FkIHx8IG51bGwsXG4gICAgICAgIG9uTW91c2VPdmVyOiBvbk1vdXNlT3ZlciB8fCBudWxsLFxuICAgICAgICBvbk1vdXNlT3V0OiBvbk1vdXNlT3V0IHx8IG51bGwsXG4gICAgICAgIGtleToga2V5IHx8IFwiaWZyYW1lXCJcbiAgICB9KTtcbiAgICBsZXQgcHJvcHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGZvciAobGV0IHByb3Agb2YgT2JqZWN0LmtleXMoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICBpZiAoZGVmYXVsdFByb3BzW3Byb3BdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHByb3BzW3Byb3BdID0gZGVmYXVsdFByb3BzW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgb2YgT2JqZWN0LmtleXMocHJvcHMuc3R5bGUpKSB7XG4gICAgICAgIGlmIChwcm9wcy5zdHlsZVtpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJvcHMuc3R5bGVbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzLnN0eWxlcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJvcHMuc3R5bGVzKSkge1xuICAgICAgICAgICAgaWYgKHByb3BzLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuc3R5bGVba2V5XSA9IHByb3BzLnN0eWxlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLnN0eWxlcykucG9wKCkgPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzLnN0eWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWxsb3dGdWxsU2NyZWVuKSB7XG4gICAgICAgIGlmIChcImFsbG93XCIgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBbGxvdyA9IHByb3BzLmFsbG93LnJlcGxhY2UoXCJmdWxsc2NyZWVuXCIsIFwiXCIpO1xuICAgICAgICAgICAgcHJvcHMuYWxsb3cgPSBgZnVsbHNjcmVlbiAke2N1cnJlbnRBbGxvdy50cmltKCl9YC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9wcy5hbGxvdyA9IFwiZnVsbHNjcmVlblwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmcmFtZUJvcmRlciA+PSAwKSB7XG4gICAgICAgIGlmICghcHJvcHMuc3R5bGUuaGFzT3duUHJvcGVydHkoXCJib3JkZXJcIikpIHtcbiAgICAgICAgICAgIHByb3BzLnN0eWxlLmJvcmRlciA9IGZyYW1lQm9yZGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSWZyYW1lO1xuIiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50LCBjcmVhdGVFbGVtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJZnJhbWVFbGVtZW50Q29udGFpbmVyUHJvcHMgfSBmcm9tIFwiLi4vdHlwaW5ncy9JZnJhbWVFbGVtZW50UHJvcHNcIjtcbmltcG9ydCBDbGlwTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyXCI7XG5pbXBvcnQgSWZyYW1lIGZyb20gXCJyZWFjdC1pZnJhbWVcIjtcbmltcG9ydCBcIi4vdWkvSWZyYW1lRWxlbWVudC5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIElmcmFtZUVsZW1lbnQoe1xuICAgIGZpbGUsXG4gICAgd2lkdGggPSBcIjEwMCVcIixcbiAgICBoZWlnaHQgPSBcIjEwMCVcIixcbiAgICB1cmwsXG4gICAgc3JjLFxuICAgIHNvdXJjZVxufTogSWZyYW1lRWxlbWVudENvbnRhaW5lclByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2lmcmFtZVVybCwgc2V0SWZyYW1lVXJsXSA9IHVzZVN0YXRlPHN0cmluZz4oc291cmNlID09PSBcImZpbGVEb2N1bWVudFwiID8gXCJcIiA6IHVybCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gXCJmaWxlRG9jdW1lbnRcIikge1xuICAgICAgICAgICAgY29uc3QgY29udmVydEJsb2IgPSBhc3luYyAodXJpOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgIHNldElmcmFtZVVybChibG9iVXJsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZmlsZT8udmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0QmxvYihmaWxlLnZhbHVlLnVyaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCBbZmlsZSwgc291cmNlXSk7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENsaXBMb2FkZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17XCIjMDAwMDAwXCJ9XG4gICAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIHNpemU9ezE1MH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTG9hZGluZyBTcGlubmVyXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImxvYWRlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoIWlmcmFtZVVybCB8fCBpZnJhbWVVcmwgPT09IG51bGwgfHwgaWZyYW1lVXJsID09PSBcIlwiKSAmJiAhc3JjID8gKFxuICAgICAgICAgICAgPGRpdiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPElmcmFtZSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSB1cmw9e2lmcmFtZVVybH0gc3JjPXtzcmN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY3NzVW5pdCIsImNtIiwibW0iLCJpbiIsInB4IiwicHQiLCJwYyIsImVtIiwiZXgiLCJjaCIsInJlbSIsInZ3IiwidmgiLCJ2bWluIiwidm1heCIsInBhcnNlTGVuZ3RoQW5kVW5pdCIsInNpemUiLCJ1bml0IiwidmFsdWVTdHJpbmciLCJtYXRjaCIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJjb25zb2xlIiwid2FybiIsImNvbmNhdCIsImNzc1ZhbHVlIiwibGVuZ3RoV2l0aHVuaXQiLCJjcmVhdGVBbmltYXRpb24iLCJsb2FkZXJOYW1lIiwiZnJhbWVzIiwic3VmZml4IiwiYW5pbWF0aW9uTmFtZSIsIndpbmRvdyIsImRvY3VtZW50Iiwic3R5bGVFbCIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZVNoZWV0Iiwic2hlZXQiLCJrZXlGcmFtZXMiLCJpbnNlcnRSdWxlIiwiX19hc3NpZ24iLCJ0aGlzIiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9fY3JlYXRlQmluZGluZyIsImNyZWF0ZSIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9fZXNNb2R1bGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJfX3NldE1vZHVsZURlZmF1bHQiLCJ2IiwiX19pbXBvcnRTdGFyIiwibW9kIiwicmVzdWx0IiwiX19yZXN0IiwiZSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIlJlYWN0IiwicmVxdWlyZSIsInVuaXRDb252ZXJ0ZXJfMSIsImFuaW1hdGlvbl8xIiwiY2xpcCIsIkNsaXBMb2FkZXIiLCJfYSIsIl9iIiwibG9hZGluZyIsIl9jIiwiY29sb3IiLCJfZCIsInNwZWVkTXVsdGlwbGllciIsIl9lIiwiY3NzT3ZlcnJpZGUiLCJfZiIsImFkZGl0aW9uYWxwcm9wcyIsInN0eWxlIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckxlZnRDb2xvciIsImJvcmRlclJpZ2h0Q29sb3IiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uRmlsbE1vZGUiLCJwcm9wSXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm1hcCIsImpvaW4iLCJ0ZXN0MyIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsImtleXMiLCJlcnIiLCJtb2R1bGUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmcm9tIiwidG8iLCJzeW1ib2xzIiwia2V5IiwiSWZyYW1lIiwidXJsIiwiYWxsb3dGdWxsU2NyZWVuIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsInN0eWxlcyIsIm9uTG9hZCIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsInNjcm9sbGluZyIsImlkIiwiZnJhbWVCb3JkZXIiLCJhcmlhSGlkZGVuIiwic2FuZGJveCIsImFsbG93IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJhcmlhTGFiZWwiLCJhcmlhTGFiZWxsZWRieSIsIm5hbWUiLCJpbXBvcnRhbmNlIiwicmVmZXJyZXJwb2xpY3kiLCJhbGxvd3BheW1lbnRyZXF1ZXN0Iiwic3JjIiwiZGVmYXVsdFByb3BzIiwib2JqZWN0QXNzaWduIiwicHJvcHMiLCJwcm9wIiwicG9wIiwiY3VycmVudEFsbG93IiwicmVwbGFjZSIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQUEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLGFBQU8sRUFBRSxZQUFZLEVBQUU7QUFBRUMsRUFBQUEsS0FBSyxFQUFFLElBQUE7QUFBSyxDQUFDLENBQUMsQ0FBQTtBQUM3REQsYUFBQUEsQ0FBQUEsUUFBZ0IsR0FBR0EsYUFBQUEsQ0FBQUEsa0JBQTBCLEdBQUcsS0FBSyxFQUFDO0FBQ3RELElBQUlFLE9BQU8sR0FB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
