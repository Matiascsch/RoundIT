const { dialog, mainWindow } = require("electron");
const fs = require("node:fs")


async function openFileSelector(multiple) {
  const props = multiple ? ['openFile', 'multiSelections'] : ['openFile']

  // Abrir modal de seleccion
  const { canceled, filePaths } = await dialog.showOpenDialog(
    mainWindow,
    {
      title: 'Seleccionar Archivo',
      buttonLabel: 'Abrir',
      filters: [
        { name: 'Archivos Excel', extensions: ['xlsx', 'xlsm', 'xls', "txt"] },
        { name: 'Todos los Archivos', extensions: ['*'] },
      ],
      properties: props,
    }
  );

  if (canceled || filePaths.length === 0) return null; // El usuario canceló la selección

  try {
    console.log(filePaths)
    const contenido = fs.readFileSync(filePaths[0], 'utf-8');

    return contenido;

  } catch (error) {
    console.error('Error al leer el archivo:', error);
    return 'Error al leer el archivo.';
  }
}


module.exports = {
  openFileSelector
}