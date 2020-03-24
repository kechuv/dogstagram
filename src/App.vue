<template>
  <div id="app">
    <router-view/>
    <NewVersion />
  </div>
</template>

<script>
export default {
  components: {
    NewVersion: () => import('@/components/shared/NewVersion')
  }
}
</script>

<style lang="sass">
#app
  margin: 0
  height: 100%
</style>