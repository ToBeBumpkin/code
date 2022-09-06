<template>
  <div>
    <h3>Message</h3>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            name:'details',
            query: {
              id: m.id,
              name: m.name,
            },
          }"
          >{{ m.name }}</router-link
        >
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
};
</script>

<style>
</style>