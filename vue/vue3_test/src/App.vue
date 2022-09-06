<template>
  <div class="parent">
    <h1>App</h1>
    <p>车：{{ name }}---{{ price }}</p>
    <Child :car="car" />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child.vue";

export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 40,
    });

    provide("car", car);

    return {
      car,
      ...toRefs(car),
    };
  },
};
</script>

<style>
.parent {
  background: #c3c3c3;
  padding: 30px;
}
</style>
