<template>
  <div>
    <h2 v-text="msg"></h2>
    <h4>学生姓名：{{ name }}</h4>
    <h4>学生年龄：{{ age + 1 }}</h4>
    <button @click="showNameAtApp">点击后app内展示name</button>
    <button @click="unbind">解绑</button>
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
  methods: {
    showNameAtApp() {
      this.$emit('sn',this.name,111,222,333)
    },
    unbind(){
      this.$off('sn')
    }
  },
};
</script>

<style>
</style>