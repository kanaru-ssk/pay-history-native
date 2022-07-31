module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            src: "./src",
            assets: "./src/assets",
            components: "./src/components",
            hooks: "./src/hooks",
            libs: "./src/libs",
            styles: "./src/styles",
            types: "./src/types",
          },
        },
      ],
      [
        "dotenv-import",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: false,
        },
      ],
    ],
  };
};
