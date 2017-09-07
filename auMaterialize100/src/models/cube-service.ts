import {autoinject} from "aurelia-framework";
//import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class CubeService {
  getDimData() {
    let json = require('./data/dims.json');
    return json.value;
  }
}
