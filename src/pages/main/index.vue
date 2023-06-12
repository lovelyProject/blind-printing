<template lang="pug">
main.main
  .main__container
    .main__header
      h2.main__logo {{ logo }}
      //hero
    section.main__section
       h1.main__title {{ TITLE }}
       p.main__text {{ TEXT }}
       router-link(
        class="main__link"
        :to="{name: 'Main'}"
        )
         app-button Начать
</template>

<script setup>
//components
import AppButton from "@/components/ui/AppButton.vue";

const TITLE = "Учись набирать текст на клавиатуре вслепую";
const TEXT = "Набор текста вслепую, или набор текста всеми десятью пальцами, не глядя на клавиатуру, " +
    "считается самым эффективным способом научиться печатать на клавиатуре.";
const logo = "NewGen vision";
</script>

<style scoped lang="sass">
.main
  width: 1400px
  background: linear-gradient(90deg, #09203F 0%, #537895 100%)
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  border-radius: 5px
  &__container
    position: relative
    padding: 41px 49px 50px 65px
    background: url("@/assets/images/human.png") bottom right / auto no-repeat
  &__title
    margin-top: 183px
    font-style: normal
    max-width: 587px
    font-weight: 800
    font-size: 64px
    line-height: 111.5%
    animation: title 1.3s ease-in-out
  &__text
    margin-top: 28px
    font-style: normal
    font-weight: 500
    max-width: 466px
    font-size: 15px
    line-height: 22px
    animation: text 1.7s ease-in-out
  &__logo
    font-style: normal
    font-weight: 900
    font-size: 40px
    line-height: 60px
    color: white
    animation: logo 0.5s ease-in-out
  &__link
    display: inline-block
    text-decoration: none
@keyframes logo
  0%
    opacity: 0
    transform: translateY(-200px)

  100%
    opacity: 1
    transform: translateY(0)

@keyframes title
  0%
    opacity: 0
    transform: translateX(-200px)
  100%
    opacity: 1
    transform: translateX(0)

@keyframes text
  0%
    opacity: 0
    transform: translateX(200px)
  100%
    opacity: 1
    transform: translateX(0)

@media screen and (width < 1400px)
  .main
    width: 1200px
@media screen and (width < 1200px)
  .main
    width: 900px
    &__title,
    &__text
      text-shadow: 3px 3px 3px white
</style>