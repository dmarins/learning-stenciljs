import { newSpecPage } from '@stencil/core/testing';
import { PismoSidebar } from '../pismo-sidebar';

describe('pismo-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PismoSidebar],
      html: `<pismo-sidebar></pismo-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <pismo-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pismo-sidebar>
    `);
  });
});
