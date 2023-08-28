import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('dynamic-color')
class DynamicColor extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `;

  @property({type: String}) backgroundColor = '';
  @property({type: String}) foregroundColor = '';

  constructor() {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  override updated(changedProperties: any) {
    if (changedProperties.has('backgroundColor')) {
      this.calculateForegroundColor();
      this.requestUpdate();
    }
  }

  private calculateForegroundColor() {
    // Add your logic here to determine the appropriate foreground color
    // based on the background color. This could involve checking contrast
    // ratios, using libraries like chroma.js, or any other method you prefer.

    // For the sake of demonstration, let's assume a simple inversion.
    const backgroundHex = this.backgroundColor.replace('#', '');
    const invertedHex = (0xffffff - parseInt(backgroundHex, 10)).toString(16);
    this.foregroundColor = `#${invertedHex}`;
  }

  // private updateColorStyles() {
  //   // Set CSS Custom Properties for foreground and background colors
  //   document.documentElement.style.setProperty(
  //     '--dynamic-foreground-color',
  //     this.foregroundColor
  //   );
  //   document.documentElement.style.setProperty(
  //     '--dynamic-background-color',
  //     this.backgroundColor
  //   );
  // }

  override render() {
    return html`
      <div
        style="background-color: ${this.backgroundColor}; color: ${this
          .foregroundColor};"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dynamic-color': DynamicColor;
  }
}
