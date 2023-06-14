
<template lang="pug">
aside.stats
  .stats__item
    .item__header
      img(:src="Aim" class="stats__icon" alt="Точность")h4.item-title Точность
    span.item-text {{ accuracy }}%
  .stats__item
    .item__header
      img(:src="Speed" class="stats__icon" alt="Скорость")
      h4.item-title Скорость
    span.item-text {{ speed }} зн/мин
  the-button(@reset="reset") Заново
  teleport(to="body")
    transition
      the-modal(v-if="isModal" :cards="cards" @reset="reset")
</template>

<script setup>
import TheModal from "@/components/modals/TheModal.vue";
</script>

<style scoped lang="sass">

</style>