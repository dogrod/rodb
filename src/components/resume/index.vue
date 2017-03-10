<template lang="html">
  <div class="resume">
    <div class="resume_container" :style="{top:containerTop+'px'}">
      <resume-page>
        <div slot="content">朱磊</div>
      </resume-page>
      <resume-page
        coverSize=1>
        <h2 slot="title">项目经验</h2>
        <div slot="content">项目经验1</div>
      </resume-page>
      <resume-page>
        <h2 slot="title">擅长技能</h2>
        <div slot="content">擅长技能</div>
      </resume-page>
      <resume-page>
        <h2 slot="title">关于我</h2>
        <div slot="content">关于我</div>
      </resume-page>
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
<style lang="scss" scoped>@import "../../assets/css/variables.scss";
.resume {
    width: 100vw;
    height: 100vh;
    // overflow: hidden;
    position: relative;
}
.resume_container {
    width: 100vw;
    transition: 0.6s;
    position: absolute;
}
</style>
