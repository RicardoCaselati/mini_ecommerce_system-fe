<template>
  <div>
    <HeaderTop />
    <section class="mainSection">
      <h1>Bem vindo ao maior site de compras do Brasil!</h1>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderTop from '../components/headerTop.vue'

export default Vue.extend({
  components: {
    HeaderTop
  },
})
</script>

<style>

</style>