import '@testing-library/jest-dom';

declare global {
    interface Window {
        clipboardData: {
            data: any;
            getData: (type) => string;
            setData: (type, data) => void;
        };
    }

    namespace jest {
        interface Matchers<R> {
            toExactMatch(expected: any): R;
        }
        interface Expect {
            toExactMatch(expected: any);
        }
    }
}

export class IntersectionObserver {
    root = null;
    rootMargin = '';
    thresholds = [];

    disconnect() {
        return null;
    }

    observe() {
        return null;
    }

    takeRecords() {
        return [];
    }

    unobserve() {
        return null;
    }
}
window.IntersectionObserver = IntersectionObserver;
global.IntersectionObserver = IntersectionObserver;

expect.extend({
    toExactMatch(received, expected) {
        const eStr = JSON.stringify(expected);
        const rStr = JSON.stringify(received);

        if (eStr === rStr)
            return {
                message: () => '',
                pass: true,
            };

        return {
            pass: false,
            message: () => `Received ${rStr} should fully match ${eStr}`,
        };
    },
});

global.ResizeObserver = require('resize-observer-polyfill');

// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
