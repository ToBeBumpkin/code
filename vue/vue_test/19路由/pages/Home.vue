<template>
  <div>
    <h3>Home</h3>
    <div>
      <router-link to="/home/message">Message</router-link>
      <router-link to="/home/news">News</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home组件挂载完成", this);
  },
};
</script>

<style>
</style>