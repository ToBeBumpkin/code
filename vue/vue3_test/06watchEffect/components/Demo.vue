<template>
  <h2>当前求和：{{ sum }}</h2>
  <button @click="sum++">+1</button>
  <h2>当前信息：{{ msg }}</h2>
  <button @click="msg += '!'">+!!!</button>
  <h2>当前：{{ person.a.b.c.d }}</h2>
  <button @click="person.a.b.c.d++">+!!!</button>
</template>

<script>
import { reactive, ref, watchEffect } from "vue";
export default {
  name: "Demo",
  setup(proxy, context) {
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      a: {
        b: {
          c: {
            d: 1,
          },
        },
      },
    });
    //第一种写法
    // watch(sum,(newValue,oldValue)=>{
    //   console.log(`监视sum`,newValue,oldValue);
    // })
    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    watchEffect(() => {
      console.log(person.a.b.c.d);
      console.log("watchEffect被执行了,回调函数出现谁，谁改变就触发");
    });
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>
