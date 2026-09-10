import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';

describe('UserInfo component', () => {
    it('should render with no props', () => {
        render(<UserInfo />);
        expect(screen.getByRole('figure')).toBeInTheDocument();
        expect(screen.getByText('User placeholder')).toBeInTheDocument();
    });

    it('should render userName', () => {
        const { container } = render(<UserInfo userName="John Doe" />);
        const figcaption = container.querySelector('figcaption');
        expect(figcaption).toHaveTextContent('John Doe');
    });

    it('should render userDescription', () => {
        const { container } = render(<UserInfo userDescription="Software Engineer" />);
        const figcaption = container.querySelector('figcaption');
        expect(figcaption).toHaveTextContent('Software Engineer');
    });
});
