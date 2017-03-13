<template lang="html">
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './Header';

export default {
  created() {
    // this.$router.push({
    //   path: '/resume',
    // });
  },
  components: {
    'app-header': AppHeader,
  },
};
</script>

<style lang="scss">
.container {
    background: #fff;
    width: 90%;
    margin: 30px auto 20px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
</style>
