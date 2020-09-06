import { Component, Prop, h } from '@stencil/core';
import Themed from '../../theme';
export class MyComponent {
  render() {
    return h(Themed, null,
      h("div", { class: "wrapper" },
        h("img", { class: "logo", src: "https://apps.duxxie.nl/images/general/logo.svg" }),
        h("h2", null, "Checklist knie")));
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get properties() { return {
    "first": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The first sentence"
      },
      "attribute": "first",
      "reflect": false
    },
    "last": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The last sentence"
      },
      "attribute": "last",
      "reflect": false
    }
  }; }
}
