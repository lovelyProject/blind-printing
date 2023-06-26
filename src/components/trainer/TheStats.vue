<template lang="pug">
.stats__item(v-for="{ icon, alt, value } in state")
  .item__header
    img(:src="icon" class="stats__icon" :alt="alt")
    h4.item-title {{ alt }}
  span.item-text {{ value }}
</template>

<script setup>
defineProps({
  state: {
    type: Array,
    required: true
  }
})
</script>
