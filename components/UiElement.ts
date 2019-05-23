export class UiElement {
	protected _myID:number;
	protected _parent:UiElement;
	protected _children:UiElement[];
	protected _element:HTMLElement;


	// constructor 
	constructor () {
		this._myID = 0;
		this._children = [];
        this._element = document.createElement("div");
        this._parent = <any> null;
	}

	// and setter for the parent property
	public get parent ():UiElement {
		return this._parent;
	}

	public set parent (newValue:UiElement) {
		this._parent = newValue;
	}

	// for the element
	public get element():HTMLElement {
		return this._element;
	}

	// add Child
	public  addChild(childSprite:UiElement)	{
		// set the parent property of the new child
		childSprite.parent = this;

		// push the new child to the children array
		this._children.push(childSprite);

		// add the child to the 'display list'
		this._element.appendChild (childSprite.element);
	}		
}