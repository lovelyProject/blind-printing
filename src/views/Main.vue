<script setup>
//component
import TheLetter  from "@/components/TheLetter.vue";
import TheButton from "@/components/ui/AppButton.vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import TheModal from "@/components/modals/TheModal.vue";
//icons
import Aim from "@/assets/icons/aim.svg";
import Speed from "@/assets/icons/speed.svg";
import Time from "@/assets/icons/time.svg";

import { onMounted, ref, computed } from "vue";
import { actionTypes, mutationsTypes } from "@/store/modules/textServiceStore.js";
import { useStore } from 'vuex'

const cardsState = {
  accuracy:  {
    id: 1,
    title: "Точность",
    icon: Aim,
    alt: "Точность",
    measure: "%",
    value: 0
  },
  speed: {
    id: 2,
    title: "Скорость",
    icon: Speed,
    alt: "Скорость",
    measure: "зн/м",
    value: 0
  },
  time: {
    id: 3,
    title: "Время",
    icon: Time,
    alt: "Время",
    measure: "cек",
    value: 0
  }
}

const input = ref("");
const target = ref(null);
const speed = ref("0");
let timer;
let isErrorAgain = false;
let isShowModal = ref(false);

const store = useStore();
const isLoading = computed(() => store.state.textServiceStore.isLoading);
const textState = computed(() => store.state.textServiceStore?.textState);
const textFromService = computed(() => store.state.textServiceStore?.textFromService);
//100 значение точности по умолчанию
const errorPercents = computed(() => (store.state.textServiceStore.countErrors * 100 / textFromService.value.length).toFixed(2));
const rightPercents = computed(() => {
  return isNaN(Number(errorPercents.value)) ? 100 : 100 - errorPercents.value
});

const startPrintingTime = computed(() => store.state.textServiceStore.startPrintingTime);

//1000 - кол-во милисекунд в 1 секунде, цифра 1 - чтобы не делить на 0
function getDifferenceInSeconds() {
  return startPrintingTime.value ? Math.round((new Date().getTime() - startPrintingTime.value) / 1000) : 1;
}
function getSpeed() {
  return Number(input.value.length * 60 / getDifferenceInSeconds());
}

function resetEverything() {
  clearInterval(timer);
  input.value = "";
  speed.value = "0";
  isShowModal.value = false;

  store.dispatch(actionTypes.getText);
  target.value.focus();
}
onMounted(() => {
  store.dispatch(actionTypes.getText)
  target.value.focus();
});

function onInput(event) {
  const newValue = event.target.value;

  //введен весь текст
  if (textFromService.value.length - 1 === input.value.length) {
    clearInterval(timer);
    cardsState.time.value = getDifferenceInSeconds();
    cardsState.accuracy.value = rightPercents.value;
    cardsState.speed.value = speed.value;

    isShowModal.value = true
    // store.dispatch(actionTypes.getText);
    // input.value = "";
    // target.value.focus();
  }
  //вся строка инпута удалена
  if (newValue === "") {
    input.value = "";

    store.commit(mutationsTypes.clearAllStatuses);
    target.value.focus();
    return
  }

  const idx = newValue.length - 1;
  input.value = newValue;

//Если значения не совпадают, то в инпут ничего не вводится
  if (textState.value[idx].value.toLowerCase() !== newValue[idx].toLowerCase()) {
    input.value = newValue.slice(0, -1);

    if (!isErrorAgain) {
      isErrorAgain = true;
      store.commit(mutationsTypes.changeLetterStatus, {
        index: idx,
        status: "error"
      });
      store.commit(mutationsTypes.incrementErrors);
      return;
    }

    target.value.focus();
    return null;
  }

  //запуск счетчика и вычисления скорости
  if (input.value.length === 1) {
    store.commit(mutationsTypes.setStartTime);

    timer = setInterval(() => {
      speed.value = Math.round(getSpeed());
    }, 1000);
  }

  isErrorAgain = false;
  store.commit(mutationsTypes.changeLetterStatus, {
    index: idx,
    status: "correct"
  });
  target.value.focus();
}
</script>

<template lang="pug">
div.flex
  .text
    template(v-if="textState")
      the-letter(v-for="(letter, idx) in textState" :key="idx" :status="letter.status") {{ letter.value }}
      input.text__target(
        type="text"
        :value="input"
        ref="target"
        @input="onInput"
      )
    app-loader(v-if="isLoading")
  .stats
    .stats__item
      .item__header
        img(:src="Aim" class="stats__icon" alt="Точность")
        h4.item-title Точность
      span.item-text {{ rightPercents }}%
    .stats__item
      .item__header
        img(:src="Speed" class="stats__icon" alt="Скорость")
        h4.item-title Скорость
      span.item-text {{ speed }} зн/мин
    the-button(@resetEverything="resetEverything") Заново
    teleport(to="body")
      transition
        the-modal(v-if="isShowModal" :cardsState="cardsState" @resetEverything="resetEverything")
</template>

<style lang="sass" >
.flex
  display: flex
  margin: 20px auto
  max-width: 900px
  box-shadow: 0 0 10px 0 #999
  background-color: rgba(255,255,255, 0.3)
  gap: 10px
.text
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


</style>