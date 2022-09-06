<template>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup(proxy, context) {
    let person = reactive({
      firstName: "李",
      lastName: "四",
    });
    //简写
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    //完整写法
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        let arr = value.split("-");
        person.firstName = arr[0];
        person.lastName = arr[1];
      },
    });
    return {
      person,
    };
  },
};
</script>

<style>
</style>
