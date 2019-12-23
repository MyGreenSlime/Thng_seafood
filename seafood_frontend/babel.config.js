module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "@views": "./src/views",
          "@components": "./src/components",
          "@api": "./src/api",
          "@libs": "./src/libs"
        }
      }
    ]
  ]
}
