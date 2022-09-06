<template>
  <div>
    <h4>Detail</h4>
    <p>id:{{$route.query.id}}</p>
    <p>name:{{$route.query.name}}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
    }
  },
  mounted(){
    console.log(this.$route.query);
  }
};
</script>

<style>
</style>