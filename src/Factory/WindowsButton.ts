import {IButton} from './IButton'
import {DialogCreator} from './DialogCreator'

export class WindowsButton implements IButton {
    Render(): void {
        console.log('Button has been redereed with windows style');
    }    
    OnClick(dialog:DialogCreator): void {
        console.log('Windows button clicked');
    }

    toString():string {
        return `Created a Windows Button`;
    }
}