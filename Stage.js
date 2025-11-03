/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.clicked = 0;
    this.vars.cookies = 82;
    this.vars.cp = 1;
    this.vars.cps = 0;
    this.vars.cookiesFormated = 82;
    this.vars.cpsFormated = 0;
    this.vars.cpFormated = 1;
    this.vars.suffix = [
      " thousand",
      " million",
      " billion",
      " trillion",
      " quadrillion",
      " quintillion",
      " sextillion",
      " septillion",
      " octillion",
      " nonillion",
      " decillion",
      " undecillion",
      " duodecillion",
      " tredecillion",
      " quattuordecillion",
      " quindecillion",
      " sexdecillion",
      " septendecillion",
      " octodecillion",
      " novemdecillion",
      " vigintillion",
      " unvigintillion",
      " duovigintillion",
      " tresvigintillion",
      " quattuorvigintillion",
      " quinvigintillion",
      " sesvigintillion",
      " septenvigintillion",
      " octovigintillion",
      " novemvigintillion",
      " trigintillion",
      " untrigintillion",
      " duotrigintillion",
      " tretrigintillion",
      " quattuortrigintillion",
      " quintrigintillion",
      " sextrigintillion",
      " septentrigintillion",
      " octotrigintillion",
      " novemtrigintillion",
      " quadragintillion",
      " quinquagintillion",
      " sexagintillion",
      " septuagintillion",
      " octogintillion",
      " nonagintillion",
      " centillion",
      " uncentillion",
      " duocentillion",
      " trecentillion",
      " quattuorcentillion",
      " quincentillion",
      " sexcentillion",
      " septencentillion",
      " octocentillion",
      " novemcentillion",
      " 2centillion",
      " uncentillion",
      " duocentillion",
      " trecentillion",
      " quattuorcentillion",
      " quincentillion",
      " sexcentillion",
      " septencentillion",
      " octocentillion",
      " novemcentillion",
      " 3centillion",
      " uncentillion",
      " duocentillion",
      " trecentillion",
      " quattuorcentillion",
      " quincentillion",
      " sexcentillion",
      " septencentillion",
      " octocentillion",
      " novemcentillion",
      " 4centillion",
      " uncentillion",
      " duocentillion",
      " trecentillion",
      " quattuorcentillion",
      " quincentillion",
      " sexcentillion",
      " septencentillion",
      " octocentillion",
      " novemcentillion",
      " 5centillion",
      " uncentillion",
      " duocentillion",
      " trecentillion",
      " quattuorcentillion",
      " quincentillion",
      " sexcentillion",
      " septencentillion",
      " octocentillion",
      " novemcentillion",
      " 6centillion",
      " uncentillion",
      " duocentillion",
      " trecentillion",
      " quattuorcentillion",
    ];
  }
}
