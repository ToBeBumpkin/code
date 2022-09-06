<template>
  <div>
    <h1>上方求和为：{{ sum }}</h1>
    <h1>第一个人名字：{{ firstPersonName }}</h1>
    <input type="text" v-model="name" />
    <button @click="add">add</button>

    <input type="text" v-model="nameWang" />
    <button @click="addWang">addWang</button>

    <button @click="addServer">addServer</button>
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
      nameWang: "",
    };
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("person/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.nameWang };
      this.$store.dispatch("person/addPersonWang", personObj);
      this.name = "";
    },
    addServer() {
      this.$store.dispatch("person/addPersonServer");
    },
  },
  computed: {
    // ...mapState("person", ["personList"]),
    // ...mapState("count", ["sum"]),
    personList() {
      return this.$store.state.person.personList;
    },
    sum() {
      return this.$store.state.count.sum;
    },
    firstPersonName() {
      return this.$store.getters["person/firstPersonName"];
    },
  },
};
</script>

<style>
</style>