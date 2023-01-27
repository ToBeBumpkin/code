<template>
  <div class="routerDetail">
    RouterDetail2
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'RouterDetail2',
  components: {
  },
  setup() {
    const route = useRoute()
    let { query:{age} } = route
    onMounted(() => {
      console.log(`onMounted`)
      console.log(age);
    })
    return {
      route
    }
  }

});
</script>
