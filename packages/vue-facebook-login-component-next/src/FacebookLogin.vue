<template>
  <!-- https://v3.vuejs.org/guide/migration/v-bind.html#frontmatter-title -->
  <!-- https://stackoverflow.com/a/50892881/4106263 -->
  <scope v-bind="$props" v-model="model" v-slot="slotProps">
    <Button v-bind="{ ...buttonProps, ...$attrs }" :scope="slotProps">
      <template
        v-for="(slot, slotName) of $slots"
        v-slot:[slotName]="slotProps"
      >
        <slot v-bind="slotProps" :name="slotName" />
      </template>
    </Button>
  </scope>
</template>

<script>
import Scope from '@/Scope'
import Button from '@/Button.vue'
import { getComponentProps } from '@/utils'

export default {
  name: 'facebook-login',
  components: { Scope, Button },
  props: { ...Scope.props, ...Button.props },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    buttonProps() {
      return getComponentProps(Button, this.$props)
    },
  },
}
</script>
