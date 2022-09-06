<template>
  <div>
    <h3>Message</h3>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            name: 'details',
            query: {
              id: m.id,
              name: m.name,
            },
          }"
          >{{ m.name }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", name: "小明" },
        { id: "002", name: "小红" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "details",
        query: {
          id: m.id,
          name: m.name,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "details",
        query: {
          id: m.id,
          name: m.name,
        },
      });
    },
  },
};
</script>

<style>
</style>