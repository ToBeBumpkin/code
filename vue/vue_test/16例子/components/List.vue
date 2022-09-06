<template>
  <div class="list">
    <h2 v-show="info.isFirst">welcome</h2>
    <ul v-show="info.users.length">
      <li v-for="user in info.users" :key="user.id">
        <img :src="user.avatar_url" alt="" />
        {{ user.login }}
      </li>
    </ul>
    <h2 v-show="info.isLoading">loading.....</h2>
    <h2 v-show="info.errMsg">{{ info.errMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("getInfo", (obj) => {
      this.info = { ...this.info, ...obj };
    });
  },
};
</script>

<style lang="less" scoped>
.list {
  ul {
    clear: both;
    li {
      width: 160px;
      overflow: hidden;
      float: left;
      img {
        width: 100%;
      }
    }
  }
}
</style>>