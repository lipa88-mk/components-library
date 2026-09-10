import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { TabbedView } from './TabbedView';
import userEvent from '@testing-library/user-event';

describe('TabbedView', () => {
    it('should display tab name', async () => {
        act(() =>
            render(
                <TabbedView>
                    <TabbedView.Tab title={'Item Title'} />
                </TabbedView>
            )
        );

        expect(screen.getByText(/item title/i)).toBeInTheDocument();
    });

    it('should display first tab content by default', async () => {
        act(() =>
            render(
                <TabbedView>
                    <TabbedView.Tab title={'Item Title'}>First Tab Content</TabbedView.Tab>
                </TabbedView>
            )
        );

        expect(screen.getByText(/first tab content/i)).toBeInTheDocument();
    });

    it('should display active tab content when given', async () => {
        act(() =>
            render(
                <TabbedView>
                    <TabbedView.Tab title={'Item Title'}>First Tab Content</TabbedView.Tab>
                    <TabbedView.Tab title={'Active Title'} active={true}>
                        Active Tab Content
                    </TabbedView.Tab>
                </TabbedView>
            )
        );

        expect(screen.getByText(/active tab content/i)).toBeInTheDocument();
    });

    it('should display selected tab content', async () => {
        await act(() =>
            render(
                <TabbedView>
                    <TabbedView.Tab title={'Item Title'}>Default Tab Content</TabbedView.Tab>
                    <TabbedView.Tab title={'Other Title'}>Other Tab Content</TabbedView.Tab>
                </TabbedView>
            )
        );

        await userEvent.click(screen.getByText(/other title/i));

        expect(screen.getByText(/other tab content/i)).toBeInTheDocument();
    });
});
