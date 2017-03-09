<template lang="html">
  <div class="resume">
    <div class="resume_container" :style="{top:containerTop+'px'}">
      <resume-page></resume-page>
    </div>
  </div>
</template>

<script>
import ResumePage from './ResumePage';

export default {
  computed: {
    containerTop() {
      return 0;
    },
  },
  components: {
    'resume-page': ResumePage,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/variables.scss";
.resume {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
.resume_container {
  width: 100vw;
  transition: 0.6s;
  position: absolute;
}
</style>
