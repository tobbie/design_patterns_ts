import {DialogCreator}from './DialogCreator'

export interface IButton {
    Render(): void;
    OnClick (dialog: DialogCreator): void;
    toString():string;
}