"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sprite_1 = require("./Sprite");
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super.call(this) || this;
        _this._imageElement = document.createElement('img');
        _this.element.appendChild(_this._imageElement);
        return _this;
    }
    Object.defineProperty(Image.prototype, "src", {
        set: function (src) {
            this._imageElement.src = src;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "width", {
        set: function (w) {
            this._width = w;
            this._element.style.width = this._width + "px";
            this._imageElement.width = w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "height", {
        set: function (h) {
            this._height = h;
            this._element.style.height = this._height + "px";
            this._imageElement.width = h;
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}(Sprite_1.Sprite));
exports.Image = Image;
//# sourceMappingURL=Image.js.map