import {IEngine}  from './IEngine'

export interface IBuilder{
    reset() : void;
    setTripComputer():void;
    setEngine(engine :IEngine):void;
    setSeats(seats :number): void;
    setGPS():void;
    
}