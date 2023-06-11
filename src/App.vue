<template lang="pug">
.wrapper
  welcome
    //.text
    //  template(v-if="textState")
    //    the-letter(v-for="(letter, idx) in textState" :key="idx" :status="letter.status") {{ letter.value }}
    //input.text__target(
    //  type="text"
    //  :value="input"
    //  ref="target"
    //  @input="onInput"
    //)
</template>

<script setup>
//pages
import Welcome from "@/views/Welcome.vue"
//component
import TheLetter  from "@/components/TheLetter.vue";

import { onMounted, ref, computed } from "vue";
import { actionTypes, mutationsTypes } from "@/store/modules/textServiceStore.js";
import { useStore } from 'vuex'

const store = useStore();
const textState = computed(() => store.state.textServiceStore?.textState)
const input = ref("");
const target = ref(null);


// onMounted(() => {
//   store.dispatch(actionTypes.getText)
//   target.value.focus();
// });

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

    store.commit(mutationsTypes.changeLetterStatus, {
      index: idx,
      status: "error"
    });
    target.value.focus();
    return null;
  }

  store.commit(mutationsTypes.changeLetterStatus, {
    index: idx,
    status: "correct"
  });
  target.value.focus();
}
</script>

<style lang="sass">
.wrapper
  background-color: #123553
  position: fixed
  width: 100vw
  height: 100vh
.text
  max-width: 500px
  margin: 20px auto
  box-shadow: 0 0 10px 0 #999
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

</style>
