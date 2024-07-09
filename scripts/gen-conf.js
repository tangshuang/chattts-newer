const fs = require('fs');
const path = require('path');

const configFile = path.join(__dirname, '../config/index.js')
if (fs.existsSync(configFile)) {
    fs.unlinkSync(configFile);
}

const target = process.argv[2];
if (!target) {
    console.error('target required');
    process.exit(1);
}

const targetConfigFile = path.join(__dirname, `../config/config.${target}.js`);
fs.copyFileSync(targetConfigFile, configFile);
