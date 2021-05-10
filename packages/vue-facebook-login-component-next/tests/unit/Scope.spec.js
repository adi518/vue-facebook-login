// https://github.com/vuejs/vue-test-utils-next/issues/17

import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Scope from '@/components/Scope'
import { flush } from './test-utils'
import { Sdk } from '@/Sdk'

function mockSdk(Sdk) {
  Sdk.subscribe = jest.fn().mockResolvedValue({})
  Sdk.unsubscribe = jest.fn().mockResolvedValue()
  Sdk.getLoginStatus = jest.fn().mockResolvedValue({ status: 'unknown' })
  Sdk.login = jest.fn().mockResolvedValue({ status: 'connected' })
  Sdk.logout = jest.fn().mockResolvedValue()
}

jest.mock('@/Sdk', () => {
  const { Sdk } = jest.requireActual('@/Sdk')
  mockSdk(Sdk)
  return {
    __esModule: true,
    ...jest.requireActual('@/Sdk'),
    Sdk,
  }
})

const consoleError = console.error
const commonProps = { appId: '966242223397117' }

beforeEach(() => {
  console.error = consoleError
  mockSdk(Sdk)
})

jest.useFakeTimers()

describe('Scope', () => {
  test('initial state and events (disconnected)', async () => {
    const wrapper = shallowMount(Scope, { props: commonProps })
    await flush()
    const emitted = wrapper.emitted()
    expect(emitted['input']).toBeTruthy()
    expect(emitted['input'].length).toBe(1)
    expect(emitted['sdk-init']).toBeTruthy()
    expect(emitted['sdk-init'].length).toBe(1)
    expect(Object.keys(wrapper.emitted())).toEqual(['sdk-init', 'input'])
    expect(wrapper.vm.connected).toBe(false)
    // expect(wrapper.vm.$el).toBeEmptyDOMElement() // https://github.com/testing-library/jest-dom/issues/353
  })

  test('initial state and events (connected)', async () => {
    Sdk.getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = shallowMount(Scope, { props: commonProps })
    await flushPromises()
    const emitted = wrapper.emitted()
    expect(emitted['login']).toBeTruthy()
    expect(emitted['login'].length).toBe(1)
    expect(Object.keys(emitted).length).toBe(3)
    expect(wrapper.vm.connected).toBe(true)
    // expect(wrapper.vm.$el).toBeEmptyDOMElement() // https://github.com/testing-library/jest-dom/issues/353
  })

  test('initial state with sdk error', async () => {
    console.error = jest.fn()
    const error = 'sdk error'
    Sdk.subscribe = jest.fn().mockRejectedValue(error)
    Sdk.unsubscribe = jest.fn().mockImplementation()
    const wrapper = shallowMount(Scope, { props: commonProps })
    await flushPromises()
    expect(wrapper.vm.error).toBe(error)
    // expect(wrapper.vm.$el).toBeEmptyDOMElement() // https://github.com/testing-library/jest-dom/issues/353
    expect(console.error).toHaveBeenCalledWith(error)
    expect(console.error).toHaveBeenCalledTimes(1)
  })

  test('login', async () => {
    const onLogin = jest.fn()
    const wrapper = shallowMount(Scope, {
      props: commonProps,
      attrs: { onLogin },
    })
    wrapper.vm.login()
    await flushPromises()
    expect(onLogin).toHaveBeenCalledTimes(1)
    expect(onLogin).toHaveBeenLastCalledWith({ status: 'connected' })
    // expect(wrapper.vm.$el).toBeEmptyDOMElement() // https://github.com/testing-library/jest-dom/issues/353
  })

  test('logout', async () => {
    const onLogout = jest.fn()
    const wrapper = shallowMount(Scope, {
      props: commonProps,
      attrs: { onLogout },
    })
    wrapper.vm.logout()
    await flushPromises()
    expect(onLogout).toHaveBeenCalledTimes(1)
    expect(onLogout).toHaveBeenLastCalledWith({ status: 'unknown' })
    // expect(wrapper.vm.$el).toBeEmptyDOMElement() // https://github.com/testing-library/jest-dom/issues/353
  })

  test('empty render with regular slot', async () => {
    const wrapper = shallowMount(Scope, {
      props: commonProps,
      slots: { default: '<div></div>' },
    })
    await flushPromises()
    // expect(wrapper.vm.$el).toBeEmptyDOMElement() // https://github.com/testing-library/jest-dom/issues/353
  })

  test('render with scoped-slot', async () => {
    let scope
    const wrapper = shallowMount(Scope, {
      props: commonProps,
      slots: {
        default(props) {
          scope = props
          // return <div>{props.connected ? 'connected' : 'disconnected'}</div> // https://github.com/vuejs/vue-test-utils-next/issues/576
          return h('div', {}, props.connected ? 'connected' : 'disconnected')
        },
      },
    })
    await flushPromises()
    expect(wrapper.vm.scope).toBe(scope)
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.vm.connected = true
    wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
