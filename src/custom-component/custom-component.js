import { LitElement, html } from 'lit-element';
import { LitWasmMixin } from '../mixins/lit-wasm-mixin.js';

class CustomComponent extends LitWasmMixin(LitElement) {
  static get properties() {
    return {
      value: {
        type: Number
      }
    }
  }

  constructor() {
    super();
    this.value = 5;
    this.bla();
  }

  render() {
    this._renderWasmTemplate();
    return html`
  A${this.value}B
  `;
  }

  bla(){
    const moduleName = 'custom-component';
    import(`./wasm/${moduleName}.js`);

  }
}

customElements.define('custom-component', CustomComponent);