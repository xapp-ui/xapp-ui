<template>
  <div class="card">
    <CardHeader v-if="$slots.header">
      <slot name="header"></slot>
    </CardHeader>
    
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style>
.card {
  @apply bg-primary
}
</style>