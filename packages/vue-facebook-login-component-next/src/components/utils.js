import Button from './Button.vue'

const listenerRegex = /^on[^a-z]/

export function getListeners($attrs) {
  const listeners = {}
  for (const prop in $attrs) {
    if (listenerRegex.test(prop)) {
      listeners[prop] = $attrs[prop]
    }
  }
  return listeners
}

export function filterProps($props) {
  const props = {}
  for (const prop in $props) {
    if (props !== undefined) {
      props[prop] = $props[prop]
    }
  }
  return props
}

export function getButtonProps($props) {
  const props = {}
  for (const prop in $props) {
    if (Button.props.hasOwnProperty(prop)) {
      props[prop] = $props[prop]
    }
  }
  return props
}
