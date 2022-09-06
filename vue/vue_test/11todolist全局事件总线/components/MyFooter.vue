<template>
  <!--隐式类型转换-->
  <div class="todo-footer" v-show="allNum">
    <label>
      <!--这里也可用v-model来替代，此时不需要计算属性了-->
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneNum }}</span> / 全部{{ allNum }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
  props: ["todos"],
  methods: {
    checkAll(e) {
      // this.checkAllTodo(e.target.checked);
      this.$emit("checkAllTodo", e.target.checked);
    },
    clearAll() {
      // this.clearAllTodo();
      this.$emit("clearAllTodo");
    },
  },
  computed: {
    allNum() {
      return this.todos.length;
    },
    doneNum() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0);
    },
    isAll: {
      get() {
        return this.allNum === this.doneNum && this.allNum > 0;
      },
      set(value) {
        // this.checkAllTodo(value);
        this.$emit("checkAllTodo", value);
      },
    },
  },
};
</script>

<style lang="less" scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>>