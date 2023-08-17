import { LitElement } from 'lit-element';
export declare enum CardSize {
    _1x_1y = "_1x_1y",
    _1x_2y = "_1x_2y",
    _2x_2y = "_2x_2y",
    _2x_1y = "_2x_1y"
}
export declare class Card extends LitElement {
    static styles: import("lit-element").CSSResult;
    size: CardSize;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'eb-card': Card;
    }
}
//# sourceMappingURL=card.d.ts.map