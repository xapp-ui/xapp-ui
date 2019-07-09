<template>
    <div class="x-form-group" :class="{
        inline: inline
    }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'XFormGroup',

        props: {
            inline: {
                type: Boolean,
                default: false
            }
        }
    }
</script>