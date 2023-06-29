/**
 * --------------------------------------------------------------------------
 * Material Style (v3.1.0-alpha1): text_field.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  getBaseColor, getPrimaryColor
} from './util/color.js'
import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import SelectorEngine from './dom/selector-engine.js'
import { defineJQueryPlugin } from './util/index.js'

/**
 * Constants
 */

const NAME = 'textfield'

const DATA_KEY = 'bs.textfield'
const EVENT_KEY = `.${DATA_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}`

const CLASS_NAME_FLOATING = 'form-floating'
const CLASS_NAME_FLOATING_OUTLINED = 'form-floating-line'

const LABEL_SCALE = 0.85

/**
 * Class definition
 */

class TextField extends BaseComponent {
  constructor(element) {
    super(element)
    this._textField = element
    this._formFloating = element.closest(`[class*=${CLASS_NAME_FLOATING}]`)

    if (this._textField && this._formFloating) {
      this.initTextFields()
      this.addFontsReadyEvent()
    }
  }

  static get NAME() {
    return NAME
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = TextField.getOrCreateInstance(this)

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config](this)
      }
    })
  }

  initTextFields() {
    const baseColor = getBaseColor(this._formFloating)
    const primaryColor = getPrimaryColor(this._formFloating)

    if (baseColor) {
      this._formFloating.style.setProperty('--bs-form-field-border-color', baseColor)
    }

    if (primaryColor) {
      this._formFloating.style.setProperty('--bs-form-field-active-border-color', primaryColor)
    }

    this._label = this._formFloating.querySelector('label')
    this._inputGroup = this._formFloating.closest('.input-group')

    if (this._inputGroup) {
      if (this._formFloating.className.includes(CLASS_NAME_FLOATING_OUTLINED)) {
        this._inputGroup.classList.add('has-form-floating')
      } else {
        this._inputGroup.classList.add('has-form-floating-outlined')
      }
    }

    this._formFloatingWithIcon = this._formFloating.closest('.form-floating-with-icon')

    if (this._formFloatingWithIcon) {
      this._prepend = this._formFloatingWithIcon.querySelector('.prepend')
      this._append = this._formFloatingWithIcon.querySelector('.append')
    }

    if (this._prepend) {
      this._label.style.paddingLeft = 0
    }

    if (this._formFloating.className.includes(CLASS_NAME_FLOATING_OUTLINED)) {
      this.addRipple()
    } else {
      this.addNotch()
    }
  }

  redraw() {
    if (this._label) {
      this._formFloating.style.setProperty('--label-floating-margin-right', `-${this._label.offsetWidth - (this._label.offsetWidth * LABEL_SCALE)}px`)
    }

    this.addFontsReadyEvent()
  }

  addRipple() {
    const ripple = document.createElement('div')
    ripple.className = 'm-line-ripple'

    this._ripple = ripple
    this._textField.after(ripple)
  }

  addNotch() {
    const notch = document.createElement('div')
    notch.className = 'm-notch'

    const notchBefore = document.createElement('div')
    notchBefore.className = 'm-notch-before'

    const notchBetween = document.createElement('div')
    notchBetween.className = 'm-notch-between'

    const notchAfter = document.createElement('div')
    notchAfter.className = 'm-notch-after'

    notch.append(notchBefore)
    notch.append(notchBetween)
    notch.append(notchAfter)

    this._textField.after(notch)
    this._notch = notch

    if (this._label) {
      notchBetween.append(this._label)
      this._formFloating.style.setProperty('--label-floating-margin-right', `-${this._label.offsetWidth - (this._label.offsetWidth * LABEL_SCALE)}px`)
    }
  }

  addFontsReadyEvent() {
    document.fonts.ready.then(() => {
      if (this._formFloatingWithIcon) {
        if (this._prepend) {
          this._prepend.style.height = `${this._textField.offsetHeight}px`
          this._formFloating.style.setProperty('--prepend-width', `${this._prepend.offsetWidth}px`)
        }

        if (this._append) {
          this._append.style.height = `${this._textField.offsetHeight}px`
          this._formFloating.style.setProperty('--append-width', `${this._append.offsetWidth}px`)
        }
      }
    })
  }
}

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  const selectors = '.form-control'
  const elements = document.querySelectorAll(selectors)
  for (const element of elements) {
    TextField.getOrCreateInstance(element)
  }
})
/**
 * jQuery
 */

defineJQueryPlugin(TextField)

export default TextField
