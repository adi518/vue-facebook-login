import flushPromises from 'flush-promises'
import { mount } from '@vue/test-utils'
import Button from '@/components/Button'
import Scope from '@/components/Scope'

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

jest.mock('@/helpers', () => ({
  __esModule: true,
  getSdk: jest.fn().mockResolvedValue({}),
  removeSdkScript: jest.fn().mockResolvedValue(),
  getLoginStatus: jest.fn().mockResolvedValue({ status: 'unknown' }),
  login: jest.fn().mockResolvedValue({ status: 'connected' }),
  logout: jest.fn().mockResolvedValue()
}))

const { getLoginStatus } = require('@/helpers')

describe('Button', () => {
  test('initial render (disabled)', async () => {
    const wrapper = mount(Button)
    await flushPromises()
    expect(wrapper.attributes('disabled')).toBe('disabled')
    expect(wrapper.element).toMatchSnapshot()
  })

  test('initial render (disconnected)', async () => {
    const wrapper = mount(Button, {
      propsData: { appId: '966242223397117' }
    })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('initial render (connected)', async () => {
    getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(Button, {
      propsData: { appId: '966242223397117' }
    })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('login and click event', async () => {
    const onClick = jest.fn()
    const wrapper = mount(Button, {
      propsData: { appId: '966242223397117' },
      listeners: { click: onClick }
    })
    wrapper.get('button').trigger('click')
    await wrapper.vm.$nextTick()
    await flushPromises()
    // expect(onClick).toHaveBeenCalled()
    // expect(wrapper.emitted().input.slice(-1)[0]).toEqual([
    //   {
    //     connected: true,
    //     disabled: false,
    //     disconnected: false,
    //     enabled: true,
    //     error: null,
    //     idle: true,
    //     working: false
    //   }
    // ])
  })

  test('props', async () => {
    const propsData = {
      appId: '966242223397117',
      version: 'mock-version',
      value: { connected: false },
      options: { option1: 1, option2: 2, option3: 3 },
      textStyle: { textStyle1: 1, textStyle2: 2, textStyle3: 3 },
      logoStyle: { logoStyle1: 1, logoStyle2: 2, logoStyle3: 3 },
      loaderStyle: { loaderStyle1: 1, loaderStyle2: 2, loaderStyle3: 3 },
      buttonStyle: { buttonStyle1: 1, buttonStyle2: 2, buttonStyle3: 3 },
      loginOptions: { loginOption1: 1, loginOption2: 2, loginOption3: 3 },
      useAlternateLogo: true,
      transition: [
        'background-color 0.15s ease-in-out',
        'padding 0.15s ease-in-out'
      ]
    }
    const wrapper = mount(Button, { propsData })
    expect(wrapper.vm.$props).toEqual(propsData)
  })

  test('slots', async () => {
    const wrapper = mount(Button, {
      propsData: { appId: '966242223397117' },
      slots: {
        logo: '<div class="logo"></div>',
        after: '<div class="after"></div>',
        before: '<div class="before"></div>',
        login: '<div class="login"></div>',
        error: '<div class="error"></div>',
        working: '<div class="working"></div>'
      }
    })
    await flushPromises()
    const scopeInstance = wrapper.get(Scope).vm
    scopeInstance.error = new Error()
    scopeInstance.$forceUpdate()
    await scopeInstance.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('scoped-slots', async () => {
    const wrapper = mount(Button, {
      propsData: { appId: '966242223397117' },
      scopedSlots: {
        logo: '<div class="logo" slot-scope="scope">{{scope}}</div>',
        after: '<div class="after" slot-scope="scope">{{scope}}</div>',
        before: '<div class="before" slot-scope="scope">{{scope}}</div>',
        login: '<div class="login" slot-scope="scope">{{scope}}</div>',
        error: '<div class="error" slot-scope="scope">{{scope}}</div>',
        working: '<div class="working" slot-scope="scope">{{scope}}</div>'
      }
    })
    await flushPromises()
    const scopeInstance = wrapper.get(Scope).vm
    scopeInstance.error = new Error()
    scopeInstance.$forceUpdate()
    await scopeInstance.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('logout slot', async () => {
    getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(Button, {
      propsData: { appId: '966242223397117' },
      slots: { logout: '<div class="logout"></div>' }
    })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('logout scoped-slot', async () => {
    getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(Button, {
      propsData: { appId: '966242223397117' },
      scopedSlots: {
        logout: '<div class="logout" slot-scope="scope">{{scope}}</div>'
      }
    })
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })
})
