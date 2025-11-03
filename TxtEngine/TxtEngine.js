/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TxtEngine extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(" ", "./TxtEngine/costumes/ .png", { x: 0, y: 0 }),
    ];

    this.sounds = [new Sound("meow", "./TxtEngine/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked.bind(this)),
    ];

    this.vars.ci = 15;
    this.vars.c = 23;
    this.vars.i = 36;
    this.vars.ax = -225;
    this.vars.vx = -69;
    this.vars.vy = -168;
    this.vars.data = [
      "◻",
      "11111100011000110001100011000111111",
      "a",
      "00100010101000110001111111000110001",
      "b",
      "11110100011000111110100011000111110",
      "c",
      "01110100011000010000100001000101110",
      "d",
      "11110100011000110001100011000111110",
      "e",
      "11111100001000011110100001000011111",
      "f",
      "11111100001000011110100001000010000",
      "g",
      "01110100011000010011100011000101110",
      "h",
      "10001100011000111111100011000110001",
      "i",
      "11111001000010000100001000010011111",
      "j",
      "00001000010000100001000011000101110",
      "k",
      "10001100011001011100100101000110001",
      "l",
      "10000100001000010000100001000011111",
      "m",
      "10001110111010110001100011000110001",
      "n",
      "10001100011100110101100111000110001",
      "o",
      "01110100011000110001100011000101110",
      "p",
      "11110100011000111110100001000010000",
      "q",
      "01110100011000110001100011001001101",
      "r",
      "11110100011000111110100011000110001",
      "s",
      "01110100011000001110000011000101110",
      "t",
      "11111001000010000100001000010000100",
      "u",
      "10001100011000110001100011000101110",
      "v",
      "10001100011000110001100010101000100",
      "w",
      "10001100011000110001101011101110001",
      "x",
      "10001100010101000100010101000110001",
      "y",
      "10001100010101000100001000010000100",
      "z",
      "11111000010001000100010001000011111",
      0,
      "01110100011000110001100011000101110",
      1,
      "00100011000010000100001000010001110",
      2,
      "01110100010000100110010001000011111",
      3,
      "01110100010000100110000011000101110",
      4,
      "00011001010100110001111110000100001",
      5,
      "11111100001000011110000011000101110",
      6,
      "01110100011000011110100011000101110",
      7,
      "11111000010001000010001000010000100",
      8,
      "01110100011000101110100011000101110",
      9,
      "01110100011000101111000011000101110",
      "!",
      "00100001000010000100001000000000100",
      "@",
      "00000011101000110111101111000001111",
      "#",
      "00000010101111101010111110101000000",
      "$",
      "00100011111010001110001011111000100",
      "%",
      "00000100010001000100010001000100000",
      "^",
      "00000001000101000000000000000000000",
      "&",
      "00100010100101000100010110101000111",
      "*",
      "10101011101111101110101010000000000",
      "(",
      "00100010001000010000100000100000100",
      ")",
      "00100000100000100001000010001000100",
      "-",
      "00000000000000011111000000000000000",
      "+",
      "00000001000010011111001000010000000",
      "=",
      "00000000001111100000111110000000000",
      "_",
      11111,
      "[",
      "01110010000100001000010000100001110",
      "]",
      "01110000100001000010000100001001110",
      '"',
      "01010010100000000000000000000000000",
      "'",
      "00010001100010000000000000000000000",
      ".",
      10000000,
      "/",
      "00000000010001000100010001000000000",
      "?",
      "01110100010000100010001000000000100",
      ":",
      "00000000000010000000001000000000000",
      ",",
      1000100,
    ];
  }

  // instant version (no yielding)
  writeAtAllignSizeRgb(txt, x, y, al, s, r, g, b) {
    if (this.toNumber(al) === 1) {
      this.vars.ax = x;
    } else if (this.toNumber(al) === 2) {
      this.vars.ax =
        this.toNumber(x) -
        (txt.length / 2) * (6 * this.toNumber(s)) +
        (6 / 2) * this.toNumber(s);
    } else {
      this.vars.ax =
        this.toNumber(x) - (txt.length - 1) * (6 * this.toNumber(s));
    }

    this.vars.ax = Math.floor(
      this.toNumber(this.vars.ax) - (5 * this.toNumber(s)) / 2
    );

    this.penColor = Color.num(
      Math.round(this.toNumber(r)) * 65536 +
        Math.round(this.toNumber(g)) * 256 +
        Math.round(this.toNumber(b))
    );
    this.penSize = this.toNumber(s);
    this.vars.ci = 1;

    for (let i = 0; i < txt.length; i++) {
      this.getCharSync(this.letterOf(txt, this.vars.ci - 1));

      if (this.compare(this.vars.c, -1) > 0) {
        this.vars.vx =
          this.toNumber(this.vars.ax) +
          (this.toNumber(this.vars.ci) - 1) * (6 * this.toNumber(s));
        this.vars.vy = this.toNumber(y) + (6 / 2) * this.toNumber(s);
        this.vars.i = 1;

        for (let row = 0; row < 7; row++) {
          for (let col = 0; col < 5; col++) {
            if (
              this.compare(Math.abs(this.toNumber(this.vars.vx)), 240) < 0 &&
              this.compare(Math.abs(this.toNumber(this.vars.vy)), 180) < 0
            ) {
              if (
                this.toNumber(
                  this.letterOf(
                    this.itemOf(this.vars.data, this.toNumber(this.vars.c)),
                    this.vars.i - 1
                  )
                ) === 1
              ) {
                if (this.toNumber(s) === 1) {
                  this.goto(
                    Math.floor(this.toNumber(this.vars.vx)) + 0.35,
                    Math.floor(this.toNumber(this.vars.vy)) + 0.5
                  );
                  this.penDown = true;
                  this.goto(Math.floor(this.x) + 1, Math.floor(this.y) + 0.5);
                  this.penDown = false;
                } else {
                  this.goto(
                    this.toNumber(this.vars.vx),
                    this.toNumber(this.vars.vy)
                  );
                  this.penDown = true;
                  this.penDown = false;
                }
              }
            }
            this.vars.i++;
            this.vars.vx += this.toNumber(s);
          }
          this.vars.vx =
            this.toNumber(this.vars.ax) +
            (this.toNumber(this.vars.ci) - 1) * (6 * this.toNumber(s));
          this.vars.vy = this.toNumber(this.vars.vy) - this.toNumber(s);
        }
      }
      this.vars.ci++;
    }
  }

  getCharSync(c) {
    if (this.toNumber(c) === 0) {
      this.vars.c = -1;
    } else if (this.arrayIncludes(this.vars.data, c)) {
      this.vars.c = 1;
      while (
        !(
          this.compare(this.itemOf(this.vars.data, this.vars.c - 1), c) === 0 ||
          this.compare(this.vars.c, this.vars.data.length - 1) > 0
        )
      ) {
        this.vars.c++;
      }
      if (this.compare(this.vars.c, this.vars.data.length - 1) > 0) {
        this.vars.c = 1;
      }
    } else {
      this.vars.c = 1;
    }
  }

  whenGreenFlagClicked() {
    const draw = () => {
      this.clearPen();

      if (this.compare(this.stage.vars.cookies, 999.99) > 0) {
        this.writeAtAllignSizeRgb(
          this.toString(this.stage.vars.cookiesFormated) + " cookies",
          0,
          155,
          2,
          2.25,
          0,
          0,
          0
        );
      } else {
        if (this.toNumber(this.stage.vars.cookiesFormated) === 1) {
          this.writeAtAllignSizeRgb(
            this.toString(this.stage.vars.cookiesFormated) + " cookie",
            0,
            155,
            2,
            2.5,
            0,
            0,
            0
          );
        } else {
          this.writeAtAllignSizeRgb(
            this.toString(this.stage.vars.cookiesFormated) + " cookies",
            0,
            155,
            2,
            2.5,
            0,
            0,
            0
          );
        }
      }

      this.writeAtAllignSizeRgb(
        this.toString(this.stage.vars.cpsFormated) + " cookies/second",
        0,
        130,
        2,
        2,
        0,
        0,
        0
      );

      if (this.toNumber(this.stage.vars.cpFormated) === 1) {
        this.writeAtAllignSizeRgb(
          this.toString(this.stage.vars.cpFormated) + " cookie/click",
          -220,
          -160,
          1,
          2,
          0,
          0,
          0
        );
      } else {
        this.writeAtAllignSizeRgb(
          this.toString(this.stage.vars.cpFormated) + " cookies/click",
          -220,
          -160,
          1,
          2,
          0,
          0,
          0
        );
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
  }
}
