<template lang="html">
  <div class="input-container">
    <label :class="{'active':isActive}">{{title}}</label>
    <div class="placeholder" :class="{'active':showPlaceholder}">{{placeholder}}</div>
    <input :type="type" :value="inputContent" @input="handleInput" @focus="handleFocus" @blur="handleBlur"/>
    <div class="underline">
      <hr/><hr :class="{'active':isActive}"/>
    </div>
  </div>
</template>

<script>
export default {
  // 单向数据流父->子通信
  props: {
    color: String,
    placeholder: String,
    value: [String, Number],
    title: {
      type: String,
      default: '文本框',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      inputContent: this.value,
      focusState: false,
    };
  },
  computed: {
    isActive() {
      return (this.inputContent || this.focusState);
    },
    showPlaceholder() {
      return (this.isActive && !this.inputContent);
    },
  },
  // 自定义指令
  directives: {
    focus: {
      inserted(el, value) {
        if (value) {
          el.focus();
        }
      },
    },
  },
  watch: {
    value(val) {
      this.setInputContent(val);
    },
  },
  methods: {
    handleBlur() {
      this.setFocusState(false);
    },
    handleFocus() {
      this.setFocusState(true);
    },
    handleInput(event) {
      this.setInputContent(event.target.value);
    },
    setFocusState(value) {
      this.focusState = value;
    },
    setInputContent(value) {
      if (value === this.inputContent) return;
      this.inputContent = value;
      this.$emit('input', value);
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss" scoped>@import "../../assets/css/variables.scss";
@import "../../assets/css/mixins.scss";
.input-container {
    width: 300px;
    height: 40px;
    margin-top: 40px;
    color: $subColor;
    position: relative;
    font-size: $fontMedium;
    > * {
        position: absolute;
    }
    > label {
        top: 5px;
        left: 10px;
        cursor: text;
        transition: 0.3s;
        user-select: none;

        &.active {
            left: 0;
            top: -1.4em;
            color: $content;
            font-size: $fontSmall;
            cursor: default;
        }
    }
    > .placeholder {
        left: 5px;
        bottom: 5px;
        transition: 1s;
        opacity: 0;
        &.active {
            animation: 500ms fadeIn forwards;
        }
    }
    > input {
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 0 0 5px;
        line-height: 40px;
        background: transparent;
        border-width: 0;
    }
    > .underline {
        width: 100%;
        bottom: -2px;
        > hr {
            bottom: 0;
            margin: 0;
            width: 100%;
            position: absolute;
            box-sizing: content-box;
            &:first-child {
                border: {
                    top: none;
                    left: none;
                    right: none;
                    bottom: 1px solid $border;
                }
            }
            &:last-child {
                bottom: 0;
                border: {
                    top: none;
                    left: none;
                    right: none;
                    bottom: 2px solid $primary;
                };
                transform: scaleX(0);
                transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                &.active {
                    transform: scaleX(1);
                }
            }
        }
    }
}
</style>
