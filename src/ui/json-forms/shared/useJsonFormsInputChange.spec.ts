import { renderHook, act } from '@testing-library/react';
import isEqual from 'lodash/isEqual';
import { useJsonFormsInputChange } from './useJsonFormsInputChange';

jest.useFakeTimers();

describe('useJsonFormsInputChange', () => {
    describe('when onChangeStrategy is "input"', () => {
        it('should call onValueChange with debounce', () => {
            const onValueChange = jest.fn();
            const { result } = renderHook(() =>
                useJsonFormsInputChange({
                    value: '',
                    onChangeStrategy: 'input',
                    onValueChange,
                    debounceMs: 500,
                    isValueEqual: (a, b) => a === b,
                })
            );

            act(() => {
                result.current.handleInputChange('newValue');
            });

            expect(onValueChange).not.toBeCalled();

            act(() => {
                jest.advanceTimersByTime(500);
            });

            expect(onValueChange).toBeCalledWith('newValue');
        });
    });

    describe('when onChangeStrategy is "blur"', () => {
        it('should not call onValueChange during input value', () => {
            const onValueChange = jest.fn();
            const { result } = renderHook(() =>
                useJsonFormsInputChange({
                    value: 'init',
                    onChangeStrategy: 'blur',
                    onValueChange,
                    isValueEqual: (a, b) => a === b,
                })
            );

            act(() => {
                result.current.handleInputChange('newValue');
            });

            expect(onValueChange).not.toBeCalled();
        });

        it('should call onValueChange on blur if value is changed', () => {
            const onValueChange = jest.fn();
            const { result } = renderHook(() =>
                useJsonFormsInputChange({
                    value: 'init',
                    onChangeStrategy: 'blur',
                    onValueChange,
                    isValueEqual: (a, b) => a === b,
                })
            );

            act(() => {
                result.current.handleInputBlur('init');
            });

            expect(onValueChange).not.toBeCalled();

            act(() => {
                result.current.handleInputChange('newValue');
                result.current.handleInputBlur('newValue');
            });

            expect(onValueChange).toBeCalledWith('newValue');
        });
    });

    describe('Working with array and objects', () => {
        it('should not update internal value when external array value has the same content', () => {
            const initialValue = [{ title: 'Foo', const: 'foo' }];
            const newValue = [{ title: 'Foo', const: 'foo' }];
            const onValueChange = jest.fn();

            const { result, rerender } = renderHook(props => useJsonFormsInputChange(props), {
                initialProps: {
                    value: initialValue,
                    onValueChange,
                    isValueEqual: isEqual,
                },
            });

            act(() => {
                rerender({
                    value: newValue,
                    onValueChange,
                    isValueEqual: isEqual,
                });
            });

            expect(result.current.inputValue).toBe(initialValue);
        });

        it('should update internal value when external array value has different content', () => {
            const initialValue = [{ title: 'Foo', const: 'foo' }];
            const newValue = [{ title: 'Bar', const: 'bar' }];
            const onValueChange = jest.fn();

            const { result, rerender } = renderHook(props => useJsonFormsInputChange(props), {
                initialProps: {
                    value: initialValue,
                    onValueChange,
                    isValueEqual: isEqual,
                },
            });

            act(() => {
                rerender({
                    value: newValue,
                    onValueChange,
                    isValueEqual: isEqual,
                });
            });

            expect(result.current.inputValue).toBe(newValue);
        });
    });
});
