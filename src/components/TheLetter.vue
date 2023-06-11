<template lang="pug">
span.letter(
  :class="letterClasses"
  )
  slot
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  status: {
    type: String,
    required: true
  },
});

const letterClasses = computed(() => {
  return {
    'letter_correct': props.status === "correct",
    'letter_error': props.status === "error"
  }
})
</script>

<style scoped lang="sass">
$green-regular: #2ED47A
$red-regular: #F7685B

.letter
  border-radius: 50%
  text-align: center
  transition: color .2s ease-in-out
  &_correct
    color: $green-regular
  &_error
    color: $red-regular
</style>