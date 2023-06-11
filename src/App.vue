<template lang="pug">
.text
  template(v-if="textState")
    the-letter(v-for="(letter, idx) in textState" :key="idx") {{ letter.value }}
input.text__target(
  type="text"
  id="inp"
  :value="input"
  @input="onInput"
)
</template>

<script setup>
//component
import TheLetter  from "@/components/TheLetter.vue";

import { onMounted, ref, computed, watch } from "vue";
import { actionTypes } from "@/store/modules/textServiceStore.js";
import { useStore } from 'vuex'

const store = useStore();

onMounted(() => {
  store.dispatch(actionTypes.getText)
});

const textState = computed(() => store.state.textServiceStore?.textState)
const input = ref("");

function onInput(event) {
  //ввод в инпут символа
  const newValue = event.target.value;
  if (newValue === "") {
    input.value = "";
    return
  }

  const idx = newValue.length - 1;
  input.value = newValue;
//Если значения не совпадают, то в инпут ничего не вводится
  if (textState.value[idx].value.toLowerCase() !== newValue[idx].toLowerCase()) {
    input.value = newValue.slice(0, -1);
    return null;
  }
}
</script>

<style lang="sass">
.text
  max-width: 500px
  margin: 20px auto
  box-shadow: 0 0 10px 0 #999
  padding: 20px
  font-size: 22px
  border-radius: 5px
  letter-spacing: 8px
</style>
