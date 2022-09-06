<template>
  <div>
    <h2 v-text="msg"></h2>
    <!-- 第一种方法 -->
    <!-- <Student @sn.once="showStudentName" /> -->
    <!-- 第二种方法 -->
    <Student ref="student" @click.native="showone" />

    <School :showSchoolName="showSchoolName" />
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
  methods: {
    showSchoolName(name) {
      console.log("app内 school", name);
    },
    showStudentName(name, ...params) {
      console.log("app内 student", name, params);
    },
    showone(){
      console.log(123);
    }
  },
  mounted() {
    // console.log(this.$refs.student);
    // this.$refs.student.$on("sn", this.showStudentName);
    this.$refs.student.$on("sn", this.showStudentName);
  },
};
</script>

<style>
</style>