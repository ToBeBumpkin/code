<template>
  <div>
    <h1 :style="{ opacity }">欢迎学习web</h1>
    <h3>News</h3>
    <ul>
      <li>
        01
        <input type="text" />
      </li>
      <li>
        02
        <input type="text" />
      </li>
      <li>
        03
        <input type="text" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy(){
  //   clearInterval(this.timer)
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     if (this.opacity >= 0) {
  //       this.opacity -= 0.1;
  //     } else {
  //       this.opacity = 1;
  //     }
  //   }, 100);
  // },
  activated() {
    console.log("New组件被激活");
    this.timer = setInterval(() => {
      if (this.opacity >= 0) {
        this.opacity -= 0.1;
      } else {
        this.opacity = 1;
      }
    }, 100);
  },
  deactivated() {
    console.log("New组件被销毁");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>