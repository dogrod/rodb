<template lang="html">
<div class="flexbox center box-container small">
  <div class="login-form" v-show="actionType == 'login'">
    <h2>登陆</h2>
    <r-input
      v-for="(input,key) in login.inputGroup"
      :key = "input"
      :title="input.title"
      :value="input.value"
      :placeholder="input.placeholder"
      :type="input.type"/>
    <div class="buttons">
      <i-button type="ghost">注册</i-button>
      <i-button type="primary">确定</i-button>
    </div>
  </div>
  <div class="login-form" v-show="actionType == 'signup'">
    <h2>注册</h2>
    <r-input
      v-for="(input,key) in signup.inputGroup"
      :key = "input"
      :title="input.title"
      :value="input.value"
      :placeholder="input.placeholder"
      :type="input.type"/>
    <div class="buttons">
      <i-button type="ghost">取消</i-button>
      <i-button type="primary">确定</i-button>
    </div>
  </div>
</div>
</template>

<script>
import Input from './widget/Input';

export default {
  data() {
    return {
      actionType: 'login',
      callbackurl: null,
      login: {
        title: '登陆',
        inputGroup: {
          username: {
            title: '用户名',
            value: '',
            placeholder: '请输入用户名',
          },
          password: {
            title: '密码',
            value: '',
            placeholder: '请输入密码',
            type: 'password',
          },
        },
      },
      signup: {
        title: '注册',
        inputGroup: {
          username: {
            title: '用户名',
            value: '',
            placeholder: '请输入用户名',
          },
          nickname: {
            title: '昵称',
            value: '',
            placeholder: '请输入昵称',
          },
          password: {
            title: '密码',
            value: '',
            placeholder: '请输入密码',
            type: 'password',
          },
          email: {
            title: '邮箱',
            value: '',
            placeholder: '请输入邮箱',
          },
        },
      },
    };
  },
  components: {
    'r-input': Input,
  },
};
</script>

<style lang="scss" scoped>
.login-form{
  .buttons{
      float: right;
      padding: 30px 0 0;
      >*:not(:last-child){
        margin-right: 15px;
      }
  }
}
</style>
