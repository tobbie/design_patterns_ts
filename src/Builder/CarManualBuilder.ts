import {IBuilder } from "./IBuilder";
import {IEngine} from './IEngine'

export class CarBuilder implements IBuilder{
    reset(): void {
        throw new Error("Method not implemented.");
    }    setTripComputer(): void {
        throw new Error("Method not implemented.");
    }
    setEngine(engine: IEngine): void {
        throw new Error("Method not implemented.");
    }
    setSeats(seats: number): void {
        throw new Error("Method not implemented.");
    }
    setGPS(): void {
        throw new Error("Method not implemented.");
    }

    
}