import {IButton} from './IButton'
import {DialogCreator} from './DialogCreator'

export class HtmlButton implements IButton{
    Render(): void {
        console.log('Button rendered with Html style');
    }    
    OnClick(dialog: DialogCreator): void {
        console.log('HtmlButton click event called');
    }

    toString():string {
        return `Created a HTML Button`;
    }
    
     
    
    


}
