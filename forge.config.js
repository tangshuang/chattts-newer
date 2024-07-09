const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const path = require('path');

module.exports = {
  packagerConfig: {
    asar: true,
    icon: path.resolve(__dirname, './assets/icons/icon'),
  },
  rebuildConfig: {},
  makers: [
    // macos
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: {
        icon: path.resolve(__dirname, './assets/icons/icon.icns'),
      },
    },
    // windows
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: path.resolve(__dirname, './assets/icons/icon.ico'),
        oneClick: true,
      },
    },
    // linux deb
    {
      name: '@electron-forge/maker-deb',
      config: {
        config: {
          options: {
            icon: path.resolve(__dirname, './assets/icons/128x128.png'),
          },
        },
      },
    },
    // linux rpm
    {
      name: '@electron-forge/maker-rpm',
      config: {
        config: {
          config: {
            options: {
              icon: path.resolve(__dirname, './assets/icons/128x128.png'),
            },
          },
        },
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
