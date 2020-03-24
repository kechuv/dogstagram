<template>
  <Carousel
  autoplay
  autoplaySpeed="5000"
  timing="ease-in-out">
    <template #prevButton><i class="fas fa-chevron-left"></i></template>
    <slot></slot>
    <template #nextButton><i class="fas fa-chevron-right"></i></template>
  </Carousel>
</template>

<script>
import { VueAgile } from 'vue-agile';

export default {
  components: {
    Carousel: VueAgile
  }
}
</script>

<style lang="sass">
.agile__nav-button
  background: transparent
  border: none
  color: #fff
  cursor: pointer
  font-size: 24px
  height: 100%
  position: absolute
  top: 0
  transition-duration: .3s
  width: 80px
  &:hover
    background-color: rgba(#000, 0.5)
    opacity: 1
.agile__nav-button--prev
  left: 0
.agile__nav-button--next
  right: 0
.agile__dots
  bottom: 10px
  left: 50%
  position: absolute
  transform: translateX(-50%)
.agile__dot
  margin: 0 10px
  button 
    background-color: transparent
    border: 1px solid #fff
    border-radius: 50%
    cursor: pointer
    display: block
    height: 10px
    font-size: 0
    line-height: 0
    margin: 0
    padding: 0
    transition-duration: .3s
    width: 10px
  &--current,
  &:hover
    button
      background-color: #fff
</style>