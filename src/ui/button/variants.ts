import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
    slots: {
        button: [
            'inline-flex font-medium rounded-md cursor-pointer',
            'focus:outline-hidden focus:shadow-double',
            'transition duration-200',
            'aria-disabled:cursor-default aria-disabled:pointer-events-none aria-disabled:bg-bg-disabled aria-disabled:text-fg-disabled',
            'aria-disabled:aria-busy:text-transparent aria-busy:relative',
        ],
        icon: 'aria-busy:opacity-0',
        loading: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-fg-disabled',
        spinnerIcon: 'aria-busy:opacity-1',
    },
    variants: {
        type: {
            primary: {
                button: ['text-bg-page', 'aria-disabled:bg-bg-disabled aria-disabled:text-fg-disabled'],
            },
            secondary: {
                button: 'aria-disabled:bg-bg-disabled aria-disabled:text-fg-disabled',
            },
            tertiary: {
                button: [
                    'bg-transparent outline outline-2 -outline-offset-2 hover:-outline-offset-2 active:-outline-offset-2 focus:outline-transparent',
                    'aria-disabled:bg-transparent aria-disabled:text-fg-disabled aria-disabled:outline-border-muted',
                    'aria-busy:bg-transparent aria-busy:text-fg-disabled aria-busy:outline-border-muted',
                ],
            },
            ghost: {
                button: 'bg-transparent aria-disabled:bg-transparent aria-disabled:text-fg-disabled',
            },
        },
        coloring: {
            default: undefined,
            neutral: undefined,
            info: undefined,
            warning: undefined,
            danger: undefined,
            success: undefined,
        },
        isIconOnly: {
            true: {
                button: '',
            },
        },
        size: {
            '2xs': {
                icon: 'h-3 w-3',
            },
            xs: {
                icon: 'h-3 w-3',
            },
            sm: {
                icon: 'h-4 w-4',
            },
            md: {
                icon: 'h-4 w-4',
            },
            lg: {
                icon: 'h-5 w-5',
            },
            xl: {
                icon: 'h-6 w-6',
            },
        },
        active: {
            true: {
                button: '',
            },
        },
        iconPosition: {
            left: '',
            right: '',
            top: '',
            bottom: '',
        },
        innerAlignment: {
            left: '',
            center: '',
            right: '',
        },
    },
    compoundVariants: [
        // icon size:
        {
            size: '2xs',
            isIconOnly: true,
            class: {
                button: 'p-1.5',
            },
        },
        {
            size: '2xs',
            isIconOnly: false,
            class: {
                button: 'px-2 py-1.5 text-xs leading-3 gap-1',
            },
        },

        {
            size: 'xs',
            isIconOnly: true,
            class: {
                button: 'p-2',
            },
        },
        {
            size: 'xs',
            isIconOnly: false,
            class: {
                button: 'p-2 text-xs leading-3 gap-1.5',
            },
        },

        {
            size: 'sm',
            isIconOnly: true,
            class: {
                button: 'p-2',
            },
        },
        {
            size: 'sm',
            isIconOnly: false,
            class: {
                button: 'px-3 py-2 text-sm leading-4 gap-2',
            },
        },

        {
            size: 'md',
            isIconOnly: true,
            class: {
                button: 'p-2.5',
            },
        },
        {
            size: 'md',
            isIconOnly: false,
            class: {
                button: 'px-3 py-2.5 text-sm leading-4 gap-2',
            },
        },

        {
            size: 'lg',
            isIconOnly: true,
            class: {
                button: 'p-2.5',
            },
        },
        {
            size: 'lg',
            isIconOnly: false,
            class: {
                button: 'px-4 py-2.5 text-base leading-5 gap-2',
            },
        },

        {
            size: 'xl',
            isIconOnly: true,
            class: {
                button: 'p-3',
            },
        },
        {
            size: 'xl',
            isIconOnly: false,
            class: {
                button: 'px-5 py-3 text-lg leading-6 gap-3',
            },
        },

        // iconPosition:
        {
            iconPosition: 'left',
            class: {
                button: 'flex-row',
            },
        },
        {
            iconPosition: 'right',
            class: {
                button: 'flex-row-reverse',
            },
        },
        {
            iconPosition: 'top',
            class: {
                button: 'flex-col',
            },
        },
        {
            iconPosition: 'bottom',
            class: {
                button: 'flex-col-reverse',
            },
        },

        // innerAlignment:
        {
            innerAlignment: 'left',
            iconPosition: 'left',
            class: {
                button: 'justify-start',
            },
        },
        {
            innerAlignment: 'left',
            iconPosition: 'right',
            class: {
                button: 'justify-end',
            },
        },
        {
            innerAlignment: 'center',
            iconPosition: ['left', 'right'],
            class: {
                button: 'justify-center',
            },
        },
        {
            innerAlignment: 'right',
            iconPosition: 'left',
            class: {
                button: 'justify-end',
            },
        },
        {
            innerAlignment: 'right',
            iconPosition: 'right',
            class: {
                button: 'justify-start',
            },
        },
        {
            innerAlignment: 'left',
            iconPosition: ['top', 'bottom'],
            class: {
                button: 'items-start',
            },
        },
        {
            innerAlignment: 'center',
            iconPosition: ['top', 'bottom'],
            class: {
                button: 'items-center',
            },
        },
        {
            innerAlignment: 'right',
            iconPosition: ['top', 'bottom'],
            class: {
                button: 'items-end',
            },
        },

        // primary accent:
        {
            type: 'primary',
            coloring: 'default',
            active: false,
            class: {
                button: 'bg-accent-default hover:bg-accent-hover focus:bg-accent-hover active:bg-accent-active',
            },
        },
        {
            type: 'primary',
            coloring: 'default',
            active: true,
            class: {
                button: 'bg-accent-active hover:bg-accent-active',
            },
        },

        // primary neutral:
        {
            type: 'primary',
            coloring: 'neutral',
            active: false,
            class: {
                button: 'bg-neutral-default hover:bg-neutral-hover focus:bg-neutral-hover active:bg-neutral-active',
            },
        },
        {
            type: 'primary',
            coloring: 'neutral',
            active: true,
            class: {
                button: 'bg-neutral-active  hover:bg-neutral-active',
            },
        },

        // primary warning:
        {
            type: 'primary',
            coloring: 'warning',
            active: false,
            class: {
                button: 'bg-warning-default hover:bg-warning-hover focus:bg-warning-hover active:bg-warning-active',
            },
        },
        {
            type: 'primary',
            coloring: 'warning',
            active: true,
            class: {
                button: 'bg-warning-active hover:bg-warning-active',
            },
        },

        // primary info:
        {
            type: 'primary',
            coloring: 'info',
            active: false,
            class: {
                button: 'bg-info-default hover:bg-info-hover focus:bg-info-hover active:bg-info-active',
            },
        },
        {
            type: 'primary',
            coloring: 'info',
            active: true,
            class: {
                button: 'bg-info-active hover:bg-info-active',
            },
        },

        // primary danger:
        {
            type: 'primary',
            coloring: 'danger',
            active: false,
            class: {
                button: 'bg-danger-default hover:bg-danger-hover focus:bg-danger-hover active:bg-danger-active',
            },
        },
        {
            type: 'primary',
            coloring: 'danger',
            active: true,
            class: {
                button: 'bg-danger-active hover:bg-danger-active',
            },
        },

        // primary success:
        {
            type: 'primary',
            coloring: 'success',
            active: false,
            class: {
                button: 'bg-success-default hover:bg-success-hover focus:bg-success-hover active:bg-success-active',
            },
        },
        {
            type: 'primary',
            coloring: 'success',
            active: true,
            class: {
                button: 'bg-success-active hover:bg-success-active',
            },
        },

        // secondary accent:
        {
            type: 'secondary',
            coloring: 'default',
            active: false,
            class: {
                button: 'bg-accent-container-default text-accent-on-container hover:bg-accent-container-hover hover:text-accent-hover focus:bg-accent-container-hover active:bg-accent-container-active active:text-accent-hover',
            },
        },
        {
            type: 'secondary',
            coloring: 'default',
            active: true,
            class: {
                button: 'bg-accent-container-active text-accent-hover hover:bg-accent-container-active hover:text-accent-hover',
            },
        },

        // secondary neutral:
        {
            type: 'secondary',
            coloring: 'neutral',
            active: false,
            class: {
                button: 'bg-neutral-container-default text-neutral-on-container hover:bg-neutral-container-hover hover:text-neutral-hover focus:bg-neutral-container-hover active:bg-neutral-container-active active:text-neutral-hover',
            },
        },
        {
            type: 'secondary',
            coloring: 'neutral',
            active: true,
            class: {
                button: 'bg-neutral-container-active text-neutral-hover hover:bg-neutral-container-active hover:text-neutral-hover',
            },
        },

        // secondary warning:
        {
            type: 'secondary',
            coloring: 'warning',
            active: false,
            class: {
                button: 'bg-warning-container-default text-warning-on-container hover:bg-warning-container-hover hover:text-warning-hover focus:bg-warning-container-hover active:bg-warning-container-active active:text-warning-hover',
            },
        },
        {
            type: 'secondary',
            coloring: 'warning',
            active: true,
            class: {
                button: 'bg-warning-container-active text-warning-hover hover:bg-warning-container-active hover:text-warning-hover',
            },
        },

        // secondary info:
        {
            type: 'secondary',
            coloring: 'info',
            active: false,
            class: {
                button: 'bg-info-container-default text-info-on-container hover:bg-info-container-hover hover:text-info-hover focus:bg-info-container-hover active:bg-info-container-active active:text-info-hover',
            },
        },
        {
            type: 'secondary',
            coloring: 'info',
            active: true,
            class: {
                button: 'bg-info-container-active text-info-hover hover:bg-info-container-active hover:text-info-hover',
            },
        },

        // secondary danger:
        {
            type: 'secondary',
            coloring: 'danger',
            active: false,
            class: {
                button: 'bg-danger-container-default text-danger-on-container hover:bg-danger-container-hover hover:text-danger-hover focus:bg-danger-container-hover active:bg-danger-container-active active:text-danger-hover',
            },
        },
        {
            type: 'secondary',
            coloring: 'danger',
            active: true,
            class: {
                button: 'bg-danger-container-active text-danger-hover hover:bg-danger-container-active hover:text-danger-hover',
            },
        },

        // secondary success:
        {
            type: 'secondary',
            coloring: 'success',
            active: false,
            class: {
                button: 'bg-success-container-default text-success-on-container hover:bg-success-container-hover hover:text-success-hover focus:bg-success-container-hover active:bg-success-container-active active:text-success-hover',
            },
        },
        {
            type: 'secondary',
            coloring: 'success',
            active: true,
            class: {
                button: 'bg-success-container-active text-success-hover hover:bg-success-container-active hover:text-success-hover',
            },
        },

        // tertiary accent:
        {
            type: 'tertiary',
            coloring: 'default',
            active: false,
            class: {
                button: 'outline-accent-muted text-accent-default hover:bg-accent-container-default hover:outline-accent-soft  hover:text-accent-hover focus:bg-accent-container-default focus:text-accent-hover active:bg-accent-container-hover active:outline-accent-soft active:text-accent-hover',
            },
        },
        {
            type: 'tertiary',
            coloring: 'default',
            active: true,
            class: {
                button: 'bg-accent-container-hover outline-accent-soft text-accent-hover hover:bg-accent-container-hover hover:outline-accent-soft hover:text-accent-hover',
            },
        },

        // tertiary neutral:
        {
            type: 'tertiary',
            coloring: 'neutral',
            active: false,
            class: {
                button: 'outline-neutral-muted text-neutral-default hover:bg-neutral-container-default hover:outline-neutral-soft  hover:text-neutral-hover focus:bg-neutral-container-default focus:text-neutral-hover active:bg-neutral-container-hover active:outline-neutral-soft active:text-neutral-hover',
            },
        },
        {
            type: 'tertiary',
            coloring: 'neutral',
            active: true,
            class: {
                button: 'bg-neutral-container-hover outline-neutral-soft text-neutral-hover hover:bg-neutral-container-hover hover:outline-neutral-soft hover:text-neutral-hover',
            },
        },

        // tertiary warning:
        {
            type: 'tertiary',
            coloring: 'warning',
            active: false,
            class: {
                button: 'outline-warning-muted text-warning-default hover:bg-warning-container-default hover:outline-warning-soft  hover:text-warning-hover focus:bg-warning-container-default focus:text-warning-hover active:bg-warning-container-hover active:outline-warning-soft active:text-warning-hover',
            },
        },
        {
            type: 'tertiary',
            coloring: 'warning',
            active: true,
            class: {
                button: 'bg-warning-container-hover outline-warning-soft text-warning-hover hover:bg-warning-container-hover hover:outline-warning-soft hover:text-warning-hover',
            },
        },

        // tertiary info:
        {
            type: 'tertiary',
            coloring: 'info',
            active: false,
            class: {
                button: 'outline-info-muted text-info-default hover:bg-info-container-default hover:outline-info-soft  hover:text-info-hover focus:bg-info-container-default focus:text-info-hover active:bg-info-container-hover active:outline-info-soft active:text-info-hover',
            },
        },
        {
            type: 'tertiary',
            coloring: 'info',
            active: true,
            class: {
                button: 'bg-info-container-hover outline-info-soft text-info-hover hover:bg-info-container-hover hover:outline-info-soft hover:text-info-hover',
            },
        },

        // tertiary danger:
        {
            type: 'tertiary',
            coloring: 'danger',
            active: false,
            class: {
                button: 'outline-danger-muted text-danger-default hover:bg-danger-container-default hover:outline-danger-soft  hover:text-danger-hover focus:bg-danger-container-default focus:text-danger-hover active:bg-danger-container-hover active:outline-danger-soft active:text-danger-hover',
            },
        },
        {
            type: 'tertiary',
            coloring: 'danger',
            active: true,
            class: {
                button: 'bg-danger-container-hover outline-danger-soft text-danger-hover hover:bg-danger-container-hover hover:outline-danger-soft hover:text-danger-hover',
            },
        },

        // tertiary success:
        {
            type: 'tertiary',
            coloring: 'success',
            active: false,
            class: {
                button: 'outline-success-muted text-success-default hover:bg-success-container-default hover:outline-success-soft  hover:text-success-hover focus:bg-success-container-default focus:text-success-hover active:bg-success-container-hover active:outline-success-soft active:text-success-hover',
            },
        },
        {
            type: 'tertiary',
            coloring: 'success',
            active: true,
            class: {
                button: 'bg-success-container-hover outline-success-soft text-success-hover hover:bg-success-container-hover hover:outline-success-soft hover:text-success-hover',
            },
        },

        // ghost accent:
        {
            type: 'ghost',
            coloring: 'default',
            active: false,
            class: {
                button: 'hover:bg-accent-container-default focus:bg-accent-container-default active:bg-accent-container-hover  text-accent-default hover:text-accent-hover focus:text-accent-hover active:text-accent-hover',
            },
        },
        {
            type: 'ghost',
            coloring: 'default',
            active: true,
            class: {
                button: 'bg-accent-container-hover text-accent-hover',
            },
        },

        // ghost neutral:
        {
            type: 'ghost',
            coloring: 'neutral',
            active: false,
            class: {
                button: 'hover:bg-neutral-container-default focus:bg-neutral-container-default active:bg-neutral-container-hover  text-neutral-default hover:text-neutral-hover focus:text-neutral-hover active:text-neutral-hover',
            },
        },
        {
            type: 'ghost',
            coloring: 'neutral',
            active: true,
            class: {
                button: 'bg-neutral-container-hover text-neutral-hover',
            },
        },

        // ghost warning:
        {
            type: 'ghost',
            coloring: 'warning',
            active: false,
            class: {
                button: 'hover:bg-warning-container-default focus:bg-warning-container-default active:bg-warning-container-hover  text-warning-default hover:text-warning-hover focus:text-warning-hover active:text-warning-hover',
            },
        },
        {
            type: 'ghost',
            coloring: 'warning',
            active: true,
            class: {
                button: 'bg-warning-container-hover text-warning-hover',
            },
        },

        // ghost info:
        {
            type: 'ghost',
            coloring: 'info',
            active: false,
            class: {
                button: 'hover:bg-info-container-default focus:bg-info-container-default active:bg-info-container-hover  text-info-default hover:text-info-hover focus:text-info-hover active:text-info-hover',
            },
        },
        {
            type: 'ghost',
            coloring: 'info',
            active: true,
            class: {
                button: 'bg-info-container-hover text-info-hover',
            },
        },

        // ghost danger:
        {
            type: 'ghost',
            coloring: 'danger',
            active: false,
            class: {
                button: 'hover:bg-danger-container-default focus:bg-danger-container-default active:bg-danger-container-hover  text-danger-default hover:text-danger-hover focus:text-danger-hover active:text-danger-hover',
            },
        },
        {
            type: 'ghost',
            coloring: 'danger',
            active: true,
            class: {
                button: 'bg-danger-container-hover text-danger-hover',
            },
        },

        // ghost success:
        {
            type: 'ghost',
            coloring: 'success',
            active: false,
            class: {
                button: 'hover:bg-success-container-default focus:bg-success-container-default active:bg-success-container-hover  text-success-default hover:text-success-hover focus:text-success-hover active:text-success-hover',
            },
        },
        {
            type: 'ghost',
            coloring: 'success',
            active: true,
            class: {
                button: 'bg-success-container-hover text-success-hover',
            },
        },
    ],
    defaultVariants: {},
});

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
