<template lang="html">
  <div class="box-container">
    home
  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.getters.activePath;
    },
  },
};
</script>

<style lang="scss"></style>
