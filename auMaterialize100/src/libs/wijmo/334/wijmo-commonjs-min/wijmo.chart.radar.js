﻿/*
    *
    * Wijmo Library 5.20172.334
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),RadarChartType,FlexRadar,FlexRadarSeries,FlexRadarAxis,_RadarLinePlotter,_RadarBarPlotter;Object.defineProperty(exports,"__esModule",{value:!0});var wjcChart=require("wijmo/wijmo.chart"),wjcCore=require("wijmo/wijmo"),wjcSelf=require("wijmo/wijmo.chart.radar");window.wijmo=window.wijmo||{};window.wijmo.chart=window.wijmo.chart||{};window.wijmo.chart.radar=wjcSelf,function(n){n[n.Column=0]="Column";n[n.Scatter=1]="Scatter";n[n.Line=2]="Line";n[n.LineSymbols=3]="LineSymbols";n[n.Area=4]="Area"}(RadarChartType=exports.RadarChartType||(exports.RadarChartType={}));FlexRadar=function(n){function t(t,i){var r=n.call(this,t,i)||this;return r._chartType=RadarChartType.Line,r._startAngle=0,r._totalAngle=360,r._reversed=!1,r._areas=[],r}return __extends(t,n),Object.defineProperty(t.prototype,"_radarLinePlotter",{get:function(){return this.__radarLinePlotter==null&&(this.__radarLinePlotter=new _RadarLinePlotter,this._initPlotter(this.__radarLinePlotter)),this.__radarLinePlotter},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_radarColumnPlotter",{get:function(){return this.__radarColumnPlotter==null&&(this.__radarColumnPlotter=new _RadarBarPlotter,this._initPlotter(this.__radarColumnPlotter)),this.__radarColumnPlotter},enumerable:!0,configurable:!0}),t.prototype._initAxes=function(){n.prototype._initAxes.call(this);this.axes.pop();this.axes.pop();this.axisX=new FlexRadarAxis(wjcChart.Position.Bottom);this.axisX.majorGrid=!0;this.axisY=new FlexRadarAxis(wjcChart.Position.Left);this.axisY.majorTickMarks=wjcChart.TickMark.Outside;this.axes.push(this.axisX);this.axes.push(this.axisY)},t.prototype._layout=function(t,i,r){var f,u;n.prototype._layout.call(this,t,i,r);f=this.axisX._height;this._plotRect.top+=f/2;u=this._plotRect;this._radius=Math.min(u.width,u.height)/2;this._center=new wjcCore.Point(u.left+u.width/2,u.top+u.height/2)},Object.defineProperty(t.prototype,"chartType",{get:function(){return this._chartType},set:function(n){n!=this._chartType&&(this._chartType=wjcCore.asEnum(n,RadarChartType),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startAngle",{get:function(){return this._startAngle},set:function(n){n!=this._startAngle&&(this._startAngle=wjcCore.asNumber(n,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalAngle",{get:function(){return this._totalAngle},set:function(n){n!=this._totalAngle&&n>=0&&(this._totalAngle=wjcCore.asNumber(n,!0),this._totalAngle<=0&&(wjcCore.assert(!1,"totalAngle must be greater than 0."),this._totalAngle=0),this._totalAngle>360&&(wjcCore.assert(!1,"totalAngle must be less than or equal to 360."),this._totalAngle=360),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"reversed",{get:function(){return this._reversed},set:function(n){n!=this._reversed&&(this._reversed=wjcCore.asBoolean(n,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stacking",{get:function(){return this._stacking},set:function(n){n!=this._stacking&&(this._stacking=wjcCore.asEnum(n,wjcChart.Stacking),this.invalidate())},enumerable:!0,configurable:!0}),t.prototype._getChartType=function(){var n=wjcChart.ChartType.Line;switch(this.chartType){case RadarChartType.Area:n=wjcChart.ChartType.Area;break;case RadarChartType.Line:n=wjcChart.ChartType.Line;break;case RadarChartType.Column:n=wjcChart.ChartType.Column;break;case RadarChartType.LineSymbols:n=wjcChart.ChartType.LineSymbols;break;case RadarChartType.Scatter:n=wjcChart.ChartType.Scatter}return n},t.prototype._getPlotter=function(t){var u=this.chartType,i=null,f=!1,r;t&&(r=t.chartType,r!=null&&r!=u&&(u=r,f=!0));switch(u){case RadarChartType.Line:this._radarLinePlotter.hasSymbols=!1;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!1;i=this._radarLinePlotter;break;case RadarChartType.LineSymbols:this._radarLinePlotter.hasSymbols=!0;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!1;i=this._radarLinePlotter;break;case RadarChartType.Area:this._radarLinePlotter.hasSymbols=!1;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!0;i=this._radarLinePlotter;break;case RadarChartType.Scatter:this._radarLinePlotter.hasSymbols=!0;this._radarLinePlotter.hasLines=!1;this._radarLinePlotter.isArea=!1;i=this._radarLinePlotter;break;case RadarChartType.Column:this._radarColumnPlotter.isVolume=!1;this._radarColumnPlotter.width=.8;i=this._radarColumnPlotter;break;default:i=n.prototype._getPlotter.call(this,t)}return i},t.prototype._convertPoint=function(n,t){var i=new wjcCore.Point,r=this._center;return i.x=r.x+n*Math.sin(t),i.y=r.y-n*Math.cos(t),i},t.prototype._createSeries=function(){return new FlexRadarSeries},t.prototype._clearCachedValues=function(){n.prototype._clearCachedValues.call(this);this._isPolar=!1;this._areas=[]},t.prototype._performBind=function(){n.prototype._performBind.call(this);this._xDataType===wjcCore.DataType.Number&&(this._isPolar=!0)},t.prototype._render=function(t,i){i===void 0&&(i=!0);this._areas=[];n.prototype._render.call(this,t,i)},t}(wjcChart.FlexChartCore);exports.FlexRadar=FlexRadar;FlexRadarSeries=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),Object.defineProperty(t.prototype,"chartType",{get:function(){return this._finChartType},set:function(n){n!=this._finChartType&&(this._finChartType=wjcCore.asEnum(n,RadarChartType,!0),this._invalidate())},enumerable:!0,configurable:!0}),t.prototype._getChartType=function(){var n;switch(this.chartType){case RadarChartType.Area:n=wjcChart.ChartType.Area;break;case RadarChartType.Line:n=wjcChart.ChartType.Line;break;case RadarChartType.Column:n=wjcChart.ChartType.Column;break;case RadarChartType.LineSymbols:n=wjcChart.ChartType.LineSymbols;break;case RadarChartType.Scatter:n=wjcChart.ChartType.Scatter}return n},t}(wjcChart.SeriesBase);exports.FlexRadarSeries=FlexRadarSeries;FlexRadarAxis=function(n){function t(){var t=n!==null&&n.apply(this,arguments)||this;return t._points=[],t._axisLabels=[],t}return __extends(t,n),t.prototype._render=function(t){var i=this,r,u;n.prototype._render.call(this,t);r=this._axisLabels;r.length&&(u=function(){var n=i.axisType==wjcChart.AxisType.X?'wj-axis-x-labels '+wjcChart.FlexChart._CSS_AXIS_X:'wj-axis-y-labels '+wjcChart.FlexChart._CSS_AXIS_Y;t.startGroup(n);r.forEach(function(n){var r=n.labelAngle;r>0?r==90?wjcChart.FlexChart._renderRotatedText(t,n.text,n.pos,n.align,n.vAlign,n.pos,r,n.class):wjcChart.FlexChart._renderRotatedText(t,n.text,n.pos,n.align,n.vAlign,n.pos,r,n.class):r<0?r==-90?wjcChart.FlexChart._renderRotatedText(t,n.text,n.pos,n.align,n.vAlign,n.pos,r,n.class):wjcChart.FlexChart._renderRotatedText(t,n.text,n.pos,n.align,n.vAlign,n.pos,r,n.class):i._renderLabel(t,n.val,n.text,n.pos,n.align,n.vAlign,n.class)});t.endGroup();i._axisLabels=[];i._chart.rendered.removeHandler(u)},this._chart.rendered.addHandler(u,this))},t.prototype._getHeight=function(t,i){var r=n.prototype._getHeight.call(this,t,i);return this._axisType==wjcChart.AxisType.Y&&(r=4),this._height=r*2,r*2},t.prototype._updateActualLimits=function(t,i,r,u,f){var h=this;u===void 0&&(u=null);f===void 0&&(f=null);n.prototype._updateActualLimits.call(this,t,i,r,u,f);var e=this._chart,s=this._lbls,c=this.actualMin.valueOf?this.actualMin.valueOf():this.actualMin,l=this.actualMax.valueOf?this.actualMax.valueOf():this.actualMax,o;this._lbls&&this===e.axisX&&(e._angles=[],this._isTimeAxis&&this._lbls.length===0&&this._values.forEach(function(n){s.push(h._formatValue(n))}),o=s.length,e.totalAngle<360&&(o-=1),s.forEach(function(n,t){var i=c+t/o*(l-c),r=e.startAngle+t/o*e.totalAngle;isNaN(r)||isNaN(i)||e._angles.push({value:h.convert(i),angle:r})}))},t.prototype._updateActualLimitsByChartType=function(n,t,i){var u=this._chart,f=u._getChartType(),r;return f!=wjcChart.ChartType.Column&&u.totalAngle===360&&this.axisType===wjcChart.AxisType.X&&(this._isTimeAxis?(r=(u._xlabels.length||u._xvals.length)-1,r=r<1?1:r,i+=(i-t)/r):i+=1),{min:t,max:i}},t.prototype.convert=function(n,t,i){var f=t==null?this.actualMax:t,r=i==null?this.actualMin:i,u=this._chart,e,o;return u?f==r?0:this.axisType===wjcChart.AxisType.X?u.reversed?(u.startAngle-(n-r)/(f-r)*u.totalAngle)*Math.PI/180:(u.startAngle+(n-r)/(f-r)*u.totalAngle)*Math.PI/180:(e=this.logBase,e?n<=0?NaN:(o=Math.log(f/r),Math.log(n/r)/o*u._radius):(n-r)/(f-r)*u._radius):NaN},t.prototype._renderLineAndTitle=function(n){var t=this._chart,r=wjcChart.FlexChart._CSS_LINE,i=(t.startAngle-90)*Math.PI/180,u=t.totalAngle*Math.PI/180,f=t._radius;this.axisType===wjcChart.AxisType.X&&this.axisLine&&(n.stroke=wjcChart.FlexChart._FG,t._isPolar?(i=t.reversed?i-u:i,n.drawPieSegment(t._center.x,t._center.y,f,i,u,r)):this._renderPolygon(n,f,r))},t.prototype._renderPolygon=function(n,t,i){var r=this._chart,u=r._angles,o=u.length,h=r.axisX.minorGrid,f=[],e=[],s;u.forEach(function(n,i){var o,s;h&&i>0&&(o=r._convertPoint(t,n.value-(n.value-u[i-1].value)/2),f.push(o.x),e.push(o.y));s=r._convertPoint(t,n.value);f.push(s.x);e.push(s.y)});r.totalAngle<360?(f.push(r._center.x),e.push(r._center.y)):h&&o>=2&&(s=r._convertPoint(t,u[o-1].value-(u[o-2].value-u[o-1].value)/2),f.push(s.x),e.push(s.y));n.drawPolygon(f,e,i)},t.prototype._renderMinors=function(n,t){var u=this,i=this._chart,c=wjcChart.FlexChart._CSS_GRIDLINE_MINOR,l=this.minorGrid,f=i._angles,o=f.length,a=i.axisX.minorGrid,v=wjcChart.FlexChart._FG,y=this._GRIDLINE_WIDTH,p=i.startAngle*Math.PI/180,w=i.totalAngle*Math.PI/180,e=this._TICK_OVERLAP,s=this.minorTickMarks,h=!0,r;this._vals.minor=t;s==wjcChart.TickMark.Outside?e=1:s==wjcChart.TickMark.Inside?e=-1:s==wjcChart.TickMark.Cross?e=0:h=!1;this.axisType==wjcChart.AxisType.Y?(n.stroke=v,n.strokeWidth=y,t.forEach(function(t){var s=u.convert(t),v;l&&u._renderYGridLine(n,i,s,c);h&&(f.forEach(function(t,o){var h,c;a&&o>0&&(r=t.value-(t.value-f[o-1].value)/2,h=i._convertPoint(s,r),u._drawMinorTickLength(n,e,r,h));r=t.value;c=i._convertPoint(s,r);u._drawMinorTickLength(n,e,r,c)}),a&&o>=2&&(r=f[o-1].value-(f[o-2].value-f[o-1].value)/2,v=i._convertPoint(s,r),u._drawMinorTickLength(n,e,r,v)))})):(n.stroke=v,n.strokeWidth=y,t.forEach(function(t){var r=u.convert(t);l&&u._renderXGridLine(n,i,r,c);h}))},t.prototype._drawMinorTickLength=function(n,t,i,r){var u=this._TICK_HEIGHT,f=wjcChart.FlexChart._CSS_TICK_MINOR,e=.5*(t-1)*u*Math.cos(i),o=.5*(1+t)*u*Math.cos(i),s=.5*(t-1)*u*Math.sin(i),h=.5*(1+t)*u*Math.sin(i);n.drawLine(r.x+e,r.y+s,r.x+o,r.y+h,f)},t.prototype._renderLabelsAndTicks=function(n,t,i,r,u,f,e,o,s){var b,a,k,c,l,y,p;this._points=[];u=this.labelAngle||0;var d=!0,h=this._chart,g=this.labelPadding||2,v=wjcChart.FlexChart._CSS_LABEL,nt=wjcChart.FlexChart._CSS_GRIDLINE,ft=wjcChart.FlexChart._CSS_TICK,tt=wjcChart.FlexChart._FG,it=this._TICK_WIDTH,w=this.majorGrid,rt=wjcChart.FlexChart._FG,ut=this._GRIDLINE_WIDTH,et=h.startAngle*Math.PI/180,ot=h.totalAngle*Math.PI/180;return this.axisType==wjcChart.AxisType.Y?(w=i!=this.actualMin&&w&&i!=this.actualMax,b=this.convert(i),a=h._convertPoint(b,et),w&&(n.stroke=rt,n.strokeWidth=ut,this._renderYGridLine(n,h,b,nt)),n.stroke=tt,n.strokeWidth=it,e&&(c=new wjcCore.Point(a.x-g-Math.abs(o-s),a.y),this._axisLabels.push({val:i,text:r,pos:c,align:2,vAlign:1,labelAngle:u,class:v})),f!=wjcChart.TickMark.None&&d&&n.drawLine(a.x-s,a.y,a.x-o,a.y,ft)):(k=this.convert(i),w&&(n.stroke=rt,n.strokeWidth=ut,this._renderXGridLine(n,h,k,nt)),n.stroke=tt,n.strokeWidth=it,e&&(c=h._convertPoint(h._radius+g,k),l=h._angles&&h._angles.length?h._angles[t].angle:h.startAngle+(i-this.actualMin)*h.totalAngle/(this.actualMax-this.actualMin),l=l%360,l=l>=0?l:l+360,y=this._getXLabelVAlign(l),p=this._getXLabelAlign(l),h._isPolar&&(r=this._formatValue(l)),u>0?u==90?wjcChart.FlexChart._renderRotatedText(n,r,c,p,y,c,u,v):wjcChart.FlexChart._renderRotatedText(n,r,c,p,y,c,u,v):u<0?u==-90?wjcChart.FlexChart._renderRotatedText(n,r,c,p,y,c,u,v):wjcChart.FlexChart._renderRotatedText(n,r,c,p,y,c,u,v):this._renderLabel(n,i,r,c,p,y,v))),d},t.prototype._renderXGridLine=function(n,t,i,r){var u=t._center,f=t._convertPoint(t._radius,i);n.drawLine(u.x,u.y,f.x,f.y,r)},t.prototype._renderYGridLine=function(n,t,i,r){var o=t._angles,f=t._center,u=t.startAngle*Math.PI/180,e=t.totalAngle*Math.PI/180;t._isPolar?(u=(t.startAngle-90)*Math.PI/180,u=t.reversed?u-e:u,n.drawPieSegment(f.x,f.y,i,u,e,r)):this._renderPolygon(n,i,r)},t.prototype._getXLabelVAlign=function(n){var t=1,i=this._chart,r=i.startAngle,u=i.reversed;return u&&(n=(360+r+(r%360-n%360))%360),n===0?t=2:n===180&&(t=0),t},t.prototype._getXLabelAlign=function(n){var t=0,i=this._chart,r=i.startAngle,u=i.reversed;return u&&(n=(360+r+(r%360-n%360))%360),n>0&&n<180?t=-1:n>180&&n<360&&(t=1),t+1},t.prototype._createTimeLabels=function(t,i,r,u){var e=this,f,o;if(this._axisType==wjcChart.AxisType.Y)n.prototype._createTimeLabels.call(this,t,i,r,u);else{if(f=this._values,o=this.format,!f||f.length===0)return;f.forEach(function(n){r.push(n);u.push(e._formatValue(n))})}},t}(wjcChart.Axis);exports.FlexRadarAxis=FlexRadarAxis;_RadarLinePlotter=function(n){function t(){var t=n!==null&&n.apply(this,arguments)||this;return t.isArea=!1,t}return __extends(t,n),t.prototype._getLabelPoint=function(n,t){var i=n._getAxisX(),r=n._getAxisY(),u=i.convert(t.dataX),f=r.convert(t.dataY);return this.chart._convertPoint(f,u)},t.prototype.plotSeries=function(n,t,i,r,u){var s=wjcCore.asType(r,wjcChart.SeriesBase),h=this.chart,et=s._getChartType()||h._getChartType(),l=h.series.indexOf(r),b=r.getValues(0),p=r.getValues(1),nt,tt,ct,it,lt,ft,k,v,y,f,e,o;if(b){p||(p=this.dataInfo.getXVals());var d=wjcChart._BasePlotter.cloneStyle(r.style,['fill']),w=b.length,ot=!0;p?w=Math.min(w,p.length):(ot=!1,p=new Array(w));var vt=this._DEFAULT_WIDTH,g=s._getSymbolFill(l),yt=s._getAltSymbolFill(l)||g,rt=s._getSymbolStroke(l),pt=s._getAltSymbolStroke(l)||rt,ut=s._getSymbolSize();n.stroke=rt;n.strokeWidth=vt;n.fill=g;var c=[],a=[],st=this.stacking!=wjcChart.Stacking.None&&!s._isCustomAxisY(),ht=this.stacking==wjcChart.Stacking.Stacked100pc&&!s._isCustomAxisY();for(s._getChartType()!==undefined&&(st=ht=!1),nt=this.chart.interpolateNulls,tt=!1,f=0;f<w;f++)if(e=ot?p[f]:f,o=b[f],wjcChart._DataInfo.isValid(e)&&wjcChart._DataInfo.isValid(o)){st&&(ht&&(ct=this.dataInfo.getStackedAbsSum(e),o=o/ct),o>=0?(it=isNaN(this.stackPos[e])?0:this.stackPos[e],o=this.stackPos[e]=it+o):(it=isNaN(this.stackNeg[e])?0:this.stackNeg[e],o=this.stackNeg[e]=it+o));lt=new wjcChart._DataPoint(l,f,e,o);var wt=t.convert(e),bt=i.convert(o),at=this.chart._convertPoint(bt,wt);e=at.x;o=at.y;isNaN(e)||isNaN(o)?(tt=!0,nt!==!0&&(c.push(undefined),a.push(undefined))):(c.push(e),a.push(o),ft=new wjcChart._CircleArea(new wjcCore.Point(e,o),.5*ut),ft.tag=lt,this.hitTester.add(ft,l))}else tt=!0,nt!==!0&&(c.push(undefined),a.push(undefined));if(k=0,this.hasLines)if(n.fill=this.isArea?u._getColorLight(l):'none',tt&&nt!==!0){for(v=[],y=[],f=0;f<w;f++)c[f]===undefined?(v.push(undefined),y.push(0)):(v.push(c[f]),y.push(a[f]));v.length>1&&(h._isPolar&&et!==wjcChart.ChartType.Area?this._drawLines(n,v,y,null,d,this.chart._plotrectId):(h.totalAngle<360&&(v.push(h._center.x),y.push(h._center.y)),n.drawPolygon(v,y,null,d,this.chart._plotrectId)),this.hitTester.add(new wjcChart._LinesArea(v,y),l),k++)}else h._isPolar&&et!==wjcChart.ChartType.Area?this._drawLines(n,c,a,null,d,this.chart._plotrectId):(h.totalAngle<360&&(c.push(h._center.x),a.push(h._center.y)),n.drawPolygon(c,a,null,d,this.chart._plotrectId)),this.hitTester.add(new wjcChart._LinesArea(c,a),l),k++;for(n.fill=g,f=0;f<w;f++)e=c[f],o=a[f],this.hasLines===!1&&(n.fill=b[f]>0?g:yt,n.stroke=b[f]>0?rt:pt),this.isValid(e,o,t,i)&&((this.hasSymbols||this.chart.itemFormatter)&&ut>0&&this._drawSymbol(n,e,o,ut,s,f),r._setPointIndex(f,k),k++)}},t}(wjcChart._LinePlotter);exports._RadarLinePlotter=_RadarLinePlotter;_RadarBarPlotter=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype.adjustLimits=function(n){this.dataInfo=n;var u=n.getMinX(),t=n.getMinY(),f=n.getMaxX(),r=n.getMaxY(),i=n.getDeltaX();return i<=0&&(i=1),this.chart.totalAngle<360&&(i=0),this.unload(),this.chart.axisY.logBase||(this.origin>r?r=this.origin:this.origin<t&&(t=this.origin)),new wjcCore.Rect(u,t,f-u+i,r-t)},t.prototype._getLabelPoint=function(n,t){var i=n._getAxisX(),r=n._getAxisY(),u=i.convert(t.dataX),f=r.convert(t.dataY);return this.chart._convertPoint(f,u)},t.prototype.plotSeries=function(n,t,i,r,u,f){var h=this.chart.series.indexOf(r),v=wjcCore.asType(r,wjcChart.SeriesBase),ri=this.chart.options,c=this.width,e=this.chart,tt=Math.PI/-2,rt,b,lt,yt,pt,l,s,a,o,k,d,kt,dt,gt,nt;f=f||0;var vt=v._getAxisY()._uniqueId,w,ui=this.stackNegMap[vt],et=this.stackPosMap[vt],it=this.stacking!=wjcChart.Stacking.None,ot=this.stacking==wjcChart.Stacking.Stacked100pc,st=r.getValues(0),p=r.getValues(1);if(st){p||(p=this.dataInfo.getXVals());rt=p?e.totalAngle/p.length:e.totalAngle/(t.actualMax-t.actualMin);rt>0&&(c=it?rt*c*Math.PI/180:rt*Math.pow(c,f+1)*Math.PI/180);var ut=v._getSymbolFill(h),ht=v._getAltSymbolFill(h)||ut,ft=v._getSymbolStroke(h),ct=v._getAltSymbolStroke(h)||ft,g=st.length;p!=null&&(g=Math.min(g,p.length));b=this.origin;lt=0;v._getChartType()!==undefined&&(it=ot=!1);b<i.actualMin?b=i.actualMin:b>i.actualMax&&(b=i.actualMax);var ii=i.convert(b),wt=t.actualMin,bt=t.actualMax;for(v._isCustomAxisY()&&(it=ot=!1),e._areas[h]||(e._areas[h]=[]),l=0;l<g;l++)if(s=p?p[l]:l,a=st[l],this._getSymbolOrigin&&(ii=i.convert(this._getSymbolOrigin(b,l,g))),this._getSymbolStyles&&(o=this._getSymbolStyles(l,g),ut=o&&o.fill?o.fill:ut,ht=o&&o.fill?o.fill:ht,ft=o&&o.stroke?o.stroke:ft,ct=o&&o.stroke?o.stroke:ct),yt=a>0?ut:ht,pt=a>0?ft:ct,n.fill=yt,n.stroke=pt,wjcChart._DataInfo.isValid(s)&&wjcChart._DataInfo.isValid(a)){if(it){if(k=s-.5*c,d=s+.5*c,k<wt&&d<wt||k>bt&&d>bt)continue;if(k=t.convert(k),d=t.convert(d),!wjcChart._DataInfo.isValid(k)||!wjcChart._DataInfo.isValid(d))continue;ot&&(gt=this.dataInfo.getStackedAbsSum(s),a=a/gt);nt=isNaN(et[s])?0:et[s];kt=nt;dt=nt+a;et[s]=nt+a;var y=t.convert(s),ni=i.convert(kt),ti=i.convert(dt);y=y-c/2;n.drawDonutSegment(e._center.x,e._center.y,ti,ni,y+tt,c,null,v.symbolStyle);w=new wjcChart._DonutSegment(new wjcCore.Point(e._center.x,e._center.y),ti,ni,y+tt,c);w.tag=new wjcChart._DataPoint(h,l,s,nt+a);this.hitTester.add(w,h)}else{var y=t.convert(s),at=i.convert(a),fi=e._convertPoint(at,y);y=y-c/2;n.drawPieSegment(e._center.x,e._center.y,at,y+tt,c,null,v.symbolStyle);w=new wjcChart._PieSegment(new wjcCore.Point(e._center.x,e._center.y),at,y+tt,c);w.tag=new wjcChart._DataPoint(h,l,s,a);this.hitTester.add(w,h)}e._areas[h].push(w);r._setPointIndex(l,lt);lt++}}},t}(wjcChart._BarPlotter);exports._RadarBarPlotter=_RadarBarPlotter