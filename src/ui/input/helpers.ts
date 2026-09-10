import type { InputSize } from './Input';
import type { CalculatePaddingOptions, CalculatePaddings } from './models';
import { DEFAULT_MD_SIZE_PADDINGS } from './input.const';

export const calculatePaddings = ({
    sizing = 'md',
    Icon,
    iconPosition,
    errorText,
}: CalculatePaddingOptions): CalculatePaddings => {
    const result = { ...DEFAULT_MD_SIZE_PADDINGS };

    if (sizing === 'sm') {
        result.top = 6;
        result.bottom = 6;
        result.left = 8;
        result.right = 8;
    }

    if (Icon) {
        const sizingMap: Record<InputSize, number> = {
            md: 36,
            sm: 32,
        };

        switch (iconPosition) {
            case 'left':
                result.left = sizingMap[sizing];
                break;

            case 'right':
                result.right = sizingMap[sizing];
                break;

            default:
                break;
        }
    }

    if (errorText) {
        const sizingMap: Record<InputSize, number> = {
            md: 36,
            sm: 32,
        };

        result.right = sizingMap[sizing];
    }

    return result;
};
