const { contextBridge, ipcRenderer } = require('electron');

// Exponer una API para cargar archivos
contextBridge.exposeInMainWorld('api', {
  // Menu Actions
  onUpdateTheme: (callback) => ipcRenderer.on("theme", callback),
  
  // Logic Actions
  cargarArchivo: () => ipcRenderer.invoke('cargar-archivo'),
  desktopNotification: (data) => ipcRenderer.invoke('desktop-notif', data),
});
