// import {PropertyValues} from 'lit';
import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export enum CardSize {
  _1x_1y = '_1x_1y',
  _1x_2y = '_1x_2y',
  _2x_2y = '_2x_2y',
  _2x_1y = '_2x_1y',
}

@customElement('eb-card')
export class Card extends LitElement {
  static override styles = css`
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
      height: 146px;
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

  @property({type: String})
  size: CardSize = CardSize._1x_2y;

  override render() {
    return html` <slot size="${this.size}"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eb-card': Card;
  }
}
