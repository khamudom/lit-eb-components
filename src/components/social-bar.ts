import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './button.js';

@customElement('eb-social-bar')
export class SocialBar extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
    .container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-inline-start: -12px;
    }
    .btn-container {
      display: inline-flex;
      align-items: center;
    }
    .count {
      display: none;
      font-size: 12px;
      margin-inline-start: 4px;
    }
    .count.active {
      display: inline-block;
    }
    svg path {
    }
  `;

  @property({type: Number}) likeCount = 0;

  @property({type: Number}) dislikeCount = 0;

  @property({type: Boolean}) isLikeSelected = false;

  @property({type: Boolean}) isDislikeSelected = false;

  private handleLikeClick() {
    if (this.isLikeSelected) {
      this.likeCount--;
      this.isLikeSelected = false;
    } else {
      this.likeCount++;
      this.isLikeSelected = true;
      if (this.isDislikeSelected) {
        this.dislikeCount--;
        this.isDislikeSelected = false;
      }
    }
    this.requestUpdate();
  }

  private handleDislikeClick() {
    if (this.isDislikeSelected) {
      this.dislikeCount--;
      this.isDislikeSelected = false;
    } else {
      this.dislikeCount++;
      this.isDislikeSelected = true;
      if (this.isLikeSelected) {
        this.likeCount--;
        this.isLikeSelected = false;
      }
    }
    this.requestUpdate();
  }

  override render() {
    return html`
      <div
        class="container"
        likeCount=${this.likeCount}
        dislikeCount=${this.dislikeCount}
      >
        <div class="btn-container">
          <eb-button @click=${this.handleLikeClick}>
            ${this.isLikeSelected
              ? html`<svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- Filled SVG -->
                  <path
                    d="M15.0556 9.00361C15.5164 7.57659 15.7491 6.32742 15.7491 5.25034C15.7491 2.85167 14.81 1.00293 13.2491 1.00293C12.4023 1.00293 12.1402 1.50717 11.8123 2.74976C11.8295 2.68483 11.6494 3.38371 11.5968 3.57096C11.4958 3.9297 11.32 4.54045 11.0697 5.40197C11.063 5.42505 11.0532 5.4468 11.0403 5.46688L8.17359 9.95254C7.49554 11.0135 6.49507 11.829 5.31919 12.2792L4.06196 12.7606C3.26859 13.0643 2.80797 13.894 2.96968 14.728L3.65584 18.2667C3.82298 19.1287 4.47629 19.8147 5.32909 20.0237L13.5786 22.0456C16.1098 22.666 18.6682 21.1311 19.3121 18.6057L20.886 12.4331C21.2612 10.9614 20.3723 9.46411 18.9007 9.08887C18.6786 9.03225 18.4504 9.00361 18.2212 9.00361H15.0556Z"
                    fill="currentcolor"
                  />
                </svg> `
              : html`<svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- Regular SVG -->
                  <path
                    d="M16.4996 5.20259C16.4996 2.76065 15.3595 1.00391 13.4932 1.00391C12.467 1.00391 12.1149 1.60527 11.747 3.00348C11.6719 3.29233 11.635 3.43297 11.596 3.57157C11.495 3.93031 11.3192 4.54106 11.069 5.40258C11.0623 5.42566 11.0524 5.44741 11.0396 5.46749L8.17281 9.95315C7.49476 11.0141 6.49429 11.8296 5.31841 12.2798L4.84513 12.461C3.5984 12.9384 2.87457 14.2421 3.1287 15.5527L3.53319 17.6388C3.77462 18.8839 4.71828 19.8748 5.9501 20.1767L13.5778 22.0462C16.109 22.6666 18.6674 21.1317 19.3113 18.6064L20.7262 13.0572C21.1697 11.3179 20.1192 9.54845 18.3799 9.10498C18.1175 9.03807 17.8478 9.00422 17.5769 9.00422H15.7536C16.2497 7.37133 16.4996 6.11155 16.4996 5.20259ZM4.60127 15.2672C4.48576 14.6715 4.81477 14.0788 5.38147 13.8619L5.85475 13.6806C7.33036 13.1157 8.58585 12.0923 9.43674 10.7609L12.3035 6.27526C12.3935 6.13437 12.4629 5.98131 12.5095 5.82074C12.7608 4.95574 12.9375 4.34175 13.0399 3.97786C13.083 3.82461 13.1239 3.66916 13.1976 3.38519C13.3875 2.66348 13.4809 2.50391 13.4932 2.50391C14.3609 2.50391 14.9996 3.48797 14.9996 5.20259C14.9996 6.08708 14.6738 7.53803 14.0158 9.51766C13.8544 10.0032 14.2158 10.5042 14.7275 10.5042H17.5769C17.7228 10.5042 17.868 10.5224 18.0093 10.5585C18.9459 10.7973 19.5115 11.7501 19.2727 12.6866L17.8578 18.2357C17.4172 19.9636 15.6668 21.0138 13.9349 20.5893L6.30718 18.7198C5.64389 18.5572 5.13577 18.0237 5.00577 17.3532L4.60127 15.2672Z"
                    fill="currentcolor"
                  />
                </svg> `}
            <span class="count ${this.likeCount > 0 ? 'active' : ''}">
              ${this.likeCount}
            </span>
          </eb-button>
        </div>
        <div class="btn-container">
          <eb-button @click=${this.handleDislikeClick}>
            ${this.isDislikeSelected
              ? html`<svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- Filled SVG -->
                  <path
                    d="M15.0556 14.1826C15.5164 15.6096 15.7491 16.8587 15.7491 17.9358C15.7491 20.3345 14.81 22.1832 13.2491 22.1832C12.4493 22.1832 12.1712 21.7335 11.8665 20.6367L11.5968 19.6152C11.4958 19.2565 11.32 18.6457 11.0697 17.7842C11.063 17.7611 11.0532 17.7394 11.0403 17.7193L8.17359 13.2336C7.49554 12.1727 6.49507 11.3572 5.31919 10.907L4.06196 10.4256C3.26859 10.1218 2.80797 9.29217 2.96968 8.45817L3.65584 4.9195C3.82298 4.05751 4.47629 3.3715 5.32909 3.16248L13.5786 1.14055C16.1098 0.520162 18.6682 2.05509 19.3121 4.58042L20.886 10.7531C21.2612 12.2248 20.3723 13.7221 18.9007 14.0973C18.6786 14.1539 18.4504 14.1826 18.2212 14.1826H15.0556Z"
                    fill="currentcolor"
                  />
                </svg> `
              : html`<svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- Regular SVG -->
                  <path
                    d="M16.4996 17.9852C16.4996 20.4271 15.3595 22.1838 13.4932 22.1838C12.5183 22.1838 12.1518 21.6411 11.8021 20.3881L11.596 19.6162C11.495 19.2574 11.3192 18.6467 11.069 17.7852C11.0623 17.7621 11.0524 17.7403 11.0396 17.7203L8.17281 13.2346C7.49476 12.1736 6.49429 11.3581 5.31841 10.9079L4.84513 10.7267C3.5984 10.2494 2.87457 8.94562 3.1287 7.63505L3.53319 5.54897C3.77462 4.30388 4.71828 3.31298 5.9501 3.01106L13.5778 1.14153C16.109 0.521138 18.6674 2.05607 19.3113 4.5814L20.7262 10.1306C21.1697 11.8698 20.1192 13.6393 18.3799 14.0828C18.1175 14.1497 17.8478 14.1835 17.5769 14.1835H15.7536C16.2497 15.8164 16.4996 17.0762 16.4996 17.9852ZM4.60127 7.92059C4.48576 8.5163 4.81477 9.10893 5.38147 9.3259L5.85475 9.5071C7.33036 10.0721 8.58585 11.0954 9.43674 12.4268L12.3035 16.9125C12.3935 17.0534 12.4629 17.2064 12.5095 17.367L13.0614 19.2873L13.2731 20.0786C13.4125 20.5666 13.4827 20.6838 13.4932 20.6838C14.3609 20.6838 14.9996 19.6998 14.9996 17.9852C14.9996 17.1007 14.6738 15.6497 14.0158 13.6701C13.8544 13.1846 14.2158 12.6835 14.7275 12.6835H17.5769C17.7228 12.6835 17.868 12.6653 18.0093 12.6293C18.9459 12.3905 19.5115 11.4377 19.2727 10.5012L17.8578 4.952C17.4172 3.22415 15.6668 2.17393 13.9349 2.59841L6.30718 4.46794C5.64389 4.63051 5.13577 5.16407 5.00577 5.83451L4.60127 7.92059Z"
                    fill="currentcolor"
                  />
                </svg> `}
            <span class="count ${this.dislikeCount > 0 ? 'active' : ''}">
              ${this.dislikeCount}
            </span>
          </eb-button>
        </div>
        <div class="btn-container">
          <eb-button href="#" target="blank">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Regular SVG -->
              <path
                d="M5.25 18C3.45507 18 2 16.5449 2 14.75V6.25C2 4.45507 3.45507 3 5.25 3H18.75C20.5449 3 22 4.45507 22 6.25V14.75C22 16.5449 20.5449 18 18.75 18H13.0125L7.99868 21.7507C7.44585 22.1642 6.6625 22.0512 6.24901 21.4984C6.08736 21.2822 6 21.0196 6 20.7499L5.99921 18H5.25ZM12.5135 16.5H18.75C19.7165 16.5 20.5 15.7165 20.5 14.75V6.25C20.5 5.2835 19.7165 4.5 18.75 4.5H5.25C4.2835 4.5 3.5 5.2835 3.5 6.25V14.75C3.5 15.7165 4.2835 16.5 5.25 16.5H7.49879L7.499 17.2498L7.49986 20.2506L12.5135 16.5Z"
                fill="currentcolor"
              />
            </svg>
          </eb-button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eb-social-bar': SocialBar;
  }
}
