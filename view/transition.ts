import { Sprite } from '../components/Sprite'

export class Transition extends Sprite{
    private  _numberOfTiles = 100;
    private  _horizontalNumberOfTiles = 10;
    private _tiles:Tile[];
    private _timerToken:number;
    public transitionVisible:boolean = true;
    private _animationRunning:boolean = false;

    constructor(){
        super();
        this._tiles = [];
        this.drawUI();
    }

    private drawUI():void {
        let columnCounter = 0;
        let rowCounter = 0;
        for (let i:number = 0; i < this._numberOfTiles; i ++){
            
            if (columnCounter > this._horizontalNumberOfTiles -1 ){
                columnCounter = 0;
                rowCounter ++;
                
            } 
            

            let myTile = new Tile();
            this.addChild(myTile);
            this._tiles.push(myTile);
            myTile.x = columnCounter * myTile.width;
            myTile.y = rowCounter * myTile.height;

            columnCounter ++;          
          
        }
    }    

    public hide (){
        this.hideShow(0);
        this.transitionVisible = false;
    }
    public show (){
        this.hideShow(1);
        this.transitionVisible = true;
    }

    public toggle():void {
        if (this._animationRunning){
            return;
        }
        if (this.transitionVisible){
            this.hide();
        } else {
            this.show();
        }
    }


    private hideShow(alpha:number):void {
        this._animationRunning = true;
        let itemCounter = 0;
        this._timerToken = setInterval(() => { 
         
        if (itemCounter < this._numberOfTiles){
            if (alpha === 0){
                this._tiles[itemCounter].alpha = alpha;
            } else {
                this._tiles[this._numberOfTiles -1 - itemCounter].alpha = alpha;
            }
            itemCounter ++;
        } else {
            clearInterval(this._timerToken);
            this._animationRunning = false;
        }  
           
     
        }, 2);
    }
}

class Tile extends Sprite{
    constructor(){
        super();
        this.width = 70;
        this.height = 70;
        this.element.style.backgroundColor = "white";
        this.animate = true;

    }

    set alpha (value:number){
        this.element.style.opacity = value.toString();
    }
}
