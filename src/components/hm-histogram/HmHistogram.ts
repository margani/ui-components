import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class HmHistogram extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--hm-histogram-text-color, #000);
    }
  `;

  defaultItemStyles = 'align-self: flex-end; width: 8px; display: block; border-top-left-radius:2px; border-top-right-radius:2px;';

  @property({ type: Number }) height = 40;
  @property({ type: Array<Number> }) items = [25, 10, 35, 2, 8, 28, 31, 4, 24];

  render() {
    return html`
      <ul style="display: flex; list-style-type:none; height: ${this.height}px">
        ${this.items.map(
      (item) => html`<li style="${this.defaultItemStyles}; margin-right: 5px; background-color: rgb(229,229,229);height: ${this.height}px; position: relative;width: 8px;">
          <a style="${this.defaultItemStyles} background-color: hsl(200, 60%, 60%); height: ${item}px; bottom: 0; position:absolute"></a>
      </li>
          `
    )}
      </ul>
    `;
  }
}
