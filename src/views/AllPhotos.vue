<template>
  <section class="photo-grid" @scroll="handleScroll">
    <div v-for="(photo, index) in allPhotos" :key="index" class="img-card">
      <img :src="photo.url" :alt="photo.id" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: function() {
    return {
      qparams: {
        limit: 9,
        page: 0,
        order: "desc"
      }
    };
  },
  computed: {
    ...mapGetters({
      allPhotos: "Dogstagram/allPhotos",
      fetchStatus: "Dogstagram/fetchStatus"
    })
  },
  beforeMount: async function() {
    await this.getPhotos();
  },
  methods: {
    ...mapActions({
      fetchPhotos: "Dogstagram/fetchPhotos"
    }),
    getPhotos: async function() {
      await this.fetchPhotos(this.qparams);
      this.qparams.page++;
    },
    handleScroll: async function({
      target: { scrollTop, clientHeight, scrollHeight }
    }) {
      if (scrollTop + clientHeight >= scrollHeight) await this.getPhotos();
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
  padding: 0 1rem
.img-card
  height: 30vh
.img-card > img
  width: 100%
  height: 100%
  object-fit: cover
  position: center
</style>
