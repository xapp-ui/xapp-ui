<template>
    <input class="x-form-input" :type="type" v-bind="$attrs" v-on="listeners" :class="{
        'size-normal' : size === 'normal',
        'size-small' : size === 'small',
        'size-large' : size === 'large',
        'size-xlarge' : size === 'xlarge',
        'focus:outline-primary': variant === 'primary',
        'border-primary': variantBorder && variant === 'primary',
        'text-primary-dark': variantText && variant === 'primary',
        'focus:outline-secondary': variant === 'secondary',
        'border-secondary': variantBorder && variant === 'secondary',
        'text-secondary-dark': variantText && variant === 'secondary',
        'focus:outline-success': variant === 'success',
        'border-success': variantBorder && variant === 'success',
        'text-success-dark': variantText && variant === 'success',
        'focus:outline-info': variant === 'info',
        'border-info': variantBorder && variant === 'info',
        'text-info-dark': variantText && variant === 'info',
        'focus:outline-warning': variant === 'warning',
        'border-warning': variantBorder && variant === 'warning',
        'text-warning-dark': variantText && variant === 'warning',
        'focus:outline-danger': variant === 'danger',
        'border-danger': variantBorder && variant === 'danger',
        'text-danger-dark': variantText && variant === 'danger',
        'checked-primary': type === 'checkbox' && variant === 'primary',
        'checked-success': type === 'checkbox' && variant === 'success',
    }" />
</template>

<script>
    export default {
        name: 'XFormInput',

        props: {
            variant: {
              type: String,
              default: 'default',
              validator: (val) => {
                  return ['default', 'primary', 'secondary', 'warning', 'danger', 'info', 'success'].indexOf(val) !== -1;
              }
            },
            variantBorder: {
              type: Boolean,
              default: false
            },

            variantText: {
              type: Boolean,
              default: false
            },

            type: {
              type: String,
              default: 'text'
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
            listeners() {
                return {
                    ...this.$listeners,
                    input: evt =>
                        this.$emit('input', evt.target.value)
                }
            }
        }
    }
</script>