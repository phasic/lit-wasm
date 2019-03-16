import { LitElement, html } from 'lit-element';

export const LitWasmMixin = base => class extends base {
    static get properties() {
        return {
            ...super.properties,
            __wasmTemplate: {
                type: String,
            },
        };
    }

    constructor() {
        super();
        this.__wasmTemplate = 'lala ${this.value} blabla'
    }
    connectedCallback() {
        super.connectedCallback();
        // this.render();
    }

    _renderWasmTemplate() {
        const wasmtemplatestring = this.__wasmTemplate;
        console.log('wasmtemplatestring :', wasmtemplatestring);
        const x = eval('`' + wasmtemplatestring + '`');
        console.log('x :', x);


    }

    bla() {
        console.log(' LALALAAL');
    }
}