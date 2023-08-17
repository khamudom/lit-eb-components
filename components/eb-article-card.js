var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './eb-attribution.js';
let ArticleCard = class ArticleCard extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.description = '';
    }
    render() {
        return html `
      <eb-attribution></eb-attribution>
      <h2>${this.title}</h2>
      <p>${this.description}</p>
    `;
    }
};
ArticleCard.styles = css `
    :host {
      background: var(--fillColor, #ffffff);
      border: 1px solid rgba(0, 0, 0, 0.0578);
      background-clip: padding-box;
      border-radius: 4px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
      box-sizing: border-box;
      color: var(--defaultColor, #000000);
      contain: content;
      content-visibility: auto;
      outline-offset: 1px;
    }
  `;
__decorate([
    property({ type: String })
], ArticleCard.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ArticleCard.prototype, "description", void 0);
ArticleCard = __decorate([
    customElement('eb-article-card')
], ArticleCard);
export { ArticleCard };
//# sourceMappingURL=eb-article-card.js.map