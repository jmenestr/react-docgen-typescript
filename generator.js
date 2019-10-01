const stuff = require("./lib");

const result =
  stuff.withDefaultConfig({
    shouldExtractLiteralValuesFromEnum: true
  }).parse(
    require('path').resolve(__dirname, "./example.tsx"),
  );

  console.log(result[0].props)