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
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),Sunburst,TreeMapType,TreeMap,_TreeMapItem,_ColorConverter,_TreeMapUtils,HierarchicalUtil;Object.defineProperty(exports,"__esModule",{value:!0});var wjcChart=require("wijmo/wijmo.chart"),wjcCore=require("wijmo/wijmo"),wjcSelf=require("wijmo/wijmo.chart.hierarchical");window.wijmo=window.wijmo||{};window.wijmo.chart=window.wijmo.chart||{};window.wijmo.chart.hierarchical=wjcSelf;Sunburst=function(n){function t(t,i){var r=n.call(this,t,i)||this;return r._processedData=[],r._legendLabels=[],r._level=1,r._sliceIndex=0,r._processedItem=[],r._selectionIndex=0,r.applyTemplate('wj-sunburst',null,null),r}return __extends(t,n),Object.defineProperty(t.prototype,"bindingName",{get:function(){return this._bindName},set:function(n){n!=this._bindName&&(wjcCore.assert(n==null||wjcCore.isArray(n)||wjcCore.isString(n),'bindingName should be an array or a string.'),this._bindName=n,this._bindChart())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"childItemsPath",{get:function(){return this._childItemsPath},set:function(n){n!=this._childItemsPath&&(wjcCore.assert(n==null||wjcCore.isArray(n)||wjcCore.isString(n),'childItemsPath should be an array or a string.'),this._childItemsPath=n,this._bindChart())},enumerable:!0,configurable:!0}),t.prototype._initData=function(){n.prototype._initData.call(this);this._processedData=[];this._level=1;this._legendLabels=[];this._processedItem=[]},t.prototype._performBind=function(){var t=this,n;this._initData();this._cv&&(n=this._cv.items,this._cv.groups&&this._cv.groups.length?this._processedData=HierarchicalUtil.parseDataToHierarchical(this._cv,this.binding,this.bindingName,this.childItemsPath):n&&(this._processedData=HierarchicalUtil.parseDataToHierarchical(n,this.binding,this.bindingName,this.childItemsPath)),this._processedData&&this._processedData.length&&(this._sum=this._calculateValueAndLevel(this._processedData,1),this._processedData.forEach(function(n){t._legendLabels.push(n.name)})))},t.prototype._calculateValueAndLevel=function(n,t){var i=this,r=0,u=this._values,f=this._labels;return this._level<t&&(this._level=t),n.forEach(function(n){var e;n.items?(e=i._calculateValueAndLevel(n.items,t+1),n.value=e,u.push(e),f.push(n.name)):(e=i._getBindData(n,u,f,'value','name'),n.value=e);r+=e}),r},t.prototype._renderPie=function(n,t,i,r,u){var f=this._getCenter();this._sliceIndex=0;this._renderHierarchicalSlices(n,f.x,f.y,this._processedData,this._sum,t,i,r,2*Math.PI,u,1)},t.prototype._renderHierarchicalSlices=function(n,t,i,r,u,f,e,o,s,h,c){var rt=r.length,a=o,g=this.reversed==!0,nt,tt,d,l,y,p,it,w,b,k,v;for(d=(f-e)/this._level,nt=f-(this._level-c)*d,tt=e+(c-1)*d,v=0;v<rt;v++)w=t,b=i,it=n.startGroup('slice-level'+c),c===1&&(n.fill=this._getColorLight(v),n.stroke=this._getColor(v)),y=r[v],p=Math.abs(y.value),l=Math.abs(p-u)<1e-10?s:s*p/u,k=g?a-.5*l:a+.5*l,h>0&&l<s&&(w+=h*Math.cos(k),b+=h*Math.sin(k)),y.items&&this._renderHierarchicalSlices(n,w,b,y.items,p,f,e,a,l,0,c+1),this._renderSlice(n,w,b,k,this._sliceIndex,nt,tt,a,l,s),this._processedItem.push(y.item),this._sliceIndex++,g?a-=l:a+=l,n.endGroup(),this._pels.push(it)},t.prototype._getLabelsForLegend=function(){return this._legendLabels||[]},t.prototype._highlightCurrent=function(){this.selectionMode!=wjcChart.SelectionMode.None&&this._highlight(!0,this._selectionIndex)},t.prototype.hitTest=function(t,i){var r=n.prototype.hitTest.call(this,t,i),e=this._toControl(t,i);if(wjcChart.FlexChart._contains(this._rectChart,e)){var u=r.pointIndex,o=this._processedItem[u],f=new wjcChart._DataPoint(null,u,null,null);f.item=o;r._setDataPoint(f)}return r},t}(wjcChart.FlexPie);exports.Sunburst=Sunburst,function(n){n[n.Squarified=0]="Squarified";n[n.Horizontal=1]="Horizontal";n[n.Vertical=2]="Vertical"}(TreeMapType=exports.TreeMapType||(exports.TreeMapType={}));TreeMap=function(n){function t(t,i){var r=n.call(this,t,null,!0)||this;return r._values=[],r._labels=[],r._areas=[],r._sum=0,r._keywords=new wjcChart._KeyWords,r._processedData=[],r._depth=1,r._itemIndex=0,r._processedItem=[],r._maxDepth=-1,r._tmItems=[],r._colRowLens=[],r._defPalette=[{titleColor:'#033884',maxColor:'#1450a7',minColor:'#83b3f9'},{titleColor:'#a83100',maxColor:'#dc4a0d',minColor:'#ffb190'},{titleColor:'#006658',maxColor:'#008d7a',minColor:'#7deddf'},{titleColor:'#a10046',maxColor:'#df0061',minColor:'#ff8cbe'},{titleColor:'#784d08',maxColor:'#99681a',minColor:'#efc989'},{titleColor:'#54156f',maxColor:'#722a90',minColor:'#cf95e7'},{titleColor:'#998605',maxColor:'#c2ac19',minColor:'#ffef8b'},{titleColor:'#9a0005',maxColor:'#c80c14',minColor:'#ff888d'}],r.applyTemplate('wj-control wj-flexchart wj-treemap',null,null),r._currentRenderEngine=new wjcChart._SvgRenderEngine(r.hostElement),r._legend=new wjcChart.Legend(r),r._legend.position=wjcChart.Position.None,r._tooltip=new wjcChart.ChartTooltip,r._tooltip.content='<b>{name}</b><br/>{value}',r._tooltip.showDelay=0,r._lbl=new wjcChart.DataLabel,r._lbl._chart=r,r.hostElement.addEventListener('mousemove',function(n){r.isTouching||r._toogleTooltip(n)}),r.hostElement.addEventListener('click',function(n){var f=!0,t,i,u;r.maxDepth>0&&(t=r.hitTest(n),i=wjcChart.FlexChart._SELECTION_THRESHOLD,r.tooltip&&r.tooltip.threshold&&(i=r.tooltip.threshold),t.distance<=i&&t.pointIndex>=-1&&t.pointIndex<r._areas.length&&(u=r._areas[t.pointIndex],r._currentItem!=u.item&&(r._currentItem=u.item,r._refreshChart(),f=!1)));f&&r.isTouching&&r._toogleTooltip(n)}),r.hostElement.addEventListener('contextmenu',function(n){if(r.maxDepth>0){var i=r.hitTest(n),t=wjcChart.FlexChart._SELECTION_THRESHOLD;r.tooltip&&r.tooltip.threshold&&(t=r.tooltip.threshold);i.distance<=t&&r._rollUp()}return n.preventDefault(),!1}),r.hostElement.addEventListener('mouseleave',function(){r._hideToolTip()}),r.initialize(i),r.refresh(),r}return __extends(t,n),t.prototype._rollUp=function(){this._currentItem=this._currentItem&&this._currentItem.parent?this._currentItem.parent:null;this._refreshChart()},t.prototype._toogleTooltip=function(n){var i=this._tooltip,u=i.content,t,r;u&&(t=this.hitTest(n),t.distance<=i.threshold?(r=this._getLabelContent(t,this.tooltip.content),this._showToolTip(r,new wjcCore.Rect(n.clientX,n.clientY,5,5))):this._hideToolTip())},Object.defineProperty(t.prototype,"tooltip",{get:function(){return this._tooltip},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"binding",{get:function(){return this._binding},set:function(n){n!=this._binding&&(this._binding=wjcCore.asString(n,!0),this._bindChart())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this._type==null?TreeMapType.Squarified:this._type},set:function(n){n!=this._type&&(this._type=wjcCore.asEnum(n,TreeMapType),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bindingName",{get:function(){return this._bindingName},set:function(n){n!=this._bindingName&&(wjcCore.assert(n==null||wjcCore.isArray(n)||wjcCore.isString(n),'bindingName should be an array or a string.'),this._bindingName=n,this._bindChart())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataLabel",{get:function(){return this._lbl},set:function(n){n!=this._lbl&&(this._lbl=n,this._lbl&&(this._lbl._chart=this))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"childItemsPath",{get:function(){return this._childItemsPath},set:function(n){n!=this._childItemsPath&&(wjcCore.assert(n==null||wjcCore.isArray(n)||wjcCore.isString(n),'childItemsPath should be an array or a string.'),this._childItemsPath=n,this._bindChart())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxDepth",{get:function(){return this._maxDepth},set:function(n){n!=this._maxDepth&&(this._maxDepth=wjcCore.asNumber(n,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"palette",{get:function(){return this._palette},set:function(n){n!=this._palette&&(this._palette=wjcCore.asArray(n),this._tmItems&&this._tmItems.length>0&&this._calculateColorForItems(this._tmItems),this.invalidate())},enumerable:!0,configurable:!0}),t.prototype._initData=function(){this._sum=0;this._tmItems=[];this._currentItem=null;this._values=[];this._labels=[];this._processedData=[];this._depth=1;this._processedItem=[]},t.prototype._performBind=function(){var n;this._initData();this._cv&&(n=this._cv.items,this._cv.groups&&this._cv.groups.length?this._processedData=HierarchicalUtil.parseDataToHierarchical(this._cv,this.binding,this.bindingName,this.childItemsPath):n&&(this._processedData=HierarchicalUtil.parseDataToHierarchical(n,this.binding,this.bindingName,this.childItemsPath)),this._processedData&&this._processedData.length&&(this._sum=this._calculateValueAndDepth(this._processedData,1),this._sortData(this._processedData),this._values=[],this._getTMItemsAndLabelsAndValues(this._processedData,this._tmItems,1,null),this._calculateColorForItems(this._tmItems)))},t.prototype._sortData=function(n){var t=this;n.forEach(function(n){n.items&&t._sortData(n.items)});n.sort(function(n,t){return t.value-n.value})},t.prototype._getTMItemsAndLabelsAndValues=function(n,t,i,r){var u=this;n&&n.length>0&&n.forEach(function(n){var f=new _TreeMapItem,e;f.items=[];f.parent=r;f.depth=i;n.items&&u._getTMItemsAndLabelsAndValues(n.items,f.items,i+1,f);e=n.name?n.name:n.value.toString();f.label=e;f.value=n.value;r!=null&&(n.value>r.maxValue&&(r.maxValue=n.value),n.value<r.minValue&&(r.minValue=n.value));t.push(f);u._labels.push(e);u._values.push(n.value)})},t.prototype._calculateColorForItems=function(n,t,i){var r=this,u=i;n.forEach(function(n,i){var o=t,f,e,h,s,c;n.depth===1&&(o=r._getColor(i));n.palette=o;f=n.palette;wjcCore.isString(f)?(e=f,h=r._getLightColor(e),n.titleFill=e,n.titleStroke=e,n.fill=h,n.stroke=e):f.maxColor&&f.minColor&&f.titleColor&&(n.titleFill=f.titleColor,n.titleStroke=f.titleColor,n.parent==null?(n.fill=f.maxColor,n.stroke=f.maxColor):(u==null&&(u=new _ColorConverter(f.minColor,n.minValue,f.maxColor,n.maxValue)),s=u._calculateColorByVal(n.value,!0).toString(),n.fill=s,n.stroke=s));n.items&&n.items.length>0&&(c=new _ColorConverter(f.minColor,n.minValue,f.maxColor,n.maxValue),r._calculateColorForItems(n.items,o,c))})},t.prototype._getBindData=function(n,t,i){var u,r=0;return i&&(u=n[i]),r=0,wjcCore.isNumber(u)?r=wjcCore.asNumber(u):u&&(r=parseFloat(u.toString())),!isNaN(r)&&isFinite(r)?t.push(r):(r=0,t.push(r)),r},t.prototype._calculateValueAndDepth=function(n,t){var i=this,r=0,u=this._values;return this._depth<t&&(this._depth=t),n.forEach(function(n){var f;n.items?(f=i._calculateValueAndDepth(n.items,t+1),n.value=f,u.push(f)):(f=i._getBindData(n,u,'value'),n.value=f);r+=f}),r},t.prototype._render=function(n){var w=this.hostElement,c=this._getHostSize(),r=c.width,u=c.height,l,a,v,y,h,f,o,i,s,e,p;if((r==0||isNaN(r))&&(r=wjcChart.FlexChart._WIDTH),(u==0||isNaN(u))&&(u=wjcChart.FlexChart._HEIGHT),y=new wjcCore.Size(r,u),n.beginRender(),r>0&&u>0){this._areas=[];n.setViewportSize(r,u);h=this.legend;i=new wjcCore.Rect(0,0,r,u);this._rectChart=i.clone();n.startGroup(wjcChart.FlexChart._CSS_HEADER);i=this._drawTitle(n,i,this.header,this.headerStyle,!1);n.endGroup();n.startGroup(wjcChart.FlexChart._CSS_FOOTER);i=this._drawTitle(n,i,this.footer,this.footerStyle,!0);n.endGroup();this.onRendering(new wjcChart.RenderEventArgs(n));r=i.width;u=i.height;s=h._getPosition(r,u);f=h._getDesiredSize(n,s,r,u);switch(s){case wjcChart.Position.Right:r-=f.width;o=new wjcCore.Point(r,i.top+.5*(u-f.height));break;case wjcChart.Position.Left:i.left+=f.width;r-=f.width;o=new wjcCore.Point(0,i.top+.5*(u-f.height));break;case wjcChart.Position.Top:u-=f.height;o=new wjcCore.Point(.5*(r-f.width),i.top);i.top+=f.height;break;case wjcChart.Position.Bottom:u-=f.height;o=new wjcCore.Point(.5*(r-f.width),i.top+u)}i.width=r;i.height=u;this._tmGroup=n.startGroup(null,null,!0);e=this._parseMargin(this.plotMargin);p=this.dataLabel;isNaN(e.left)&&(e.left=t._MARGIN);isNaN(e.right)&&(e.right=t._MARGIN);isNaN(e.top)&&(e.top=t._MARGIN);isNaN(e.bottom)&&(e.bottom=t._MARGIN);i.top+=e.top;u=i.height-(e.top+e.bottom);i.height=u>0?u:24;i.left+=e.left;r=i.width-(e.left+e.right);i.width=r>0?r:24;this._plotRect=i;l=this._currentItem?[this._currentItem]:this._tmItems;a=this._currentItem==null||this.maxDepth<1?this.maxDepth:this._currentItem&&this._currentItem.items&&this._currentItem.items.length&&this.maxDepth>1?this.maxDepth:this.maxDepth+1;v=this._currentItem?this._currentItem.value:this._sum;this._renderTreeMap(n,i,this._tmGroup,l,v,a);n.endGroup();f?(this._legendHost=n.startGroup(wjcChart.FlexChart._CSS_LEGEND),this._rectLegend=new wjcCore.Rect(o.x,o.y,f.width,f.height),n.textFill=wjcChart.FlexChart._FG,this.legend._render(n,o,s,f.width,f.height),n.textFill=null,n.endGroup()):(this._legendHost=null,this._rectLegend=null);this.dataLabel.content&&this.dataLabel.position!=wjcChart.LabelPosition.None&&this._renderLabels(n);this.onRendered(new wjcChart.RenderEventArgs(n))}n.endRender()},t.prototype._renderTreeMap=function(n,t,i,r,u,f){u>0&&(this._itemIndex=0,this._resetItemRects(this._tmItems),this._calculateItemRects(t,r,u,1,f),this._renderHierarchicalTreeMapItems(n,i,t,this._tmItems,u,1,f))},t.prototype._resetItemRects=function(n){var t=this;n.forEach(function(n){n.rect=new wjcCore.Rect(0,0,0,0);n.isTitle=!1;n.type=t.type;n.items&&n.items.length&&t._resetItemRects(n.items)})},t.prototype._calculateItemRects=function(n,t,i,r,u){var f=this,e=this.type;switch(e){case TreeMapType.Horizontal:_TreeMapUtils.horizontal(t,n,i);break;case TreeMapType.Vertical:_TreeMapUtils.vertical(t,n,i);break;case TreeMapType.Squarified:_TreeMapUtils.squarified(t,n,i)}t.forEach(function(n){var t=n.rect.clone();n.items&&n.items.length&&(r===u||r>u&&u>=1||(n.isTitle=!0,f._calculateItemRects(n.itemsRect,n.items,n.value,r+1,u)))})},t.prototype._renderHierarchicalTreeMapItems=function(n,i,r,u,f,e,o){var a=u.length,p=this.type,v,s,l,y,h,c;if(a!==0)for(c=0;c<a;c++)v=n.startGroup(t._CSS_ITEMDEPTH+e),s=u[c],l=Math.abs(s.value),y=s.rect,s.draw(n),h=new wjcChart._RectArea(y),s.items&&this._renderHierarchicalTreeMapItems(n,v,s.itemsRect,s.items,l,e+1,o),h.tag=this._itemIndex,h.name=s.label,h.value=l,h.item=s,this._areas.push(h),this._itemIndex++,n.endGroup()},t.prototype._renderLabels=function(n){var c=this._areas.length,i=this.dataLabel,h=i.position,l=i.connectingLine,a=i.border,r,u,e,t,o,f,s;for(h=wjcChart.LabelPosition.Center,n.stroke='null',n.fill='transparent',n.strokeWidth=1,n.startGroup('wj-data-labels'),u=0;u<c;u++)e=this._areas[u],e&&(t=e.rect,o=new wjcChart.HitTestInfo(this,r),o._setData(null,u),f=this._getLabelContent(o,i.content),r=new wjcCore.Point(t.left+t.width/2,t.top+t.height/2),f&&t.width>0&&t.height>0&&(s=new wjcChart.DataLabelRenderEventArgs(n,o,r,f),i.onRendering(s)&&(f=s.text,r=s.point,this._renderLabelAndBorder(n,e,t,f,h,0,r,l,2,a))));n.endGroup()},t.prototype._renderLabelAndBorder=function(n,t,i,r,u,f,e,o,s,h){var c,l='wj-data-label',a='wj-data-label-line';switch(u){case wjcChart.LabelPosition.Top:o&&n.drawLine(e.x,e.y,e.x,e.y-f,a);e.y-=s+f;c=this._renderText(n,t,i,r,e,1,2,l);break;case wjcChart.LabelPosition.Bottom:o&&n.drawLine(e.x,e.y,e.x,e.y+f,a);e.y+=s+f;c=this._renderText(n,t,i,r,e,1,0,l);break;case wjcChart.LabelPosition.Left:o&&n.drawLine(e.x,e.y,e.x-f,e.y,a);e.x-=s+f;c=this._renderText(n,t,i,r,e,2,1,l);break;case wjcChart.LabelPosition.Right:o&&n.drawLine(e.x,e.y,e.x+f,e.y,a);e.x+=s+f;c=this._renderText(n,t,i,r,e,0,1,l);break;case wjcChart.LabelPosition.Center:c=this._renderText(n,t,i,r,e,1,1,l)}return h&&c&&n.drawRect(c.left-s,c.top-s,c.width+2*s,c.height+2*s,'wj-data-label-border'),c},t.prototype._renderText=function(n,t,i,r,u,f,e,o){var h=r,s,c=t.item;return s=n.measureString(r,o),this.type===TreeMapType.Horizontal&&c.isTitle?(s.width>i.height&&(h=this._cutText(r,s.width,i.height)),wjcChart.FlexChart._renderRotatedText(n,h,u,f,e,u,-90,o),null):(s.width>i.width&&(h=this._cutText(r,s.width,i.width)),wjcChart.FlexChart._renderText(n,h,u,f,e,o))},t.prototype._cutText=function(n,t,i){var r='',f=n.length,u=Math.floor((1-(t-i)/t)*f);return n.length>0&&(r=n[0]+(u>0?n.substring(1,u-1)+'..':'')),r},t.prototype._measureLegendItem=function(n,t){var i=new wjcCore.Size,r;return i.width=wjcChart.Series._LEGEND_ITEM_WIDTH,i.height=wjcChart.Series._LEGEND_ITEM_HEIGHT,t&&(r=n.measureString(t,wjcChart.FlexChart._CSS_LABEL,wjcChart.FlexChart._CSS_LEGEND),i.width+=r.width,i.height<r.height&&(i.height=r.height)),i.width+=3*wjcChart.Series._LEGEND_ITEM_MARGIN,i.height+=2*wjcChart.Series._LEGEND_ITEM_MARGIN,i},t.prototype._getDesiredLegendSize=function(n,t,i,r){var u=new wjcCore.Size,o=new wjcCore.Size(i,r),s=this._tmItems.length,i=0,r=0,e,f;for(this._colRowLens=[],e=0;e<s;e++)f=this._measureLegendItem(n,this._tmItems[e].label),t?(i<f.width&&(i=f.width),r+f.height>o.height&&(u.height=o.height,this._colRowLens.push(i),r=0,i=0),r+=f.height,e===s-1&&(u.height<r&&(u.height=r),this._colRowLens.push(i))):(r<f.height&&(r=f.height),i+f.width>o.width&&(u.width=o.width,this._colRowLens.push(r),r=0,i=0),i+=f.width,e===s-1&&(u.width<i&&(u.width=i),this._colRowLens.push(r)));return t?u.width=this._colRowLens.reduce(function(n,t){return n+t},0):u.height=this._colRowLens.reduce(function(n,t){return n+t},0),u},t.prototype._renderLegend=function(n,t,i,r){for(var f,c,e=this._rectLegend,l=this._tmItems.length,o=0,u=t.clone(),h,s=0;s<l;s++)h=this._tmItems[s].label,f=this._measureLegendItem(n,h),r?u.y+f.height>e.top+e.height+1&&(u.x+=this._colRowLens[o],o++,u.y=t.y):u.x+f.width>e.left+e.width+1&&(u.y+=this._colRowLens[o],o++,u.x=t.x),c=new wjcCore.Rect(u.x,u.y,f.width,f.height),this._drawLegendItem(n,c,s,h),i.push(c),r?u.y+=f.height:u.x+=f.width},t.prototype._drawLegendItem=function(n,t,i,r){n.strokeWidth=1;var e=wjcChart.Series._LEGEND_ITEM_MARGIN,u=this._getColor(i),o=u&&u.maxColor?u.maxColor:u,h=this._getLightColor(o);n.fill=o;n.stroke=h;var s=t.top+.5*t.height,c=wjcChart.Series._LEGEND_ITEM_WIDTH,f=wjcChart.Series._LEGEND_ITEM_HEIGHT;n.drawRect(t.left+e,s-.5*f,c,f,null);r&&wjcChart.FlexChart._renderText(n,r,new wjcCore.Point(t.left+f+2*e,s),0,1,wjcChart.FlexChart._CSS_LABEL)},t.prototype._getLabelContent=function(n,t){return wjcCore.isString(t)?this._keywords.replace(t,n):wjcCore.isFunction(t)?t(n):null},t.prototype.hitTest=function(n,t){var r=this._toControl(n,t),i=new wjcChart.HitTestInfo(this,r),u=null,l,f,h,o,c,e,s;if(wjcChart.FlexChart._contains(this._rectHeader,r))i._chartElement=wjcChart.ChartElement.Header;else if(wjcChart.FlexChart._contains(this._rectFooter,r))i._chartElement=wjcChart.ChartElement.Footer;else if(wjcChart.FlexChart._contains(this._rectLegend,r))i._chartElement=wjcChart.ChartElement.Legend,u=this.legend._hitTest(r),u!==null&&u>=0&&u<this._areas.length&&i._setData(null,u);else if(wjcChart.FlexChart._contains(this._rectChart,r)){for(l=this._areas.length,f=NaN,o=0;o<l;o++)c=r.clone(),e=this._areas[o],e.contains(c)&&(i._setData(null,e.tag),i._dist=0),s=e.distance(c),s!==undefined&&(isNaN(f)||s<f)&&(f=s,h=e);i._dist!==0&&h!=null&&(i._setData(null,h.tag),i._dist=f);i._chartElement=wjcChart.ChartElement.ChartArea}else i._chartElement=wjcChart.ChartElement.None;return i},t.prototype._getHitTestItem=function(n){var t=null,i=null;return t=this._cv!=null?this._cv.items:this.itemsSource,t&&n<t.length&&(i=t[n]),i},t.prototype._getHitTestValue=function(n){return this._values[n]},t.prototype._getHitTestLabel=function(n){return this._labels[n]},t}(wjcChart.FlexChartBase);TreeMap._CSS_ITEMDEPTH='wj-treemap-item-depth';TreeMap._MARGIN=0;exports.TreeMap=TreeMap;_TreeMapItem=function(){function n(){this.items=[];this.maxValue=Number.MIN_VALUE;this.minValue=Number.MAX_VALUE}return n.prototype.draw=function(t){var i=this.rect;t.strokeWidth=0;this.isTitle?(t.fill=this.titleFill,t.stroke=this.titleStroke):(t.fill=this.fill,t.stroke=this.stroke);t.drawRect(i.left,i.top,i.width,i.height,n._CLASSNAME)},Object.defineProperty(n.prototype,"itemsRect",{get:function(){var n=this.rect,t=this._rect,i=this.depth===1?2:.5;return this.isTitle?this.type===TreeMapType.Horizontal?new wjcCore.Rect(n.left+n.width+1,n.top,t.width-n.width-i*2,n.height+1):new wjcCore.Rect(n.left,n.top+n.height+1,n.width+1,t.height-n.height-i*2):new wjcCore.Rect(0,0,0,0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"rect",{get:function(){var r=this._rect,n=this.depth===1?2:.5,t=r.width,i=r.height,u=r.left,f=r.top;return this.isTitle?(this.type===TreeMapType.Horizontal?(t=r.width>20?20:t,t=Math.max(20,t-2*n),i=i>n*2?i-n*2:0):(i=r.height>20?20:i,i=Math.max(20,i-2*n),t=t>n*2?t-n*2:0),u=u+n,f=f+n):(t=t>n*2?t-n*2:0,i=i>n*2?i-n*2:0),new wjcCore.Rect(u,f,t,i)},set:function(n){n!=this._rect&&(this._rect=n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isTitle",{get:function(){return this._isTitle},set:function(n){var t=wjcCore.asBoolean(n,!0);t!==this._isTitle&&(this._isTitle=t)},enumerable:!0,configurable:!0}),n}();_TreeMapItem._CLASSNAME='wj-treemap-item';_ColorConverter=function(){function n(n,t,i,r,u,f){this.minColor=new wjcCore.Color(n);this.minColorValue=t;this.maxColor=new wjcCore.Color(i);this.maxColorValue=r;this.midColorValue=this.originalMidColorValue=f;this._calculateMidColorValue();this.midColor=this.originalMidColor=new wjcCore.Color(u);this._calculateMidColor()}return n.prototype._resetminColor=function(n){this.minColor=new wjcCore.Color(n);this._calculateMidColor()},n.prototype._resetmidColor=function(n){this.midColor=this.originalMidColor=new wjcCore.Color(n);this._calculateMidColor()},n.prototype._resetmaxColor=function(n){this.maxColor=new wjcCore.Color(n);this._calculateMidColor()},n.prototype._resetminColorValue=function(n){this.minColorValue=n;this._calculateMidColorValue()},n.prototype._resetmidColorValue=function(n){this.midColorValue=this.originalMidColorValue=n;this._calculateMidColorValue()},n.prototype._resetmaxColorValue=function(n){this.maxColorValue=n;this._calculateMidColorValue()},n.prototype._calculateMidColorValue=function(){this.originalMidColorValue==null&&(this.midColorValue=(this.maxColorValue+this.minColorValue)/2)},n.prototype._calculateMidColor=function(){this.originalMidColor==null&&(this.midColor=this._calculateColorByVal(this.midColorValue,!0))},n.prototype._calculateColorByVal=function(n,t){t===void 0&&(t=!1);var i=this.maxColor,r=this.minColor,u=this.maxColorValue,f=this.minColorValue;if(n>=this.maxColorValue)return new wjcCore.Color(i.toString());if(n<=this.minColorValue)return new wjcCore.Color(r.toString());if(!t){if(n===this.midColorValue)return new wjcCore.Color(this.midColor.toString());n<this.midColorValue?(i=this.midColor,u=this.midColorValue):(r=this.midColor,f=this.midColorValue)}return this._getColor(n,i,u,r,f)},n.prototype._getColor=function(n,t,i,r,u){return wjcCore.Color.fromRgba(this._getValueByRatio(n,t.r,i,r.r,u),this._getValueByRatio(n,t.g,i,r.g,u),this._getValueByRatio(n,t.b,i,r.b,u),this._getValueByRatio(n,t.a,i,r.a,u))},n.prototype._getValueByRatio=function(n,t,i,r,u){return Math.abs(r+Math.round((n-u)*(t-r)/(i-u)))},n}();_TreeMapUtils=function(){function n(){}return n.squarified=function(t,i,r){var f=t.slice(),u=i.clone(),o=u.width*u.height/r,e,s;do e=n.getRowedItems(f,u,o),s=n.layoutRowedItems(i,e,u,u.width>u.height);while(f.length)},n.horizontal=function(t,i,r){var u=i.clone();t.forEach(function(t){var f=[{item:t,val:t.value*i.width*i.height/r}],e=n.layoutRowedItems(i,f,u,!1)})},n.vertical=function(t,i,r){var u=i.clone();t.forEach(function(t){var f=[{item:t,val:t.value*i.width*i.height/r}],e=n.layoutRowedItems(i,f,u,!0)})},n.getNarrowLen=function(n){return Math.min(n.width,n.height)},n.getRowedItem=function(n,t,i){var r=i*n.value;return{item:n,val:r}},n.getRowedItems=function(t,i,r){var s=t.shift(),u=[],f=[],e=n.getNarrowLen(i),o=n.getRowedItem(s,i,r);if(u.push(o),f.push(o),t.length>0)do if(f.push(n.getRowedItem(t[0],i,r)),n.worst(u,e)>n.worst(f,e))u=f.slice(),t.shift();else break;while(t.length);return u},n.layoutRowedItems=function(t,i,r,u){var e=r.left,o=r.top,s=e+r.width,h=o+r.height,f,c=n.sumRowedArray(i);u?(f=r.height===0?0:c/r.height,e+f>=s&&(f=s-e),i.forEach(function(n,t){var r=f===0?0:n.val/f,u;(o+r>h||t===i.length-1)&&(r=h-o);u=new wjcCore.Rect(e,o,f,r);n.item.rect=u;o+=r}),r.left+=f,r.width-=f):(f=r.width===0?0:c/r.width,o+f>=h&&(f=h-o),i.forEach(function(n,t){var r=f===0?0:n.val/f,u;(e+r>s||t===i.length-1)&&(r=s-e);u=new wjcCore.Rect(e,o,r,f);n.item.rect=u;e+=r}),r.top+=f,r.height-=f)},n.sumRowedArray=function(n){for(var i=0,r=n.length,t=0;t<r;t++)i+=n[t].val;return i},n.worst=function(t,i){var r,u,f=n.sumRowedArray(t),e=f*f,o=i*i;return r=u=t[0].val,t.forEach(function(n){n.val>r?r=n.val:n.val<u&&(u=n.val)}),Math.max(o*r/e,e/(o*u))},n}();HierarchicalUtil=function(){function n(){}return n.parseDataToHierarchical=function(t,i,r,u){var f=[],e;return t instanceof wjcCore.CollectionView&&t.groups.length>0?f=n.parseGroupCV(t,i):t.length>0&&(wjcCore.isString(r)&&r.indexOf(',')>-1&&(r=r.split(',')),u?f=n.parseItems(t,i,r,u):(e=n.convertFlatData(t,i,r),f=n.parseItems(e,'value',r,'items'))),f},n.parseGroupCV=function(n,t){for(var u,r=[],i=0,f=n.groups.length;i<f;i++)u=this.parseGroups(n.groups[i],t),r.push(u);return r},n.parseGroups=function(n,t){var i={},r,u,f;if(i.name=n.name,i.nameField=n.groupDescription.propertyName,i.item=n.items,n.groups&&n.groups.length)for(i.items=[],r=0,u=n.groups.length;r<u;r++)f=this.parseGroups(n.groups[r],t),i.items.push(f);else n.isBottomLevel&&(i.value=n.getAggregate(wjcCore.Aggregate.Sum,t));return i},n.parseItems=function(t,i,r,u){for(var e=[],o=t.length,f=0;f<o;f++)e.push(n.parseItem(t[f],i,r,u));return e},n.isFlatItem=function(n,t){return wjcCore.isArray(n[t])?!1:!0},n.convertFlatData=function(t,i,r){for(var f=[],e={},o,s=t.length,u=0;u<s;u++)o=t[u],n.convertFlatItem(e,o,i,wjcCore.isArray(r)?r:[r]);return n.convertFlatToHierarchical(f,e),f},n.convertFlatToHierarchical=function(t,i){var r=i.flatDataOrder;r&&r.forEach(function(r){var u={},f=i[r],e;u[i.field]=r;f.flatDataOrder?(e=[],n.convertFlatToHierarchical(e,f),u.items=e):u.value=f;t.push(u)})},n.convertFlatItem=function(t,i,r,u){var e,o,f,s,h;return(e=u.slice(),o=e.shift().trim(),f=i[o],f==null)?!1:(e.length===0?(t[f]=i[r]||0,t.flatDataOrder?t.flatDataOrder.push(f):t.flatDataOrder=[f],t.field=o):(t[f]==null&&(t[f]={},t.flatDataOrder?t.flatDataOrder.push(f):t.flatDataOrder=[f],t.field=o),s=t[f],h=n.convertFlatItem(s,i,r,e),h||(t[f]=i[r])),!0)},n.parseItem=function(t,i,r,u){var f={},s,c,e,h,o;return wjcCore.isArray(u)?(o=u.slice(),h=o.length?o.shift().trim():''):(o=u,h=u),wjcCore.isArray(r)?(s=r.slice(),c=s.shift().trim(),f.nameField=c,f.name=t[c],e=t[h],s.length===0?f.value=t[i]:e&&wjcCore.isArray(e)&&e.length>0?f.items=n.parseItems(e,i,s,o):f.value=t[i]||0):(f.nameField=r,f.name=t[r],e=t[h],e!=null&&wjcCore.isArray(e)&&e.length>0?f.items=n.parseItems(e,i,r,o):f.value=t[i]),f.item=t,f},n.parseFlatItem=function(n){n.items||(n.items=[])},n}();exports.HierarchicalUtil=HierarchicalUtil