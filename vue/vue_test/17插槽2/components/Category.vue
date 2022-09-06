<template>
  <div class="category">
    <h1>{{ title }}</h1>
    <slot :games="games" :haha='hahah'></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "刺激战场", "禅悦火线"],
    };
  },
};
</script>

<style lang="less" scoped>
.category {
  margin: 0 10px;
  border: 1px solid red;
  width: 100%;
}
</style>>