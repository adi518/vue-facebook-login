import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Scope from '@/components/Scope'

jest.mock('@/sdk', () => {
  const { Sdk } = jest.requireActual('@/sdk')
  return {
    __esModule: true,
    ...jest.requireActual('@/sdk'),
    Sdk: {
      isConnected: Sdk.isConnected,
      subscribe: jest.fn().mockResolvedValue({}),
      unsubscribe: jest.fn().mockResolvedValue()
    },
    getLoginStatus: jest.fn().mockResolvedValue({ status: 'unknown' }),
    login: jest.fn().mockResolvedValue({ status: 'connected' }),
    logout: jest.fn().mockResolvedValue()
  }
})

const { Sdk, getLoginStatus } = require('@/sdk')

const commonProps = { appId: '966242223397117' }

describe('Scope', () => {
  test('initial state and events (disconnected)', async () => {
    const wrapper = shallowMount(Scope, { propsData: commonProps })
    await flushPromises()
    const emitted = wrapper.emitted()
    expect(emitted['input']).toBeTruthy()
    expect(emitted['input'].length).toBe(1)
    expect(emitted['sdk-init']).toBeTruthy()
    expect(emitted['sdk-init'].length).toBe(1)
    expect(wrapper.emittedByOrder().map(e => e.name)).toEqual([
      'sdk-init',
      'input'
    ])
    expect(wrapper.vm.connected).toBe(false)
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('initial state and events (connected)', async () => {
    getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
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
    Sdk.subscribe = jest.fn().mockRejectedValue('sdk error')
    Sdk.unsubscribe = jest.fn().mockImplementation()
    const wrapper = shallowMount(Scope, { propsData: commonProps })
    await flushPromises()
    expect(wrapper.vm.error).toBe('sdk error')
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('login', async () => {
    const login = jest.fn()
    const wrapper = shallowMount(Scope, {
      propsData: commonProps,
      listeners: { login }
    })
    wrapper.vm.login()
    await flushPromises()
    expect(login).toHaveBeenCalledTimes(1)
    expect(login).toHaveBeenLastCalledWith('connected')
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('logout', async () => {
    const logout = jest.fn()
    const wrapper = shallowMount(Scope, {
      propsData: commonProps,
      listeners: { logout }
    })
    wrapper.vm.logout()
    await flushPromises()
    expect(logout).toHaveBeenCalledTimes(1)
    expect(logout).toHaveBeenLastCalledWith()
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('empty render with regular slot', async () => {
    const wrapper = shallowMount(Scope, {
      propsData: commonProps,
      slots: { default: '<div></div>' }
    })
    await flushPromises()
    expect(wrapper.isEmpty()).toBe(true)
  })

  test('render with scoped-slot', async () => {
    let scope
    const wrapper = shallowMount(Scope, {
      propsData: commonProps,
      scopedSlots: {
        default(props) {
          scope = props
          return <div>{props.connected ? 'connected' : 'disconnected'}</div>
        }
      }
    })
    await flushPromises()
    expect(wrapper.vm.scope).toBe(scope)
    expect(wrapper.element).toMatchSnapshot()
    wrapper.vm.connected = true
    wrapper.vm.$forceUpdate()
    await wrapper.vm.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })
})
