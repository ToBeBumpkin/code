<template>
  <h3>名字：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3>学校：{{ school }}</h3>
  <h3>专业：{{ subject }}</h3>
  <slot name="tpy"></slot>
  <button @click="startHello">触发自定义事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  beforeCreate() {
    // console.log(`Demo---beforeCreate---`);
  },
  props: ["school", "subject"],
  emits: ["hello"],
  setup(proxy, context) {
    console.log(`Demo---setup---`, proxy, context);
    // console.log(`props: ${proxy.school}`);
    console.log(context.slots);
    let person = reactive({
      name: "小明",
      age: 19,
    });
    function startHello() {
      context.emit("hello", 666);
    }

    return {
      person,
      startHello,
    };
  },
};
</script>

<style>
</style>
