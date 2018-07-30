<template>
  <a class="v-a"
    :href="href"
    :target="computedTarget"
    :tabindex="tabindex"
    @click="handleClick"><slot></slot></a>
</template>

<script>
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
    scrollTo: {
      type: [String, Element],
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
    }
  },
  computed: {
    computedTarget() {
      if (this.scrollTo) {
        return undefined
      }
      return this.target
    }
  },
  methods: {
    handleClick(event) {
      if (this.prevent || this.scrollTo || this.static) {
        event.preventDefault()
      }

      if (this.scrollTo) {
        this.$scrollTo(this.scrollTo)
      }

      this.$emit('click', { href: this.href })
    },
    getElementByRef(ref, refs) {
      refs = refs || this.$refs

      const noRefs = !refs

      if (noRefs) {
        // eslint-disable-next-line
        console.error(`[getElementByRef warn]: No refs found.`)
        return
      }

      let element = refs[ref]

      // Is from element?
      if (element instanceof Element) {
        return element
      }

      // Is from component?
      if (refs[ref]) {
        element = refs[ref].el
        if (element instanceof Element) {
          return element
        }
      }

      // Ref doesn't exist
      // eslint-disable-next-line
      console.error(`[getElementByRef warn]: No such ref as "${ref}".`)

      return null
    },
    $scrollTo(ref, options = {}) {
      let element

      if (ref instanceof Element) {
        element = ref
      } else {
        element = this.getElementByRef(ref, this.refs)
      }

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          ...options
        })
      }
    }
  }
}
</script>
