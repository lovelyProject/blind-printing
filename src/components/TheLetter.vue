<template lang="pug">
  span.letter.correct
</template>

<script setup>
const props = defineProps({
  status: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="sass">
$green-regular: #2ED47A
.correct
  box-shadow: 0 0 5px 0 $green-regular
</style>