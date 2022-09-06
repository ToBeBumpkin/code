<template>
  <div class="child">
    <h1>child</h1>
    <p>car::{{car.name}}----{{car.price}}</p>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  props: ["car"],
  components: {
    Son,
  },
};
</script>

<style>
.child {
  background: greenyellow;
  padding: 30px;
}
</style>