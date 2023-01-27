<template>
  <div class="dashboard">
    <nav class="nav">
      <router-link to="/dashboard/router">router</router-link>
      <router-link to="/dashboard/vuex">vuex</router-link>
      <router-link to="/dashboard/axios">axios</router-link>
      <router-link to="/dashboard/pinia">pinia</router-link>
    </nav>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
});
</script>

<style scoped lang="less">
.nav{
  display: flex;
  justify-content: space-around;
}
</style>
