<template>
  <div class="container pt-5 ps-5">
    <h2>Carrinho de compras</h2>

    <div class="container d-flex flex-column flex-wrap justify-content-center align-items-center pt-5">
      <div class="m-2 eachItem" style="width: 40rem;" v-for="item in cartItems" :key="item.id" @click="removeItem(item)">
        <div class="p-1">
          {{ item.name }} - {{ item.price }}
        </div>
      </div>
    </div>
    <!-- <p>Total: {{ cartTotal }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const cartItems = ref([]);

onMounted(() => {
  if (process.client && typeof localStorage !== 'undefined') {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    cartItems.value = cartItemsFromLocalStorage
  }
})

function removeItem(item) {
  const index = cartItems.value.findIndex(i => i.id === item.id);
  if (index > -1) {
    cartItems.value.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }
}
</script>

<style>
.eachItem:hover {
  background-color: rgba(255, 0, 0, 0.39);
  border-radius: 10px;
  border: 1px solid red;
  color: red;
}
</style>





