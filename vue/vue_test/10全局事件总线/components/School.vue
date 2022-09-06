<template>
  <div>
    <h2 v-text="msg"></h2>
    <h4>学校信息：{{ name }}</h4>
    <h4>学校地址：{{ address }}</h4>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "学校信息",
      name: "中科大",
      address: "合肥",
    };
  },
  mounted() {
    this.$bus.$on("hello", (val) => {
      console.log(val);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style>
</style>