<template>
  <div class="wrap">
    <Category title="游戏">
      <template scope="{games,haha}">
        <ul>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
        <h1>{{ haha }}</h1>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  flex-direction: row;
}
</style>>