<template>
  <div>
    <button @click="demo">调用插件中定义的VUE的原型方法</button>
    <h2 v-text="msg"></h2>
    <Student />
    <School />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "基本信息",
    };
  },
  methods: {},
};
</script>

<style>
</style>