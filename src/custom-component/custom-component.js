import { LitElement, html } from 'lit-element';
import { LitWasmMixin } from '../../lit-wasm-mixin.js';

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
  }

  render() {
    this._renderWasmTemplate();
    return html`
  A${this.value}B
  `;
  }
}

customElements.define('custom-component', CustomComponent);