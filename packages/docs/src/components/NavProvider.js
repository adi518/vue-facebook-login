import { inject } from '@vue/composition-api'
import { IsStickySymbol } from '@/components/Nav'
export default {
  setup() {
    const isSticky = inject(IsStickySymbol)
    return { isSticky }
  },
  render() {
    if (this.$scopedSlots.default)
      return this.$scopedSlots.default({ isSticky: this.isSticky })
  }
}
