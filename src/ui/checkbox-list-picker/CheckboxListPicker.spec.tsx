import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { CheckboxListPicker } from './CheckboxListPicker';
import userEvent from '@testing-library/user-event';

describe('ButtonGroupSwitch', () => {
    const items = ['Germany', 'Switzerland', 'Poland', 'Belgium'];

    it('should display items', () => {
        const fn = jest.fn();
        const { container } = render(<CheckboxListPicker items={items} onChange={fn} />);

        expect(screen.queryByPlaceholderText('Search')).toBeNull();
        expect(screen.queryByRole('checkbox', { name: 'Select all' })).toBeNull();

        items.forEach(item => {
            expect(container).toHaveTextContent(item);
            expect(screen.getByRole('checkbox', { name: item })).toBeInTheDocument();
        });
    });

    it('should set disable state', () => {
        const fn = jest.fn();
        render(<CheckboxListPicker disabled items={items} onChange={fn} />);

        items.forEach(item => {
            expect(screen.getByRole('checkbox', { name: item })).toBeDisabled();
        });
    });

    it('should call onChange when checkbox is checked', async () => {
        const fn = jest.fn();
        render(<CheckboxListPicker values={[]} items={items} onChange={fn} />);

        const checkbox = screen.getByRole('checkbox', { name: 'Germany' });
        await userEvent.click(checkbox);

        expect(fn).toHaveBeenCalledWith(expect.arrayContaining(['Germany']));
    });

    it('should call onChange when checkbox is unchecked', async () => {
        const fn = jest.fn();
        render(<CheckboxListPicker items={items} onChange={fn} values={['Germany']} />);

        const checkbox = screen.getByRole('checkbox', { name: 'Germany' });
        await userEvent.click(checkbox);

        expect(fn).toHaveBeenCalledWith(expect.not.arrayContaining(['Germany']));
    });

    it('should be able to search for elements', async () => {
        const fn = jest.fn();
        const { container } = render(<CheckboxListPicker items={items} onChange={fn} searchable={true} />);
        const search = screen.getByPlaceholderText('Search');
        expect(search).toBeInTheDocument();

        await userEvent.type(search, 'Poland');

        expect(container).toHaveTextContent('Poland');
        expect(container).not.toHaveTextContent('Germany');
        expect(container).not.toHaveTextContent('Switzerland');
        expect(container).not.toHaveTextContent('Belgium');
    });

    it('should handle select all option', async () => {
        function Wrapper() {
            const [selected, setSelected] = React.useState<string[]>([]);
            return <CheckboxListPicker values={selected} items={items} onChange={setSelected} selectAllOption={true} />;
        }

        render(<Wrapper />);

        const selectAllCheckbox = screen.getByRole('checkbox', { name: 'Select all' });
        expect(selectAllCheckbox).toBeInTheDocument();

        items.forEach(item => {
            expect(screen.getByRole('checkbox', { name: item })).not.toBeChecked();
        });

        await userEvent.click(selectAllCheckbox);
        for (const item of items) {
            expect(screen.getByRole('checkbox', { name: item })).toBeChecked();
        }

        await userEvent.click(selectAllCheckbox);
        for (const item of items) {
            expect(screen.getByRole('checkbox', { name: item })).not.toBeChecked();
        }
    });

    it('should handle indeterminate state for select all option', async () => {
        const fn = jest.fn();
        render(<CheckboxListPicker values={['Germany']} items={items} onChange={fn} selectAllOption={true} />);

        const selectAllCheckbox = screen.getByRole('checkbox', { name: 'Select all' });
        expect(selectAllCheckbox).toBeInTheDocument();
        expect(selectAllCheckbox).toHaveProperty('indeterminate', true);
    });

    it('should render select all option with custom label', async () => {
        function Wrapper() {
            const [selected, setSelected] = React.useState<string[]>([]);
            return (
                <CheckboxListPicker
                    values={selected}
                    items={items}
                    onChange={setSelected}
                    selectAllOption={true}
                    selectAllOptionLabel="Select everything"
                />
            );
        }

        render(<Wrapper />);

        const selectAllCheckbox = screen.getByRole('checkbox', { name: 'Select everything' });
        expect(selectAllCheckbox).toBeInTheDocument();

        await userEvent.click(selectAllCheckbox);
        for (const item of items) {
            expect(screen.getByRole('checkbox', { name: item })).toBeChecked();
        }
    });
});
