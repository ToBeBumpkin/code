<template>
  <div>
    <h2 v-text="msg"></h2>
    <h4 @click="showName">学校信息：{{ name }}</h4>
    <h4>学校地址：{{ address }}</h4>
    <p>x:{{ x }}---y:{{ y }}---z:{{ z }}</p>
    <p>xyz:{{xyz}}</p>
  </div>
</template>

<script>
import { mixin, mixin2 } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      msg: "学校信息",
      name: "中科大",
      address: "合肥",
    };
  },
  mixins: [mixin, mixin2],
};
</script>

<style>
</style>