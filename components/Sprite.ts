import {UiElement} from './UiElement'

export class Sprite extends UiElement {
	// member vars
	protected _scale:number = 1;
	protected _x:number = 0;
	protected _y:number = 0;
	protected _width:number = 0;
	protected _height:number = 0;
	protected _animate:boolean = false;
	public easing:string = "all 0.3s ease";

	protected _self = this;

	constructor(){
		super(); 
		this._element.style.position = "absolute";
	}


	public setPosAndScale(xPos:number, yPos:number, scale:number =1):void{
		this._scale = scale;
		this._x = xPos;
		this._y = yPos;
		var dc = this._element;	

		dc.style.transform = "matrix(" + scale + ",0,0," + scale + "," + xPos + "," + yPos + ")";	
	}

	/**
	getter and setter for width/height properties
	*/
	public set width(w:number){
		this._width = w;
		this._element.style.width = this._width + "px";
	}
	public get width():number{
		return this._width;
	}

	public set height(h:number){
		this._height = h;
		this._element.style.height = this._height + "px";
	}
	public get height (){
		return this._height;
	}
	/**
	getter and setter for x/y properties
	*/
	public get x():number{
		return this._x;
	}
	public set x(newValue:number){
		this.setPosAndScale(newValue, this._y,this._scale);
	}

	public get y():number{
		return this._y;
	}
	public set y(newValue:number){
		this.setPosAndScale(this._x, newValue,this._scale);
	}

	/**
	getter and setter for the animate property
	*/
	public set animate (a:boolean){
		this._animate = a;
		if (this._animate){
			this._element.style.transition = this.easing;	

			this._element.addEventListener("webkitTransitionEnd",  (e:any) => {
				this.animationEndHandler()
			});
			this._element.addEventListener("transitionend",  (e:any) => {
				this.animationEndHandler()
			});
		} else {
			this._element.style.transition = '';
			// TODO:  
			this._element.removeEventListener("webkitTransitionEnd",this.animationEndHandler);	
		}
	}

	public get animate(){
		return this._animate;
	}

	/**
	animation end handler
	*/
	protected animationEndHandler():void {
		//console.log ("animation done !!!!!!!!" + this._x);
	}
}