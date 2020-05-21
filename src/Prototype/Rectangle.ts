import {Shape} from './Shape'

export class Rectangle extends Shape{

     _length: number;
     _breadth: number;
    
    constructor(source?: Rectangle){
            super(source)
            this._length = source && source._length || 0;
            this._breadth = source && source._breadth || 0;
    }

    public Clone(): Rectangle {
        return new Rectangle(this);
    }
    
}