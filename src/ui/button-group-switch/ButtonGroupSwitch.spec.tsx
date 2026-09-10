import { render } from '@testing-library/react';
import React from 'react';
import ButtonGroupSwitch from './ButtonGroupSwitch';
import Button from '../button/Button';

describe('ButtonGroupSwitch', () => {
    it('should display children', () => {
        const { container } = render(
            <ButtonGroupSwitch>
                <Button.Primary>Test button1</Button.Primary>
                <Button.Primary>Test button2</Button.Primary>
            </ButtonGroupSwitch>
        );
        expect(container).toHaveTextContent('Test button1');
        expect(container).toHaveTextContent('Test button2');
    });
});
