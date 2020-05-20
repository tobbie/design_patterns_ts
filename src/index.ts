import {WebDialog} from './Factory/WebDialog'
import {WindowsDialog} from './Factory/WindowsDialog'
import { DialogCreator } from './Factory/DialogCreator';

require('dotenv').config();

class Application {
     dialog : DialogCreator

     constructor(dialog : DialogCreator){
        this.dialog = dialog;
     }

    Render():string {  
       return this.dialog.render();
    }
}

const main  = (dailogType:string): string => {
   let app :Application;
    if(process.env.WEB_OS === dailogType){
        
        app  = new Application(new WebDialog())
        return app.Render();
    }
    else if(process.env.WINDOWS_OS === dailogType){
      
        app  = new Application(new WindowsDialog())
       
        return app.Render();
    }
    return "";
}

console.log(main("Web"));