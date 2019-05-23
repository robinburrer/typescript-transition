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
var Sprite_1 = require("../components/Sprite");
var Image_1 = require("../components/Image");
var Transition_1 = require("./Transition");
var MainView = /** @class */ (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super.call(this) || this;
        _this.drawUI();
        return _this;
    }
    MainView.prototype.drawUI = function () {
        var _this = this;
        var image = new Image_1.Image();
        this.addChild(image);
        image.width = image.height = 700;
        image.src = 'beach.png';
        this.width = 700;
        this.height = 700;
        this._element.style.backgroundColor = "grey";
        this._transition = new Transition_1.Transition();
        this.addChild(this._transition);
        this._transition.hide();
        var basicButton = document.createElement("BUTTON");
        var t = document.createTextNode("CLICK ME");
        basicButton.appendChild(t);
        document.body.appendChild(basicButton);
        basicButton.onclick = function () {
            _this._transition.toggle();
        };
    };
    MainView.prototype.clickHandler = function () {
        var mySprite = this._greenSprite;
        if (mySprite.x > 0) {
            mySprite.x = 0;
        }
        else {
            mySprite.x = 400;
        }
    };
    return MainView;
}(Sprite_1.Sprite));
exports.MainView = MainView;
//# sourceMappingURL=main-view.js.map