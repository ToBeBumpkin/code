<template>
  <div>
    <h2 v-text="msg"></h2>
    <h4>学校信息：{{ name }}</h4>
    <h4>学校地址：{{ address }}</h4>
    <button @click.once="showNameAtApp">点击后app内展示name</button>
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
  props: ["showSchoolName"],
  methods: {
    showNameAtApp() {
      this.showSchoolName(this.name)
    },
  },
};
</script>

<style>
</style>