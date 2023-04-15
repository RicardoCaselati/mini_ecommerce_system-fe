<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter()
const product = ref([]);
const hasTokenOnLocalStorage = process.client ? localStorage.getItem('token') : '';

const addToCart = () => {
  if (process.client) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product.value);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem('cart')));
    window.location.reload();
  }
};

const excludeCart = async () => {
  try {
    const response = await fetch(`http://localhost:3001/products/${route.params.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Item was successfully deleted, redirect to cart page
    router.push('/');
  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:3001/products/${route.params.id}`);
    const data = await response.json();
    product.value = data;
  } catch (error) {
    console.error(error);
  }
});
</script>


<template>
  <div class="container d-flex justify-content-around mt-5 ">
    <img :src="product.image" class="col-6" alt="Product image">
    <div class="col-4 descriptionItem p-4" v-if="product">
      <h6 class="productQty">Quantidade: {{ product.qty }}</h6>
      <h1 class="productTitle">{{ product.name }}</h1>
      <p class="productPrice mt-3">R${{ product.price }}</p>
      <p class="mt-3">{{ product.description }}</p>
      <button type="button" class="btn btn-success mt-3 btnComprar" @click="addToCart()"
        :disabled="!hasTokenOnLocalStorage">
        Comprar agora
      </button>
      <button type="button" class="btn btn-danger mt-3 btnComprar" @click="excludeCart()"
        :disabled="!hasTokenOnLocalStorage">
        Excluir
      </button>
    </div>
  </div>
</template>

<style>
.productTitle {
  font-size: 30px;
  font-weight: 300;
}

.productPrice {
  font-size: 28px;
  font-weight: bold;
}

.descriptionItem {
  border: 1px solid #212529;
  border-radius: 18px;
}

.btnComprar {
  width: 100%;
  height: 50px;
  font-weight: bold;
}

.productQty {
  font-weight: normal;
  font-size: 13px;
  font-style: italic;
}
</style>

