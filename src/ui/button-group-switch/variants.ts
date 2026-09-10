import { tv } from 'tailwind-variants';

export const buttonGroupSwitchVariants = tv({
    slots: {
        container: 'flex ',
        button: ['relative focus:z-10', 'data-[button-type=tertiary]:outline-0 data-[button-type=tertiary]:border'],
    },
    variants: {
        fullWidth: {
            true: {
                container: 'w-full',
                button: 'grow',
            },
        },
        orientation: {
            horizontal: {
                container: [
                    'flex-row',
                    'has-[button[data-button-type=primary]]:divide-x has-[button[data-button-type=secondary]]:divide-x',
                ],
            },
            vertical: {
                container: [
                    'flex-col items-stretch',
                    'has-[button[data-button-type=primary]]:divide-y has-[button[data-button-type=secondary]]:divide-y',
                ],
            },
        },

        edges: {
            round: {},
            rectangular: {
                button: 'rounded-none',
            },
        },
        coloring: {
            default: {},
            danger: {},
            warning: {},
            success: {},
            neutral: {},
        },
    },

    compoundVariants: [
        // orientation:
        {
            fullWidth: false,
            orientation: 'vertical',
            class: { container: 'w-max' },
        },
        {
            fullWidth: true,
            orientation: 'vertical',
            class: { container: 'w-full' },
        },

        // tertiary borders
        {
            coloring: 'default',
            class: {
                button: 'data-[button-type=tertiary]:border-accent-muted',
            },
        },
        {
            coloring: 'danger',
            class: {
                button: 'data-[button-type=tertiary]:border-danger-muted',
            },
        },
        {
            coloring: 'warning',
            class: {
                button: 'data-[button-type=tertiary]:border-warning-muted',
            },
        },
        {
            coloring: 'success',
            class: {
                button: 'data-[button-type=tertiary]:border-success-muted',
            },
        },
        {
            coloring: 'neutral',
            class: {
                button: 'data-[button-type=tertiary]:border-neutral-muted',
            },
        },

        {
            orientation: 'horizontal',
            class: {
                button: 'not-first:data-[button-type=tertiary]:border-l-0',
            },
        },
        {
            orientation: 'vertical',
            class: {
                button: 'not-first:data-[button-type=tertiary]:border-t-0',
            },
        },

        // buttons round
        {
            orientation: 'vertical',
            edges: 'round',
            class: {
                button: 'first:rounded-b-none not-first:not-last:rounded-none last:rounded-t-none',
            },
        },
        {
            orientation: 'horizontal',
            edges: 'round',
            class: {
                button: 'first:rounded-r-none not-first:not-last:rounded-none last:rounded-l-none',
            },
        },

        // primary separator color:
        {
            coloring: 'default',
            class: {
                container: 'has-[button[data-button-type=primary]]:divide-accent-soft',
            },
        },
        {
            coloring: 'neutral',
            class: {
                container: 'has-[button[data-button-type=primary]]:divide-neutral-soft',
            },
        },
        {
            coloring: 'warning',
            class: {
                container: 'has-[button[data-button-type=primary]]:divide-warning-soft',
            },
        },
        {
            coloring: 'danger',
            class: {
                container: 'has-[button[data-button-type=primary]]:divide-danger-soft',
            },
        },
        {
            coloring: 'success',
            class: {
                container: 'has-[button[data-button-type=primary]]:divide-success-soft',
            },
        },

        // secondary separator color:
        {
            coloring: 'default',
            class: {
                container: 'has-[button[data-button-type=secondary]]:divide-accent-container-default',
            },
        },
        {
            coloring: 'neutral',
            class: {
                container: 'has-[button[data-button-type=secondary]]:divide-neutral-container-default',
            },
        },
        {
            coloring: 'warning',
            class: {
                container: 'has-[button[data-button-type=secondary]]:divide-warning-container-default',
            },
        },
        {
            coloring: 'danger',
            class: {
                container: 'has-[button[data-button-type=secondary]]:divide-danger-container-default',
            },
        },
        {
            coloring: 'success',
            class: {
                container: 'has-[button[data-button-type=secondary]]:divide-success-container-default',
            },
        },
    ],
});
