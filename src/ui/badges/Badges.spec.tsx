import React from 'react';
import { render } from '@testing-library/react';
import { Badge, Badges, BadgesWrapper } from './Badges';

describe('Badges component', () => {
    const list = ['Badge 1', 'Badge 2', 'Badge 3'];

    it('renders the list of badges', () => {
        const { getByLabelText } = render(<Badges list={list} />);
        list.forEach(badge => {
            expect(getByLabelText(badge)).toBeInTheDocument();
        });
    });

    it('renders the correct number of badges', () => {
        const { getAllByRole } = render(<Badges list={list} />);
        const badges = getAllByRole('listitem');
        expect(badges.length).toBe(list.length);
    });

    it('applies the correct size class to the badge', () => {
        const { getAllByRole } = render(<Badges list={list} size="large" />);
        const badges = getAllByRole('listitem');
        badges.forEach(badge => {
            expect(badge).toHaveClass('px-4 py-1 text-sm');
        });
    });

    it('applies the correct color class to the badge', () => {
        const { getAllByRole } = render(<Badges list={list} coloring="green" />);
        const badges = getAllByRole('listitem');
        badges.forEach(badge => {
            expect(badge).toHaveClass('bg-green-100 text-green-800');
        });
    });
});

describe('Badge component', () => {
    it('renders with the given label', () => {
        const { getByText } = render(<Badge label="Badge label" />);
        const badge = getByText('Badge label');

        expect(badge).toBeInTheDocument();
    });

    it('applies the base size class by default', () => {
        const { getByTestId } = render(<Badge label="Badge label" />);
        const badge = getByTestId('components-badges-badge');

        expect(badge).toHaveClass('px-3 py-0.5 text-xs');
    });

    it('applies the given size class', () => {
        const { getByTestId } = render(<Badge label="Badge label" size="large" />);
        const badge = getByTestId('components-badges-badge');

        expect(badge).toHaveClass('px-4 py-1 text-sm');
    });

    it('applies the gray color class by default', () => {
        const { getByTestId } = render(<Badge label="Badge label" />);
        const badge = getByTestId('components-badges-badge');

        expect(badge).toHaveClass('bg-gray-100 text-gray-800');
    });

    it('applies the given color class', () => {
        const { getByTestId } = render(<Badge label="Badge label" color="red" />);
        const badge = getByTestId('components-badges-badge');

        expect(badge).toHaveClass('bg-red-100 text-red-800');
    });
});

describe('BadgesWrapper component', () => {
    it('renders a list wrapper with the correct children', () => {
        const { getByTestId } = render(
            <BadgesWrapper>
                <li>badge 1</li>
                <li>badge 2</li>
            </BadgesWrapper>
        );

        const wrapper = getByTestId('components-badges-wrapper');
        expect(wrapper).toHaveTextContent('badge 1');
        expect(wrapper).toHaveTextContent('badge 2');
    });
});
