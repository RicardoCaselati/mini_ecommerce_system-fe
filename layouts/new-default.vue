<template>
  <div class="mainLayout">
    <section class="main-container">
      <slot />
    </section>
  </div>
</template>

<style scoped>
.mainLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: blue;
}
</style>