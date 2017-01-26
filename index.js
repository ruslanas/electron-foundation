const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;

function createWindow(file, options) {

    let win = new BrowserWindow(options);

    win.maximize();
    // win.openDevTools();
    win.setMenuBarVisibility(true);
    win.loadURL(`file://${__dirname}/${file}`);

}

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    createWindow('index.html', {});
});