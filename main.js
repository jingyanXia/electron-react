const {app ,BrowserWindow} = require('electron')
   const isDev = require('electron-is-dev')
   let mainWindow
   app.on('ready',() => {
        mainWindow = new BrowserWindow({
            windth:1024,
            height:680,
            webPreferences:{
                nodeIntergration:true
            }
        })
        const urlLocation = isDev ? 'http://localhost:3000':'kaifa'

        mainWindow.webContents.openDevTools();

        mainWindow.loadURL(urlLocation)
    })