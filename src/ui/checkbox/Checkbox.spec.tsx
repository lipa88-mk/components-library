import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
    it('should render correctly', () => {
        const { getByLabelText } = render(<Checkbox label={'Checkbox'} />);
        const checkbox = getByLabelText('Checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        expect(checkbox).not.toBeDisabled();
    });

    it('should be checked when clicked', () => {
        const { getByLabelText } = render(<Checkbox label={'Checkbox'} />);
        const checkbox = getByLabelText('Checkbox');
        act(() => fireEvent.click(checkbox));
        expect(checkbox).toBeChecked();
    });

    it('should be indeterminate when indeterminate prop is set', () => {
        const { getByLabelText } = render(<Checkbox label={'Checkbox'} indeterminate={true} />);
        const checkbox = getByLabelText('Checkbox');
        expect(checkbox).toHaveProperty('indeterminate', true);
    });

    it('should be indeterminate when disabled prop is set', () => {
        const { getByLabelText } = render(<Checkbox label={'Checkbox'} disabled={true} />);
        const checkbox = getByLabelText('Checkbox');
        expect(checkbox).toBeDisabled();
    });
});
