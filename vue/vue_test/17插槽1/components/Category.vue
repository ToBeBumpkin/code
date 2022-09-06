<template>
  <div class="category">
    <h1>插槽</h1>
    <slot name="center">如果没有内容就显示我（插槽）</slot>
    <slot name="footer">如果没有内容就显示我（插槽）</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.category {
  margin: 0 10px;
  border: 1px solid red;
  width: 100%;
}
</style>>