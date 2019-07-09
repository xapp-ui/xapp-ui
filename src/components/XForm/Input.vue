<template>
    <input class="x-form-input" v-bind="$attrs" v-on="listeners" />
</template>

<script>
    export default {
        name: 'XFormInput',

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