import React from 'react';
import { render, screen } from '@testing-library/react';
import Expand from './Expand';
import userEvent from '@testing-library/user-event';

describe('Expand', () => {
    it('should display title', () => {
        const { container } = render(
            <Expand title="Test Title">
                <div>Test content</div>
            </Expand>
        );
        expect(container).toHaveTextContent('Test Title');
    });

    it('should render default size', () => {
        render(
            <Expand title="Test Title">
                <div>Test content</div>
            </Expand>
        );
        const button = screen.getByTestId('expand-button');
        expect(button).toHaveClass('py-2.5');
    });

    it('should render small size', () => {
        render(
            <Expand title="Test Title" size="sm">
                <div>Test content</div>
            </Expand>
        );
        const button = screen.getByTestId('expand-button');
        expect(button).toHaveClass('py-2');
    });

    it('should render big size', () => {
        render(
            <Expand title="Test Title" size="lg">
                <div>Test content</div>
            </Expand>
        );
        const button = screen.getByTestId('expand-button');
        expect(button).toHaveClass('py-3');
    });

    it('should open on click', async () => {
        render(
            <Expand title="Test Title">
                <div>Test content</div>
            </Expand>
        );

        expect(screen.queryByText('Test content')).not.toBeInTheDocument();

        const button = screen.getByTestId('expand-button');
        await userEvent.click(button);

        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should close on click when already open', async () => {
        render(
            <Expand title="Test Title" expanded={true}>
                <div>Test content</div>
            </Expand>
        );

        expect(screen.getByText('Test content')).toBeInTheDocument();

        const button = screen.getByTestId('expand-button');
        await userEvent.click(button);

        expect(screen.queryByText('Test content')).not.toBeInTheDocument();
    });

    it('should render title with icon ', () => {
        const TestIcon = () => <svg data-testid="test-icon" className="w-4 h-4" />;
        render(
            <Expand title="Test Title" TitleIcon={TestIcon}>
                <div>Test content</div>
            </Expand>
        );
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });
});
