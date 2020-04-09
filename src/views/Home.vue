<template>
  <div class="home">
    <ImgGrid
      :images="allPhotos"
      @scrollBottom="getPhotos"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ImgGrid: () => import("@/components/dogstagram/ImgGrid")
  },
  computed: {
    ...mapGetters({
      allPhotos: "Dogstagram/allPhotos",
      fetchStatus: "Dogstagram/fetchStatus"
    })
  },
  beforeMount: async function() {
    if (this.allPhotos.length) return;
    await this.getPhotos();
  },
  methods: {
    ...mapActions({
      fetchPhotos: "Dogstagram/fetchPhotos"
    }),
    getPhotos: async function() {
      await this.fetchPhotos();
    }
  }
};
</script>

<style lang="sass" scoped>
.home
  height: 100%
  padding-bottom: 2rem
</style>
