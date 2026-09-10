import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { pick } from '../../utils';
import { MultiDropdownPicker } from './MultiDropdownPicker';

describe('Multi Select', () => {
    const mockFn = jest.fn();

    it('should render empty list', () => {
        render(<MultiDropdownPicker items={[]} onChange={mockFn} />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should open list on button click', async () => {
        const items = ['first', 'second', 'third'];
        render(<MultiDropdownPicker items={items} onChange={mockFn} />);

        await userEvent.click(screen.getByRole('button'));
        expect(screen.getByTestId('multiselect-menu')).toBeInTheDocument();
    });

    it('should not open list on button click if disabled prop passed', async () => {
        const items = ['first', 'second', 'third'];
        render(<MultiDropdownPicker items={items} onChange={mockFn} disabled={true} />);

        await userEvent.click(screen.getByRole('button'));
        expect(screen.queryByTestId('multiselect-menu')).not.toBeVisible();
    });

    it('should trigger on change function when selected with text', async () => {
        const items = ['first', 'second', 'third'];
        const onChangeFn = jest.fn();

        render(<MultiDropdownPicker items={items} onChange={onChangeFn} />);

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('multiselect-menu');
        const item = within(menu).getByText(/second/i);
        await userEvent.click(item);

        expect(onChangeFn).toHaveBeenCalledWith(['second']);
    });

    it('should trigger on change function when selected with objects', async () => {
        const items = [{ key: '1', label: 'test' }];
        const onChangeFn = jest.fn();

        render(
            <MultiDropdownPicker
                items={items}
                onChange={onChangeFn}
                readValue={pick('key')}
                readLabel={pick('label')}
            />
        );

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('multiselect-menu');
        const item = within(menu).getByText(/test/i);
        await userEvent.click(item);

        expect(onChangeFn).toHaveBeenCalledWith([{ key: '1', label: 'test' }]);
    });

    it('should display label using read label function', async () => {
        const items = [{ label: 'label to display' }];

        render(<MultiDropdownPicker items={items} onChange={mockFn} readLabel={pick('label')} />);

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('multiselect-menu');
        const item = within(menu).getByText(/label to display/i);

        expect(item).toBeInTheDocument();
    });

    it('should work with items as objects using readLabel and readKey functions', async () => {
        const items = [{ label: 'label to display', key: 'item-value' }];
        const onChangeFn = jest.fn();

        render(
            <MultiDropdownPicker
                items={items}
                onChange={onChangeFn}
                readLabel={pick('label')}
                readValue={pick('key')}
            />
        );

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('multiselect-menu');
        const item = within(menu).getByText(/label to display/i);
        await userEvent.click(item);

        expect(onChangeFn).toHaveBeenCalledWith([{ label: 'label to display', key: 'item-value' }]);
    });

    it('should mark selected items in dropdown list', async () => {
        const items = [{ label: 'item label', value: 'item-value' }];

        render(
            <MultiDropdownPicker
                items={items}
                value={[{ value: 'item-value', label: 'item label' }]}
                onChange={mockFn}
                readValue={pick('value')}
                readLabel={pick('label')}
            />
        );

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('combobox-list');
        const item = within(menu).getByText(/item label/i);

        expect(item.parentNode).toHaveAttribute('aria-selected', 'true');
    });

    it('should display selected items', () => {
        const items = [
            { label: 'first selected', value: 'first' },
            { label: 'second selected', value: 'second' },
        ];

        render(
            <MultiDropdownPicker
                items={items}
                onChange={mockFn}
                value={[{ label: 'first selected', value: 'first' }]}
                readValue={pick('value')}
                readLabel={pick('label')}
            />
        );

        expect(screen.getByTestId('selected-label')).toHaveTextContent('first selected');
    });

    it('should remove selected items without toggling', async () => {
        const items = [
            { label: 'first selected', value: 'first' },
            { label: 'second selected', value: 'second' },
        ];
        const onChangeFn = jest.fn();

        render(
            <MultiDropdownPicker
                items={items}
                onChange={onChangeFn}
                value={[{ label: 'first selected', value: 'first' }]}
                readValue={pick('value')}
                readLabel={pick('label')}
            />
        );

        await userEvent.click(screen.getByRole('button'));
        const menu = screen.getByTestId('multiselect-menu');
        const tag = within(menu).getByTestId('selected-label').querySelector('svg');
        await userEvent.click(tag!);
        expect(onChangeFn).toHaveBeenCalledWith([]);
    });

    it('should not remove selected items when disabled prop is passed', async () => {
        const items = [
            { label: 'first selected', value: 'first' },
            { label: 'second selected', value: 'second' },
        ];
        const onChangeFn = jest.fn();

        render(
            <MultiDropdownPicker
                items={items}
                onChange={onChangeFn}
                value={[{ label: 'first selected', value: 'first' }]}
                readValue={pick('value')}
                readLabel={pick('label')}
                disabled={true}
            />
        );

        await userEvent.click(screen.getByTestId('selected-label').querySelector('svg')!);

        expect(onChangeFn).not.toHaveBeenCalled();
        expect(screen.getByTestId('selected-label')).toHaveTextContent('first selected');
    });
});
