<template>
  <div class="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
});
</script>
<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}

.container {
  min-height: 500px;
}

.router-link-active {
  color: red;
}
</style>
