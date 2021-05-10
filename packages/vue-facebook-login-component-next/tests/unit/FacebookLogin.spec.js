// https://github.com/Thunberg087/vue-fragment/issues/45
// https://github.com/tjw-lint/jest-serializer-vue-tjw/pull/64

import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
import FacebookLogin from '@/components/FacebookLogin.vue'
import { flush, mockSdk } from './test-utils'
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

const consoleWarn = console.warn
const commonProps = { appId: '966242223397117' }

beforeEach(() => {
  console.warn = consoleWarn
  mockSdk(Sdk)
})

jest.useFakeTimers()

describe('FacebookLogin', () => {
  test('initial render (disabled)', async () => {
    console.warn = jest.fn()
    const wrapper = mount(FacebookLogin)
    await flush()
    const DOMButton = wrapper.find('button')
    expect(DOMButton.attributes()).toHaveProperty('disabled')
    expect(DOMButton.html()).toMatchSnapshot()
  })

  test('initial render (disconnected)', async () => {
    const wrapper = mount(FacebookLogin, { props: commonProps })
    await flush()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('initial render (connected)', async () => {
    Sdk.getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(FacebookLogin, {
      props: commonProps,
    })
    await flush()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test.skip('login and click event', async () => {
    const onClick = jest.fn()
    const wrapper = mount(FacebookLogin, {
      props: { ...commonProps, onClick },
    })
    await flush()
    // await wrapper.trigger('click') // https://github.com/vuejs/vue-test-utils-next/issues/577
    // await wrapper.find('button').trigger('click')
    await flush()
    expect(onClick).toHaveBeenCalledTimes(1)
    console.log(wrapper.emitted())
    expect(wrapper.emitted().input.slice(-1)[0]).toEqual([
      {
        idle: true,
        error: null,
        hasError: false,
        enabled: true,
        working: false,
        disabled: false,
        connected: true,
        disconnected: false,
      },
    ])
  })

  test('props', async () => {
    const props = {
      appId: '966242223397117',
      version: 'mock-version',
      value: { connected: false },
      options: { option1: 1, option2: 2, option3: 3 },
      loginOptions: { loginOption1: 1, loginOption2: 2, loginOption3: 3 },
      scope: {},
      logoClass: 'logo-class',
      logoStyle: { logoStyle1: 1, logoStyle2: 2, logoStyle3: 3 },
      textClass: 'text-class',
      textStyle: { textStyle1: 1, textStyle2: 2, textStyle3: 3 },
      loaderClass: 'loader-class',
      loaderStyle: { loaderStyle1: 1, loaderStyle2: 2, loaderStyle3: 3 },
      transition: [
        'background-color 0.15s ease-in-out',
        'padding 0.15s ease-in-out',
      ],
      useAltLogo: true,
      asyncDelay: 500,
      sdkLocale: 'en_US',
    }
    const wrapper = mount(FacebookLogin, { props })
    expect(wrapper.vm.$props).toEqual(props)
  })

  test('slots', async () => {
    const wrapper = mount(Button, {
      props: {
        scope: {
          idle: true,
          working: true,
          hasError: true,
          connected: true,
          disconnected: true,
        },
      },
      slots: {
        logo: h('div', { class: 'logo' }),
        after: h('div', { class: 'after' }),
        before: h('div', { class: 'before' }),
        logout: h('div', { class: 'logout' }),
        login: h('div', { class: 'login' }),
        error: h('div', { class: 'error' }),
        loader: h('div', { class: 'loader' }),
        working: h('div', { class: 'working' }),
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  // https://github.com/vuejs/vue-test-utils-next/issues/452
  test('scoped-slots', async () => {
    const wrapper = mount(Button, {
      props: {
        scope: {
          idle: true,
          working: true,
          hasError: true,
          connected: true,
          disconnected: true,
        },
      },
      slots: {
        // logo: '<template v-slot:logo="scope"><div class="logo">{{scope}}</div></template>', // prettier-ignore
        logo: scope => h('div', { class: 'logo' }, JSON.stringify(scope)),
        after: scope => h('div', { class: 'after' }, JSON.stringify(scope)),
        before: scope => h('div', { class: 'before' }, JSON.stringify(scope)),
        logout: scope => h('div', { class: 'logout' }, JSON.stringify(scope)),
        login: scope => h('div', { class: 'login' }, JSON.stringify(scope)),
        error: scope => h('div', { class: 'error' }, JSON.stringify(scope)),
        loader: scope => h('div', { class: 'loader' }, JSON.stringify(scope)),
        working: scope => h('div', { class: 'working' }, JSON.stringify(scope)),
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('logout slot', async () => {
    Sdk.getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(FacebookLogin, {
      props: commonProps,
      slots: { logout: h('div', { class: 'logout' }) },
    })
    await flush()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('logout scoped-slot', async () => {
    Sdk.getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(FacebookLogin, {
      props: commonProps,
      slots: {
        logout: scope => h('div', { class: 'logout' }, JSON.stringify(scope)),
      },
    })
    await flush()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
