import { newSpecPage } from '@stencil/core/testing';
import { PismoNav } from '../pismo-nav';

describe('pismo-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PismoNav],
      html: `<pismo-nav></pismo-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <pismo-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pismo-nav>
    `);
  });
});
