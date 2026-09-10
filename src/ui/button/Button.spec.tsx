import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import { KeyIcon } from '@heroicons/react/20/solid';

describe('Button', () => {
    it('should display children', () => {
        const { container } = render(<Button>Test button</Button>);
        expect(container).toHaveTextContent('Test button');
    });

    it('should set disable state', () => {
        render(<Button disabled>Button text</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('disabled');
        expect(button).toHaveAttribute('aria-disabled');
    });

    it('should set loading state', () => {
        render(<Button isLoading={true}>Button text</Button>);
        const button = screen.getByRole('button');
        const spinner = screen.getByTestId('button-spinner');
        expect(button).toHaveAttribute('disabled');
        expect(button).toHaveAttribute('aria-disabled', 'true');
        expect(button).toHaveAttribute('aria-busy', 'true');
        expect(spinner).toBeInTheDocument();
        expect(spinner).toBeVisible();
    });

    it('should trigger onClick function', () => {
        const fn = jest.fn();
        render(<Button onClick={fn} />);
        screen.getByRole('button').click();
        expect(fn).toHaveBeenCalled();
    });

    it('should render icon', () => {
        render(<Button Icon={KeyIcon}>Button text</Button>);
        const button = screen.getByRole('button');
        const icon = screen.getByTestId('button-icon');
        expect(button).toContainElement(icon);
    });
});
