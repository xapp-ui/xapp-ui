<template>
    <form @submit.prevent="handleSubmit">
        <slot v-bind:form="form" v-bind:reset="reset" v-bind:errors="errors" />
    </form>
</template>

<script>
    export default {
        name: "XForm",

        data() {
          return {
              form: {},
              errors: {}
          }
        },

        props: {
          validator: {
              type: Function,
              default: undefined
          }
        },

        methods: {

            // submit the form data by firing event as submit
            handleSubmit() {

                if(this.validateFormData()) {
                    this.$emit('submit', this.form)

                    if(!this.$listeners.submit) {
                        alert('form got submitted without any handler.');
                    }
                }
            },

            // when the form submits, this function will check if a validator function was defined,
            // if defined, that function will be called and if that function did not return true, a string is expected
            // as an error message.
            validateFormData() {
                console.log('validateFormData fired is ' + typeof this.validator);
                if(typeof this.validator === 'function') {
                    let errors = {};
                    let validatorResult;

                    Object.keys(this.form).forEach((attr) => {
                        validatorResult = this.validator(attr, this.form[attr]);
                       if(validatorResult !== true) {

                           if (typeof validatorResult === 'string' || validatorResult instanceof String) {
                               errors[attr] = validatorResult;
                           } else {
                               errors[attr] = 'invalid';
                               console.warn('validator function must return a string if form attribute value did not validate.');
                           }
                       }
                    });

                    if(Object.keys(errors).length) {
                        this.errors = errors;
                        return false;
                    }

                    return true;
                }
                return true;
            },

            /**
             * Reset the form
             */
            reset() {
                this.form = {}
                this.errors = {}
            }
        }
    }
</script>