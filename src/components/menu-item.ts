import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('eb-menu-item')
export class MenuItem extends LitElement {
  static override styles = css`
    :host {
      display: block;
      color: #2b2b2b;
      fill: currentcolor;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `;

  override render() {
    return html`<p>MenuItem</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eb-menu-item': MenuItem;
  }
}
