const inputContainer = document.getElementById('darkmode-toggle');

const rootElement = document.documentElement;

window.onload = function () {
  getThemeFromLocalStorage()
}


const lightMode = {
  "--cor-fundo": "#095973",
  "--cor-container": "#3595BE",
  "--cor-texto": "#000000",
}

const darkMode = {
  "--cor-fundo": "#1C1C1C",
  "--cor-container": "#4F4F4F",
  "--cor-texto": "#FFFFFF",
}

inputContainer.addEventListener('change', function() {
  const isChecked = inputContainer.checked
  if(isChecked) {
    changeTheme(darkMode)
  } else {
    changeTheme(lightMode)
  }
})

function changeTheme(theme) {
  for(let prop in theme) {
    changeProperty(prop, theme[prop])
  }
  saveThemeLocalStorage(theme)
}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value)
}

function saveThemeLocalStorage(theme) {
  localStorage.setItem('theme', JSON.stringify(theme))
}

function getThemeFromLocalStorage() {
  const theme = JSON.parse(localStorage.getItem('theme'))//JSON.parse, converte para objeto
  if(isThemeEqual(theme, darkMode)) inputContainer.checked = true
  changeTheme(theme)
}

function isThemeEqual (firstTheme, secondTheme) {
  for(let prop in firstTheme) {
    if (firstTheme[prop] != secondTheme[prop]) return false 
  }
  return true
}