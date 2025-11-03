import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Cookie from "./Cookie/Cookie.js";
import TxtEngine from "./TxtEngine/TxtEngine.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Cookie: new Cookie({
    x: 0,
    y: -20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  TxtEngine: new TxtEngine({
    x: -61,
    y: -166,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
