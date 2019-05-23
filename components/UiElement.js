"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UiElement = /** @class */ (function () {
    // constructor 
    function UiElement() {
        this._myID = 0;
        this._children = [];
        this._element = document.createElement("div");
        this._parent = null;
    }
    Object.defineProperty(UiElement.prototype, "parent", {
        // and setter for the parent property
        get: function () {
            return this._parent;
        },
        set: function (newValue) {
            this._parent = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiElement.prototype, "element", {
        // for the element
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    // add Child
    UiElement.prototype.addChild = function (childSprite) {
        // set the parent property of the new child
        childSprite.parent = this;
        // push the new child to the children array
        this._children.push(childSprite);
        // add the child to the 'display list'
        this._element.appendChild(childSprite.element);
    };
    return UiElement;
}());
exports.UiElement = UiElement;
//# sourceMappingURL=UiElement.js.map