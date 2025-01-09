const { ipcMain } = require("electron");
const fs = require("node:fs")

const {openFileSelector} = require("../handlers/filesManipulation")
const { showNotification } = require("../handlers/utils")

function setupIpcHandlers() {
  ipcMain.handle("desktop-notif", (event, data) => showNotification(data));

  // Manejar la solicitud de cargar un archivo
  ipcMain.handle('cargar-archivo', (event, data) => openFileSelector(data));
  
}


module.exports = { setupIpcHandlers };