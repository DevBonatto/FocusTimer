import * as actions from './actions.js'
import * as elements from './elements.js'
import state from "./state.js";
import { updateDisplay } from "./timer.js"

export function registerControls() {
  elements.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  } )
}

export function setMinutes() {
  elements.minutes.addEventListener('focus', () => {
    elements.minutes.textContent = ''
  })

  elements.minutes.onkeypress = (event) => /\d/.test(event.key) // se for número retorna true, se outra coisa além de número retorna false, não deixando colocar o dado em tela. 'Expressão Regular'

  elements.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    if(time == '' || time == 0) {
      time = 25
    }

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    elements.minutes.removeAttribute('contenteditable')
  })
}