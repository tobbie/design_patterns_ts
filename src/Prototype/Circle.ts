import {Shape} from './Shape'

export class Circle extends Shape{
    radius : number

    constructor(source? :Circle){
        super(source)
        this.radius = source && source.radius || 0
    }

    public Clone(): Circle {
       return new Circle(this);
    }

}