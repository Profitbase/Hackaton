import {autoinject} from "aurelia-framework";
import * as Materialize from "materialize-css";
import {CubeModel,IDim} from "./models/cube-model";

@autoinject
export class App {
  message = 'Hello World!';

  constructor(private _mdl: CubeModel) {

  }

  tip() {
    //this.message = "Mooor Heeeelllllooo WWWWWWWWWWWorld";
    Materialize.toast('I am a toast!', 4000);
  }

  getData() {

    let ds = this._mdl.getCubeDims("DM_Watson","WatsonModel");
    let name0 = ds[0].Name;
  }
}
