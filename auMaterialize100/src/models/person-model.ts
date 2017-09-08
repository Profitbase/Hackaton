
export class PersonModel {
  private _personInfo = {
    Navn: "Peder Aas",
    Titel: "Prosjekt leder",
    Epost: "peder.as@norge.no",
    Mobil: "97679769",
    Notat: "Peder As er kjent fra uttallige sammenhenger og ser ut til å ha en finger i det meste."
  };

  private _statusInfo = {
    Lonsomhet: 34,
    Lojalitet: 55,
    Tilfredshet:77
  }

  getPersonInfo() {
    return this._personInfo;
  }

  getPersonStatus() {
    return this._statusInfo;
  }
}
