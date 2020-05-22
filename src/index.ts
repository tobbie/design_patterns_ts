import {WebDialog} from './Factory/WebDialog'
import {WindowsDialog} from './Factory/WindowsDialog'
import { DialogCreator } from './Factory/DialogCreator';
import {Circle} from './Prototype/Circle'
import {Rectangle} from './Prototype/Rectangle'
import { Shape } from './Prototype/Shape';
import {Singleton} from './Singleton/Singleton';

require('dotenv').config();

class FactoryClient {
     dialog : DialogCreator

     constructor(dialog : DialogCreator){
        this.dialog = dialog;
     }

    Render():string {  
       return this.dialog.render();
    }
}

const main  = (dailogType:string): string => {
   let app :FactoryClient;
    if(process.env.WEB_OS === dailogType){
        
        app  = new FactoryClient(new WebDialog())
        return app.Render();
    }
    else if(process.env.WINDOWS_OS === dailogType){
      
        app  = new FactoryClient(new WindowsDialog())
       
        return app.Render();
    }
    return "";
}

console.log(main("Web"));
console.log(main("Windows"));

class PrototypeClient {
    shapes: Array<Shape>  = [];
   
     constructor(){
         let circle1 = new Circle();
         circle1._xField = 'test';
         circle1._yField = 'test 2'
         circle1.radius = 6.5;

         this.shapes.push(circle1);
         let circle2 : Circle;

         circle2 = circle1.Clone();

         this.shapes.push(circle2);

         let rect1 : Rectangle = new Rectangle();
         rect1._breadth = 10;
         rect1._length = 23;
         rect1._color = 'Green';

         this.shapes.push(rect1);

         let rect2 : Rectangle;
         rect2 = rect1.Clone();
         this.shapes.push(rect2);
         
         console.log(circle1 === circle2)
         console.log(rect1 === rect2)

         
     }

     public CreateShapesCopy() : Array<Shape>{
         const shapesCopy:Array<Shape> = [];

        this.shapes.forEach(element => {
            shapesCopy.push(element);
            
        });
        this.shapes.forEach(item => {
            console.log(item)
        });

        shapesCopy.forEach(item => {
            console.log(item)
        });
        return shapesCopy;
     }


}

console.log('-----Test Prototype-----')
let protoClient : PrototypeClient =  new PrototypeClient();
protoClient.CreateShapesCopy()

console.log('-----Test Singleton-----')

const singletonFunction = () => {
     const xy:Singleton  = Singleton.getInstance();
     const dy:Singleton = Singleton.getInstance();

     console.log(xy === dy);
     console.log(xy);
     console.log(dy);
     xy.incermentCounter();
     console.log(dy);
     dy.incermentCounter();
     console.log(xy);
     console.log(xy.getCounter())
     console.log(Singleton.getInstance().getCounter());
     console.log(Singleton.Configuration())
     
}

singletonFunction();