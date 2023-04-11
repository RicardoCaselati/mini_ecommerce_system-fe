<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="name">
      <el-input v-model="formInline.name" placeholder="name" />
    </el-form-item>

    <el-form-item label="email">
      <el-input v-model="formInline.email" placeholder="email" />
    </el-form-item>

    <el-form-item label="password">
      <el-input v-model="formInline.password" placeholder="password" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Submit!</el-button>
    </el-form-item>
  </el-form>
</template>


<script lang="ts" setup>
import { reactive } from 'vue'
const formInline = reactive({
  name: '',
  email: '',
  password: ''
})

const onSubmit = async (e: any) => {
  e.preventDefault();
  try {
    const { name, email, password } = formInline
    const response = await fetch('http://localhost:3001/new-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.error('Error:', error)
  }
}

</script>


