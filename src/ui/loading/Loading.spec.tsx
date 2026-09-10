import React, { FC } from 'react';
import { act, render, screen } from '@testing-library/react';
import { Loading, DEFAULT_MIN_LOADER_VISIBILITY } from './Loading';

jest.mock('@headlessui/react', () => ({
    Transition: ({ show, children }) => show && children,
}));

describe('Loading component', () => {
    it('should cleanup timer on unmount', () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        const TestComponent: FC<{ isLoading: boolean }> = ({ isLoading }) => (isLoading ? <Loading /> : null);

        jest.useFakeTimers();
        const { rerender } = render(<TestComponent isLoading={true} />);
        rerender(<TestComponent isLoading={false} />);
        act(() => {
            jest.runOnlyPendingTimers();
        });
        jest.useRealTimers();

        expect(console.error).not.toHaveBeenCalled();
    });
});

describe('Loading component', () => {
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => {
        act(() => {
            jest.runOnlyPendingTimers();
        });
        jest.useRealTimers();
    });

    it('should show loading state with message by default', () => {
        const { container } = render(<Loading />);

        expect(container).toHaveTextContent(/Loading data/i);
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    it('should display completed icon when loader is about to be hidden', () => {
        const { rerender } = render(<Loading />);
        rerender(<Loading isLoading={false} />);

        expect(screen.getByTestId('completed')).toBeInTheDocument();
    });

    it('should not hide loader after default delay if loading is not finished', () => {
        const { container } = render(<Loading />);

        act(() => {
            jest.advanceTimersByTime(DEFAULT_MIN_LOADER_VISIBILITY + 1000);
        });

        expect(container).toHaveTextContent(/loading data/i);
    });

    it('should hide loader after default delay if loading is finished', () => {
        const { rerender, container } = render(<Loading />);
        rerender(<Loading isLoading={false} />);

        act(() => {
            jest.advanceTimersByTime(DEFAULT_MIN_LOADER_VISIBILITY);
        });

        expect(container).not.toHaveTextContent(/loading data/i);
    });

    it('should not hide loader if the loading is still pending', () => {
        const { rerender, container } = render(<Loading />);
        rerender(<Loading isLoading={false} />);

        act(() => {
            jest.advanceTimersByTime(DEFAULT_MIN_LOADER_VISIBILITY / 2);
        });

        rerender(<Loading isLoading={true} />);

        act(() => {
            jest.advanceTimersByTime(DEFAULT_MIN_LOADER_VISIBILITY);
        });

        expect(container).toHaveTextContent(/loading data/i);
    });

    it('should hide loader if the loading finished and default delay also passed', () => {
        const { rerender, container } = render(<Loading />);

        act(() => {
            jest.advanceTimersByTime(DEFAULT_MIN_LOADER_VISIBILITY / 2);
        });

        rerender(<Loading isLoading={false} />);

        act(() => {
            jest.advanceTimersByTime(DEFAULT_MIN_LOADER_VISIBILITY);
        });

        expect(container).not.toHaveTextContent(/loading data/i);
    });

    it('should hide loader if the loading finished and default delay also passed2', () => {
        const { rerender, container } = render(<Loading isLoading={false} />);
        rerender(<Loading isLoading />);

        expect(container).toHaveTextContent(/loading data/i);
    });
});
