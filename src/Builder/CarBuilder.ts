import {IBuilder } from "./IBuilder";
import {IEngine} from './IEngine'
import {Car} from './Car'


export class CarBuilder implements IBuilder{
    private _car : Car;
    constructor(){
        this._car = new Car();
    }

    reset(): void {
       this._car = new Car();
    }   
    
    setTripComputer(): void {
       this._car.TripComputer(); 
    }
    setEngine(engine:IEngine): void {
        this._car.Engine(engine);
    }
    setSeats(seats: number): void {
        this._car.Seats(seats);
    }
    setGPS(): void {
       this._car.Gps();
    }

    public getResult():Car{
        let product:Car  = this._car;
        this.reset();
        return product;
    }

}
