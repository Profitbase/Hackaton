import * as Materialize from "materialize-css";

export class App {
  message = 'Hello World!';

  tip() {
    //this.message = "Mooor Heeeelllllooo WWWWWWWWWWWorld";
    Materialize.toast('I am a toast!', 4000);
  }
}
