import { IEngine } from "./IEngine";

export class Car {
    private _seats: number;
    private _gps: boolean;
    private _tripComputer: boolean;
    private _engine: IEngine | undefined
    
    constructor(){
        this._seats = 0;
        this._gps = false;
        this._tripComputer = false;
    }

    public Seats(seats:number): void{
        this._seats = seats;
    }

    public Gps(): void{
        this._gps = true;
    }
    
    public TripComputer(): void{
         this._tripComputer = true;
    }

    public Engine(engine:IEngine){
        this._engine = engine;
    }

    
}