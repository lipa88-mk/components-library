import React from 'react';
import { MockDatepickerWithButton } from './Datepicker.fixture';
import { act, render } from '@testing-library/react';

describe('Datepicker', () => {
    it('should set value on external change when initial value is empty', () => {
        const result = render(<MockDatepickerWithButton initialValue={''} nextValue={'2024-08-20'} />);

        let datePicker = result.getByTestId('datepicker-field');
        const button = result.getByTestId('button');

        expect((datePicker as HTMLInputElement).value).toBe('');

        act(() => button.click());

        datePicker = result.getByTestId('datepicker-field');
        expect((datePicker as HTMLInputElement).value).toBe('2024-08-20');
    });

    it('should set value on external change when initial value is not empty', () => {
        const result = render(<MockDatepickerWithButton initialValue={'2024-08-20'} nextValue={'2024-01-01'} />);

        let datePicker = result.getByTestId('datepicker-field');
        const button = result.getByTestId('button');

        expect((datePicker as HTMLInputElement).value).toBe('2024-08-20');

        act(() => button.click());

        datePicker = result.getByTestId('datepicker-field');
        expect((datePicker as HTMLInputElement).value).toBe('2024-01-01');
    });

    it('should clear value if external change is null', () => {
        const result = render(<MockDatepickerWithButton initialValue={'2024-08-20'} nextValue={null} />);

        let datePicker = result.getByTestId('datepicker-field');
        const button = result.getByTestId('button');

        expect((datePicker as HTMLInputElement).value).toBe('2024-08-20');

        act(() => button.click());

        datePicker = result.getByTestId('datepicker-field');
        expect((datePicker as HTMLInputElement).value).toBe('');
    });

    it('should clear value if external change is undefined', () => {
        const result = render(<MockDatepickerWithButton initialValue={'2024-08-20'} nextValue={void 0} />);

        let datePicker = result.getByTestId('datepicker-field');
        const button = result.getByTestId('button');

        expect((datePicker as HTMLInputElement).value).toBe('2024-08-20');

        act(() => button.click());

        datePicker = result.getByTestId('datepicker-field');
        expect((datePicker as HTMLInputElement).value).toBe('');
    });
});
