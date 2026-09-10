import { tv, type VariantProps } from 'tailwind-variants';

export const inputVariants = tv({
    slots: {
        input: [
            'block w-full bg-bg-page rounded-md font-inter text-sm leading-[18px] text-fg-default',
            'border transition-colors placeholder:text-fg-muted',
            'outline outline-2 -outline-offset-2 outline-transparent ring-0 focus:ring-0 focus:-outline-offset-2',
            'disabled:bg-bg-disabled',
        ],
        icon: 'w-5 h-5 absolute pointer-events-none text-fg-muted',
        errorMsg: undefined,
    },
    variants: {
        sizing: {
            sm: {
                input: 'h-8',
                icon: 'top-[6px]',
                errorMsg: 'px-[8px] py-[6px]',
            },
            md: {
                input: 'h-10',
                icon: 'top-[10px]',
                errorMsg: 'px-[10px] py-[10px]',
            },
        },
        isValid: {
            true: {
                input: 'disabled:border-border-muted disabled:text-fg-default',
            },
            false: {
                input: 'pr-8 border-danger-soft',
            },
        },
        coloring: {
            default: undefined,
            transparent: {
                input: 'bg-transparent',
            },
        },
        disabled: {
            true: undefined,
        },
        iconPosition: {
            left: undefined,
            right: undefined,
        },
    },
    compoundVariants: [
        {
            coloring: 'transparent',
            isValid: true,
            class: {
                input: 'border-transparent',
            },
        },
        {
            coloring: 'default',
            isValid: true,
            class: {
                input: 'border-border-soft',
            },
        },
        {
            isValid: false,
            disabled: false,
            class: {
                input: 'hover:outline-danger-soft focus:outline-danger-hover',
            },
        },
        {
            isValid: true,
            disabled: false,
            class: {
                input: 'hover:outline-accent-soft focus:outline-accent-hover',
            },
        },
        {
            iconPosition: 'left',
            sizing: 'md',
            class: {
                icon: 'left-[10px]',
            },
        },
        {
            iconPosition: 'left',
            sizing: 'sm',
            class: {
                icon: 'left-[8px]',
            },
        },
        {
            iconPosition: 'right',
            sizing: 'md',
            class: {
                icon: 'right-[10px]',
            },
        },
        {
            iconPosition: 'right',
            sizing: 'sm',
            class: {
                icon: 'right-[8px]',
            },
        },
        {
            iconPosition: 'right',
            isValid: false,
            class: {
                icon: 'hidden',
            },
        },
    ],
    defaultVariants: {
        coloring: 'default',
        disabled: false,
        isValid: true,
        sizing: 'md',
        iconPosition: 'left',
    },
});

export type InputVariantsProps = VariantProps<typeof inputVariants>;
