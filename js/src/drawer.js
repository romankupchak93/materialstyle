/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): drawer.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'drawer'
const VERSION = '3.0.0-alpha1'
const DATA_KEY = 'ms.drawer'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_CLICK = `click${EVENT_KEY}`

const CLASS_NAME_VISIBLE = 'drawer-visible'
const CLASS_NAME_SWITCHED = '--switched'
const CLASS_NAME_FIXED = 'drawer-fixed'
const CLASS_SHADE = 'm-shade'
const TOGGLE_AT_WIDTH = 1280

class Drawer extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this._shade = this.createShade()
    this._drawerToggler = document.querySelector('.drawer-toggler')
    this._drawerHeader = element.querySelector('.drawer-header')
    this._footer = document.querySelector('footer')
    this._navBar = document.querySelector('.navbar')

    this.initDrawer()
    this._setListeners()
  }

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static jQueryInterface() {
    return this.each(function () {
      Drawer.getOrCreateInstance(this)
    })
  }

  createShade() {
    if (document.querySelector(`.${CLASS_SHADE}`) === null) {
      const shade = document.createElement('div')
      shade.className = CLASS_SHADE
      shade.style.display = 'none'
      document.querySelector('body').append(shade)

      return shade
    }

    return document.querySelector(`.${CLASS_SHADE}`)
  }

  initDrawer() {
    if (this._element.className.includes(CLASS_NAME_VISIBLE) && this._element.className.includes(CLASS_NAME_FIXED)) {
      const fixedSideNavBg = this._element.className.match(/bg-[^\s]+/)

      const fixed = document.createElement('div')
      fixed.className = `m-fixed ${fixedSideNavBg}`

      const children = this._element.childNodes

      for (const [, value] of Object.entries(children)) {
        fixed.appendChild(value)
      }

      this._element.appendChild(this._drawerHeader)
      this._element.appendChild(fixed)

      this._fixed = fixed
    }

    let navbarHeight = '56px'
    if (this._navBar !== null) {
      navbarHeight = this._navBar.offsetHeight
    }

    if (this._drawerHeader !== null) {
      this._drawerHeader.style.height = `${navbarHeight}px`
    }

    if (this._element.className.includes(CLASS_NAME_FIXED) && this._fixed !== null) {
      this._fixed.style.top = `${navbarHeight}px`
      this._fixed.style.height = `calc(100vh - ${navbarHeight}px)`
    }

    if (this._element.className.includes(CLASS_NAME_VISIBLE)) {
      this.toggle()
    }
  }

  show() {
    this._shade.style.display = 'block'
    this._element.style.transform = 'none'
  }

  hide() {
    this._shade.style.display = 'none'

    if (!this._element.className.includes(CLASS_NAME_VISIBLE)) {
      this._element.style.transform = 'translateX(-100%)'
    }
  }

  toggle() {
    if (window.innerWidth < TOGGLE_AT_WIDTH) {
      if (this._element.className.includes(CLASS_NAME_VISIBLE)) {
        this._element.classList.add(CLASS_NAME_SWITCHED)
        this._element.classList.remove(CLASS_NAME_VISIBLE)
        this._element.style.transform = 'translateX(-100%)'
      }

      this._shade.style.display = 'none'

      if (this._drawerToggler !== null) {
        this._drawerToggler.style.display = 'block'
      }

      if (this._footer !== null) {
        this._footer.style.marginLeft = 0
      }
    } else {
      if (this._element.className.includes(CLASS_NAME_SWITCHED)) {
        this._element.classList.remove(CLASS_NAME_SWITCHED)
        this._element.classList.add(CLASS_NAME_VISIBLE)
        this._element.style.transform = 'none'
      }

      if (this._drawerToggler !== null) {
        this._drawerToggler.style.display = 'none'
      }

      if (this._footer !== null && this._element.className.includes(CLASS_NAME_VISIBLE) && this._element.className.includes(CLASS_NAME_FIXED)) {
        this._footer.style.marginLeft = '250px'
      }
    }
  }

  _setListeners() {
    EventHandler.on(this._drawerToggler, EVENT_CLICK, () => this.show())

    EventHandler.on(document, EVENT_CLICK, (event) => {
      if (event.target !== this._element &&
        event.target !== this._drawerToggler &&
        !this._element.contains(event.target)
      ) {
        this.hide()
      }
    })

    const links = this._element.querySelectorAll('.nav-link')

    for (const [, value] of Object.entries(links)) {
      let show = true

      value.addEventListener('click', (event) => {
        const subMenuContainer = event.target.closest('.nav-item').nextElementSibling
        let subMenu = null

        if (subMenuContainer !== null) {
          subMenu = subMenuContainer.querySelector('.sub-menu')
        }

        if (subMenu !== null) {
          const subMenuHeight = subMenu.offsetHeight

          if (show) {
            subMenu.style.marginTop = 0
            show = false

            if (event.target.className.includes('sub-menu-link')) {
              event.target.querySelector('.bi').classList.remove('bi-chevron-down')
              event.target.querySelector('.bi').classList.add('bi-chevron-up')
            }
          } else {
            subMenu.style.marginTop = `-${subMenuHeight}px`
            show = true

            if (event.target.className.includes('sub-menu-link')) {
              event.target.querySelector('.bi').classList.remove('bi-chevron-up')
              event.target.querySelector('.bi').classList.add('bi-chevron-down')
            }
          }
        }

        if (!event.target.className.includes('sub-menu-link')) {
          this.hide()
        }
      })
    }

    window.addEventListener('resize', () => {
      if (this._element.className.includes(CLASS_NAME_VISIBLE) || this._element.className.includes(CLASS_NAME_SWITCHED)) {
        this.toggle()
      }

      let navbarHeight = '56px'
      if (this._navBar !== null) {
        navbarHeight = this._navBar.offsetHeight
      }

      if (this._drawerHeader !== null) {
        this._drawerHeader.style.height = `${navbarHeight}px`
      }

      if (this._fixed !== null && this._fixed !== undefined) {
        this._fixed.style.top = `${navbarHeight}px`
        this._fixed.style.height = `calc(100vh - ${navbarHeight}px)`
      }
    })

    this._element.querySelector('.drawer-close-btn').addEventListener('click', () => {
      this.hide()
    })

    if (this._element.querySelector('.nav-link.active') !== null && this._element.querySelector('.nav-link.active').closest('.sub-menu-container') !== null) {
      this._element.querySelector('.nav-link.active').closest('.sub-menu-container').previousElementSibling.querySelector('.sub-menu-link').click()
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Drawer)

export default Drawer
