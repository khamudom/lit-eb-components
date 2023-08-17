import { LitElement } from 'lit';
import './attribution.js';
export declare class ArticleCard extends LitElement {
    static styles: import("lit").CSSResult;
    title: string;
    description: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'eb-article-card': ArticleCard;
    }
}
//# sourceMappingURL=article-card.d.ts.map