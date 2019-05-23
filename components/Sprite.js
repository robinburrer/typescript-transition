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
var UiElement_1 = require("./UiElement");
var Sprite = /** @class */ (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        var _this = _super.call(this) || this;
        // member vars
        _this._scale = 1;
        _this._x = 0;
        _this._y = 0;
        _this._width = 0;
        _this._height = 0;
        _this._animate = false;
        _this.easing = "all 0.3s ease";
        _this._self = _this;
        _this._element.style.position = "absolute";
        return _this;
    }
    Sprite.prototype.setPosAndScale = function (xPos, yPos, scale) {
        if (scale === void 0) { scale = 1; }
        this._scale = scale;
        this._x = xPos;
        this._y = yPos;
        var dc = this._element;
        dc.style.transform = "matrix(" + scale + ",0,0," + scale + "," + xPos + "," + yPos + ")";
    };
    Object.defineProperty(Sprite.prototype, "width", {
        get: function () {
            return this._width;
        },
        /**
        getter and setter for width/height properties
        */
        set: function (w) {
            this._width = w;
            this._element.style.width = this._width + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (h) {
            this._height = h;
            this._element.style.height = this._height + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "x", {
        /**
        getter and setter for x/y properties
        */
        get: function () {
            return this._x;
        },
        set: function (newValue) {
            this.setPosAndScale(newValue, this._y, this._scale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (newValue) {
            this.setPosAndScale(this._x, newValue, this._scale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "animate", {
        get: function () {
            return this._animate;
        },
        /**
        getter and setter for the animate property
        */
        set: function (a) {
            var _this = this;
            this._animate = a;
            if (this._animate) {
                this._element.style.transition = this.easing;
                this._element.addEventListener("webkitTransitionEnd", function (e) {
                    _this.animationEndHandler();
                });
                this._element.addEventListener("transitionend", function (e) {
                    _this.animationEndHandler();
                });
            }
            else {
                this._element.style.transition = '';
                // TODO:  
                this._element.removeEventListener("webkitTransitionEnd", this.animationEndHandler);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
    animation end handler
    */
    Sprite.prototype.animationEndHandler = function () {
        //console.log ("animation done !!!!!!!!" + this._x);
    };
    return Sprite;
}(UiElement_1.UiElement));
exports.Sprite = Sprite;
//# sourceMappingURL=Sprite.js.map