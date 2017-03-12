<template lang="html">
<div>
  <section v-if="type === 'show'">
        <h2 v-if="title">{{title}}</h2>
        <h4 v-if="subhead">{{subhead}}</h4>
        <div class="border-elb bg bg-white">
            <div class="box">
                <h4 v-if="secondTitle">{{secondTitle}}</h4>
                <div class="box flex-box-v">
                    <slot>
                        如果没有分发内容则显示我。
                    </slot>
                </div>
            </div>
            <div class="box border-top-elb" v-if="remark">
                <h4>Remark</h4>
                <p>{{remark}}</p>
            </div>
        </div>
    </section>

    <section v-else>
        <div class="form">
            <div class="form-title" v-if="title">
                <h2 class="center">{{title}}</h2>
            </div>
            <div class="box flex-box-v">
                <slot name="inputs">
                    如果没有分发内容则显示我。
                </slot>
            </div>
            <div class="box clear-float">
                <slot name="buttons">
                    如果没有分发内容则显示我。
                </slot>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    secondTitle: {
      type: [Boolean, String],
      default: 'Demo',
    },
    subhead: String,
    remark: String,
    type: String,
  },
};
</script>

<style lang="scss">
.form {
    > .form-title {
        > h2 {
            margin-bottom: 0;
        }
    }
}
</style>
