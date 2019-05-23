import {Sprite} from '../components/Sprite';
import {Image} from '../components/Image';
import {Transition} from './Transition';


export class MainView extends Sprite
{
    _greenSprite:Sprite; 
    private _transition:Transition;
    

    constructor()
    {
        super();			
        this.drawUI();
    }


    protected drawUI():void
    {
        const image = new Image();
        this.addChild(image);
        image.width = image.height = 700;
        image.src = 'beach.png';




        this.width = 700;
        this.height = 700;
        this._element.style.backgroundColor = "grey";

        this._transition = new Transition();
        this.addChild (this._transition);
        this._transition.hide();



        var basicButton = document.createElement("BUTTON");
        var t = document.createTextNode("CLICK ME");
        basicButton.appendChild(t);
        document.body.appendChild(basicButton);
        
        basicButton.onclick = () => {
            this._transition.toggle();
        }

    }

    protected clickHandler():void {
        const mySprite = this._greenSprite;     
        
        if (mySprite.x > 0){
            mySprite.x = 0;
        }
        else {
            mySprite.x = 400;
        }
    }
}