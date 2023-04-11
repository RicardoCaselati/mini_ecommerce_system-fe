<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="email">
      <el-input v-model="formInline.email" placeholder="e-mail" />
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="formInline.password" placeholder="password" />
    </el-form-item>

    <NuxtLink v-slot="{ navigate }" to="/newUser" custom>
      <button @click="navigate">
        Ainda não  tem um cadastro? Clique aqui!
      </button>
    </NuxtLink>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  email: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>


