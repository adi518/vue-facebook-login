<template>
  <!-- https://stackoverflow.com/a/50892881/4106263 -->
  <div></div>
  <!-- <scope> -->
  <!-- <v-button
      :scope="scope"
      v-on="$listeners"
      v-bind="buttonProps"
      slot-scope="scope"
    >
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope"></slot>
      </template>
    </v-button> -->
  <!-- </scope> -->
</template>

<script>
// import Scope from './Scope'
// import Button from './Button.vue'

export default {
  name: 'v-facebook-login',
  // components: { VButton: Button },

  props: {
    // ...Scope.props,
    // ...Button.props,
    appId: {
      type: String,
      required: true,
    },
  },
  // computed: {
  //   model: {
  //     get() {
  //       return this.value
  //     },
  //     set(value) {
  //       this.$emit('input', value)
  //     },
  //   },
  //   scopeProps() {
  //     return this.filterProps(Scope.props)
  //   },
  //   buttonProps() {
  //     return this.filterProps(Button.props)
  //   },
  // },
  // methods: {
  //   filterProps(props) {
  //     return Object.keys(props)
  //       .filter(prop => this[prop] !== undefined)
  //       .reduce((props, prop) => ({ ...props, [prop]: this[prop] }), {})
  //   },
  // },
}
</script>
