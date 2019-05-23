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
var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        var _this = _super.call(this) || this;
        _this._numberOfTiles = 100;
        _this._horizontalNumberOfTiles = 10;
        _this.transitionVisible = true;
        _this._animationRunning = false;
        _this._tiles = [];
        _this.drawUI();
        return _this;
    }
    Transition.prototype.drawUI = function () {
        var columnCounter = 0;
        var rowCounter = 0;
        for (var i = 0; i < this._numberOfTiles; i++) {
            if (columnCounter > this._horizontalNumberOfTiles - 1) {
                columnCounter = 0;
                rowCounter++;
            }
            var myTile = new Tile();
            this.addChild(myTile);
            this._tiles.push(myTile);
            myTile.x = columnCounter * myTile.width;
            myTile.y = rowCounter * myTile.height;
            columnCounter++;
        }
    };
    Transition.prototype.hide = function () {
        this.hideShow(0);
        this.transitionVisible = false;
    };
    Transition.prototype.show = function () {
        this.hideShow(1);
        this.transitionVisible = true;
    };
    Transition.prototype.toggle = function () {
        if (this._animationRunning) {
            return;
        }
        if (this.transitionVisible) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Transition.prototype.hideShow = function (alpha) {
        var _this = this;
        this._animationRunning = true;
        var itemCounter = 0;
        this._timerToken = setInterval(function () {
            if (itemCounter < _this._numberOfTiles) {
                if (alpha === 0) {
                    _this._tiles[itemCounter].alpha = alpha;
                }
                else {
                    _this._tiles[_this._numberOfTiles - 1 - itemCounter].alpha = alpha;
                }
                itemCounter++;
            }
            else {
                clearInterval(_this._timerToken);
                _this._animationRunning = false;
            }
        }, 2);
    };
    return Transition;
}(Sprite_1.Sprite));
exports.Transition = Transition;
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        var _this = _super.call(this) || this;
        _this.width = 70;
        _this.height = 70;
        _this.element.style.backgroundColor = "white";
        _this.animate = true;
        return _this;
    }
    Object.defineProperty(Tile.prototype, "alpha", {
        set: function (value) {
            this.element.style.opacity = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    return Tile;
}(Sprite_1.Sprite));
//# sourceMappingURL=Transition.js.map