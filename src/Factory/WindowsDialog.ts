import {DialogCreator} from './DialogCreator'
import {IButton} from './IButton'
import {WindowsButton} from './WindowsButton'

export class WindowsDialog extends DialogCreator
{
    public createButton(): IButton {
       return new WindowsButton();
    }
    
}