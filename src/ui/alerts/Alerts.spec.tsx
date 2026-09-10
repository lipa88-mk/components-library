import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alerts';
import type { AlertsProps } from './Alerts';

const defaultProps: AlertsProps = {
    title: 'Test title',
    message: 'Test message',
    list: ['item1', 'item2'],
    theme: 'info',
    linkTo: 'https://test.com',
    show: true,
};

describe('Alert component', () => {
    it('should render with default props', () => {
        const { getByText } = render(<Alert {...defaultProps} />);
        expect(getByText('Test title')).toBeInTheDocument();
        expect(getByText('Test message')).toBeInTheDocument();
        expect(getByText('item1')).toBeInTheDocument();
        expect(getByText('item2')).toBeInTheDocument();
        expect(getByText('Details')).toHaveAttribute('href', 'https://test.com');
    });

    it('should not render with empty props', () => {
        const { container } = render(<Alert show={false} />);
        expect(container.firstChild).toBeNull();
    });

    it('should render with success theme', () => {
        const { container } = render(<Alert {...defaultProps} theme="success" />);
        expect(container.firstChild).toHaveClass('bg-success-container-default');
        expect(container.querySelector('.text-success-default')).toBeInTheDocument();
    });

    it('should render with warning theme', () => {
        const { container } = render(<Alert {...defaultProps} theme="warning" />);
        expect(container.firstChild).toHaveClass('bg-warning-container-default');
        expect(container.querySelector('.text-warning-default')).toBeInTheDocument();
    });

    it('should render with danger theme', () => {
        const { container } = render(<Alert {...defaultProps} theme="danger" />);
        expect(container.firstChild).toHaveClass('bg-danger-container-default');
        expect(container.querySelector('.text-danger-default')).toBeInTheDocument();
    });

    it('should render with info theme', () => {
        const { container } = render(<Alert {...defaultProps} />);
        expect(container.firstChild).toHaveClass('bg-info-container-default');
        expect(container.querySelector('.text-info-default')).toBeInTheDocument();
    });

    it('should not render link if linkTo is not passed', () => {
        const { container } = render(<Alert {...defaultProps} linkTo={undefined} />);
        expect(container.querySelector('#components-notifications-link')).toBeNull();
    });

    it('should not render actions if action is not specified', () => {
        const { container } = render(<Alert {...defaultProps} />);
        expect(container.querySelector('#components-notifications-actions')).toBeNull();
    });

    it('should render actions if action specified', () => {
        const action = () => null;
        const { container } = render(<Alert {...defaultProps} onActionClick={action} />);
        expect(container.querySelector('#components-notifications-actions')).not.toBeNull();
    });

    it('should not render message if message prop is not passed', () => {
        const { container } = render(<Alert {...defaultProps} message={undefined} />);
        expect(container.querySelector('#components-notifications-message')).toBeNull();
    });

    it('should not render list if list prop is not passed', () => {
        const { container } = render(<Alert {...defaultProps} list={undefined} />);
        expect(container.querySelector('#components-notifications-list')).toBeNull();
    });
});
