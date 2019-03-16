import { LitElement, html } from 'lit-element';

const __convertToKebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

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
        const moduleName = __convertToKebabCase(this.constructor.name);
        console.log('moduleName :', moduleName);
        // this.__loadWasmModule(moduleName);

    }
    connectedCallback() {
        super.connectedCallback();
    }

    _renderWasmTemplate() {
        const wasmtemplatestring = this.__wasmTemplate;
        console.log('wasmtemplatestring :', wasmtemplatestring);
        const x = eval('`' + wasmtemplatestring + '`');
        console.log('x :', x);


    }

    __loadWasmModule(moduleName) {
        import(`../${moduleName}/wasm/${moduleName}.js`);

    }
}