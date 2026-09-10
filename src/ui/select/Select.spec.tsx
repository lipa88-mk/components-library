import React from 'react';
import { render, screen, act, within } from '@testing-library/react';
import { Select } from './Select';
import userEvent from '@testing-library/user-event';

describe('Picker', () => {
    it('should display the list when button is clicked', async () => {
        render(
            <Select value={''}>
                <Select.Item value={'first row'}>first row</Select.Item>
            </Select>
        );

        const btn = screen.getByTestId('picker-button');
        await userEvent.click(btn);
        const menu = screen.getByTestId('select-menu');
        const option = within(menu).getByText(/first row/i);

        expect(option).toBeInTheDocument();
    });

    // Two full userEvent click cycles on the heavy Select component (Headless UI +
    // Floating UI) through jsdom are slow and blow past the 30s global timeout on
    // slower CI runners; give this interaction extra headroom.
    it('should trigger onChange function when item selected', async () => {
        const fn = jest.fn();
        render(
            <Select value={''} onChange={fn}>
                <Select.Item value={'first row value'}>first row</Select.Item>
            </Select>
        );

        const btn = screen.getByTestId('picker-button');
        await userEvent.click(btn);

        const menu = screen.getByTestId('select-menu');
        const option = within(menu).getByText(/first row/i);

        await userEvent.click(option);

        expect(fn).toHaveBeenCalledWith('first row value');
    }, 60_000);

    it('should filter through values', async () => {
        render(
            <Select value={''}>
                <Select.Item value={'first row value'}>first row</Select.Item>
                <Select.Item value={'second row value'}>second row</Select.Item>
            </Select>
        );

        await act(() => userEvent.click(screen.getByTestId('picker-button')));
        const filter = screen.getByTestId('input-search');

        act(() => filter.focus());
        await userEvent.type(filter, 'First ');

        expect(screen.getByText('first row')).toBeInTheDocument();
        expect(screen.queryByText('second row')).not.toBeInTheDocument();
    });
});
