<template>
<div class="logo" :style="{fontSize: size+'px'}" @click="handleClick">
  <div :style="{display: children_display}">
    <img :src="logoSrc.color" :style="{width: logo_size+'px'}" />
  </div>
  <div :style="{display: children_display}">
    <span>Rod</span>B
  </div>
</div>
</template>
<script type="text/javascript">
import colorIcon from './images/logo.png';
import '../../../assets/fonts/adventpro-regular-webfont.woff';
import '../../../assets/fonts/adventpro-regular-webfont.woff2';

export default {
  props: {
    size: {
      type: [Number, String],
      default: 20,
    },
    type: {
      default: 'color',
    },
    direction: {
      default: 'horizontal',
    },
    icon_size: {
      default: 20,
    },
    target: {
      type: String,
      default: '/',
    },
  },
  computed: {
    logo_size() {
      return (this.direction === 'horizontal') ? (this.size - 5) : (this.size / 0.6);
    },
    logo_src() {
      const logoSrcWhite = this.logoSrc.default;
      const logoSrcColor = this.logoSrc.color;
      return (this.type === 'white') ? logoSrcWhite : logoSrcColor;
    },
    children_display() {
      return (this.direction === 'horizontal') ? 'inline-block' : 'block';
    },
  },
  data() {
    return {
      logoSrc: {
        default: './images/logo_white.png',
        color: colorIcon,
      },
    };
  },
  methods: {
    handleClick() {
      this.$store.dispatch('handleRouter', {
        router: this.$router,
        path: this.target,
      });
    },
  },
};
</script>
<style lang="scss">@import "../../../assets/css/variables.scss";
@import "../../../assets/css/mixins.scss";
$logoGermanSLetterSpacing: 2px;
.logo {
    user-select: none;
    letter-spacing: $logoGermanSLetterSpacing;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    > div {
        > span {
            @include german-script($logoGermanSLetterSpacing);
        }
        > img {
            margin-right: 3px;
        }
    }
}
</style>
