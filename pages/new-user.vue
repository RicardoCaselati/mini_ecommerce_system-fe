<template>
  <form class="container d-flex justify-content-center align-items-center" :mode="formInline">
    <div class="innerContainerForm p-3">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="name" class="form-control" id="name" v-model="formInline.name" aria-describedby="name"
          placeholder="Your name here!">
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="formInline.email"
          aria-describedby="emailHelp" placeholder="name@example.com">
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="formInline.password"
          placeholder="your password">
      </div>

      <div class="d-flex flex-column">
        <button type="submit" class="btn btn-primary mb-3" @click.prevent="onSubmit">Register</button>
      </div>
    </div>
  </form>
</template>


<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const formInline = reactive({
  name: '',
  email: '',
  password: ''
})

const router = useRouter()


const onSubmit = async (e: any) => {
  e.preventDefault();
  try {
    const { name, email, password } = formInline;
    const response = await fetch('http://localhost:3001/user/new-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json();

    localStorage.setItem('name', JSON.stringify(formInline['name']));
    localStorage.setItem('email', JSON.stringify(formInline['email']));
    localStorage.setItem('token', JSON.stringify(data));
    router.push('/products');
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>
