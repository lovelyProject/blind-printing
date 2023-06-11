<template lang="pug">
.button
  button.button__item(@click="onButton")
    slot
</template>

<script setup>
const emits = defineEmits(['resetEverything']);

function onButton() {
  emits("resetEverything");
}
</script>

<style scoped lang="sass">
$orange: #F57359
.button
  display: flex
  justify-content: center
  &__item
    display: inline-block
    text-decoration: none
    background-color: $orange
    border-radius: 5px
    padding: 5px 24px
    margin: 20px auto 0
    cursor: pointer
    border: 1px solid transparent
    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out
    font-size: 20px
    &:active
      transform: translateY(2px)
    &:hover
      color: $orange
      background-color: #fff
      border-color: $orange
      box-shadow: 0 0 20px 0 $orange
</style>