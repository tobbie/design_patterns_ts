
export abstract class Shape{

     _xField : string;
     _yField : string;
     _color : string
    
    

    constructor(source?:Shape){
         this._xField = source && source._xField || "";
         this._yField = source && source._yField || "";
         this._color =source && source._color || "";
    }
    
   public abstract Clone():Shape;

}