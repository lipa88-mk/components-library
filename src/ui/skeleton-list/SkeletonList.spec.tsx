import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonList from './SkeletonList';

describe('SkeletonList component', () => {
    it('should render the correct number of lines', () => {
        render(<SkeletonList />);

        const skeletonList = screen.getByTestId('skeleton-list');
        expect(skeletonList).toHaveAttribute('role', 'status');
        expect(skeletonList).toHaveAttribute('aria-label', 'Loading');

        const skeletonLines = screen.getAllByTestId('skeleton-row');
        expect(skeletonLines.length).toBe(8);
    });
});
