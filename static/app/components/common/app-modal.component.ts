import {Component, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";


export class ModalButton {

    constructor(private _label?: string, private _cssClass?: string, private _callback?: (args?: any[]) => void) {
        if (!_cssClass) {
            this._cssClass = 'btn-default';
        }
        if (!_label) {
            this._label = 'Button'
        }
    }

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }

    get cssClass(): string {
        return this._cssClass;
    }

    set cssClass(value: string) {
        this._cssClass = value;
    }

    get callback(): (args?: any[]) => void {
        return this._callback;
    }

    set callback(fn: (args?: any[]) => void) {
        this._callback = fn;
    }


}

export class AppModalConfiguration {

    private _buttons: ModalButton[];

    constructor(private _header?: string, private _body?: string, private _size?: string) {
        this._buttons = [];
    }

    addButton(button: ModalButton) {
        this._buttons.push(button);
    }

    removeButton(button: ModalButton) {
        var idx = this._buttons.indexOf(button);
        this._buttons.splice(idx, 1);
    }

    get buttons():ModalButton[] {
        return this._buttons;
    }

    get header(): string {
        return this._header;
    }

    set header(value: string) {
        this._header = value;
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }
    
    get size(): string {
        return this._size;
    }

    set size(value: string) {
        this._size = value;
    }

}

@Component({
    moduleId: module.id,
    selector: 'app-modal',
    styleUrls: [],
    templateUrl: 'app-modal.component.html'
})
export class AppModalComponent {

    @ViewChild('modal')
    modal: ModalComponent;
    header: string;
    body: string;
    buttons: ModalButton[];

    open(config: AppModalConfiguration) {
        this.header = config.header || 'Dialog';
        this.body = config.body || 'Dialog content';
        this.buttons = config.buttons;
        this.modal.open(config.size);
    }

    close(button: ModalButton, value?: any) {
        this.modal.close(value);
        if (button.callback) {
            button.callback();
        }
    }
}