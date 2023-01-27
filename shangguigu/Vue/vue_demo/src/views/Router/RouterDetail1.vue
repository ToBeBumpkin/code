<template>
  <div class="routerDetail">
    RouterDetail1
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'RouterDetail1',
  components: {
  },
  setup() {
    const route = useRoute()
    let { params: { id } } = route
    onMounted(() => {
      console.log(`onMounted`)
      console.log(id);
    })
    return {
      route
    }
  }

});
</script>
