import { Bating } from './bating';
import { Balling } from './balling';

export class Players{

    private name :String;
    private bating :Bating;
    private balling :Balling;

    constructor( name:String){
        this.balling = new Balling;
        this.bating = new Bating;
        this.name = name;
    }

    setPlayerName(name:String){
        this.name = name;
        console.log(this.name);
    }

    setPlayers(name:String){
        this.name = name;
        console.log(this.name);
    }

}
