<template>
  <h1>App</h1>
  <Demo @hello="showInfo" school="复旦大学" subject="电子商务">
    <template v-slot:tpy>
      <span>太平洋</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";

export default {
  name: "App",
  components: { Demo },
  beforeCreate() {
    // console.log(`App---beforeCreate---`);
  },
  setup() {
    function showInfo(value) {
      console.log("自定义事件，显示信息", value);
    }

    return {
      showInfo,
    };
  },
};
</script>

<style>
</style>
