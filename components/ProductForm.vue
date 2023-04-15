<template>
  <form class="container d-flex justify-content-center align-items-center" :model="formInline">
    <div class="innerContainerForm p-3">
      <div class="mb-3">
        <label for="productName" class="form-label">Nome do Novo Produto</label>
        <input type="name" class="form-control" id="newProdcutName" aria-describedby="newProductName"
          placeholder="Nome do produto" v-model="formInline.productName">
      </div>
      <div class="mb-3">
        <label for="productPrice" class="form-label">Preço</label>
        <input type="number" class="form-control" id="newProductPrice" placeholder="Valor do Novo Produto"
          v-model="formInline.price">
      </div>
      <div class="mb-3">
        <label for="productQtt" class="form-label">Quantidade</label>
        <input type="number" class="form-control" id="newProductQuantity" placeholder="Qauntidade do Novo Produto"
          v-model="formInline.qty">
      </div>
      <div class="mb-3">
        <label for="productImage" class="form-label">Imagem do Produto</label>
        <input type="link" class="form-control" id="newProdcutImage" aria-describedby="newProductImage"
          placeholder="Imagem do produto" v-model="formInline.image">
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label">Descrição do Novo Produto</label>
        <input type="text" class="form-control" id="newProdcutDescription" aria-describedby="newProductDescription"
          placeholder="Descrição do produto" v-model="formInline.description">
      </div>
      <div class="d-flex flex-column">
        <button type="submit" class="btn btn-primary mb-3" @click.prevent="onSubmit">Cadastrar!</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const formInline = reactive({
  productName: '',
  price: '',
  qty: '',
  image: '',
  description: '',
})

const router = useRouter()


const onSubmit = async (e: any) => {
  e.preventDefault();
  try {
    const {
      productName,
      price,
      qty,
      image,
      description } = formInline;
    const response = await fetch('http://localhost:3001/products/new-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: productName,
        price,
        qty,
        image,
        description
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json();

    // localStorage.setItem('name', JSON.stringify(formInline['name']));
    // localStorage.setItem('token', JSON.stringify(data.token));
    // localStorage.setItem('name', JSON.stringify(data.name));
    router.push('/');
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>
