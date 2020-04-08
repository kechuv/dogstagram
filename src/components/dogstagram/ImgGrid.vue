<template>
  <section
  class="photo-grid"
  @scroll="handleScroll">
    <div
    v-for="(image, index) in images"
    :key="index"
    class="img-card">
      <img
      :src="image.url"
      :alt="image.id" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: false,
      default: () => []
    },
    infiniteScroll: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    handleScroll: function(event) {
      const { scrollTop, clientHeight, scrollHeight } = event.target;
      if (scrollTop + clientHeight >= scrollHeight) this.$emit("scrollBottom");
    }
  }
};
</script>

<style lang="sass" scoped>
.photo-grid
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  gap: 1rem
  height: 100%
  overflow-y: auto
  padding: 2rem 2rem 2rem 0
.img-card
  height: 33vh
.img-card > img
  width: 100%
  height: 100%
  object-fit: cover
  position: center
</style>