<template>
    <component :is="element" v-bind="$attrs" v-on="$listeners" :class="{
        'x-button': custom === false,
        'inline-block': spread === false,
        'block': spread === true,
        'w-full': spread === true,
        'bg-white': variant === 'default' || outline === true,
        'hover:bg-gray-lighter': variant === 'default',
        'bg-primary' : variant === 'primary' && outline === false,
        'text-primary' : variant === 'primary' && outline === true,
        'hover:bg-primary-light' : variant === 'primary' && outline === true,
        'hover:bg-primary-dark' : variant === 'primary' && outline === false,
        'bg-secondary' : variant === 'secondary' && outline === false,
        'text-secondary' : variant === 'secondary' && outline === true,
        'hover:bg-secondary-light' : variant === 'secondary' && outline === true,
        'hover:bg-secondary-dark' : variant === 'secondary' && outline === false,
        'bg-warning' : variant === 'warning' && outline === false,
        'text-warning' : variant === 'warning' && outline === true,
        'hover:bg-warning-light' : variant === 'warning' && outline === true,
        'hover:bg-warning-dark' : variant === 'warning' && outline === false,
        'bg-danger' : variant === 'danger' && outline === false,
        'text-danger' : variant === 'danger' && outline === true,
        'hover:bg-danger-light' : variant === 'danger' && outline === true,
        'hover:bg-danger-dark' : variant === 'danger' && outline === false,
        'bg-info' : variant === 'info' && outline === false,
        'text-info' : variant === 'info' && outline === true,
        'hover:bg-info-light' : variant === 'info' && outline === true,
        'hover:bg-info-dark' : variant === 'info' && outline === false,
        'bg-success' : variant === 'success' && outline === false,
        'text-success' : variant === 'success' && outline === true,
        'hover:bg-success-light' : variant === 'success' && outline === true,
        'hover:bg-success-dark' : variant === 'success' && outline === false,
        'text-white': custom === false && variant !== 'default' && !textDark,
        'text-black' : custom === false && variant === 'default' || custom === false && textDark === true,
        'size-normal' : size === 'normal',
        'size-small' : size === 'small',
        'size-large' : size === 'large',
        'size-xlarge' : size === 'xlarge',
    }">
        <slot v-if="element !== 'input'"></slot>
    </component>
</template>
<script>
    export default {
        name: "XButton",
        props: {
            element: {
                type: String,
                default: 'button',
                validator: (val) => {
                    return ['input', 'button', 'a'].indexOf(val) !== -1;
                }
            },

            variant: {
                type: String,
                default: 'default',
                validator: (val) => {
                    return ['default', 'primary', 'secondary', 'warning', 'danger', 'info', 'success'].indexOf(val) !== -1;
                }
            },

            outline: {
                type: Boolean,
                default: false
            },

            spread: {
                type: Boolean,
                default: false
            },

            custom: {
                type: Boolean,
                default: false
            },

            textDark: {
                type: Boolean,
                default: false
            },

            size: {
                type: String,
                default: 'normal',
                validator: (val) => {
                    return ['normal', 'small', 'large', 'xlarge'].indexOf(val) !== -1;
                }
            }
        },

        computed: {
            elementClass() {

            }
        }
    }
</script>