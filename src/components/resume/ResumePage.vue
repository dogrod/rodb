<template lang="html">
<div class="content">
  xxx
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>@import "../../assets/css/variables.scss";
.content {
    position: relative;
    width: 96vw;
    height: 96vh;
    margin-left: 2vw;
    margin-right: 2vw;
    padding: 40px;
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    &:first-child {
        margin-top: 2vh;
    }
    &:not(:first-child) {
        margin-top: 4vh;
    }
    &:last-child {
        margin-bottom: 2vh;
    }
    &:not(:last-child) {
        margin-bottom: 0;
    }
}
</style>
