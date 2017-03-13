<template lang="html">
        <Menu mode="horizontal" :theme="headerTheme" :active-name="activeKey" @on-select="handleSelect">
            <div class="header-logo">
              <logo></logo>
            </div>
            <div class="header-nav">
                <Menu-item name="1">
                    <Icon type="ios-home"></Icon>
                    首页
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-list"></Icon>
                    土豆列表
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="erlenmeyer-flask"></Icon>
                    瞎弄的
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="coffee"></Icon>
                    瞎说的
                </Menu-item>
                <Menu-item name="5">
                    <Icon type="outlet"></Icon>
                    关于
                </Menu-item>
            </div>
            <div class="header-user">
                <a class="font text" @click="handleSelect('6')">登陆</a>
                <!-- <a class="font text" @click="handleSelect('6')">注册</a> -->
            </div>
        </Menu>
</template>

<script>
import Logo from './widget/logo/Logo';

export default {
  data() {
    return {
      headerTheme: 'light',
    };
  },
  computed: {
    activeKey() {
      return this.$store.state.Header.activeKey;
    },
  },
  methods: {
    handleSelect(value) {
      // 设置activeKey
      this.activeKey = value;
      this.$store.dispatch('handleHeaderClick', {
        activeKey: value,
        router: this.$router,
      });
    },
  },
  components: {
    logo: Logo,
  },
  created() {
    this.handleSelect(this.activeKey);
  },
};
</script>

<style lang="scss" scoped>@import "../assets/css/variables.scss";

.header-logo {
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.header-user {
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: right;
    position: absolute;
    top: 0;
    right: 10px;
    > :not(:first-child) {
        margin-left: 5px;
    }
}
.header-nav {
    width: 520px;
    margin: 0 auto;
    height: inherit;
}
</style>
