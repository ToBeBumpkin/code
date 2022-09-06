<template>
  <div>
    <h2 v-text="msg"></h2>
    <h4>学生姓名：{{ name }}</h4>
    <h4>学生年龄：{{ age + 1 }}</h4>
    <button @click="giveSchool">传递数据给school</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      msg: "学生信息",
      name: "小明",
      age: 19,
    };
  },
  methods: {
    giveSchool() {
      pubsub.publish("hello", this.name);
    },
  },
};
</script>

<style>
</style>