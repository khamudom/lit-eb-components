import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {colors} from './design-tokens';

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
      background-color: var(--background-color);
      color: var(--foreground-color);
      fill: currentcolor;
      border: 1px solid rgba(0, 0, 0, 0.0578);
      border-radius: 4px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
      box-sizing: border-box;
      contain: content;
    }
    .container {
      display: block;
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

  @property({type: String}) size: CardSize = CardSize._1x_2y;

  @property({type: String}) backgroundColor = colors.backgroundColorLight;

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('backgroundColor')) {
      this.style.setProperty('--background-color', this.backgroundColor);
      this.calculateForegroundColor();
      super.updated(changedProperties);
    }
  }

  private calculateForegroundColor() {
    const backgroundHex = this.backgroundColor.replace('#', '');
    const invertedHex = (0xffffff - parseInt(backgroundHex, 16)).toString(16);
    const foregroundColor = `#${invertedHex}`;
    this.style.setProperty('--foreground-color', foregroundColor);
  }

  override render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eb-card': Card;
  }
}
