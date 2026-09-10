import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar component', () => {
    it('should render default view with no props', () => {
        render(<Avatar />);
        expect(screen.getByText('User placeholder')).toBeInTheDocument();
    });

    it('should render userName', () => {
        render(<Avatar userName="John Doe" />);

        expect(screen.getByText('JD')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('should render userAvatarUrl', () => {
        render(<Avatar userAvatarUrl="./img/avatar1.jpg" />);
        expect(screen.getByAltText('User')).toBeInTheDocument();
        expect(screen.getByAltText('User')).toHaveAttribute('src', './img/avatar1.jpg');
    });

    it('should apply size prop correctly', () => {
        render(<Avatar />);
        expect(screen.getByTestId('avatar')).toHaveClass('w-9 h-9 text-sm font-medium');
    });
});
