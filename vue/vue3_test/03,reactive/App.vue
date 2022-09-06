<template>
  <h1>App</h1>
  <h3>名字：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h3>工作：{{ person.job.type }}</h3>
  <h3>薪资：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <button @click="sayHello">说活</button>
  <button @click="changeInfo">修改数据</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "小明",
      age: 19,
      job: {
        type: "前端工程师",
        salary: "30k",
      },
      hobby: ["抽烟", "烫头", "喝酒"],
    });

    function sayHello() {
      console.log(person);
      console.log(`
      我叫 ${person.name},
      我今年 ${person.age}岁，
      我的工作是 ${person.job.type},
      我的薪资是 ${person.job.salary},
      我的爱好是 ${person.hobby},`);
    }

    function changeInfo() {
      person.name = "李四";
      person.age = 90;
      person.job.type = "全栈工程师";
      person.job.salary = "30W";
      person.hobby[0] = "吹牛";
    }

    return {
      person,
      sayHello,
      changeInfo,
    };
  },
};
</script>

<style>
</style>
