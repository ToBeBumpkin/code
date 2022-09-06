<template>
  <div>
    <h2 v-text="msg"></h2>
    <School/>
    <Student/>
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
};
</script>

<style>
</style>