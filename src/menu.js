const { app, Menu } = require("electron/main")

// MENU DENTRO DE LA APP
function createMenu(mainWindow){
  const template = [
    {
      label: "Administración",
      submenu: [
        {
          label: "Horas Extras",
          click: () => console.log("Horas Extras")
        },
      ],
    },
    {
      label: "Auditoría",
      submenu: [
        {
          label: "Alternativo de Depositos",
          click: () => console.log("HOLA MUNDO")
        },
        {
          label: "Pasivos Omitidos",
          click: () => console.log("HOLA MUNDO")
        },
        {
          label: "Neteo de Universos",
          click: () => console.log("HOLA MUNDO")
        },
      ],
    },
    {
      label: 'Vista',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'minimize' },
        { role: 'quit' }
      ]
    },
    {
      label: "Configuración",
      submenu: [
        {
          label: "Dark Mode",
          click: () => mainWindow.webContents.send("theme", "dark")
        },
        {
          label: "Light Mode",
          click: () => mainWindow.webContents.send("theme", "light")
        },
        {
          label: "Undo",
          click: () => console.log("HOLA MUNDO")
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}



module.exports = {
  createMenu
}