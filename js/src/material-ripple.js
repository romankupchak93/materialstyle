import { MDCRipple } from '@material/ripple'
import SelectorEngine from './dom/selector-engine.js'
import { getjQuery, onDOMContentLoaded } from './util/index.js'

const NAME = 'ripple'
const DATA_KEY = 'bs.ripple'
const SELECTOR_COMPONENT = '.btn, .accordion-button, .list-group-item'
const SELECTOR_COMPONENT_UNBOUNDED = '.btn-close, .btn-icon, .navbar-toggler'
const CLASSNAME_RIPPLE = 'ripple-surface'

class MaterialRipple {
  constructor(element) {
    this._element = element
    this._rippleUpgraded = null

    if (this._element) {
      this.init()
    }
  }

  static get NAME() {
    return NAME
  }

  init() {
    const isInputType = this._element.tagName.toLowerCase() === 'input'
    if (!isInputType) {
      const rippleElement = document.createElement('span')
      rippleElement.classList.add(CLASSNAME_RIPPLE)
      this._element.append(rippleElement)
      this._rippleUpgraded = new MDCRipple(rippleElement)
      this._rippleUpgraded.bounded = true
      if (this._element.matches(SELECTOR_COMPONENT_UNBOUNDED)) {
        this._rippleUpgraded.unbounded = true
      }
    }
  }

  dispose() {
    if (this._rippleUpgraded) {
      this._rippleUpgraded.destroy()
      this._rippleUpgraded = null
    }

    this._element = null
  }

  static autoInitial(instance) {
    return function (event) {
      instance._autoInit(event)
    }
  }

  static jQueryInterface() {
    return this.each(function () {
      new MaterialRipple(this)
    })
  }

  static getInstance(element) {
    return element[DATA_KEY]
  }

  static getOrCreateInstance(element) {
    let instance = this.getInstance(element)
    if (!instance) {
      instance = new this(element)
    }

    return instance
  }
}

const handleDOMContentLoaded = () => {
  const elements = SelectorEngine.find(`${SELECTOR_COMPONENT}, ${SELECTOR_COMPONENT_UNBOUNDED}`)
  for (const element of elements) {
    const existingInstance = MaterialRipple.getInstance(element)
    if (existingInstance) {
      existingInstance.dispose()
    }

    MaterialRipple.getOrCreateInstance(element)
  }
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)

onDOMContentLoaded(() => {
  const $ = getjQuery()

  if ($) {
    const JQUERY_NO_CONFLICT = $.fn[NAME]
    $.fn[NAME] = MaterialRipple.jQueryInterface
    $.fn[NAME].Constructor = MaterialRipple
    $.fn[NAME].noConflict = () => {
      $.fn[NAME] = JQUERY_NO_CONFLICT
      return MaterialRipple.jQueryInterface
    }
  }
})

export default MaterialRipple
