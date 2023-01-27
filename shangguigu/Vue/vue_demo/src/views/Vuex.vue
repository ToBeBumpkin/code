<template>
  <div class="vuex">
    <h2>当前结果为:{{ store.state.count }}</h2>
    <h3>结果乘10为:{{ store.getters.bigCount }}</h3>
    <select v-model="selected">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">加</button>
    <button @click="decrement">减</button>
    <button @click="incrementSync">质数加</button>
    <button @click="incrementWait">等待加</button>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Vuex',
  setup() {
    const store = useStore()
    const selected = ref(1)

    return {
      store,
      selected,
      // count: computed(() => store.state.count),
      // bigCount: computed(() => store.getters.bigCount),
      increment: () => store.commit('increment', selected.value),
      decrement: () => store.commit('decrement', selected.value),
      incrementSync: () => store.dispatch('incrementSync', selected.value),
      incrementWait: () => store.dispatch('incrementWait', selected.value)
    }
  }
});
</script>
