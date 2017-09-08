import {bindable} from 'aurelia-framework';
import { FlexChart } from 'wijmo/wijmo.chart';
import {CollectionView } from 'wijmo/wijmo';

export class CmpPanel2 {
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
        { binding: 'savings', name: 'Sparing' },
        { binding: 'credit', name: 'Kreditt' },
        { binding: 'wealth', name: 'Formue' }
      ]
    })
  }

  valueChanged(newValue, oldValue) {

  }

  getData() {
  var data = [];
    data.push({
      area: 'Område',
      savings: Math.random() * 10000,
      credit: Math.random() * 5000,
      wealth: Math.round(Math.random() * 20000),
    });
  return data;
  }
}

/*
import * as zingchart from "zingchart";

export class CmpPanel2 {    
  message: string;
  elmchart: Element;
  icoCredit = require("./ico/Finance-Visa-icon.png")
  icoSavings = require("./ico/Finance-Moneybox-icon.png")
  icoWealth = require("./ico/Finance-Money-Bag-icon.png")

  myConfig = {
    type: 'hbullet',
    title:{
      //text: 'Call Center Daily Goals',
      //fontColor: '#212121'
    },
    backgroundColor:'none',
    plot:{
      barSpace: 8,
      goal:{
        borderWidth: 0,
        alpha: 0.9
      },
      tooltip:{
        text:'%t: %v of %g',
        borderRadius: 3,
        fontSize: 10,
        borderWidth: 0
      }
      //alpha: 0.2
      //backgroundColor:"#ff3344"
 //    #backgroundColor1:"transparent"
    },
    labels:[
      {
        text:'',
        height: 48,
        width: 48,
        backgroundImage:this.icoCredit,
        hook: 'scale:name=scale-x,index=0',
        offsetX: -50
      },
      {
        text:'',
        height: 48,
        width: 48,
        backgroundImage:this.icoSavings,
        hook: 'scale:name=scale-x,index=0',
        offsetX: -50,
        offsetY: 60
      },
      {
        text:'',
        height: 48,
        width: 48,
        backgroundImage:this.icoWealth,
        hook: 'scale:name=scale-x,index=0',
        offsetX: -50,
        offsetY: -60
        
      }
    ],
    scaleX:{
      label:{
        //text: 'Agent',
        //offsetX: -70
      },
      guide:{
        visible: true,
        lineWidth: 1,
        lineStyle: 'solid'
      },
      item:{
        visible: false
      },
      //autoFit: true
    },
    scaleY:{
      guide:{
        visible: false
      }
    },
    plotarea:{
      margin:'50 50 90 120',
      //adjustLayout: true
      backgroundColor: "transparent"
    },
   series: [
     {
       text: 'Formue',
       values: [12],
       backgroundColor:'#009688',
       goals: [11],
       goal: {
         backgroundColor:"#00796b"
       }
     },
     {
       text: 'Sparing',
       values: [5],
       backgroundColor:'#ffc107',
       goals: [2],
       goal:{
         backgroundColor: '#ffa000'
       }
     },
     {
       text: 'Kreditt',
       values: [10],
       backgroundColor:'#9c27b0',
       goals: [5],
       goal:{
         backgroundColor: '#7b1fa2'
       }
     }
   ]
 };

  constructor() {
    this.message = 'Hello world';
    zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
    zingchart.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "ee6b7db5b51705a13dc2339db3edaf6d"];    
    
  }

  attached() {
    zingchart.render({ 
      id: 'elmChart', 
      data: this.myConfig, 
      //defaults: this.myTheme,
      height: '500', 
      width: '344' 
    });  
    
  }

}
*/