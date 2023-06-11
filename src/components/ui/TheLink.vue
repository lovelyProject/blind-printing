<template lang="pug">
a.link(href="google.com") Начать
</template>

<style lang="sass">
$orange: #F57359
.link
  display: inline-block
  text-decoration: none
  background-color: $orange
  border-radius: 5px
  padding: 5px 24px
  margin-top: 61px
  cursor: pointer
  border: 1px solid transparent
  transition: background-color 0.2s ease-in-out
  &:hover
    color: $orange
    background-color: #fff
    border-color: $orange
    box-shadow: 0 0 20px 0 $orange
</style>