const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');
const os = require('os');
const { HOME_URL } = require('./config.js');

// 避免第一次打开时出现updating窗口
if (require('electron-squirrel-startup')) {
    app.quit();
}

// const isMac = process.platform === 'darwin';
const menus = [
    {
        label: app.name,
        submenu: [
            {
                label: '关于',
                click: async () => {
                    await shell.openExternal(HOME_URL);
                },
            },
            { type: 'separator' },
            {
                label: '退出',
                role: 'quit',
            },
        ],
    },
    {
        label: "Edit",
        submenu: [
            {
                role: 'undo',
                label: '撤销',
                accelerator: "CmdOrCtrl+Z",
                selector: "undo:",
            },
            {
                role: 'redo',
                label: '重做',
                accelerator: "CmdOrCtrl+Shift+Z",
                selector: "redo:",
            },
            { type: 'separator' },
            {
                role: 'cut',
                label: '剪切',
                accelerator: "CmdOrCtrl+X",
                selector: "cut:",
            },
            {
                role: 'copy',
                label: '复制',
                accelerator: "CmdOrCtrl+C",
                selector: "copy:",
            },
            {
                role: 'paste',
                label: '粘贴',
                accelerator: "CmdOrCtrl+V",
                selector: "paste:",
            },
        ]
    },
    {
        label: 'Window',
        submenu: [
            {
                label: '强制刷新',
                role: 'forceReload',
            },
            {
                label: '关闭',
                role: 'close',
            },
            {
                label: '全屏',
                role: 'togglefullscreen',
            },
        ],
    },
];

if (process.env.npm_lifecycle_event === 'start') {
    menus.find(item => item.label === 'Window').submenu.push(
        { type: 'separator' },
        {
            role: 'toggleDevTools',
        },
    );
}

const menu = Menu.buildFromTemplate(menus);
Menu.setApplicationMenu(menu);


let contents;
let session;

const createWindow = (url, options) => {
    const win = new BrowserWindow({
        width: options?.width || 600,
        height: options?.height || 300,
        autoHideMenuBar: !options?.showMenu,
        webPreferences: {
            nodeIntegration: true,
            // preload: path.join(__dirname, 'preloads/index.js'),
        },
        icon: path.resolve(__dirname, './assets/icons/128x128.png'),
    });

    win.webContents.setWindowOpenHandler((details) => {
        const { url, disposition } = details;
        if (url.indexOf(HOME_URL) !== 0) {
            shell.openExternal(url);
        }
        else if (disposition === 'new-window') {
            shell.openExternal(url);
        }
    });

    win.loadFile('dist/index.html', { hash: url });

    return win;
};

const createMainWindow = () => {
    const win = createWindow('/', {
        width: 1365,
        height: 900,
        showMenu: true,
    });
    contents = win.webContents;
    session = contents.session;
};


app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
