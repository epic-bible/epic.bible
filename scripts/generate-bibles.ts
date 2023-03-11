import { writeFileSync } from "fs";
import { resolve } from "path";
import consola from "consola";

/**
 * Generate Bibles
 */
function generateBibles() {
  const KJV = {
    id: "kjv",
    name: "King James Version",
    abbreviation: "KJV",
    language: "en",
    version_id: "kjv",
  };

  writeFileSync(resolve(__dirname, "./out/bibles.json"), JSON.stringify([KJV]));

  return [KJV];
}

try {
  const bibles = generateBibles();
  consola.success("Bibles generated successfully", bibles);
} catch (error) {
  consola.error(error);
}
