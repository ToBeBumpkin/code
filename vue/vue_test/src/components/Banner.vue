<template>
  <div class="header">
    banner
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button>Go</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    forward(){
      console.log(this);
      this.$router.forward()
    },
    back(){
      console.log(this);
      this.$router.back()
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  font-size: 62px;
  padding: 15px;
  background: rgb(209, 198, 198);
  border-left: 5px solid black;
  color: white;
  border-radius: 5px;
}
</style>>