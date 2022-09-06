<template>
  <div>
    <h2 v-text="msg"></h2>
    <h4 @click="showName">学生姓名：{{ name }}</h4>
    <h4>学生年龄：{{ age + 1 }}</h4>
    <p>x:{{ x }}---y:{{ y }}---z:{{ z }}</p>
    <p>xyz:{{xyz}}</p>
  </div>
</template>

<script>
import { mixin, mixin2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      msg: "学生信息",
      name: "小明",
      age: 19,
    };
  },
  mixins: [mixin, mixin2],
  mounted() {
    console.log("组件中的 mounted");
  },
};
</script>

<style>
</style>