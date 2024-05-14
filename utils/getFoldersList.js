import fs from "fs";
import path from "path";

export default function getFolderList(basePath) {
  const directories = fs
    .readdirSync(basePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return directories;
}
