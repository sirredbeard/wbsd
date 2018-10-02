const path = require('path');
const package = require('./package.json');

module.exports = {
  packagerConfig: {
    asar: {
      unpack: '**/images/*.img'
    },
    icon: path.resolve(__dirname, 'assets', 'icon'),
    appBundleId: 'com.whitewaterfoundry.wbsd',
    appCategoryType: 'public.app-category.developer-tools',
    win32metadata: {
      CompanyName: 'Whitewater Foundry',
      OriginalFilename: 'wbsd',
    },
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: {
        name: 'wbsd',
        authors: 'Whitewater Foundry',
        exe: 'wbsd.exe',
        noMsi: true,
        remoteReleases: '',
        setupExe: `wbsd-${package.version}-setup-${process.arch}.exe`,
        setupIcon: path.resolve(__dirname, 'assets', 'icon.ico'),
        certificateFile: process.env.WINDOWS_CERTIFICATE_FILE,
        certificatePassword: process.env.WINDOWS_CERTIFICATE_PASSWORD
      }
    },
  ]
};
