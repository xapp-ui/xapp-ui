<template>
    <component :is="element" v-bind="$attrs" v-on="$listeners" :class="{
        'x-button': true,
        'bg-white': variant === 'default',
        'hover:bg-gray-lightest': variant === 'default',
        'bg-primary' : variant === 'primary',
        'hover:bg-primary-dark' : variant === 'primary',
        'bg-secondary' : variant === 'secondary',
        'hover:bg-secondary-dark' : variant === 'secondary',
        'bg-warning' : variant === 'warning',
        'hover:bg-warning-dark' : variant === 'warning',
        'bg-danger' : variant === 'danger',
        'hover:bg-danger-dark' : variant === 'danger',
        'bg-info' : variant === 'info',
        'hover:bg-info-dark' : variant === 'info',
        'bg-success' : variant === 'success',
        'hover:bg-success-dark' : variant === 'success',
        'text-white': variant !== 'default' && !textDark,
        'text-black' : variant === 'default' || textDark === true,
        [size] : true
    }">
        <slot></slot>
    </component>
</template>
<script>
    export default {
        name: "XButton",
        props: {
            element: {
                type: String,
                default: 'button'
            },

            variant: {
                type: String,
                default: 'default',
                validator: (val) => {
                    return ['default', 'primary', 'secondary', 'warning', 'danger', 'info', 'success'].indexOf(val) !== -1;
                }
            },

            textDark: {
                type: Boolean,
                default: false
            },

            size: {
                type: String,
                default: 'normal',
                validator: (val) => {
                    return ['normal', 'small', 'large'].indexOf(val) !== -1;
                }
            }
        }
    }
</script>