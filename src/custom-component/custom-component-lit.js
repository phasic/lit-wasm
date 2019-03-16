import { LitElement, html } from 'lit-element';
import { LitWasmMixin } from '../mixins/lit-wasm-mixin.js';

class CustomComponent extends LitWasmMixin(LitElement) {
  static get properties() {
    return {
      ...super.properties,
      value: {
        type: Number
      },
      roll_dice: {
        type: Function,
      }
    }
  }

  mapWasmToProps() {
    return {
      roll_dice: '_roll_dice',
    }
  }

  constructor() {
    super();
  }

  _buttonClicked() {
    this.value = this.roll_dice();
  }

  render() {
     return this.__renderWasmTemplate();
  }


}

customElements.define('custom-component', CustomComponent);
