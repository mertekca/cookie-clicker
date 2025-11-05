/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cookie extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Cookie", "./Cookie/costumes/Cookie.svg", {
        x: 84.9350356449965,
        y: 84.69975853794666,
      }),
    ];

    this.sounds = [new Sound("Meow", "./Cookie/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
    ];

    this.vars.targetSize = 100;
    this.vars.size = 100;
    this.vars.formattedNumber = "0"; // assumed string
    this.vars.scaled = 0;
    this.vars.powerOf1000 = 0;
    this.vars.magnitude = 0;
    this.vars.digits = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.targetSize = 100;
    this.costume = "Cookie";
    this.vars.size = this.vars.targetSize;
    while (true) {
      this.vars.size +=
        (this.vars.targetSize - this.vars.size) / 2;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.cp = 1;
    this.stage.vars.cookies = 0;
    while (true) {
      // Format cookies (assume formattedNumber is a string)
      yield* this.formatNumberDigits(Math.floor(this.stage.vars.cookies), 4);
      this.stage.vars.cookiesFormated = this.vars.formattedNumber;

      // Format cp
      yield* this.formatNumberDigits(Math.floor(this.stage.vars.cp), 4);
      this.stage.vars.cpFormated = this.vars.formattedNumber;

      // Format cps
      yield* this.formatNumberDigits(Math.floor(this.stage.vars.cps), 4);
      this.stage.vars.cpsFormated = this.vars.formattedNumber;

      // Set display size and click behavior
      this.size = 110;
      if (this.keyPressed("space")) {
        this.vars.targetSize = 115;
        yield* this.click();
      } else if (this.touching("mouse")) {
        if (this.mouse.down) {
          this.vars.targetSize = 120;
          yield* this.click();
        } else {
          this.vars.targetSize = 90;
          this.stage.vars.clicked = 0;
        }
      } else {
        this.vars.targetSize = 100;
        if (!this.keyPressed("space")) {
          this.stage.vars.clicked = 0;
        }
      }

      this.size = this.vars.size;
      yield;
    }
  }

  *click() {
    if (this.stage.vars.clicked === 0) {
      this.stage.vars.clicked = 1;
      this.stage.vars.cookies += this.stage.vars.cp;
    }
  }

  *formatNumberDigits(num, digits) {
    if (this.stage.vars.cookies === Infinity) {
      this.vars.formattedNumber = "∞"; // string assumed
    } else {
      this.vars.magnitude = Math.floor(Math.log10(num * 1.0000001 + 1));
      this.vars.powerOf1000 = Math.floor(this.vars.magnitude / 3);
      this.vars.scaled = (num * 1.0000001) / 10 ** (this.vars.powerOf1000 * 3);
      this.vars.digits = Math.floor(Math.log10(this.vars.scaled * 1.0000001)) + 1;
      this.vars.scaled =
        Math.floor(this.vars.scaled * 10 ** (digits - this.vars.digits)) /
        10 ** (digits - this.vars.digits);
      // Assume formattedNumber is already a string
      this.vars.formattedNumber =
        this.vars.scaled +
        this.itemOf(this.stage.vars.suffix, this.vars.powerOf1000 - 1);
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.cps = 0;
    while (true) {
      this.stage.vars.cookies += this.stage.vars.cps / 5;
      yield* this.wait(0.2);
      yield;
    }
  }
}
