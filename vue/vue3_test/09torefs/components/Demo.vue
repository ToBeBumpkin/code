<template>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>工资：{{ job.j1.salary }}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改工资</button>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Demo",
  setup(proxy, context) {
    let person = reactive({
      name: "小白",
      age: 12,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    return {
      ...toRefs(person),
    };
  },
};
</script>

<style>
</style>
