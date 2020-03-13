export default {
  props: {
    value: {
      type: [Object, Array],
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  render(h) {
    let nodes = this.value
    if (!Array.isArray(nodes)) nodes = [nodes]
    return h(this.tag, this.options, nodes)
  }
}
