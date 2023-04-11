<template>
  <Home />
</template>

<script lang="ts">
import Vue from 'vue'
import Home from './home.vue'

export default Vue.extend({
  components: {
    Home,
  },
})
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
