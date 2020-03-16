import flattenRoutes from '@/vue-flatten-routes'

const getPaths = router =>
  flattenRoutes(router.options.routes).reduce(
    (acc, route) => ({ ...acc, [route.path]: 1 }),
    {}
  )

const beforeEach = (to, from, next) => {
  if (to.matched.length) return next()
  next({ path: `${from.path}?a=${to.path.substr(1)}` })
}

let Component = null

const ScrollToAnchor = (router, { offsetY = 0 } = {}) => {
  if (Component) {
    // eslint-disable-next-line no-console
    return console.error(
      `[${ScrollToAnchor.name} warn]: can have only one component instance.`
    )
  }
  const paths = getPaths(router)
  router.beforeEach(beforeEach)
  const globalAnchorClickListener = new GlobalAnchorClickListener(
    paths,
    offsetY
  )
  Component = {
    data: () => ({ isMounted: false }),
    mounted() {
      this.isMounted = true
      this.scrollToLocalAnchor()
      globalAnchorClickListener.add()
    },
    beforeDestroy() {
      this.isMounted = false
      globalAnchorClickListener.remove()
    },
    methods: {
      async scrollToLocalAnchor() {
        if (!this.isMounted) return
        // https://stackoverflow.com/a/901144/4106263
        // https://stackoverflow.com/a/11662717/4106263
        // https://stackoverflow.com/a/56895999/4106263
        const urlParams = new URLSearchParams(window.location.hash.substr(2))
        const anchorId = urlParams.get('a')
        if (anchorId) {
          await this.$nextTick()
          scrollToAnchor(anchorId, offsetY)
        }
      }
    },
    render() {
      return null
    }
  }
  return Component
}

const scrollToAnchor = (anchorElOrId, offsetY = 0) => {
  return new Promise(resolve => {
    window.requestAnimationFrame(() => {
      let anchorEl
      if (anchorElOrId instanceof HTMLAnchorElement) {
        // derive id from anchor `href` and look for an
        // element with that id, otherwise fallback to anchor.
        const hrefAsId = anchorElOrId.getAttribute('href').substr(1)
        if (document.getElementById(hrefAsId)) {
          anchorEl = document.getElementById(hrefAsId)
        } else {
          anchorEl = anchorElOrId
        }
      } else {
        anchorEl =
          document.getElementById(anchorElOrId) ||
          document.querySelector(`[href='#${anchorElOrId}'`)
      }
      const y =
        anchorEl.getBoundingClientRect().top + window.pageYOffset - offsetY
      window.scrollTo({ top: y, behavior: 'smooth' })
      resolve()
    })
  })
}

function GlobalAnchorClickListener(paths, offsetY = 0) {
  async function handleClick(event) {
    const anchorEl = event.target.closest('a') || event.target
    if (!(anchorEl instanceof HTMLAnchorElement)) return
    if (!/^#/.test(anchorEl.hash)) return
    const path = anchorEl.hash?.substr(1)
    if (!paths[path] && window.location.host === anchorEl.host) {
      event.preventDefault()
      await scrollToAnchor(anchorEl, offsetY)
      window.location.hash = `?a=${path}`
    }
  }
  this.add = () => document.addEventListener('click', handleClick, true)
  this.remove = () => document.removeEventListener('click', handleClick)
}

export default ScrollToAnchor
