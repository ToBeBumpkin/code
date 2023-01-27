<template>
  <div class="header">
    <router-link to="/welcome">Welcome</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/register">register</router-link>
  </div>
  <hr />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue'


export default defineComponent({
  name: 'Header',
  setup() {

    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      // console.log(key, keyPath)
    }
    return {
      handleSelect,
      activeIndex,
      activeIndex2
    }
  }
});
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-around;
}
</style>
