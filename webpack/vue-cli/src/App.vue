<template>
  <h1 class="title">App</h1>
  <ul>
    <li>
      <router-link to="/home">home</router-link>
    </li>
    <li>
      <router-link to="/about">about</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
.title {
  color: red;
}
</style>