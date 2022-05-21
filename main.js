const {app, BrowserWindow} = require("electron")
const path = require("path");
const {loadImage, screen} = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {preload: path.join(__dirname, 'preload.js')}
    })

    win.loadFile('./src/index.html')
}

app.whenReady().then(() => createWindow())

/* ================== Autorelog ================== */

let autorelogInterval = null

function runAutorelog(isActive) {
    autorelogInterval = setInterval(async () => {
        try {
            const img = await loadImage(path.join(__dirname, 'autorelog', 'online.png'))
            const region = await screen.find(img)
            console.log(region)
        } catch (e) {
            console.log(e)
        }
    }, 3000)
}

runAutorelog()
