const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      warnings: true,
      errors: true,
    },
    boot: [],

    css: ['app.scss'],

    extras: [
      'ionicons-v4',
      'mdi-v5',
      'fontawesome-v6',
      'eva-icons',
      'themify',
      'line-awesome',
      'roboto-font-latin-ext',

      'roboto-font',
      'material-icons',
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16',
      },

      vueRouterMode: 'history',
    },
    devServer: {
      open: true,
    },
    framework: {
      config: {},
      plugins: [],
    },
    animations: [],
    ssr: {
      pwa: false,

      prodPort: 3000,

      middlewares: ['render'],
    },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true,
    },
    electron: {
      inspectPort: 5858,

      bundler: 'packager',

      builder: {
        appId: 'app-vite',
      },
    },
    bex: {
      contentScripts: ['my-content-script'],
    },
  };
});
