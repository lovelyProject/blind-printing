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
  .stats
    .stats__item
      h4.item-title Точность
      span.item-text {{ rightPercents }}%
    .stats__item
      h4.item-title Скорость
      span.item-text 0 зн/мин
</template>

<script setup>
//component
import TheLetter  from "@/components/TheLetter.vue";

import { onMounted, ref, computed } from "vue";
import { actionTypes, mutationsTypes } from "@/store/modules/textServiceStore.js";
import { useStore } from 'vuex'

const store = useStore();
const textState = computed(() => store.state.textServiceStore?.textState);
const textFromService = computed(() => store.state.textServiceStore?.textFromService);
const errorPercents = computed(() => (store.state.textServiceStore.countErrors * 100 / textFromService.value.length).toFixed(2));
const rightPercents = computed(() => {
  return isNaN(Number(errorPercents.value)) ? 100 : 100 - errorPercents.value
})
const input = ref("");
const target = ref(null);
let isErrorAgain = false;

onMounted(() => {
  store.dispatch(actionTypes.getText)
  target.value.focus();
});

function onInput(event) {
  //ввод в инпут символа
  const newValue = event.target.value;


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
      console.log("Err again");
      store.commit(mutationsTypes.incrementErrors);
      return;
    }

    store.commit(mutationsTypes.changeLetterStatus, {
      index: idx,
      status: "error"
    });
    target.value.focus();
    return null;
  }

  isErrorAgain = false;
  store.commit(mutationsTypes.changeLetterStatus, {
    index: idx,
    status: "correct"
  });
  target.value.focus();
}
</script>

<style scoped lang="sass">
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
  &__target
    font-size: 16px
    overflow: hidden
    border: none
    color: transparent
    background-color: transparent
    caret-color: transparent
    outline: 0
    position: absolute
    width: 100vw
    height: 100vh
    cursor: default
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
.item
  display: flex
  text-align: center
  flex-direction: column
  &-title
    text-align: center
    color: black
  &-text
    display: block
    text-align: center
    color: black
</style>