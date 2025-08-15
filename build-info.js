import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const buildInfo = {
  date: new Date().toISOString(),
};

writeFileSync(
  join(__dirname, "public", "build.json"),
  JSON.stringify(buildInfo, null, 2)
);
