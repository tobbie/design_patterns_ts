import {DialogCreator} from './DialogCreator'
import {IButton} from './IButton'
import {HtmlButton} from './HtmlButton'

export class WebDialog extends DialogCreator
{
    public createButton(): IButton {
       return new HtmlButton();
    }
    
}