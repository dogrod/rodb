<template lang="html">
<div class="resume__page" :style="{'height':coverHeight + 'px'}">
  <div class="resume__page__header">
    <slot name="title"></slot>
  </div>
  <div class="resume__page__content">
    <slot name="content"></slot>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    viewportHeight() {
      return window.innerHeight;
    },
    viewportWidth() {
      return window.innerWidth;
    },
    coverHeight() {
      return ((this.viewportHeight * this.coverSize) - (this.viewportHeight * 0.04));
    },
  },
  data() {
    return {
      location: 0,
    };
  },
  methods: {
    // 处理滚动事件
    handleScroll() {
      console.log('test command');
    },
    // 使用闭包方法封装throttle节流函数
    throttle(fn, delay) {
      let timer = null;

      return function throttle() {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn();
        }, delay);
      };
    },
  },
  created() {
    window.addEventListener('mousewheel', this.handleScroll);
  },
  props: {
    coverSize: {
      default: 1,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>@import "../../assets/css/variables.scss";
.resume__page {
    position: relative;
    width: 96vw;
    margin: 4vh 2vw 0;
    padding: 40px;
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    &:first-child {
        margin-top: 2vh;
    }
    &:last-child {
        margin-bottom: 2vh;
    }
}
</style>
