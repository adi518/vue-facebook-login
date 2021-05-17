export function getComponentProps(Component, allProps) {
  const props = {}
  for (const prop in allProps) {
    if (Object.prototype.hasOwnProperty.call(Component.props, prop)) {
      props[prop] = allProps[prop]
    }
  }
  return props
}
