import { html } from 'lit-element';

export const LitWasmMixin = base => class extends base {
    constructor() {
        super();
        this.__bindWasmExportsToProperties();
    }

    __bindWasmExportsToProperties() {
        const wasmObject = this.mapWasmToProps()
        Object.keys(wasmObject)
        .forEach(el => {
            this[el] = eval(`${wasmObject[el]}`);
        })
    }

    __renderWasmTemplate(){
        console.log('_wasm_template() :', _wasm_template());
        return eval('html`'+_wasm_template()+'`');
    }
}