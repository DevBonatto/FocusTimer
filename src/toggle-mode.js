let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

function toggle(event) {
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'Light' : 'Dark'
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
  darkMode = !darkMode
}

buttonToggle.addEventListener('click', toggle )
