<template>
  <form class="container d-flex justify-content-center align-items-center" :model="formInline">
    <div class="innerContainerForm p-3">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="name@example.com" v-model="formInline.email">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="your password"
          v-model="formInline.password">
      </div>
      <div class="d-flex flex-column">
        <button type="submit" class="btn btn-primary mb-3" @click.prevent="onSubmit">Submit</button>
        <NuxtLink v-slot="{ navigate }" class="" to="/new-user" custom>
          <a class="linkToNewUser" @click="navigate">
            Ainda não tem um cadastro? Clique aqui!
          </a>
        </NuxtLink>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const formInline = reactive({
  email: '',
  password: ''
})

const router = useRouter()


const onSubmit = async (e: any) => {
  e.preventDefault();
  try {
    const { email, password } = formInline;
    const response = await fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json();

    // localStorage.setItem('name', JSON.stringify(formInline['name']));
    localStorage.setItem('token', JSON.stringify(data.token));
    localStorage.setItem('name', JSON.stringify(data.name));
    router.push('/');
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>

<style></style>