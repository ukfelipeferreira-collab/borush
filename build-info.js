const fs = require("fs");
const path = require("path");

const buildInfo = {
  date: new Date().toISOString(),
};

fs.writeFileSync(
  path.join(__dirname, "public", "build.json"),
  JSON.stringify(buildInfo, null, 2)
);
