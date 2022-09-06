<template>
  <div>
    <h2 v-text="msg"></h2>
    <h4>学生姓名：{{ name }}</h4>
    <h4>学生年龄：{{ myAge + 1 }}</h4>
    <h4>学生性别：{{ sex }}</h4>
    <button @click="addOne">点击年龄+1</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "学生信息",
      myAge: this.age,
    };
  },
  props: {
    name: {
      type: String,
      required:true
    },
    age: {
      type: Number,
      default:88
    },
    sex: {
      type: String,
    },
  },
  methods: {
    addOne() {
      this.myAge++;
    },
  },
};
</script>

<style>
</style>