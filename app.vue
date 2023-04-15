<template>
  <div class="bodyColor">
    <NuxtLayout>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>

<style>
.bodyColor {
  background-color: rgba(245, 245, 245, 0.521);
}
</style>