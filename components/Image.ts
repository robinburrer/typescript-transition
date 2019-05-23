import {Sprite} from './Sprite';

export class Image extends Sprite{
    private _imageElement:HTMLImageElement;

    constructor (){
        super();
        this._imageElement = document.createElement('img');
        this.element.appendChild(this._imageElement);
    }

    set src (src:string){
        this._imageElement.src = src;
    }

    public set width(w:number){
        this._width = w;
        this._element.style.width = this._width + "px";
        this._imageElement.width = w;
	}


	public set height(h:number){
		this._height = h;
        this._element.style.height = this._height + "px";
        this._imageElement.width = h;
	}
}