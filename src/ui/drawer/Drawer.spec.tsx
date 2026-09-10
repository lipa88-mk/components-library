import React, { PropsWithChildren } from 'react';
import type { Props } from './Drawer';
import { fireEvent, render, screen, act } from '@testing-library/react';
import Drawer from './Drawer';

const intersectionObserverMock = () => ({
    observe: () => null,
    disconnect: () => null,
    unobserve: () => null,
});
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

const defaultProps: Props = { open: true };
const getProps = (props?: PropsWithChildren<Partial<Props>>): Props => ({ ...defaultProps, ...props });

describe('Drawer component', () => {
    it('renders without errors', () => {
        const props = getProps();
        render(<Drawer {...props} />);
        expect(screen.queryByTestId('add-document-side-bar')).toBeInTheDocument();
    });

    it('renders with header', () => {
        const props = getProps({ header: 'Header' });
        render(<Drawer {...props} />);
        expect(screen.getByText('Header')).toBeInTheDocument();
    });

    it('renders with custom header component', () => {
        const Header = () => <h1>Custom Header</h1>;
        const props = getProps({ header: <Header /> });
        render(<Drawer {...props} />);
        expect(screen.getByText('Custom Header')).toBeInTheDocument();
    });

    it('renders with actions', () => {
        const props = getProps({ actions: <button>Actions</button> });
        render(<Drawer {...props} />);
        expect(screen.getByText('Actions')).toBeInTheDocument();
    });

    it('renders with children', () => {
        const props = getProps({ children: <div>Children</div> });
        render(<Drawer {...props} />);
        expect(screen.getByText('Children')).toBeInTheDocument();
    });

    it('renders with overlay', () => {
        const props = getProps({ overlay: true });
        render(<Drawer {...props} />);
        expect(screen.getByTestId('sidebar-header')).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const onClose = jest.fn();
        const props = getProps({ onClose });
        render(<Drawer {...props} />);
        const closeButton = screen.getByTestId('close-button');
        act(() => fireEvent.click(closeButton));
        expect(onClose).toHaveBeenCalled();
    });

    it('changes size when expand button is clicked', () => {
        const props = getProps();
        render(<Drawer {...props} />);
        const expandButton = screen.getByTestId('expand-button');
        act(() => fireEvent.click(expandButton));
        expect(expandButton).toHaveAttribute('id', 'drawer-arrow-right-icon');
        act(() => fireEvent.click(expandButton));
        expect(expandButton).toHaveAttribute('id', 'drawer-arrow-left-icon');
    });
});
