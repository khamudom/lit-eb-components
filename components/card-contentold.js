var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './attribution.js';
let CardContent = class CardContent extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.description = '';
    }
    render() {
        return html `
      <slot name="media" class="media"></slot>
      <h2>${this.title}</h2>
      <p>${this.description}</p>
    `;
    }
};
CardContent.styles = css `
    :host {
      display: grid;
      grid-template-rows: auto 1fr auto;
      row-gap: 0px;
      color: var(--defaultColor, #000000);
      grid-template-columns: 1fr;
      column-gap: 0px;
    }
    ::slotted(img) {
      grid-area: 1 / 1 / auto / auto;
      height: 157px;
      width: 100%;
      display: flex;
    }
  `;
__decorate([
    property({ type: String })
], CardContent.prototype, "title", void 0);
__decorate([
    property({ type: String })
], CardContent.prototype, "description", void 0);
CardContent = __decorate([
    customElement('eb-card-contentss')
], CardContent);
export { CardContent };
//# sourceMappingURL=card-contentold.js.map