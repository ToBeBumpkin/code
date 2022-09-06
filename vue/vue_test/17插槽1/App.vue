<template>
  <div class="wrap">
    <Category>
      <ul slot="center">
        <li>抽烟</li>
        <li>喝酒</li>
        <li>抽烟</li>
      </ul>
      <h1 slot="footer">具名插槽</h1>
    </Category>
    <Category>
      <p slot="center">什么都没有</p>
      <div slot="footer">
        <p>张飞</p>
        <p>关羽</p>
      </div>
    </Category>
    <Category>
      <b slot="center">三国演义</b>
      <template v-slot:footer>
        <label for="">水浒传</label>
        <code>红楼梦</code>
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
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  flex-direction: row;
}
</style>>