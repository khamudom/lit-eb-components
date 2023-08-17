import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('eb-card-content')
export class CardContent extends LitElement {
  static override styles = css`
    :host {
      display: block;
      color: var(--primary-color, #2b2b2b);
      fill: currentcolor;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr minmax(auto, 84px);
      grid-template-rows: 1fr auto;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: relative;
    }
    ::slotted([slot='media']) {
      grid-area: 1 / 1 / 2 / 3;
      height: 157px;
      width: 100%;
      display: flex;
      object-fit: cover;
    }
    ::slotted([slot='attribution']) {
      margin-bottom: 8px;
    }
    .text {
      grid-area: 2 / 1/ 3 / 4;
      padding: 12px 16px 0;
    }
    .heading {
      display: -webkit-box;
      outline: 0px;
      overflow: hidden;
      text-decoration: none;
      -webkit-line-clamp: var(--heading-max-lines, 3);
      -webkit-box-orient: vertical;
      font-family: 'Segoe UI', sans-serif;
      font-weight: 600;
      font-size: var(--heading-font-size, 18px);
      line-height: var(--content-card-heading-line-height, 24px);
    }
    .action-wrapper {
      grid-column: span 2;
      grid-area: 3 / 1 / 4 / 3;
      padding: 4px 16px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .action-start,
    .action-end {
      display: flex;
      align-items: center;
    }
    .action-end {
      margin-inline-start: auto;
    }
  `;

  @property({type: Boolean, reflect: true}) immersive = false;

  protected override render() {
    return html` <div role="article">
      <div class="content">
        <slot name="media"></slot>
        <div class="text">
          <slot name="attribution"></slot>
          <a class="heading">
            <slot></slot>
          </a>
          <slot name="abstract"></slot>
        </div>
        <div class="action-wrapper">
          <span class="action-start">
            <slot name="action-start">action start</slot>
          </span>
          <span class="action-end"></span>
            <slot name="action-end">action end</slot>
          </span>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eb-card-content': CardContent;
  }
}