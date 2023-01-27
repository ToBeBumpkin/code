<template>
  <div class="axios">
    <button @click="goto">btn</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Axios',
  setup() {
    async function goto() {
    }
    return {
      goto
    }
  }
});
</script>
