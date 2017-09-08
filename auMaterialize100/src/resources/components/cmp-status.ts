import { autoinject } from "aurelia-framework";
import { PersonModel } from "../../models/person-model";

@autoinject
export class CmpStatus {
  Progress = {
    Lonsomhet: "string",
    Lojalitet:" string;",
    Tilfredshet: "string;"
  };
  Lonsomhet: number;
  Lojalitet: number;
  Tilfredshet: number;

  constructor(private _pm: PersonModel) {
    let psts = _pm.getPersonStatus();
    this.Lonsomhet = psts.Lonsomhet;
    this.Progress.Lonsomhet = `width: ${psts.Lonsomhet}%`;

    this.Lojalitet = psts.Lojalitet;
    this.Progress.Lojalitet = `width: ${psts.Lojalitet}%`;

    this.Tilfredshet = psts.Tilfredshet;
    this.Progress.Tilfredshet = `width: ${psts.Tilfredshet}%`;
  }
}
