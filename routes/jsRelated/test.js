import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const path1 = resolve(__dirname, "../../", "public/files");

// const isExist = fs.existsSync(path1);
// console.log(isExist, path1);
const fileSavePath = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path1 = resolve(__dirname, "../../", "public/files");
  return path1;
};
const path1 = fileSavePath();
const path2 = resolve(path1, "test");
const res = fs.existsSync(path2);
console.log(path1, path2, res);
