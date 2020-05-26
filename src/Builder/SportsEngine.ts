import {IEngine} from './IEngine'

export class SportsEngine implements IEngine {
    cylinders: number;   
    liters: number;

    constructor(){
        this.cylinders = 6;
        this.liters = 3.5
    }  
}