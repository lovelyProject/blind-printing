<script setup>
//components
import TheCard from "@/components/modals/card/TheCard.vue";
import AppButton from "@/components/ui/PrimaryButton.vue";
//icon
import Firework from "@/assets/icons/firework.svg";

defineProps({
  cards: {
    type: Object,
    required: true
  }
})
const emits = defineEmits(['reset']);
function reset() {
  emits("reset");
}

const CONGRATULATIONS = `Вы успешно перепечатали текст.
Вот ваши результаты:`;

</script>

<template lang="pug">
.modal
  transition(name="modal" appear)
      .modal__box
        img(:src="Firework" class="modal__icon")
        h2.color-black.modal__title Поздравляем!
        p.color-black.modal__text {{ CONGRATULATIONS }}
        the-card(v-for="card in cards" :key="card.id" :card="card")
        app-button(@reset="reset") Начать заново
</template>

<style scoped lang="sass">
.color-black
  color: $black
.modal
  position: fixed
  left: 0
  top: 0
  width: 100vw
  height: 100vh
  z-index: 2
  background-color: rgba($black, .3)
  display: grid
  align-items: center
  justify-content: center
  overflow-y: auto
  &__title
    margin-top: 50px
    text-align: center
    font-size: 30px
  &__text
    font-size: 24px
    margin-top: 20px
    margin-bottom: 50px
  &__box
    max-width: 600px
    padding: 45px
    margin: 30px 15px
    position: relative
    z-index: 3
    background-color: white
    border-radius: 12px
    box-shadow: 0 0 17px -7px rgba(34, 60, 80, .2)
  &__icon
    width: 158px
    border-radius: 50%
    box-shadow: 0 0 10px 0 $gray
    padding: 31px
    position: absolute
    z-index: 4
    top: -79px
    left: 50%
    transform: translateX(-50%)
    background-color: white
.modal-enter-active
  animation: bounce-in 0.5s
.modal-leave-active
  animation: bounce-in 0.5s reverse

@keyframes bounce-in
  0%
    transform: scale(0)

  50%
    transform: scale(1.1)

  100%
    transform: scale(1)
@media screen and (width < 800)
  .modal__box
    max-width: 500px
</style>