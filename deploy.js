const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  await fs.ensureDir("./public");
  // await fs.copyFile(
  //   "./dist/counter-wc/browser/styles.css",
  //   "./public/styles.css"
  // );
  await fs.copyFile(
    "./dist/counter-wc/main.js",
    "../hello-wc/public/counter/main.js"
  );
  // await fs.copyFile(
  //   "./dist/hello-wc/browser/polyfills.js",
  //   "./public/polyfills.js"
  // );
})();
