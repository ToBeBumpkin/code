<template>
  <div class="router">
    <nav class="nav">
      <router-link to="/dashboard/router/routerDetail1/123">routerDetail1</router-link>
      <router-link to="/dashboard/router/routerDetail2?age=12">routerDetail2</router-link>
      <router-link to="/dashboard/router/routerDetail3">routerDetail3</router-link>
    </nav>
    <div class="btns">
      <button @click="goDetail1">routerDetail1</button>
      <button @click="goDetail2">routerDetail2</button>
      <button @click="goDetail1">routerDetail3</button>
    </div>
    <hr />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Router',
  components: {
  },
  setup() {
    const router = useRouter()
    const goDetail1 = () => {
      router.push({
        name: 'routerDetail1',
        params: { id: 123 }
      })
    }
    const goDetail2 = () => {
      router.push({
        // path: '/dashboard/router/routerDetail2',
        name: 'routerDetail2',
        query: { age: 123 }
      })
    }
    return {
      goDetail1,
      goDetail2
    }
  }
});
</script>

<style scoped lang="less">
.nav,
.btns {
  display: flex;
  justify-content: space-around;
}
</style>

