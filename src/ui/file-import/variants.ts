import { tv, type VariantProps } from 'tailwind-variants';
import { buttonVariants } from '../button/variants';

export const fileImportVariants = tv({
    extend: buttonVariants,

    slots: {
        figure: 'flex gap-4 items-center',
        fileName: 'text-sm font-semibold text-fg-soft',
        additionalInfo: 'text-sm font-semibold text-fg-muted',
    },
});
export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
