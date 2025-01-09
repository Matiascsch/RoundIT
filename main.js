const { app, BrowserWindow} = require("electron/main")
const path = require('node:path')


const { setupIpcHandlers } = require("./src/preload/ipcHandlers")
const { createMenu } = require("./src/menu")


const CONFIG = {
  preload_path: path.join(__dirname, "src/preload/preload.js"),
  html_path: path.join(__dirname, "src/renderer/views/index.html"),
  PORT: process.env.PORT ?? 3000
}


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    frame: true, // Borde de la ventana y menu
    resizable: false,
    webPreferences: {
      preload: CONFIG.preload_path,
      contextIsolation: true
    }
  })

  mainWindow.loadFile(CONFIG.html_path)
  createMenu(mainWindow)
}


// INICIALIZACION DE LA APP
app.whenReady().then(() => {
  setupIpcHandlers()
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("before-quit", () => {
  console.log("Cerrando App")
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})