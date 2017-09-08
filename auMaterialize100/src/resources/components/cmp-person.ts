import { autoinject } from "aurelia-framework";
import {PersonModel} from "../../models/person-model";

@autoinject
export class CmpPerson {

  Navn: string;
  Epost: string;
  Mobil: string;
  Titel: string;
  Notat: string;

  constructor(private _pm: PersonModel) {
    let pinfo = _pm.getPersonInfo();
    this.Navn = pinfo.Navn;
    this.Mobil = pinfo.Mobil;
    this.Epost = pinfo.Epost;
    this.Titel = pinfo.Titel;
    this.Notat = pinfo.Notat;
  }
}
