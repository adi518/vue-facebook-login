import flushPromises from 'flush-promises'
import { shallowMount } from '@vue/test-utils'
import { flush, mockSdk } from './test-utils'
import Scope from '@/Scope'
import { Sdk } from '@/Sdk'

jest.mock('@/Sdk', () => {
  const { Sdk } = jest.requireActual('@/Sdk')
  const { mockSdk } = jest.requireActual('./test-utils')
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
    const wrapper = shallowMount(Scope, { propsData: commonProps })
    await flush()
    const emitted = wrapper.emitted()
    expect(emitted['input']).toBeTruthy()
    expect(emitted['input'].length).toBe(1)
    expect(emitted['sdk-init']).toBeTruthy()
    expect(emitted['sdk-init'].length).toBe(1)
    expect(wrapper.emittedByOrder().map(event => event.name)).toEqual([
      'sdk-init',
      'input',
    ])
    expect(wrapper.vm.connected).toBe(false)
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('initial state and events (connected)', async () => {
    Sdk.getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = shallowMount(Scope, { propsData: commonProps })
    await flushPromises()
    const emitted = wrapper.emitted()
    expect(emitted['login']).toBeTruthy()
    expect(emitted['login'].length).toBe(1)
    expect(Object.keys(emitted).length).toBe(3)
    expect(wrapper.vm.connected).toBe(true)
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('initial state with sdk error', async () => {
    console.error = jest.fn()
    const error = 'sdk error'
    Sdk.subscribe = jest.fn().mockRejectedValue(error)
    Sdk.unsubscribe = jest.fn().mockImplementation()
    const wrapper = shallowMount(Scope, { propsData: commonProps })
    await flushPromises()
    expect(wrapper.vm.error).toBe(error)
    expect(wrapper.isEmpty()).toBe(true)
    expect(console.error).toHaveBeenCalledWith(error)
    expect(console.error).toHaveBeenCalledTimes(1)
  })

  test('login', async () => {
    const login = jest.fn()
    const wrapper = shallowMount(Scope, {
      propsData: commonProps,
      listeners: { login },
    })
    wrapper.vm.login()
    await flushPromises()
    expect(login).toHaveBeenCalledTimes(1)
    expect(login).toHaveBeenLastCalledWith({ status: 'connected' })
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('logout', async () => {
    const logout = jest.fn()
    const wrapper = shallowMount(Scope, {
      propsData: commonProps,
      listeners: { logout },
    })
    wrapper.vm.logout()
    await flushPromises()
    expect(logout).toHaveBeenCalledTimes(1)
    expect(logout).toHaveBeenLastCalledWith({ status: 'unknown' })
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('slot', async () => {
    const wrapper = shallowMount(Scope, {
      propsData: commonProps,
      slots: { default: '<div></div>' },
    })
    await flushPromises()
    expect(wrapper.isEmpty()).toBe(true)
  })

  test.skip('scoped-slot', async () => {
    let scope
    const wrapper = shallowMount(Scope, {
      propsData: commonProps,
      scopedSlots: {
        default(props) {
          scope = props
          return <div>{props.connected ? 'connected' : 'disconnected'}</div>
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
