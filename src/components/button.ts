import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

enum TargetOptions {
  Blank = '_blank',
  Self = '_self',
  Parent = '_parent',
  Top = '_top',
}

type TargetValue = keyof typeof TargetOptions;

@customElement('eb-button')
export class Button extends LitElement {
  static override styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }
    button,
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 0;
    }
    button:hover,
    a:hover,
    a:visited {
      background: #f5f5f5;
      cursor: pointer;
    }
  `;

  @property({type: String})
  href = '';

  @property({type: String})
  target: TargetValue = 'Blank';

  @property({attribute: true})
  override render(): TemplateResult {
    if (this.href) {
      return html`
        <a href="${this.href}" target="${this.target}"><slot></slot></a>
      `;
    } else {
      return html` <button><slot></slot></button> `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eb-button': Button;
  }
}
