<template>
  <div class="container">
    <Banner />
    <div class="content">
      <div class="nav">
        <router-link to="/home" active-class="active">Home</router-link>
        <router-link to="/about" active-class="active">About</router-link>
      </div>
      <div class="slide">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
  data() {
    return {};
  },
};
</script>

<style lang="less">
.container {
  .content {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    .nav{
      display: flex;
      flex-direction: column;
      background: black;
      border-radius: 5px;
      color: white;
      padding: 15px;
      height: 100%;
      a{
        color: white;
        text-decoration: none;
      }
    }
    .slide{
      padding-left: 50px;
    }
  }
}
</style>>