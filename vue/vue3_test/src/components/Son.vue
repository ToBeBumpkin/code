<template>
  <div class="son">
    <h1>son</h1>
    <p>car:{{name}}----{{price}}</p>
  </div>
</template>

<script>
import { toRefs, inject } from "vue";
export default {
  setup() {
    let car = inject("car");

    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.son {
  background: red;
  padding: 30px;
}
</style>