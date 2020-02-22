export default {
  name: 'DevOnly',
  functional: true,
  render: (h, context) =>
    process.env.NODE_ENV === 'development' ? context.children : null
}
