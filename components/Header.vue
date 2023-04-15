<template>
  <div class="header shadow bg-body-tertiary">
    <div class="header-container container-fluid">
      <NuxtLink to="/" class="titleEcommerce col-6 ms-5">
        <h3 class="principalText">My E-commerce App</h3>
      </NuxtLink>
      <NuxtLink to="/cart" class="header-cart col-2">
        Cart ({{ cartItemCount }})
      </NuxtLink>
      <template v-if="hasTokenOnLocalStorage">
        <div class="header-account d-flex justify-content-around col-4">
          Hello {{ usrName }}!
          <NuxtLink to="/new-product" class="header-account col-4">
            Creata a Product
          </NuxtLink>
        </div>
      </template>
      <template v-else>
        <NuxtLink to="/login" class="header-account col-2">
          Login
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const cartItems = ref([]);
const cartItemCount = ref(0);
const usrName = ref('')
const hasTokenOnLocalStorage = process.client ? localStorage.getItem('token') : '';

onMounted(() => {
  if (process.client && typeof localStorage !== 'undefined') {
    const cartItemsFromLocalStorage = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );
    const cartNameFromLocalStorage = JSON.parse(
      localStorage.getItem('name') || '[]'
    );
    cartItems.value = cartItemsFromLocalStorage;
    usrName.value = cartNameFromLocalStorage
  }
});

watch(cartItems, () => {
  cartItemCount.value = cartItems.value.length;
});

</script>

<style>
.header {
  background-color: #fff;
  height: 80px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
}

.header-logo img {
  height: 40px;
}

.header-search input {
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
}

.header-search input:focus {
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.search-button {
  border: none;
  background-color: #f5f5f5;
  border-radius: 25px;
  padding: 10px 20px;
  margin-left: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
}

.search-button:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.header-cart,
.header-account {
  color: #333;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.header-cart,
.header-account {
  margin-right: 5px;
}

.titleEcommerce,
.principalText {
  text-decoration: none;
  color: #212529;
  font-size: 16px;
}
</style>