<template>
  <a
    class="v-a"
    :href="href"
    :tabindex="tabindex"
    :target="computedTarget"
    rel="noopener noreferrer"
    @click="handleClick"
  >
    <slot></slot>
  </a>
</template>

<script>
import { getNavHeight } from '@/components/Nav'

export default {
  name: 'VA',
  props: {
    name: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    tabindex: {
      type: String,
      default: ''
    },
    refs: {
      type: Object,
      default: () => ({})
    },
    to: {
      type: [String, Element, Object],
      default: ''
    },
    target: {
      type: String,
      default: '_blank'
    },
    prevent: {
      type: Boolean,
      default: false
    },
    static: {
      type: Boolean,
      default: false
    },
    offsetY: {
      type: Function,
      default: getNavHeight
    }
  },
  computed: {
    computedTarget() {
      if (this.to) return undefined
      return this.target
    }
  },
  methods: {
    handleClick(event) {
      if (this.prevent || this.to || this.static) event.preventDefault()
      if (this.to) this.scrollTo(this.to)
      this.$emit('click', { href: this.href })
    },
    getElementByRef(ref, refs) {
      refs = refs || this.$refs
      // eslint-disable-next-line no-console
      if (!refs) return console.error('No refs found.')
      let element = refs[ref]
      // Is from element?
      if (element instanceof Element) return element
      // Is from component?
      if (refs[ref]) {
        element = refs[ref].el
        if (element instanceof Element) return element
      }
      // eslint-disable-next-line no-console
      console.error(`No such ref as "${ref}".`)
    },
    async scrollTo(ref) {
      const element =
        ref instanceof Element ? ref : this.getElementByRef(ref, this.refs)
      if (element) {
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          (await this.raf(this.offsetY))
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    },
    raf(callback) {
      return new Promise(resolve =>
        window.requestAnimationFrame(() => resolve(callback()))
      )
    }
  }
}
</script>
