var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import {PropertyValues} from 'lit';
import { css, html, LitElement } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';
export var CardSize;
(function (CardSize) {
    CardSize["_1x_1y"] = "_1x_1y";
    CardSize["_1x_2y"] = "_1x_2y";
    CardSize["_2x_2y"] = "_2x_2y";
    CardSize["_2x_1y"] = "_2x_1y";
})(CardSize || (CardSize = {}));
let Card = class Card extends LitElement {
    constructor() {
        super(...arguments);
        this.size = CardSize._1x_2y;
        // override updated(changedProperties: PropertyValues) {
        //   super.updated(changedProperties);
        //   if (changedProperties.has('size')) {
        //     // Handle size changes here if needed
        //   }
        // }
    }
    render() {
        return html ` <div><slot></slot></div> `;
    }
};
Card.styles = css `
    :host {
      display: block;
      background: var(--fillColor, #ffffff);
      border: 1px solid rgba(0, 0, 0, 0.0578);
      border-radius: 4px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
      box-sizing: border-box;
      contain: content;
    }
    :host([size='_1x_1y']) {
      width: 300px;
      height: 140px;
    }
    :host([size='_1x_2y']) {
      width: 300px;
      height: 304px;
    }
    :host([size='_2x_2y']) {
      width: 612px;
      height: 304px;
    }
  `;
__decorate([
    property({ type: String })
], Card.prototype, "size", void 0);
Card = __decorate([
    customElement('eb-card')
], Card);
export { Card };
//# sourceMappingURL=card.js.map