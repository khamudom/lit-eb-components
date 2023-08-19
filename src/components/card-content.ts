import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('eb-card-content')
export class CardContent extends LitElement {
  static override styles = css`
    :host {
      display: block;
      color: var(--primary-color, #2b2b2b);
      fill: currentcolor;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .content-card {
      width: 100%;
      height: 100%;
    }
    .content {
      display: grid;
      grid-template-rows: auto 1fr auto;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: relative;
    }
    :host([immersive]) .content {
      grid-template-rows: 1fr auto auto;
      color: #ffffff;
      fill: #fff;
    }
    ::slotted([slot='media']) {
      height: 157px;
      grid-row: 1/2;
      object-fit: cover;
    }
    :host([immersive]) ::slotted([slot='media']) {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: -1;
      grid-row: unset;
    }
    .text {
      grid-row: 2/3;
      padding: 12px 16px 0;
    }
    :host([immersive]) .text {
      padding: 12px 16px 0;
      z-index: 1;
    }
    ::slotted([slot='attribution']) {
      margin-bottom: 8px;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      grid-row: 3 / auto;
      padding: 4px 16px 10px;
    }
    :host([immersive]) .action-wrapper {
      padding: 10px 16px;
      z-index: 1;
    }
    .action-start,
    .action-end {
      display: flex;
      align-items: center;
    }
    .action-end {
      margin-inline-start: auto;
    }
    .gradient {
      display: none;
    }
    :host([immersive]) .gradient {
      display: block;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.54) 100%
      );
      grid-row: 1;
      width: 100%;
      height: 80px;
      align-self: end;
    }
    .media-overlay {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: rgba(0, 0, 0, 0.3);
      grid-row: 1/1;
    }
    :host([immersive]) .media-overlay {
      grid-row: 2 / auto;
      background: rgba(0, 0, 0, 0.54);
    }
  `;

  @property({type: Boolean, reflect: true}) immersive = false;

  @property({type: Boolean, reflect: true}) half = false;

  @property({type: Boolean}) showAbstract = false;

  protected override render() {
    return html` <div role="article" class="content-card">
      <div class="content">
        <slot name="media"></slot>
        <div class="gradient"></div>
        <div class="media-overlay"></div>
        <div class="text">
          <slot name="attribution"></slot>
          <a class="heading">
            <slot></slot>
          </a>
          ${this.showAbstract ? html`<slot name="abstract"></slot>` : ``}
        </div>
        <div class="action-wrapper">
          <div class="action-start">
            <slot name="action-start"></slot>
          </div>
          <div class="action-end"></div>
            <slot name="action-end"></slot>
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
