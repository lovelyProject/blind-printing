<template lang="pug">
main.main
  .main__container
    .main__header
      h2.main__logo {{ logo }}
    section.main__section
      h1.main__title {{ title }}
      p.main__text {{ text }}
      the-link
</template>

<script setup>
//components
import TheLink from "@/components/ui/TheLink.vue";

const title = "Учись набирать текст на клавиатуре вслепую";
const text = "Набор текста вслепую, или набор текста всеми десятью пальцами, не глядя на клавиатуру, " +
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
  &__logo
    font-style: normal
    font-weight: 900
    font-size: 40px
    line-height: 60px
    color: white
  &__title
    margin-top: 183px
    font-style: normal
    max-width: 587px
    font-weight: 800
    font-size: 64px
    line-height: 111.5%
  &__text
    margin-top: 28px
    font-style: normal
    font-weight: 500
    max-width: 466px
    font-size: 15px
    line-height: 22px
</style>