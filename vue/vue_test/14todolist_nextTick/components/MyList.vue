<template>
  <ul class="todo-main">
    <MyItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  data() {
    return {};
  },
  props: ["todos"],
  components: {
    MyItem,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>>