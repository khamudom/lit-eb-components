import {css, html, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {until} from 'lit/directives/until.js';

@customElement('eb-card-content')
export class CardContent extends LitElement {
  static override styles = css`
    :host {
      display: block;
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
      color: var(--foreground-color);
      fill: currentcolor;
    }
    :host([half]) .content {
      grid-template-rows: unset;
      grid-template-columns: 1fr auto;
    }
    ::slotted([slot='media']) {
      height: 157px;
      grid-row: 1 / 2;
      object-fit: cover;
    }
    :host([immersive]) ::slotted([slot='media']) {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: -1;
      grid-row: unset;
    }
    :host([half]) ::slotted([slot='media']) {
      grid-column: 2 / auto;
      width: 82px;
      height: 82px;
      padding: 16px 16px 6px 8px;
      border-radius: 4px;
    }
    .text {
      grid-row: 2 / 3;
      padding: 12px 16px 0;
    }
    :host([immersive]) .text {
      padding: 12px 16px 0;
      z-index: 1;
    }
    :host([half]) .text {
      grid-row: 1 / auto;
      padding: 16px 0 0 16px;
    }
    ::slotted([slot='attribution']) {
      margin-bottom: 8px;
    }
    .heading {
      display: -webkit-box;
      outline: 0px;
      overflow: hidden;
      text-decoration: none;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-family: 'Segoe UI', sans-serif;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
    :host([half]) .heading {
      -webkit-line-clamp: 2;
      font-size: 14px;
      line-height: 20px;
    }
    :host([half]) ::slotted([slot='abstract']) {
      display: -webkit-box;
      outline: 0px;
      overflow: hidden;
      text-decoration: none;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-family: 'Segoe UI', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
    :host([half][hasabstractcontent]) .heading,
    :host([half][hasabstractcontent]) ::slotted([slot='abstract']) {
      -webkit-line-clamp: 1;
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
    :host([half]) .action-wrapper {
      grid-column: 1 / 4;
      grid-row: unset;
      padding: 0 16px 16px;
    }
    .action-start,
    .action-end {
      display: flex;
      align-items: center;
    }
    .action-end {
      margin-inline-start: auto;
    }
    .gradient,
    :host([half]) .gradient,
    :host([half]) .media-overlay {
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

  @property({type: Boolean, reflect: true}) hasAbstractContent = false;

  @query('slot[name="abstract"]') private abstractSlot!: HTMLSlotElement;

  constructor() {
    super();
    this.slotChangeHandler = this.slotChangeHandler.bind(this);
  }

  private slotChangeHandler() {
    this.updateSlotPresence();
  }

  private updateSlotPresence() {
    const hasNamedSlotContent = this.abstractSlot
      .assignedNodes({flatten: true})
      .some((node) => node instanceof HTMLElement);
    this.hasAbstractContent = Boolean(hasNamedSlotContent);
  }

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
          ${until(
            html`<slot
              name="abstract"
              id="abstractSlot"
              @slotchange=${this.slotChangeHandler}
            ></slot>`,
            html`<slot name="abstract"></slot>`
          )}
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
