const { app, mainWindow } = require("electron")
const { Notification } = require("electron")


// NOTIFICACION DE ESCRITORIO
function showNotification(data) {
  const { title, body } = data;

  const notification = new Notification({
    title: title,
    subtitle: body,
    body: body,
    silent: true,
    closeButtonText: 'Cerrar',
  })

  // Escuchar eventos de botones
  notification.on('action', (event, index) => {
    if (index === 0) {
      console.log('Se seleccionó: Solucionar');
    } else if (index === 1) {
      console.log('Se seleccionó: Ignorar');
    }
  });

  // Escuchar el cierre de la notificación
  notification.on('close', () => {
    console.log('La notificación fue cerrada.');
  });

  notification.show()
  return { success: true }
}


module.exports = {
  showNotification,
}