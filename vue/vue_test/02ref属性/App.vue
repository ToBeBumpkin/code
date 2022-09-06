<template>
  <div>
    <h2 ref="title">School</h2>
    <p v-text="msg" ref="msg"></p>
    <button ref="button" @click="getDom">获取节点信息</button>
    <School ref="school" />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "学校信息",
    };
  },
  methods:{
    getDom(){
        console.log(this.$refs.title);
        console.log(this.$refs.school);
    }
  }
};
</script>

<style>
</style>