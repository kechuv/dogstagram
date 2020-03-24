<template>
  <ul>
    <li
    v-for="(category, index) in nav"
    :key="index">
      <p>
        <span>{{category.name}}</span>
        <i
        v-if="category.children && !category.expanded"
        class="clickable fas fa-angle-down"
        @click="category.expanded = true"></i>
        <i
        v-if="category.children && category.expanded"
        class="clickable fas fa-angle-up"
        @click="category.expanded = false"></i>
      </p>
      <CollapseList v-if="category.children && category.expanded" :nav="category.children" class="child"/>
    </li>
  </ul>
</template>

<script>
const CollapseList = () => import('./CollapseList.vue');

export default {
  props: {
    nav: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  components: {
    CollapseList
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style-type: none
  padding: 0
li
  margin: 1rem 0
li > p
  margin: 0
  display: flex
  justify-content: space-between
ul.child
  margin: 0.8rem 0 0.8rem 1rem
ul.child > li
  margin: 0.5rem 0 0.5rem 0
</style>