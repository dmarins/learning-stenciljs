import { newE2EPage } from '@stencil/core/testing';

describe('pismo-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pismo-sidebar></pismo-sidebar>');

    const element = await page.find('pismo-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
