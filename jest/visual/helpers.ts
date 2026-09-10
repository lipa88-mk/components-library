import 'jest-puppeteer';

export const takeScreenshot = () =>
    page.screenshot({
        encoding: 'base64',
        fullPage: true,
    });

type GotoPlaygroundOptions = {
    path: string;
};

export const goToStorybookPage = async ({ path }: GotoPlaygroundOptions) => {
    await page.goto(`http://localhost:6006/${path}`);
    await page.waitForSelector('#storybook-root', {
        visible: true,
    });
};
