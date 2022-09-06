<template>
  <div class="student">
    <h2 v-text="msg"></h2>
    <h4>学生姓名：{{ name }}</h4>
    <h4>学生年龄：{{ age + 1 }}</h4>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "学生信息",
      name: "小明",
      age: 19,
    };
  },
};
</script>

<style lang="less" scoped>
.student {
  background: #c3c3c3;
  h2 {
    color: red;
  }
}
</style>>