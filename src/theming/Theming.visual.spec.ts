import 'jest-puppeteer';
import 'expect-puppeteer';
import { goToStorybookPage, takeScreenshot } from '../../jest/visual/helpers';

it('Light palette', async () => {
    await goToStorybookPage({ path: 'iframe.html?globals=mode:light&id=theming--tokens' });
    const image = await takeScreenshot();
    expect(image).toMatchImageSnapshot();
});

it('Dark palette', async () => {
    await goToStorybookPage({ path: 'iframe.html?globals=mode:dark&id=theming--tokens' });
    const image = await takeScreenshot();
    expect(image).toMatchImageSnapshot();
});
