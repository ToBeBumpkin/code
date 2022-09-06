<template>
  <div>
    <h1>上方求和为：{{ sum }}</h1>
    <input type="text" v-model="name" />
    <button @click="add">add</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
};
</script>

<style>
</style>