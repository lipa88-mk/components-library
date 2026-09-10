import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
    customSnapshotsDir: `${process.cwd()}/jest/__image_snapshots__/`,
});

expect.extend({
    toMatchImageSnapshot,
});
