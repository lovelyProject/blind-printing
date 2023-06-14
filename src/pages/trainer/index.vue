<template lang="pug">
main.trainer
  section.trainer__hero(v-if="letters")
    main.trainer__text
      the-letter(v-for="({status, value}, index) in letters" :key="index" :status="status") {{ value }}
      input.trainer__target(
          type="text"
          :value="input"
          ref="inputElement"
          @input="onInput"
      )
      app-loader(v-if="isLoading")
    aside.stats
      .stats__item
        .item__header
          img(:src="Aim" class="stats__icon" alt="Точность")
          h4.item-title Точность
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
//component
import TheLetter  from "@/components/trainer/TheLetter.vue";
import TheButton from "@/components/ui/PrimaryButton.vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import TheModal from "@/components/modals/TheModal.vue";

//icons
import Aim from "@/assets/icons/aim.svg";
import Speed from "@/assets/icons/speed.svg";

import { onMounted, ref, computed } from "vue";
import { actionTypes, mutationsTypes } from "@/store/trainer/index.js";
import { useStore } from 'vuex'

const store = useStore();

const cards = computed(() => store.state.trainer.cards);
const isError = computed(() => store.state.trainer.isError);
const isModal = computed(() => store.state.trainer.isModal);
const isLoading = computed(() => store.state.trainer.isLoading);
const letters = computed(() => store.state.trainer?.letters);
const lettersArray = computed(() => store.state.trainer?.lettersArray);
//100 значение точности по умолчанию
const error = computed(() => {
  return (store.state.trainer.countErrors * 100 / lettersArray.value.length).toFixed(2)
});
//если NaN, то значит первая буква не введена,поэтому возвращаем 100, иначе 100 - % ошибки
const accuracy = computed(() => {
  return isNaN(Number(error.value)) ? 100 : 100 - error.value
});
const input = computed(() => store.state.trainer.input);
const speed = computed(() => store.state.trainer.speed);

const inputElement = ref(null);

function reset() {
  store.commit(mutationsTypes.resetTimer);
  store.commit(mutationsTypes.setInput, "");
  store.commit(mutationsTypes.setSpeed, "0");
  store.commit(mutationsTypes.toggleModal, false);

  store.dispatch(actionTypes.getText);
  inputElement.value.focus();
}

onMounted(() => {
  store.dispatch(actionTypes.getText)
  inputElement.value.focus();
});

function onInput(event) {
  const newValue = event.target.value;

  //введен весь текст
  if (lettersArray.value.length - 1 === input.value.length) {
    store.commit(mutationsTypes.resetTimer);
    store.commit(mutationsTypes.setTime);
    store.commit(mutationsTypes.setAccuracy, accuracy.value)
    store.commit(mutationsTypes.setSpeed, speed.value)

    store.commit(mutationsTypes.toggleModal, true);
  }

  //вся строка инпута удалена
  if (newValue === "") {
    store.commit(mutationsTypes.setInput, "");
    store.commit(mutationsTypes.clearAllStatuses);

    inputElement.value.focus();
    return
  }

  const index = newValue.length - 1;
  store.commit(mutationsTypes.setInput, newValue);

//Если значения не совпадают, то в инпут ничего не вводится
  if (letters.value[index].value !== newValue[index]) {
    store.commit(mutationsTypes.setInput, newValue.slice(0, -1));

    if (!isError.value) {
      store.commit(mutationsTypes.isErrorToggle, true);
      store.commit(mutationsTypes.changeLetterStatus, {
        index: index,
        status: "error"
      });

      store.commit(mutationsTypes.incrementErrors);
      return;
    }

    inputElement.value.focus();
    return null;
  }

  //запуск счетчика и вычисления скорости
  if (input.value.length === 1) {
    store.dispatch(actionTypes.setTimer);
  }

  store.commit(mutationsTypes.isErrorToggle, false);
  store.commit(mutationsTypes.changeLetterStatus, {
    index: index,
    status: "correct"
  });

  inputElement.value.focus();
}
</script>

<style lang="sass" >
.trainer
  margin-top: 200px
  padding: 0 40px
  &__hero
    display: flex
    margin: 20px auto
    max-width: 900px
    box-shadow: 0 0 10px 0 #999
    background-color: rgba(255,255,255, 0.3)
    gap: 10px
  &__text
    flex-basis: 80%
    padding: 20px
    font-size: 22px
    border-radius: 5px
    letter-spacing: 5px
    position: relative
  &__target
    font-size: 16px
    overflow: hidden
    border: none
    color: transparent
    background-color: transparent
    caret-color: transparent
    outline: 0
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    cursor: default
    z-index: -1
.stats
  padding: 20px
  flex-basis: 20%
  &__item
    background-color: white
    padding: 20px
    color: black
    border-radius: 5px
    &:first-child
      margin-bottom: 20px
  &__icon
    width: 30px
.item
  display: flex
  text-align: center
  flex-direction: column
  &-title
    text-align: center
    color: black
    font-size: 20px
  &-text
    display: block
    text-align: center
    color: black
    font-size: 24px
  &__header
    display: flex
    flex-wrap: nowrap
    gap: 5px
    margin-bottom: 15px
.v-enter-active,
.v-leave-active
  transition: opacity 0.1s ease-in-out


.v-enter-from,
.v-leave-to
  opacity: 0

@media screen and (width < 900px)
  .trainer
    margin-top: 70px
    &__text
      font-size: 18px
      min-height: 300px
    &__hero
      display: block
  .item__header
    justify-content: center
  .stats__item
    padding: 10px
</style>