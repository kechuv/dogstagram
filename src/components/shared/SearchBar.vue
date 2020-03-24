<template>
  <form 
  :id="`${id}--search-form`"
  @submit.prevent="">
    <label :for="`${id}--search-input`"><i class="fa fa-search"></i></label>
    <input
    type="text"
    :id="`${id}--search-input`"
    :placeholder="placeholder"
    v-model="query">
    <div></div>
  </form>
</template>

<script>
import { debounce } from '@/assets/js/tools.js';

export default {
  props: {
    id: {
      type: String,
      required: false,
      default: 'search'
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Buscar'
    }
  },
  data: function() {
    return {
      query: ''
    };
  },
  watch: {
    query: debounce(function(newValue) {
      this.search(newValue);
    }, 500)
  },
  methods: {
    search: function(query) {
      if (query.length > 2) this.$emit('search', query);
    }
  }
}
</script>

<style lang="sass" scoped>
form
  border-bottom: 1px solid $mid_gray
  padding: 0.25rem
  width: 100%
  max-width: 300px
form > *
  font-size: 0.8rem
  color: $mid_gray
label
  margin-right: 0.3rem
  width: 15%
input
  border: none
  font-family: $text-font
  width: 85%
  &:focus
    outline: none
</style>