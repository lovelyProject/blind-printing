<template lang="pug">
.wrapper
  header.header
      h2.header__logo
        router-link(
          class="main__link"
          :to="{name: 'Welcome'}"
        ) {{ logo }}


</template>

<script setup>
const logo = "NewGen vision";
</script>

<style scoped lang="sass">
.wrapper
  background-color: #123553
  position: fixed
  width: 100vw
  height: 100vh

&__logo
    font-style: normal
    font-weight: 900
    font-size: 40px
    line-height: 60px
    color: white
    animation: logo 0.5s ease-in-out
</style>