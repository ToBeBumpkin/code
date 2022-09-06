<template>
  <div>
    <h4>学校名称：{{ name }}</h4>
    <h4>学校地址：{{ address }}</h4>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "交通大学",
      address: "上海闵行",
    };
  },
};
</script>

<style>
</style>