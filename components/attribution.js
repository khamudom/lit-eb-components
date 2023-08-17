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
        return html ` <slot name="image"></slot>
      <span part="content" class="content">
        <slot></slot>
      </span>`;
    }
};
Attribution.styles = css `
    :host {
      display: flex;
      align-items: center;
    }
    .content {
      font-family: 'Segoe UI, sans serif';
      font-size: 0.85rem;
    }
    ::slotted([slot='image']) {
      margin-inline-end: 8px;
    }
  `;
Attribution = __decorate([
    customElement('eb-attribution')
], Attribution);
export { Attribution };
//# sourceMappingURL=attribution.js.map