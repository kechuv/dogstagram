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
    if (!this.qparams.page === 0) return;
    if (!this.allPhotos.length === 0) return;
    await this.getPhotos();
  },
  methods: {
    ...mapActions({
      fetchPhotos: "Dogstagram/fetchPhotos"
    }),
    getPhotos: async function() {
      await this.fetchPhotos(this.qparams);
      this.qparams.page++;
    }
  }
};
</script>

<style lang="sass" scoped>
.home
  height: 100%
</style>
