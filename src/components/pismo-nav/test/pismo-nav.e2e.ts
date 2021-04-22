import { newE2EPage } from '@stencil/core/testing';

describe('pismo-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pismo-nav></pismo-nav>');

    const element = await page.find('pismo-nav');
    expect(element).toHaveClass('hydrated');
  });
});
