<template lang="html">
  <div>
    home
    {{msg}}
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
