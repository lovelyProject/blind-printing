<template lang="pug">
.wrapper
  header.header
      h2.header__logo
        router-link(
          class="main__link"
          :to="{name: 'Welcome'}"
        ) {{ logo }}
  slot
</template>

<script setup>
const logo = "NewGen vision";
</script>

<style lang="sass">
.wrapper
  background-color: #123553
  position: fixed
  width: 100vw
  height: 100vh
.header
  max-width: 1400px
  margin: 0 auto
  &__logo
    font-style: normal
    font-weight: 900
    font-size: 40px
    line-height: 60px
    color: white
    animation: logo 0.5s ease-in-out
    transition: opacity .2s ease-in-out
    padding: 10px 40px
    &:hover
      opacity: .7
    & a
      text-decoration: none
.main
  width: 1400px
  background: linear-gradient(90deg, #09203F 0%, #537895 100%)
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  border-radius: 5px

@keyframes logo
  0%
    opacity: 0
    transform: translateY(-200px)

  100%
    opacity: 1
    transform: translateY(0)

</style>