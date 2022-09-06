<template>
  <h1>App</h1>
  <h3>名字：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>工作：{{ job.type }}</h3>
  <h3>薪资：{{ job.salary }}</h3>
  <h3>爱好：{{ hobby }}</h3>
  <button @click="sayHello">说活</button>
  <button @click="changeInfo">修改数据</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("小明");
    let age = ref(19);
    let job = reactive({
      type: "前端工程师",
      salary: "30k",
    });
    let hobby = reactive(["抽烟", "烫头", "喝酒"]);

    function sayHello() {
      console.log(job.value);
      console.log(`
      我叫 ${name.value},
      我今年 ${age.value}岁，
      我的工作是 ${job.type},
      我的薪资是 ${job.salary},
      我的爱好是 ${hobby},`);
    }

    function changeInfo() {
      name.value = "李四";
      age.value = 90;
      job.type = "全栈工程师";
      job.salary = "30W";
      hobby[0] = "吹牛";
    }

    return {
      name,
      age,
      job,
      hobby,
      sayHello,
      changeInfo,
    };
  },
};
</script>

<style>
</style>
