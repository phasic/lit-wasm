import { LitElement, html } from 'lit-element';

const __convertToKebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const LitWasmMixin = base => class extends base {
    constructor(){
        super();
        // this.fetchWasm();
    }
    async fetchWasm() {
        
        const moduleName = __convertToKebabCase(this.constructor.name);
        console.log(`Fetching wasm: ${moduleName} ...`);
        // await import(`../${moduleName}/wasm/${moduleName}.js`);
    }

    // _renderWasmTemplate() {
    //     const wasmtemplatestring = this.__wasmTemplate;
    //     console.log('wasmtemplatestring :', wasmtemplatestring);
    //     const x = eval('`' + wasmtemplatestring + '`');
    //     console.log('x :', x);


    // }
}