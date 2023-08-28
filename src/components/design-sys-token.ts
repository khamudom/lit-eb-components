import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {colors} from './design-tokens.js';

@customElement('combined-design-token')
export class CombinedDesignToken extends LitElement {
  @property({type: String}) backgroundColor = colors.backgroundColorLight;

  static override styles = css`
    :host {
      display: block;
    }
  `;

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      'design-token-change',
      this.handleDesignTokenChange as EventListener
    );
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      'design-token-change',
      this.handleDesignTokenChange as EventListener
    );
  }

  private handleDesignTokenChange(event: CustomEvent) {
    this.backgroundColor = event.detail.backgroundColor || '';
    this.requestUpdate();
  }

  override render() {
    return html`
      <slot
        name="consumer-slot"
        style="--background-color: ${this.backgroundColor};"
      ></slot>
    `;
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('backgroundColor')) {
      this.dispatchEvent(
        new CustomEvent('design-token-change', {
          detail: {backgroundColor: this.backgroundColor},
          bubbles: true,
          composed: true,
        })
      );
    }
    super.updated(changedProperties);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'combined-design-token': CombinedDesignToken;
  }
}
