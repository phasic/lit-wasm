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
  }

  bla() {
    // When a HTML dice is clicked, it's value will change.
    var dice = this.shadowRoot.querySelectorAll('button')[0];
    console.log('dice :', dice);

    dice.addEventListener('click', function () {

      // Make a call to the roll_dice function from the C code.
      var result = _roll_dice();
      console.log('result :', result);

    });
  }

  render() {

    return html`
    <script src="./wasm/custom-component.js"></script>
    <!-- <button id="button"  type="button" @click=${this.bla}>lala</button> -->
  `;
  }


}

customElements.define('custom-component', CustomComponent);