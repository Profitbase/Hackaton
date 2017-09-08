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
"use strict";function tryGetModuleWijmoGrid(){var n;return(n=window.wijmo)&&n.grid}function tryGetModuleWijmoGridFilter(){var n,t;return(n=window.wijmo)&&(t=n.grid)&&t.filter}var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),wjcCore,wjcSelf,ODataCollectionView,ODataVirtualCollectionView;Object.defineProperty(exports,"__esModule",{value:!0});wjcCore=require("wijmo/wijmo");wjcSelf=require("wijmo/wijmo.odata");window.wijmo=window.wijmo||{};window.wijmo.odata=wjcSelf;ODataCollectionView=function(n){function t(t,i,r){var u=n.call(this)||this;return u._count=0,u._sortOnServer=!0,u._pageOnServer=!0,u._filterOnServer=!0,u._inferDataTypes=!0,u.loading=new wjcCore.Event,u.loaded=new wjcCore.Event,u.error=new wjcCore.Event,u._url=wjcCore.asString(t,!1),u._tbl=wjcCore.asString(i),r&&wjcCore.copy(u,r),u.sortDescriptions.collectionChanged.addHandler(function(){u.sortOnServer&&u._getData()}),u._getData(),u}return __extends(t,n),Object.defineProperty(t.prototype,"tableName",{get:function(){return this._tbl},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fields",{get:function(){return this._fields},set:function(n){this._fields!=n&&(this._fields=wjcCore.asArray(n),this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"requestHeaders",{get:function(){return this._requestHeaders},set:function(n){this._requestHeaders=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"keys",{get:function(){return this._keys},set:function(n){this._keys=wjcCore.asArray(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataTypes",{get:function(){return this._dataTypes},set:function(n){this._dataTypes=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inferDataTypes",{get:function(){return this._inferDataTypes},set:function(n){this._inferDataTypes=wjcCore.asBoolean(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sortOnServer",{get:function(){return this._sortOnServer},set:function(n){n!=this._sortOnServer&&(this._sortOnServer=wjcCore.asBoolean(n),this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pageOnServer",{get:function(){return this._pageOnServer},set:function(n){n!=this._pageOnServer&&(this._pageOnServer=wjcCore.asBoolean(n),this.pageSize&&this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filterOnServer",{get:function(){return this._filterOnServer},set:function(n){n!=this._filterOnServer&&(this._filterOnServer=wjcCore.asBoolean(n),this._getData())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filterDefinition",{get:function(){return this._filterDef},set:function(n){n!=this._filterDef&&(this._filterDef=wjcCore.asString(n),this._getData())},enumerable:!0,configurable:!0}),t.prototype.updateFilterDefinition=function(n){this.filterOnServer&&tryGetModuleWijmoGrid()&&tryGetModuleWijmoGridFilter()&&n instanceof tryGetModuleWijmoGridFilter().FlexGridFilter&&(this.filterDefinition=this._asODataFilter(n))},Object.defineProperty(t.prototype,"oDataVersion",{get:function(){return this._odv},set:function(n){this._odv=wjcCore.asNumber(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isLoading",{get:function(){return this._loading},enumerable:!0,configurable:!0}),t.prototype.onLoading=function(n){this.loading.raise(this,n)},t.prototype.onLoaded=function(n){this.loaded.raise(this,n)},t.prototype.load=function(){this._getData()},t.prototype.onError=function(n){return this.error.raise(this,n),!n.cancel},t.prototype.commitNew=function(){var r=this,u={Accept:'application/json'},i,t,f;if(this.requestHeaders)for(i in this.requestHeaders)u[i]=this.requestHeaders[i];t=this.currentAddItem;t&&(f=this._getWriteUrl(),wjcCore.httpRequest(f,{method:'POST',requestHeaders:u,data:this._stringifyNumbers(t),success:function(n){var i=JSON.parse(n.response);r.keys.forEach(function(n){t[n]=i[n]});r.refresh()},error:this._error.bind(this)}));n.prototype.commitNew.call(this)},t.prototype.commitEdit=function(){var t=this.currentEditItem,i;!t||this.currentAddItem||this._sameContent(t,this._edtClone)||this.items.indexOf(t)>-1&&(i=this._getWriteUrl(this._edtClone),wjcCore.httpRequest(i,{method:'PUT',requestHeaders:this.requestHeaders,data:this._stringifyNumbers(t),error:this._error.bind(this)}));n.prototype.commitEdit.call(this)},t.prototype.remove=function(t){if(t&&t!=this.currentAddItem&&this.items.indexOf(t)>-1){var i=this._getWriteUrl(t);wjcCore.httpRequest(i,{method:'DELETE',requestHeaders:this.requestHeaders,error:this._error.bind(this)})}n.prototype.remove.call(this,t)},Object.defineProperty(t.prototype,"totalItemCount",{get:function(){return this.pageOnServer?this._count:this._view.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pageCount",{get:function(){return this.pageSize?Math.ceil(this.totalItemCount/this.pageSize):1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pageSize",{get:function(){return this._pgSz},set:function(n){n!=this._pgSz&&(this._pgSz=wjcCore.asInt(n),this.pageOnServer?(this._pgIdx=wjcCore.clamp(this._pgIdx,0,this.pageCount-1),this._getData()):this.refresh())},enumerable:!0,configurable:!0}),t.prototype.onPageChanging=function(t){return n.prototype.onPageChanging.call(this,t),!t.cancel&&this.pageOnServer&&this._getData(),!t.cancel},t.prototype._getPageView=function(){return this.pageOnServer?this._view:n.prototype._getPageView.call(this)},t.prototype._performRefresh=function(){var t=this._canFilter,i=this._canSort;this._canFilter=!this._filterOnServer;this._canSort=!this._sortOnServer;n.prototype._performRefresh.call(this);this._canFilter=t;this._canSort=i},t.prototype._storeItems=function(n,t){t?Array.prototype.push.apply(this.sourceCollection,n):this.sourceCollection=n},t.prototype._getReadUrl=function(n){var t=this._url;return t[t.length-1]!='/'&&(t+='/'),n?t=n.indexOf('http')==0?n:t+n:this._tbl&&(t+=this._tbl),t},t.prototype._getReadParams=function(n){var t={$format:'json'},i,r,u;if(this._tbl&&!n){if(this._odv<4?t.$inlinecount='allpages':t.$count=!0,this.fields&&(t.$select=this.fields.join(',')),this.sortOnServer&&this.sortDescriptions.length){for(i='',r=0;r<this.sortDescriptions.length;r++)u=this.sortDescriptions[r],i&&(i+=','),i+=u.property,u.ascending||(i+=' desc');t.$orderby=i}this.pageOnServer&&this.pageSize>0&&(t.$skip=this.pageIndex*this.pageSize,t.$top=this.pageSize);this.filterDefinition&&(t.$filter=this.filterDefinition)}return t},t.prototype._getData=function(n){var t=this;this._toGetData&&clearTimeout(this._toGetData);this._toGetData=setTimeout(function(){if(t._odv==null){t._getSchema();return}t._loading=!0;t.onLoading();var i=t._getReadUrl(n);wjcCore.httpRequest(i,{requestHeaders:t.requestHeaders,data:t._getReadParams(n),success:function(i){var r=JSON.parse(i.response),u=r.d?r.d.results:r.value,o=r.d?r.d.__count:r['odata.count']||r['@odata.count'],e,f;if(o!=null&&(t._count=parseInt(o)),n||t.inferDataTypes&&!t._dataTypesInferred&&(t._dataTypesInferred=t._getInferredDataTypes(u)),e=t.dataTypes?t.dataTypes:t._dataTypesInferred,e)for(f=0;f<u.length;f++)t._convertItem(e,u[f]);t._storeItems(u,n!=null);t.refresh();n=r.d?r.d.__next:r['odata.nextLink']||r['@odata.nextLink'];n?t._getData(n):(t._loading=!1,t.onLoaded())},error:function(n){if(t._loading=!1,t.onLoaded(),t.onError(new wjcCore.RequestErrorEventArgs(n)))throw'HttpRequest Error: '+n.status+' '+n.statusText;}})},100)},t.prototype._stringifyNumbers=function(n){var i,r,t;if(this._odv>=4)return n;i={};for(r in n)t=n[r],i[r]=wjcCore.isNumber(t)?t.toString():t;return i},t.prototype._convertItem=function(n,t){var r,u,i;for(r in n)u=n[r],i=t[r],i!=undefined&&(u===wjcCore.DataType.Date&&i&&i.indexOf('/Date(')==0&&(i=new Date(parseInt(i.substr(6)))),t[r]=wjcCore.changeType(i,u,null))},t.prototype._getInferredDataTypes=function(n){var r=null,u,i,f,e;if(n.length>0){for(u={},i=0;i<n.length&&i<10;i++)this._extend(u,n[i]);for(f in u)e=u[f],wjcCore.isString(e)&&e.match(t._rxDate)&&(r||(r={}),r[f]=wjcCore.DataType.Date)}return r},t.prototype._getServiceUrl=function(){var n=this._url;return n[n.length-1]!='/'&&(n+='/'),n},t.prototype._getSchema=function(){var i=this,n=this._getServiceUrl()+'$metadata';this._odv=t._odvCache[n];this._odv?this._getData():wjcCore.httpRequest(n,{requestHeaders:this.requestHeaders,success:function(r){var u=r.response.match(/<.*Version\s*=\s*"(.*)"\s*>/i),f=u?parseFloat(u[1]):4;t._odvCache[n]=i._odv=f},error:function(){t._odvCache[n]=i._odv=4},complete:function(){i._getData()}})},t.prototype._getWriteUrl=function(n){var t=this._getServiceUrl(),i;return t+=this._tbl,n&&(wjcCore.assert(this.keys&&this.keys.length>0,'write operations require keys.'),i=[],this.keys.forEach(function(t){wjcCore.assert(n[t]!=null,'key values cannot be null.');i.push(t+'='+n[t])}),t+='('+i.join(',')+')'),t},t.prototype._asODataFilter=function(n){for(var u,t,i='',r=0;r<n.grid.columns.length;r++)u=n.grid.columns[r],t=n.getColumnFilter(u,!1),t&&t.isActive&&(i&&(i+=' and '),t.conditionFilter&&t.conditionFilter.isActive?i+=this._asODataConditionFilter(t.conditionFilter):t.valueFilter&&t.valueFilter.isActive&&(i+=this._asODataValueFilter(t.valueFilter)));return i},t.prototype._asODataValueFilter=function(n){var t=n.column,f=t.binding,i='',r,u;for(r in n.showValues)u=wjcCore.changeType(r,t.dataType,t.format),i&&(i+=' or '),i+='('+f+' eq '+this._asODataValue(u,t.dataType)+')';return'('+i+')'},t.prototype._asODataConditionFilter=function(n){var t=this._asODataCondition(n,n.condition1);return n.condition2.operator!=null&&(t+=(n.and?' and ':' or ')+this._asODataCondition(n,n.condition2)),'('+t+')'},t.prototype._asODataCondition=function(n,t){var i=n.column.binding,r=this._asODataValue(t.value,n.column.dataType);switch(t.operator){case 0:return i+' eq '+r;case 1:return i+' ne '+r;case 2:return i+' gt '+r;case 3:return i+' ge '+r;case 4:return i+' lt '+r;case 5:return i+' le '+r;case 6:return'startswith('+i+','+r+')';case 7:return'endswith('+i+','+r+')';case 8:return this._odv>=4?'contains('+i+','+r+')':'substringof('+r.toLowerCase()+', tolower('+i+'))';case 9:return this._odv>=4?'not contains('+i+','+r+')':'not substringof('+r.toLowerCase()+', tolower('+i+'))'}},t.prototype._asODataValue=function(n,t){return wjcCore.isString(n)?"'"+n.replace(/'/g,"\'")+"'":wjcCore.isDate(n)?(n=n.toJSON(),this._odv<4?'datetime\''+n+'\'':n):n!=null?n.toString():t==wjcCore.DataType.String?"''":null},t.prototype._error=function(n){if(this.onError(new wjcCore.RequestErrorEventArgs(n))){this._getData();throw'HttpRequest Error: '+n.status+' '+n.statusText;}},t}(wjcCore.CollectionView);ODataCollectionView._odvCache={};ODataCollectionView._rxDate=/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}|\/Date\([\d\-]*?\)/;exports.ODataCollectionView=ODataCollectionView;ODataVirtualCollectionView=function(n){function t(t,i,r){var u=this;return r==null&&(r={}),r.pageOnServer=!0,r.sortOnServer=!0,r.canGroup=!1,r.pageSize||(r.pageSize=100),u=n.call(this,t,i,r)||this,u._data=[],u.sourceCollection=u._data,u._skip=0,u.setWindow(0,u.pageSize),u}return __extends(t,n),t.prototype.setWindow=function(n,t){var i=this;this._toSetWindow&&clearTimeout(this._toSetWindow);this._toSetWindow=setTimeout(function(){i._toSetWindow=null;i._performSetWindow(n,t)},50)},Object.defineProperty(t.prototype,"pageOnServer",{get:function(){return!0},set:function(n){if(!n)throw'ODataVirtualCollectionView requires pageOnServer = true.';},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sortOnServer",{get:function(){return!0},set:function(n){if(!wjcCore.asBoolean(n))throw'ODataVirtualCollectionView requires sortOnServer = true.';},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"filterOnServer",{get:function(){return!0},set:function(n){if(!wjcCore.asBoolean(n))throw'ODataVirtualCollectionView requires filterOnServer = true.';},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canGroup",{get:function(){return this._canGroup},set:function(n){if(wjcCore.asBoolean(n))throw'ODataVirtualCollectionView does not support grouping.';},enumerable:!0,configurable:!0}),t.prototype._performRefresh=function(){this.isLoading||(this._refresh=!0);n.prototype._performRefresh.call(this)},t.prototype._getReadParams=function(t){var i=n.prototype._getReadParams.call(this,t);return i.$skip=this._skip||0,i.$top=this.pageSize,i},t.prototype._storeItems=function(n,t){var r,i;if(this._refresh||this._data.length!=this.totalItemCount){for(this._data.length=this.totalItemCount,i=0;i<this._data.length;i++)this._data[i]=null;this._refresh=!1}for(t||(this._loadOffset=0),r=this._loadOffset+(this._skip||0),i=0;i<n.length;i++)this._data[i+r]=n[i];this._loadOffset+=n.length},t.prototype._performSetWindow=function(n,t){var f,r,u,i;for(n=wjcCore.asInt(n),t=wjcCore.asInt(t),wjcCore.assert(t>=n,'Start must be smaller than end.'),f=wjcCore.isNumber(this._start)&&n>this._start,this._start=n,this._end=t,r=!1,i=n;i<t&&i<this._data.length&&!r;i++)r=this._data[i]==null;if(r){for(u=Math.max(0,f?n:t-this.pageSize),i=u;i<this._data.length&&this._data[i]!=null;i++)u++;this._skip=u;this._getData()}},t}(ODataCollectionView);exports.ODataVirtualCollectionView=ODataVirtualCollectionView