
import {IButton} from './IButton'

export abstract class DialogCreator {

   public abstract createButton() : IButton

    public render(): string {
        const button = this.createButton();
        button.OnClick(this)
        return `Creator just created ${button.toString()} button`;

    }
}

