import React from 'react';
import { render, screen, act, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { pick } from '../../utils';
import { DropdownPicker } from './DropdownPicker';

describe('Dropdown Picker', () => {
    const mockFn = jest.fn();

    it('should render empty list', () => {
        act(() => render(<DropdownPicker items={[]} onChange={mockFn} />));

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should open list on button click', async () => {
        const items = ['first', 'second', 'third'];

        await act(() => render(<DropdownPicker items={items} onChange={mockFn} />));
        await userEvent.click(screen.getByRole('button'));

        expect(screen.getByTestId('select-menu')).toBeInTheDocument();
    });

    it('should trigger on change function when selected', async () => {
        const items = ['first', 'second', 'third'];
        const onSelectFn = jest.fn();

        await act(() => render(<DropdownPicker items={items} onChange={onSelectFn} />));

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('select-menu');
        const option = within(menu).getByText(/second/i);
        await userEvent.click(option);

        expect(onSelectFn).toHaveBeenCalledWith('second');
    });

    it('should display label using read label function', async () => {
        const items = [{ label: 'label to display' }];

        await act(() => render(<DropdownPicker items={items} onChange={mockFn} readLabel={pick('label')} />));

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('select-menu');
        const option = within(menu).getByText(/label to display/i);

        expect(option).toBeInTheDocument();
    });

    it('should use item value when read value function is given', async () => {
        const items = [{ label: 'label to display', value: 'item-value' }];
        const onSelectFn = jest.fn();

        await act(() => render(<DropdownPicker items={items} onChange={onSelectFn} readLabel={pick('label')} />));

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('select-menu');
        const option = within(menu).getByText(/label to display/i);
        await userEvent.click(option);

        expect(onSelectFn).toHaveBeenCalledWith({
            label: 'label to display',
            value: 'item-value',
        });
    });
});
