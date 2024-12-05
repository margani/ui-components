import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { HmHistogram } from '../src/components/hm-histogram/HmHistogram.js';
import '../src/components/hm-histogram/hm-histogram.js';

describe('HmHistogram', () => {
  // it('has a default header "Hey there" and counter 5', async () => {
  //   const el = await fixture<HmHistogram>(html`<hm-histogram></hm-histogram>`);

  //   expect(el.header).to.equal('Hey there');
  //   expect(el.counter).to.equal(5);
  // });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture<HmHistogram>(html`<hm-histogram></hm-histogram>`);
  //   el.shadowRoot!.querySelector('button')!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the header via attribute', async () => {
  //   const el = await fixture<HmHistogram>(html`<hm-histogram header="attribute header"></hm-histogram>`);

  //   expect(el.header).to.equal('attribute header');
  // });

  // it('passes the a11y audit', async () => {
  //   const el = await fixture<HmHistogram>(html`<hm-histogram></hm-histogram>`);

  //   await expect(el).shadowDom.to.be.accessible();
  // });
});
