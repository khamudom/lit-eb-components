import {css, html, LitElement} from 'lit-element';
import {customElement} from 'lit/decorators.js';

@customElement('eb-attribution')
export class Attribution extends LitElement {
  static override styles = css`
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

  override render() {
    return html` <slot name="image"></slot>
      <span part="content" class="content">
        <slot></slot>
      </span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eb-attribution': Attribution;
  }
}
