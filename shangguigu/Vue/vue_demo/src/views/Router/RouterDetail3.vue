<template>
  <div class="routerDetail">
    RouterDetail3
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter,useRoute } from 'vue-router'

export default defineComponent({
  name: 'RouterDetail3',
  components: {
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    onMounted(() => {
      console.log(`onMounted`)
      console.log(route);
    })
    return {
      router
    }
  }

});
</script>
