<template>
  <div>
    <input type="text" v-model="keyworld" />
    <button @click="getSearch">提交</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyworld: "",
    };
  },
  methods: {
    getSearch() {
      this.$bus.$emit("getInfo", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyworld}`).then(
        (res) => {
          this.$bus.$emit("getInfo", {
            isLoading: false,
            errMsg: "",
            users: res.data.items,
          });
        },
        (err) => {
          console.log(err);
          this.$bus.$emit("getInfo", {
            isLoading: false,
            errMsg: err.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>