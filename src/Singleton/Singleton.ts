require('dotenv').config();

export class Singleton {
    private static instance:Singleton;
    private static _configuration:string ;
    private _counter: number;

    private constructor(){
        Singleton._configuration = process.env.SINGLETON_CONFIG != undefined? process.env.SINGLETON_CONFIG : '';
        this._counter = 0;
    }

    public static Configuration() :string{
        return Singleton._configuration;
    }

    public static getInstance():Singleton{
         if(!Singleton.instance){
             Singleton.instance = new Singleton();
         }
        
        return Singleton.instance;
    }

    public getCounter(): number{
        return this._counter;
    }

    public incermentCounter() : number{
       return this._counter += 1;
        
    }

    public decrementCounter() : number{
        return this._counter -= 1;         
     }

    public someBusinessLogic(): void{}   
    
}