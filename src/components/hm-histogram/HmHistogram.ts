import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class HmHistogram extends LitElement {
  static styles = css`
    :host {
    }
  `;

  @property({ type: Number, reflect: true }) height = 40;
  @property({ type: Array<Number>, reflect: true }) items = [25, 10, 35, 2, 8, 28, 31, 4, 24];

  _uniqueId: string;

  constructor() {
    super();
    this._uniqueId = Math.random().toString(36).substr(2, 9);
  }

  render() {
    return html`
      <div id="histogram-${this._uniqueId}">
        <ul style="display: flex; flex-flow: row nowrap; justify-content: space-around; list-style-type:none; margin:0; padding: 0; position: relative; height: ${this.height}px;">
          ${this.items.map((item) => html
            `<li style="margin-right: 5px; background-color: rgb(229,229,229);height: ${this.height}px; position: relative; width: 8px;">
              <a style="align-self: flex-end; width: 8px; display: block; border-top-left-radius:2px; border-top-right-radius:2px; background-color: hsl(200, 60%, 60%); height: ${item}px; bottom: 0; position:absolute"></a>
            </li>`)}
        </ul>
      </div>
    `;
  }
}
