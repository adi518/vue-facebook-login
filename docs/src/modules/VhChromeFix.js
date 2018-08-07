// https://stanko.github.io/mobile-chrome-vh-units-fix/

export class VhChromeFix {

  constructor(selectors) {

    this.selectors = selectors

    const userAgent = navigator.userAgent.toLowerCase()
    const isAndroidChrome = /chrome/.test(userAgent) && /android/.test(userAgent)
    const isIosChrome = /crios/.test(userAgent)

    if (isAndroidChrome || isIosChrome) {
      // If we detected Chrome on Android or iOS
      // Cache elements and trigger fix on init
      this.getElements(this.selectors)
      this.fixAll()

      // Cache window dimensions
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight

      this.onResize = () => {
        // Both width and height changed (orientation change)
        // This is a hack, as Android when keyboard pops up
        // Triggers orientation change
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight
        this.fixAll()
      }

      window.addEventListener('resize', this.onResize, false)
    }
  }

  getElements(selectors = []) {

    this.elements = []

    selectors = [].concat(selectors)

    for (let i = 0; i < selectors.length; i++) {
      // Get all elements for selector
      let selector = selectors[i].selector
      let elements = document.querySelectorAll(selector)

      // Go through all elements for one selector to filter them
      for (let j = 0; j < elements.length; j++) {
        let offset = selectors[i].offset || 0
        this.elements.push({
          domElement: elements[j],
          vh: selectors[i].vh,
          offset: offset
        })
      }
    }
  }

  fixAll() {
    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i]
      const offset = element.offset
      element.domElement.style.height = (window.innerHeight * (element.vh / 100) - offset) + 'px'
    }
  }

  destroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
