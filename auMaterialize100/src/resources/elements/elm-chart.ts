import {bindable} from 'aurelia-framework';
import { FlexChart } from 'wijmo/wijmo.chart';
import {CollectionView } from 'wijmo/wijmo';

export class ElmChart {
  @bindable value;
  elmChartDiv: Element

  constructor () {

  }

  attached() {
    let data = new CollectionView(this.getData());
    let theChart = new FlexChart(this.elmChartDiv, {
      itemsSource: data,
      bindingX: 'country',
      series: [
        { binding: 'sales', name: 'Sales' },
        { binding: 'expenses', name: 'Expenses' },
        { binding: 'downloads', name: 'Downloads' }
      ]
    })
  }

  valueChanged(newValue, oldValue) {

  }

  getData() {
  var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
    data = [];
  for (var i = 0; i < countries.length; i++) {
    data.push({
      country: countries[i],
      sales: Math.random() * 10000,
      expenses: Math.random() * 5000,
      downloads: Math.round(Math.random() * 20000),
    });
  }
  return data;
  }
}

