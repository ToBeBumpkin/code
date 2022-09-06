<template>
  <div>
    <button @click="getDate">获取内容</button>
    <button @click="getDate2">获取内容2</button>
  </div>
</template>

<script>
// 数据在哪里，操作数据的方法就在哪里
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getDate() {
      console.log(111);
      axios.get("http://localhost:8080/api1/student").then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    getDate2() {
      console.log(222);
      axios.get("http://localhost:8080/api2/student").then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style lang="less">
</style>>