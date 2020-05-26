import {IBuilder } from "./IBuilder";
import {SportsEngine} from "./SportsEngine"

export class Director {
    private _builder:IBuilder;

    constructor(builder: IBuilder){
       this._builder = builder;
    }

    public makeSportsCar(builder:IBuilder):void{
       builder.setGPS();
       builder.setSeats(2);
       builder.setEngine(new SportsEngine());
       builder.setTripComputer();
    }

    public makeSuv(builder:IBuilder):void{
        builder.setGPS();
        builder.setSeats(4);
        builder.setEngine(new SportsEngine());
        builder.setTripComputer();
     }


}