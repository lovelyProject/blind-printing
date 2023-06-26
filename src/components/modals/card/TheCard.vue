<template lang="pug">
.card
  .card__item
    img(:src="card.icon" :alt="card.alt" class="card__icon")
    h3.color-black.card__title {{ card.title }}
  .card__item
    span.color-black.card__text {{ card.value }}
    span.color-black.card__text {{ card.measure }}
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="sass">
.card
  box-shadow: 0 0 10px 0 $gray
  padding: 20px
  border-radius: 5px
  display: flex
  margin-top: 20px
  justify-content: space-between
  &__title
    font-size: 24px
  &__icon
    width: 50px
  &__item
    display: flex
    align-items: center
    gap: 6px
  &__text
    font-size: 24px
</style>