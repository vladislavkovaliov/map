import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".container {\n    display: inline-flex;\n    border: 1px solid rgba(42, 92, 191, 0.5);\n    z-index: 1000;\n    border-style: dashed;\n    border-radius: 19px;\n    color: black;\n    height: 37px;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n    position: relative;\n    background: transparent;\n}\n\n.container > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.container > div:first-child {\n    margin-left: 18px;\n}\n\n.container > div:last-child {\n    margin-right: 8px;\n}\n\n.background {\n    position: absolute;\n    top: -1px;\n    left: -19px;\n    height: calc(100% + 2px);\n    z-index: -1;\n    border-radius: 19px;\n}\n\n.not-good {\n    color: rgba(42, 92, 191, 0.5);\n}\n\n.not-good > div {\n    background-color: rgba(42, 92, 191, 0.5);\n}\n";
styleInject(css_248z);

function Map(_a) {
    var _b = _a.step, step = _b === void 0 ? 0 : _b, _c = _a.paddingRight, paddingRight = _c === void 0 ? 24 : _c, _d = _a.paddingLeft, paddingLeft = _d === void 0 ? 24 : _d, _e = _a.background, background = _e === void 0 ? "linear-gradient(90deg, #74c1f2, #3e86d9)" : _e, _f = _a.fontColor, fontColor = _f === void 0 ? "#000000" : _f, children = _a.children;
    var backgroundRef = useRef(null);
    var bodyRef = useRef(null);
    var _g = useState("0"), width = _g[0], setWidth = _g[1];
    var _h = useState([]), items = _h[0], setItems = _h[1];
    useEffect(function () {
        if (bodyRef.current) {
            setItems(Array.from(bodyRef.current.children));
        }
    }, []);
    useLayoutEffect(function () {
        items.forEach(function (x, i) {
            if (i > 0) {
                x.className = i > step ? "not-good" : "";
            }
            x.style.paddingRight = "".concat(paddingRight, "px");
            x.style.paddingLeft = "".concat(paddingLeft, "px");
        });
    }, [paddingRight, paddingLeft, step, items]);
    useLayoutEffect(function () {
        var totalWidth = items
            .slice(step + 1)
            .map(function (i) { return i.clientWidth; })
            .reduce(function (acc, x) { return acc + x; }, 0);
        setWidth("calc(100% - ".concat(totalWidth, "px + 2px)"));
    }, [step, paddingRight, items]);
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "background", style: {
                width: width,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                background: background
            }, ref: backgroundRef }),
        React.createElement("div", { style: {
                color: fontColor
            }, ref: bodyRef }, children)));
}

export { Map };
//# sourceMappingURL=index.js.map
