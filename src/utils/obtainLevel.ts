import { LevelTypes } from "../common";

function obtainLevel(path: string) {
  return path.split("/")[2] as LevelTypes;
}

export { obtainLevel };
