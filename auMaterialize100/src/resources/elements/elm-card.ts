import {bindable} from 'aurelia-framework';

export class ElmCard {
  @bindable title;
  @bindable text;

  valueChanged(newValue, oldValue) {

  }
}

