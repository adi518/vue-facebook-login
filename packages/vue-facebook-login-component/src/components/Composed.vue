<template>
  <scope v-model="model" v-bind="$props" v-on="$listeners">
    <v-button
      :scope="scope"
      v-bind="$props"
      v-on="$listeners"
      slot-scope="scope"
    >
      <!-- https://stackoverflow.com/a/50892881/4106263 -->
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope"></slot>
      </template>
    </v-button>
  </scope>
</template>

<script>
import Scope from './Scope'
import Button from './Button'

export default {
  name: 'v-facebook-login',
  components: { Scope, VButton: Button },
  props: { ...Scope.props, ...Button.props },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
