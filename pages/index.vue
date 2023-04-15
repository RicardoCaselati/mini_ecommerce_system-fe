<template>
  <div class="main">
    <div class="container d-flex flex-wrap justify-content-center align-items-center p-5">
      <div class="card m-2 " style="width: 18rem;" v-for="product in products" :key="product.id">
        <nuxt-link class="linkCard" :to="'product/' + product.id">
          <img :src="product.image" class="card-img-top cardImg" alt="Product image">
          <div class="card-body">
            <h6 class="card-text">{{ product.price }}</h6>
            <p class="card-title">{{ product.name.slice(0, 40) }}{{ product.name.length > 40 ? '...' : '' }}
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  name: 'MyComponent',
  setup() {
    const products = ref([]);

    onMounted(async () => {
      // if (process.client && typeof localStorage !== 'undefined' && !localStorage.getItem('cart')) {
      //   localStorage.setItem('cart', '[]');
      // }
      try {
        const response = await fetch('http://localhost:3001/products/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        products.value = data;
      } catch (error) {
        console.error(error);
      }
    });

    return {
      products,
    }
  }
};
</script>

<style>
.text {
  color: #f8f9fa;
  text-shadow: 2px 2px #212529;
  font-weight: bold;
  font-size: 80px;
  width: 464px;
  text-align: center;
}

.card:hover {
  box-shadow: 2px 2px 5px #2125298f;

}

.card {
  height: 330px;
}

.cardImg {
  width: 100vw;
  max-width: 100%;
  height: 202px;
  background-size: cover;
  background-position: center;
}

.linkCard {
  text-decoration: none;
  color: #212529;
}

.card-text {
  font-weight: bold;
}
</style>
