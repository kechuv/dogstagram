<template>
  <div id="app-layout">
    <header class="container">
      <Navbar />
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/shared/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="sass" scoped>
#app-layout
  height: 100%
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: auto 1fr
  grid-template-areas: 'head' 'main'
#app-layout > header
  grid-area: head
  background-color: $white
  padding: 1rem 0
#app-layout > main
  grid-area: main
  height: 100%
  overflow-y: auto
</style>
