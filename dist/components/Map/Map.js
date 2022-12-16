"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
require("./styles.css");
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
function Map({ step = 0, paddingRight = 24, paddingLeft = 24, background = "linear-gradient(90deg, #74c1f2, #3e86d9)", fontColor = "#000000", children }) {
    const backgroundRef = (0, react_2.useRef)(null);
    const bodyRef = (0, react_2.useRef)(null);
    const [width, setWidth] = (0, react_2.useState)("0");
    const [items, setItems] = (0, react_2.useState)([]);
    (0, react_2.useEffect)(() => {
        if (bodyRef.current) {
            setItems(Array.from(bodyRef.current.children));
        }
    }, []);
    (0, react_2.useLayoutEffect)(() => {
        items.forEach((x, i) => {
            if (i > 0) {
                x.className = i > step ? "not-good" : "";
            }
            x.style.paddingRight = `${paddingRight}px`;
            x.style.paddingLeft = `${paddingLeft}px`;
        });
    }, [paddingRight, paddingLeft, step, items]);
    (0, react_2.useLayoutEffect)(() => {
        const totalWidth = items
            .slice(step + 1)
            .map((i) => i.clientWidth)
            .reduce((acc, x) => acc + x, 0);
        setWidth(`calc(100% - ${totalWidth}px + 2px)`);
    }, [step, paddingRight, items]);
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "background", style: {
                width: width,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                background: background
            }, ref: backgroundRef }),
        react_1.default.createElement("div", { style: {
                color: fontColor
            }, ref: bodyRef }, children)));
}
exports.Map = Map;
//# sourceMappingURL=Map.js.map