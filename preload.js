const {uIOhook, UiohookKey} = require("uiohook-napi");
const path = require("path");

let autorelogActive = false

uIOhook.on('keydown', (e) => {
    if (e.keycode === UiohookKey.F6) {
        displayAutorelogStatus(!autorelogActive)
    }
})

uIOhook.start()

function displayAutorelogStatus(isActive) {
    const autorelogHotkey = document.querySelector('#autorelogHotkey')
    const autorelogStatus = document.querySelector('#autorelogStatus')

    if (isActive) {
        autorelogHotkey.textContent = "Нажмите F6 чтобы деактивировать автоперезаход"
        autorelogStatus.textContent = "Активен"
        autorelogActive = true
    } else {
        autorelogHotkey.textContent = "Нажмите F6 чтобы активировать автоперезаход"
        autorelogStatus.textContent = "Неактивен"
        autorelogActive = false
    }
}


