<!-- Please remove this file from your project -->
<template>
  <el-row class="row-bg" justify="space-evenly" :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content">
        <p>My Ecommerce App</p>
      </div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content-button">
        <el-button type="warning">
          <NuxtLink to="/login">
            Login
          </NuxtLink>
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style>
.el-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: whitesmoke;
  height: 80px;
}

.el-col {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.grid-content {
  min-height: 36px;
}
</style>
