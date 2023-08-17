var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit-element';
import { customElement } from 'lit/decorators.js';
let Attribution = class Attribution extends LitElement {
    render() {
        return html ` <attribution>attribution</attribution>`;
    }
};
Attribution.styles = css `
    :host {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
    }
  `;
Attribution = __decorate([
    customElement('eb-attribution')
], Attribution);
export { Attribution };
//# sourceMappingURL=eb-attribution.js.map