import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkeletonCard } from './SkeletonCard';
import { SkeletonCards } from './SkeletonCards';

describe('SkeletonCard component', () => {
    it('should render skeleton card', () => {
        render(
            <SkeletonCard loading={true} rows={2}>
                Content
            </SkeletonCard>
        );

        const skeletonCard = screen.getByTestId('skeleton-card');
        expect(skeletonCard).toBeInTheDocument();
        expect(skeletonCard).toHaveAttribute('role', 'status');
        expect(skeletonCard).toHaveAttribute('aria-label', 'Loading');
    });

    it('should render content', () => {
        const { container } = render(
            <SkeletonCard loading={false} rows={2}>
                Content
            </SkeletonCard>
        );

        expect(container).toHaveTextContent('Content');
        const skeletonCard = screen.queryByTestId('skeleton-card');
        expect(skeletonCard).not.toBeInTheDocument();
    });
});

describe('SkeletonCards component', () => {
    it('should render content', () => {
        const { container } = render(
            <SkeletonCards loading={false} rows={2} length={3}>
                Content
            </SkeletonCards>
        );

        expect(container).toHaveTextContent('Content');
        const skeletonCards = screen.queryByTestId('skeleton-cards');
        expect(skeletonCards).not.toBeInTheDocument();
    });

    it('should render multiple skeleton cards', () => {
        render(
            <SkeletonCards loading={true} length={3} rows={2}>
                Content
            </SkeletonCards>
        );

        const skeletonCards = screen.getAllByTestId('skeleton-card');
        expect(skeletonCards.length).toBe(3);
        skeletonCards.forEach(card => {
            expect(card).toBeInTheDocument();
            expect(card).toHaveAttribute('role', 'status');
            expect(card).toHaveAttribute('aria-label', 'Loading');
        });
    });
});
