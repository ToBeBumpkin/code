<template>
  <div>
    <h2 v-text="msg"></h2>
    <School name="小红" sex="女" :age="19"/>
  </div>
</template>

<script>
import School from "./components/Student.vue";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "学校的一个学生信息",
      name: "小明",
      age: 18,
      sex: "男",
    };
  },
  methods: {},
};
</script>

<style>
</style>