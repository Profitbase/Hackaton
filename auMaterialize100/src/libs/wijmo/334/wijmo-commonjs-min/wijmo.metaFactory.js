/*
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
"use strict";
function tryGetModuleWijmoInput()
{
var m1;
return (m1 = window.wijmo) && m1.input
}
function tryGetModuleWijmoGrid()
{
var m1;
return (m1 = window.wijmo) && m1.grid
}
function tryGetModuleWijmoGridFilter()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.grid) && m2.filter
}
function tryGetModuleWijmoGridGrouppanel()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.grid) && m2.grouppanel
}
function tryGetModuleWijmoGridDetail()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.grid) && m2.detail
}
function tryGetModuleWijmoGridSheet()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.grid) && m2.sheet
}
function tryGetModuleWijmoGridMultirow()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.grid) && m2.multirow
}
function tryGetModuleWijmoChart()
{
var m1;
return (m1 = window.wijmo) && m1.chart
}
function tryGetModuleWijmoChartHierarchical()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.hierarchical
}
function tryGetModuleWijmoChartAnnotation()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.annotation
}
function tryGetModuleWijmoChartInteraction()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.interaction
}
function tryGetModuleWijmoChartAnimation()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.animation
}
function tryGetModuleWijmoChartFinance()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.finance
}
function tryGetModuleWijmoChartRadar()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.radar
}
function tryGetModuleWijmoChartAnalytics()
{
var m1,
m2;
return (m1 = window.wijmo) && (m2 = m1.chart) && m2.analytics
}
function tryGetModuleWijmoChartFinanceAnalytics()
{
var m1,
m2,
m3;
return (m1 = window.wijmo) && (m2 = m1.chart) && (m3 = m2.finance) && m3.analytics
}
function tryGetModuleWijmoGauge()
{
var m1;
return (m1 = window.wijmo) && m1.gauge
}
function tryGetModuleWijmoOlap()
{
var m1;
return (m1 = window.wijmo) && m1.olap
}
function tryGetModuleWijmoViewer()
{
var m1;
return (m1 = window.wijmo) && m1.viewer
}
function tryGetModuleWijmoNav()
{
var m1;
return (m1 = window.wijmo) && m1.nav
}
function isSimpleType(type)
{
return type <= PropertyType.Enum
}
var wjcCore,
ControlMetaFactory,
PropDescBase,
PropertyType,
BindingMode,
EventDescBase,
ComplexPropDescBase,
MetaDataBase;
Object.defineProperty(exports, "__esModule", {value: !0});
wjcCore = require("wijmo/wijmo");
ControlMetaFactory = function()
{
function ControlMetaFactory(){}
return ControlMetaFactory.CreateProp = function(propertyName, propertyType, changeEvent, enumType, isNativeControlProperty, priority)
{
return new PropDescBase(propertyName, propertyType, changeEvent, enumType, isNativeControlProperty, priority)
}, ControlMetaFactory.CreateEvent = function(eventName, isPropChanged)
{
return new EventDescBase(eventName, isPropChanged)
}, ControlMetaFactory.CreateComplexProp = function(propertyName, isArray, ownsObject)
{
return new ComplexPropDescBase(propertyName, isArray, ownsObject)
}, ControlMetaFactory.findProp = function(propName, props)
{
return this.findInArr(props, 'propertyName', propName)
}, ControlMetaFactory.findEvent = function(eventName, events)
{
return this.findInArr(events, 'eventName', eventName)
}, ControlMetaFactory.findComplexProp = function(propName, props)
{
return this.findInArr(props, 'propertyName', propName)
}, ControlMetaFactory.getMetaData = function(metaDataId)
{
switch (metaDataId)
{
case wjcCore.Control:
return new MetaDataBase([this.CreateProp('isDisabled', PropertyType.Boolean), ], [this.CreateEvent('gotFocus'), this.CreateEvent('lostFocus')]);
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().DropDown:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('isDroppedDown', PropertyType.Boolean, 'isDroppedDownChanged'), this.CreateProp('showDropDownButton', PropertyType.Boolean), this.CreateProp('autoExpandSelection', PropertyType.Boolean), this.CreateProp('placeholder', PropertyType.String), this.CreateProp('dropDownCssClass', PropertyType.String), this.CreateProp('isAnimated', PropertyType.Boolean), this.CreateProp('isReadOnly', PropertyType.Boolean), this.CreateProp('isRequired', PropertyType.Boolean), this.CreateProp('text', PropertyType.String, 'textChanged', null, !0, 1e3)], [this.CreateEvent('isDroppedDownChanging'), this.CreateEvent('isDroppedDownChanged', !0), this.CreateEvent('textChanged', !0)]);
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().ComboBox:
return this.getMetaData(tryGetModuleWijmoInput().DropDown).add([this.CreateProp('displayMemberPath', PropertyType.String), this.CreateProp('selectedValuePath', PropertyType.String), this.CreateProp('headerPath', PropertyType.String), this.CreateProp('isContentHtml', PropertyType.Boolean), this.CreateProp('isEditable', PropertyType.Boolean), this.CreateProp('maxDropDownHeight', PropertyType.Number), this.CreateProp('maxDropDownWidth', PropertyType.Number), this.CreateProp('itemFormatter', PropertyType.Function), this.CreateProp('itemsSource', PropertyType.Any, '', null, !0, 900), this.CreateProp('selectedIndex', PropertyType.Number, 'selectedIndexChanged', null, !0, 1e3), this.CreateProp('selectedItem', PropertyType.Any, 'selectedIndexChanged', null, !0, 1e3), this.CreateProp('selectedValue', PropertyType.Any, 'selectedIndexChanged', null, !0, 1e3), ], [this.CreateEvent('formatItem'), this.CreateEvent('selectedIndexChanged', !0)]).addOptions({ngModelProperty: 'selectedValue'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().AutoComplete:
return this.getMetaData(tryGetModuleWijmoInput().ComboBox).add([this.CreateProp('delay', PropertyType.Number), this.CreateProp('maxItems', PropertyType.Number), this.CreateProp('minLength', PropertyType.Number), this.CreateProp('cssMatch', PropertyType.String), this.CreateProp('itemsSourceFunction', PropertyType.Function), this.CreateProp('searchMemberPath', PropertyType.String)]);
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().Calendar:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('monthView', PropertyType.Boolean), this.CreateProp('showHeader', PropertyType.Boolean), this.CreateProp('itemFormatter', PropertyType.Function), this.CreateProp('itemValidator', PropertyType.Function), this.CreateProp('firstDayOfWeek', PropertyType.Number), this.CreateProp('max', PropertyType.Date), this.CreateProp('min', PropertyType.Date), this.CreateProp('formatYearMonth', PropertyType.String), this.CreateProp('formatDayHeaders', PropertyType.String), this.CreateProp('formatDays', PropertyType.String), this.CreateProp('formatYear', PropertyType.String), this.CreateProp('formatMonths', PropertyType.String), this.CreateProp('selectionMode', PropertyType.Enum, '', tryGetModuleWijmoInput().DateSelectionMode), this.CreateProp('isReadOnly', PropertyType.Boolean), this.CreateProp('value', PropertyType.Date, 'valueChanged'), this.CreateProp('displayMonth', PropertyType.Date, 'displayMonthChanged'), ], [this.CreateEvent('valueChanged', !0), this.CreateEvent('displayMonthChanged', !0), this.CreateEvent('formatItem', !1)]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().ColorPicker:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('showAlphaChannel', PropertyType.Boolean), this.CreateProp('showColorString', PropertyType.Boolean), this.CreateProp('palette', PropertyType.Any), this.CreateProp('value', PropertyType.String, 'valueChanged')], [this.CreateEvent('valueChanged', !0)]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().ListBox:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('isContentHtml', PropertyType.Boolean), this.CreateProp('maxHeight', PropertyType.Number), this.CreateProp('selectedValuePath', PropertyType.String), this.CreateProp('itemFormatter', PropertyType.Function), this.CreateProp('displayMemberPath', PropertyType.String), this.CreateProp('checkedMemberPath', PropertyType.String), this.CreateProp('itemsSource', PropertyType.Any), this.CreateProp('selectedIndex', PropertyType.Number, 'selectedIndexChanged'), this.CreateProp('selectedItem', PropertyType.Any, 'selectedIndexChanged'), this.CreateProp('selectedValue', PropertyType.Any, 'selectedIndexChanged'), this.CreateProp('checkedItems', PropertyType.Any, 'checkedItemsChanged'), ], [this.CreateEvent('formatItem', !1), this.CreateEvent('itemsChanged', !0), this.CreateEvent('itemChecked', !0), this.CreateEvent('selectedIndexChanged', !0), this.CreateEvent('checkedItemsChanged', !0), ]).addOptions({ngModelProperty: 'selectedValue'});
case'ItemTemplate':
return new MetaDataBase([], [], [], undefined, undefined, undefined, 'owner');
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().Menu:
return this.getMetaData(tryGetModuleWijmoInput().ComboBox).add([this.CreateProp('header', PropertyType.String), this.CreateProp('commandParameterPath', PropertyType.String), this.CreateProp('commandPath', PropertyType.String), this.CreateProp('isButton', PropertyType.Boolean), this.CreateProp('value', PropertyType.Any, 'itemClicked', null, !1, 1e3)], [this.CreateEvent('itemClicked')]);
case'MenuItem':
return new MetaDataBase([this.CreateProp('value', PropertyType.Any, ''), this.CreateProp('cmd', PropertyType.Any, ''), this.CreateProp('cmdParam', PropertyType.Any, '')], [], [], 'itemsSource', !0);
case'MenuSeparator':
return new MetaDataBase([], [], [], 'itemsSource', !0);
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().InputDate:
return this.getMetaData(tryGetModuleWijmoInput().DropDown).add([this.CreateProp('selectionMode', PropertyType.Enum, '', tryGetModuleWijmoInput().DateSelectionMode), this.CreateProp('format', PropertyType.String), this.CreateProp('mask', PropertyType.String), this.CreateProp('max', PropertyType.Date), this.CreateProp('min', PropertyType.Date), this.CreateProp('inputType', PropertyType.String), this.CreateProp('value', PropertyType.Date, 'valueChanged', null, !0, 1e3), this.CreateProp('itemValidator', PropertyType.Function), this.CreateProp('itemFormatter', PropertyType.Function)], [this.CreateEvent('valueChanged', !0)]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().InputDateTime:
return this.getMetaData(tryGetModuleWijmoInput().InputDate).add([this.CreateProp('timeMax', PropertyType.Date), this.CreateProp('timeMin', PropertyType.Date), this.CreateProp('timeStep', PropertyType.Number), this.CreateProp('timeFormat', PropertyType.String), ]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().InputNumber:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('showSpinner', PropertyType.Boolean), this.CreateProp('max', PropertyType.Number), this.CreateProp('min', PropertyType.Number), this.CreateProp('step', PropertyType.Number), this.CreateProp('isRequired', PropertyType.Boolean), this.CreateProp('placeholder', PropertyType.String), this.CreateProp('inputType', PropertyType.String), this.CreateProp('format', PropertyType.String), this.CreateProp('isReadOnly', PropertyType.Boolean), this.CreateProp('value', PropertyType.Number, 'valueChanged'), this.CreateProp('text', PropertyType.String, 'textChanged')], [this.CreateEvent('valueChanged', !0), this.CreateEvent('textChanged', !0)]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().InputMask:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('mask', PropertyType.String), this.CreateProp('isRequired', PropertyType.Boolean), this.CreateProp('promptChar', PropertyType.String), this.CreateProp('placeholder', PropertyType.String), this.CreateProp('rawValue', PropertyType.String, 'valueChanged'), this.CreateProp('value', PropertyType.String, 'valueChanged')], [this.CreateEvent('valueChanged', !0), ]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().InputTime:
return this.getMetaData(tryGetModuleWijmoInput().ComboBox).add([this.CreateProp('max', PropertyType.Date), this.CreateProp('min', PropertyType.Date), this.CreateProp('step', PropertyType.Number), this.CreateProp('format', PropertyType.String), this.CreateProp('mask', PropertyType.String), this.CreateProp('inputType', PropertyType.String), this.CreateProp('value', PropertyType.Date, 'valueChanged', null, !0, 1e3), ], [this.CreateEvent('valueChanged', !0)]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().InputColor:
return this.getMetaData(tryGetModuleWijmoInput().DropDown).add([this.CreateProp('showAlphaChannel', PropertyType.Boolean), this.CreateProp('value', PropertyType.String, 'valueChanged')], [this.CreateEvent('valueChanged', !0)]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().Popup:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('owner', PropertyType.String), this.CreateProp('showTrigger', PropertyType.Enum, '', tryGetModuleWijmoInput().PopupTrigger), this.CreateProp('hideTrigger', PropertyType.Enum, '', tryGetModuleWijmoInput().PopupTrigger), this.CreateProp('fadeIn', PropertyType.Boolean), this.CreateProp('fadeOut', PropertyType.Boolean), this.CreateProp('dialogResultEnter', PropertyType.String), this.CreateProp('modal', PropertyType.Boolean), ], [this.CreateEvent('showing'), this.CreateEvent('shown'), this.CreateEvent('hiding'), this.CreateEvent('hidden'), ]);
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().MultiSelect:
return this.getMetaData(tryGetModuleWijmoInput().ComboBox).add([this.CreateProp('checkedMemberPath', PropertyType.String), this.CreateProp('maxHeaderItems', PropertyType.Number), this.CreateProp('headerFormat', PropertyType.String), this.CreateProp('headerFormatter', PropertyType.Function), this.CreateProp('checkedItems', PropertyType.Any, 'checkedItemsChanged', BindingMode.TwoWay, !0, 950), ], [this.CreateEvent('checkedItemsChanged', !0)]).addOptions({ngModelProperty: 'checkedItems'});
case'CollectionViewNavigator':
return new MetaDataBase([this.CreateProp('cv', PropertyType.Any)]);
case'CollectionViewPager':
return new MetaDataBase([this.CreateProp('cv', PropertyType.Any)]);
case tryGetModuleWijmoInput() && tryGetModuleWijmoInput().MultiAutoComplete:
return this.getMetaData(tryGetModuleWijmoInput().AutoComplete).add([this.CreateProp('maxSelectedItems', PropertyType.Number), this.CreateProp('selectedMemberPath', PropertyType.String, '', null, !0, 950), this.CreateProp('selectedItems', PropertyType.Any, 'selectedItemsChanged'), ], [this.CreateEvent('selectedItemsChanged', !0)]).addOptions({ngModelProperty: 'selectedItems'});
case tryGetModuleWijmoGrid() && tryGetModuleWijmoGrid().FlexGrid:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('newRowAtTop', PropertyType.Boolean), this.CreateProp('allowAddNew', PropertyType.Boolean), this.CreateProp('allowDelete', PropertyType.Boolean), this.CreateProp('allowDragging', PropertyType.Enum, '', tryGetModuleWijmoGrid().AllowDragging), this.CreateProp('allowMerging', PropertyType.Enum, '', tryGetModuleWijmoGrid().AllowMerging), this.CreateProp('allowResizing', PropertyType.Enum, '', tryGetModuleWijmoGrid().AllowResizing), this.CreateProp('allowSorting', PropertyType.Boolean), this.CreateProp('autoSizeMode', PropertyType.Enum, '', tryGetModuleWijmoGrid().AutoSizeMode), this.CreateProp('autoGenerateColumns', PropertyType.Boolean), this.CreateProp('childItemsPath', PropertyType.Any), this.CreateProp('groupHeaderFormat', PropertyType.String), this.CreateProp('headersVisibility', PropertyType.Enum, '', tryGetModuleWijmoGrid().HeadersVisibility), this.CreateProp('showSelectedHeaders', PropertyType.Enum, '', tryGetModuleWijmoGrid().HeadersVisibility), this.CreateProp('showMarquee', PropertyType.Boolean), this.CreateProp('itemFormatter', PropertyType.Function), this.CreateProp('isReadOnly', PropertyType.Boolean), this.CreateProp('imeEnabled', PropertyType.Boolean), this.CreateProp('mergeManager', PropertyType.Any), this.CreateProp('selectionMode', PropertyType.Enum, '', tryGetModuleWijmoGrid().SelectionMode), this.CreateProp('showGroups', PropertyType.Boolean), this.CreateProp('showSort', PropertyType.Boolean), this.CreateProp('showAlternatingRows', PropertyType.Boolean), this.CreateProp('showErrors', PropertyType.Boolean), this.CreateProp('validateEdits', PropertyType.Boolean), this.CreateProp('treeIndent', PropertyType.Number), this.CreateProp('itemsSource', PropertyType.Any), this.CreateProp('autoClipboard', PropertyType.Boolean), this.CreateProp('frozenRows', PropertyType.Number), this.CreateProp('frozenColumns', PropertyType.Number), this.CreateProp('deferResizing', PropertyType.Boolean), this.CreateProp('sortRowIndex', PropertyType.Number), this.CreateProp('stickyHeaders', PropertyType.Boolean), this.CreateProp('preserveSelectedState', PropertyType.Boolean), this.CreateProp('preserveOutlineState', PropertyType.Boolean), this.CreateProp('keyActionTab', PropertyType.Enum, '', tryGetModuleWijmoGrid().KeyAction), this.CreateProp('keyActionEnter', PropertyType.Enum, '', tryGetModuleWijmoGrid().KeyAction), this.CreateProp('rowHeaderPath', PropertyType.String)], [this.CreateEvent('beginningEdit'), this.CreateEvent('cellEditEnded'), this.CreateEvent('cellEditEnding'), this.CreateEvent('prepareCellForEdit'), this.CreateEvent('formatItem'), this.CreateEvent('resizingColumn'), this.CreateEvent('resizedColumn'), this.CreateEvent('autoSizingColumn'), this.CreateEvent('autoSizedColumn'), this.CreateEvent('draggingColumn'), this.CreateEvent('draggingColumnOver'), this.CreateEvent('draggedColumn'), this.CreateEvent('sortingColumn'), this.CreateEvent('sortedColumn'), this.CreateEvent('resizingRow'), this.CreateEvent('resizedRow'), this.CreateEvent('autoSizingRow'), this.CreateEvent('autoSizedRow'), this.CreateEvent('draggingRow'), this.CreateEvent('draggingRowOver'), this.CreateEvent('draggedRow'), this.CreateEvent('deletingRow'), this.CreateEvent('deletedRow'), this.CreateEvent('loadingRows'), this.CreateEvent('loadedRows'), this.CreateEvent('rowEditStarting'), this.CreateEvent('rowEditStarted'), this.CreateEvent('rowEditEnding'), this.CreateEvent('rowEditEnded'), this.CreateEvent('rowAdded'), this.CreateEvent('groupCollapsedChanged'), this.CreateEvent('groupCollapsedChanging'), this.CreateEvent('itemsSourceChanged', !0), this.CreateEvent('selectionChanging'), this.CreateEvent('selectionChanged', !0), this.CreateEvent('scrollPositionChanged', !1), this.CreateEvent('updatingView'), this.CreateEvent('updatedView'), this.CreateEvent('updatingLayout'), this.CreateEvent('updatedLayout'), this.CreateEvent('pasting'), this.CreateEvent('pasted'), this.CreateEvent('pastingCell'), this.CreateEvent('pastedCell'), this.CreateEvent('copying'), this.CreateEvent('copied')]);
case tryGetModuleWijmoGrid() && tryGetModuleWijmoGrid().Column:
return new MetaDataBase([this.CreateProp('name', PropertyType.String), this.CreateProp('dataMap', PropertyType.Any), this.CreateProp('dataType', PropertyType.Enum, '', wjcCore.DataType), this.CreateProp('binding', PropertyType.String), this.CreateProp('sortMemberPath', PropertyType.String), this.CreateProp('format', PropertyType.String), this.CreateProp('header', PropertyType.String), this.CreateProp('width', PropertyType.Number), this.CreateProp('minWidth', PropertyType.Number), this.CreateProp('maxWidth', PropertyType.Number), this.CreateProp('align', PropertyType.String), this.CreateProp('allowDragging', PropertyType.Boolean), this.CreateProp('allowSorting', PropertyType.Boolean), this.CreateProp('allowResizing', PropertyType.Boolean), this.CreateProp('allowMerging', PropertyType.Boolean), this.CreateProp('aggregate', PropertyType.Enum, '', wjcCore.Aggregate), this.CreateProp('isReadOnly', PropertyType.Boolean), this.CreateProp('cssClass', PropertyType.String), this.CreateProp('isContentHtml', PropertyType.Boolean), this.CreateProp('isSelected', PropertyType.Boolean, 'grid.selectionChanged'), this.CreateProp('visible', PropertyType.Boolean), this.CreateProp('wordWrap', PropertyType.Boolean), this.CreateProp('mask', PropertyType.String), this.CreateProp('inputType', PropertyType.String), this.CreateProp('isRequired', PropertyType.Boolean), this.CreateProp('showDropDown', PropertyType.Boolean), this.CreateProp('dropDownCssClass', PropertyType.String), ], [], [], 'columns', !0);
case'FlexGridCellTemplate':
return new MetaDataBase([this.CreateProp('cellType', PropertyType.String, '', null, !1), this.CreateProp('cellOverflow', PropertyType.String, ''), ], [], [], undefined, undefined, undefined, 'owner');
case tryGetModuleWijmoGrid() && tryGetModuleWijmoGridFilter() && tryGetModuleWijmoGridFilter().FlexGridFilter:
return new MetaDataBase([this.CreateProp('showFilterIcons', PropertyType.Boolean), this.CreateProp('showSortButtons', PropertyType.Boolean), this.CreateProp('defaultFilterType', PropertyType.Enum, '', tryGetModuleWijmoGridFilter().FilterType), this.CreateProp('filterColumns', PropertyType.Any), ], [this.CreateEvent('filterChanging'), this.CreateEvent('filterChanged'), this.CreateEvent('filterApplied')], [], undefined, undefined, undefined, '');
case tryGetModuleWijmoGrid() && tryGetModuleWijmoGridGrouppanel() && tryGetModuleWijmoGridGrouppanel().GroupPanel:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('hideGroupedColumns', PropertyType.Boolean), this.CreateProp('maxGroups', PropertyType.Number), this.CreateProp('placeholder', PropertyType.String), this.CreateProp('grid', PropertyType.Any), ]);
case tryGetModuleWijmoGrid() && tryGetModuleWijmoGridDetail() && tryGetModuleWijmoGridDetail().FlexGridDetailProvider:
return new MetaDataBase([this.CreateProp('maxHeight', PropertyType.Number), this.CreateProp('detailVisibilityMode', PropertyType.Enum, '', tryGetModuleWijmoGridDetail().DetailVisibilityMode), this.CreateProp('rowHasDetail', PropertyType.Function), this.CreateProp('isAnimated', PropertyType.Boolean), ], [], [], undefined, undefined, undefined, '');
case tryGetModuleWijmoGrid() && tryGetModuleWijmoGridSheet() && tryGetModuleWijmoGridSheet().FlexSheet:
return this.getMetaData(tryGetModuleWijmoGrid().FlexGrid).add([this.CreateProp('isTabHolderVisible', PropertyType.Boolean), this.CreateProp('selectedSheetIndex', PropertyType.Number, 'selectedSheetChanged'), ], [this.CreateEvent('selectedSheetChanged', !0), this.CreateEvent('draggingRowColumn'), this.CreateEvent('droppingRowColumn'), this.CreateEvent('loaded'), this.CreateEvent('unknownFunction'), this.CreateEvent('sheetCleared')]);
case tryGetModuleWijmoGrid() && tryGetModuleWijmoGridSheet() && tryGetModuleWijmoGridSheet().Sheet:
return new MetaDataBase([this.CreateProp('name', PropertyType.String), this.CreateProp('itemsSource', PropertyType.Any), this.CreateProp('visible', PropertyType.Boolean), this.CreateProp('rowCount', PropertyType.Number, '', null, !1), this.CreateProp('columnCount', PropertyType.Number, '', null, !1)], [this.CreateEvent('nameChanged'), ]).addOptions({parentReferenceProperty: ''});
case tryGetModuleWijmoGrid() && tryGetModuleWijmoGridMultirow() && tryGetModuleWijmoGridMultirow().MultiRow:
return this.getMetaData(tryGetModuleWijmoGrid().FlexGrid).add([this.CreateProp('layoutDefinition', PropertyType.Any), this.CreateProp('centerHeadersVertically', PropertyType.Boolean), this.CreateProp('collapsedHeaders', PropertyType.Boolean), this.CreateProp('showHeaderCollapseButton', PropertyType.Boolean)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().FlexChartBase:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('binding', PropertyType.String), this.CreateProp('footer', PropertyType.String), this.CreateProp('header', PropertyType.String), this.CreateProp('selectionMode', PropertyType.Enum, '', tryGetModuleWijmoChart().SelectionMode), this.CreateProp('palette', PropertyType.Any), this.CreateProp('plotMargin', PropertyType.Any), this.CreateProp('footerStyle', PropertyType.Any), this.CreateProp('headerStyle', PropertyType.Any), this.CreateProp('tooltipContent', PropertyType.String, '', null, !1), this.CreateProp('itemsSource', PropertyType.Any)], [this.CreateEvent('rendering'), this.CreateEvent('rendered'), this.CreateEvent('selectionChanged', !0), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().FlexChartCore:
return this.getMetaData(tryGetModuleWijmoChart().FlexChartBase).add([this.CreateProp('bindingX', PropertyType.String), this.CreateProp('interpolateNulls', PropertyType.Boolean), this.CreateProp('legendToggle', PropertyType.Boolean), this.CreateProp('symbolSize', PropertyType.Number), this.CreateProp('options', PropertyType.Any), this.CreateProp('selection', PropertyType.Any, 'selectionChanged'), this.CreateProp('itemFormatter', PropertyType.Function), this.CreateProp('labelContent', PropertyType.String, '', null, !1), ], [this.CreateEvent('seriesVisibilityChanged'), ], [this.CreateComplexProp('axisX', !1, !1), this.CreateComplexProp('axisY', !1, !1), this.CreateComplexProp('axes', !0), this.CreateComplexProp('plotAreas', !0)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().FlexChart:
return this.getMetaData(tryGetModuleWijmoChart().FlexChartCore).add([this.CreateProp('chartType', PropertyType.Enum, '', tryGetModuleWijmoChart().ChartType), this.CreateProp('rotated', PropertyType.Boolean), this.CreateProp('stacking', PropertyType.Enum, '', tryGetModuleWijmoChart().Stacking), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().FlexPie:
return this.getMetaData(tryGetModuleWijmoChart().FlexChartBase).add([this.CreateProp('bindingName', PropertyType.String), this.CreateProp('innerRadius', PropertyType.Number), this.CreateProp('isAnimated', PropertyType.Boolean), this.CreateProp('offset', PropertyType.Number), this.CreateProp('reversed', PropertyType.Boolean), this.CreateProp('startAngle', PropertyType.Number), this.CreateProp('selectedItemPosition', PropertyType.Enum, '', tryGetModuleWijmoChart().Position), this.CreateProp('selectedItemOffset', PropertyType.Number), this.CreateProp('itemFormatter', PropertyType.Function), this.CreateProp('labelContent', PropertyType.String, '', null, !1), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().FlexPie && tryGetModuleWijmoChartHierarchical() && tryGetModuleWijmoChartHierarchical().Sunburst:
return this.getMetaData(tryGetModuleWijmoChart().FlexChartBase).add([this.CreateProp('bindingName', PropertyType.Any), this.CreateProp('innerRadius', PropertyType.Number), this.CreateProp('isAnimated', PropertyType.Boolean), this.CreateProp('offset', PropertyType.Number), this.CreateProp('reversed', PropertyType.Boolean), this.CreateProp('startAngle', PropertyType.Number), this.CreateProp('selectedItemPosition', PropertyType.Enum, '', tryGetModuleWijmoChart().Position), this.CreateProp('selectedItemOffset', PropertyType.Number), this.CreateProp('itemFormatter', PropertyType.Function), this.CreateProp('labelContent', PropertyType.String, '', null, !1), this.CreateProp('childItemsPath', PropertyType.Any)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartHierarchical() && tryGetModuleWijmoChartHierarchical().TreeMap:
return this.getMetaData(tryGetModuleWijmoChart().FlexChartBase).add([this.CreateProp('bindingName', PropertyType.Any), this.CreateProp('maxDepth', PropertyType.Number), this.CreateProp('type', PropertyType.Enum, '', tryGetModuleWijmoChartHierarchical().TreeMapType), this.CreateProp('labelContent', PropertyType.String, '', null, !1), this.CreateProp('childItemsPath', PropertyType.Any)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().Axis:
return new MetaDataBase([this.CreateProp('axisLine', PropertyType.Boolean), this.CreateProp('format', PropertyType.String), this.CreateProp('labels', PropertyType.Boolean), this.CreateProp('majorGrid', PropertyType.Boolean), this.CreateProp('majorTickMarks', PropertyType.Enum, '', tryGetModuleWijmoChart().TickMark), this.CreateProp('majorUnit', PropertyType.Number), this.CreateProp('max', PropertyType.Number), this.CreateProp('min', PropertyType.Number), this.CreateProp('position', PropertyType.Enum, '', tryGetModuleWijmoChart().Position), this.CreateProp('reversed', PropertyType.Boolean), this.CreateProp('title', PropertyType.String), this.CreateProp('labelAngle', PropertyType.Number), this.CreateProp('minorGrid', PropertyType.Boolean), this.CreateProp('minorTickMarks', PropertyType.Enum, '', tryGetModuleWijmoChart().TickMark), this.CreateProp('minorUnit', PropertyType.Number), this.CreateProp('origin', PropertyType.Number), this.CreateProp('logBase', PropertyType.Number), this.CreateProp('plotArea', PropertyType.Any), this.CreateProp('labelAlign', PropertyType.String), this.CreateProp('name', PropertyType.String), this.CreateProp('overlappingLabels', PropertyType.Enum, '', tryGetModuleWijmoChart().OverlappingLabels), this.CreateProp('labelPadding', PropertyType.Number), this.CreateProp('itemFormatter', PropertyType.Function), this.CreateProp('itemsSource', PropertyType.Any), this.CreateProp('binding', PropertyType.String), ], [this.CreateEvent('rangeChanged'), ], [], 'axes', !0);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().Legend:
return new MetaDataBase([this.CreateProp('position', PropertyType.Enum, '', tryGetModuleWijmoChart().Position)], [], [], 'legend', !1, !1, '');
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().DataLabelBase:
return new MetaDataBase([this.CreateProp('content', PropertyType.Any, ''), this.CreateProp('border', PropertyType.Boolean), ], [], [], 'dataLabel', !1, !1);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().DataLabel:
return this.getMetaData(tryGetModuleWijmoChart().DataLabelBase).add([this.CreateProp('position', PropertyType.Enum, '', tryGetModuleWijmoChart().LabelPosition), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().PieDataLabel:
return this.getMetaData(tryGetModuleWijmoChart().DataLabelBase).add([this.CreateProp('position', PropertyType.Enum, '', tryGetModuleWijmoChart().PieLabelPosition), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().SeriesBase:
return new MetaDataBase([this.CreateProp('axisX', PropertyType.Any), this.CreateProp('axisY', PropertyType.Any), this.CreateProp('binding', PropertyType.String), this.CreateProp('bindingX', PropertyType.String), this.CreateProp('cssClass', PropertyType.String), this.CreateProp('name', PropertyType.String), this.CreateProp('style', PropertyType.Any), this.CreateProp('altStyle', PropertyType.Any), this.CreateProp('symbolMarker', PropertyType.Enum, '', tryGetModuleWijmoChart().Marker), this.CreateProp('symbolSize', PropertyType.Number), this.CreateProp('symbolStyle', PropertyType.Any), this.CreateProp('visibility', PropertyType.Enum, 'chart.seriesVisibilityChanged', tryGetModuleWijmoChart().SeriesVisibility), this.CreateProp('itemsSource', PropertyType.Any), ], [this.CreateEvent('rendering'), this.CreateEvent('rendered')], [this.CreateComplexProp('axisX', !1, !0), this.CreateComplexProp('axisY', !1, !0), ], 'series', !0);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().Series:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('chartType', PropertyType.Enum, '', tryGetModuleWijmoChart().ChartType)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().LineMarker:
return new MetaDataBase([this.CreateProp('isVisible', PropertyType.Boolean), this.CreateProp('seriesIndex', PropertyType.Number), this.CreateProp('horizontalPosition', PropertyType.Number), this.CreateProp('content', PropertyType.Function), this.CreateProp('verticalPosition', PropertyType.Number), this.CreateProp('alignment', PropertyType.Enum, '', tryGetModuleWijmoChart().LineMarkerAlignment), this.CreateProp('lines', PropertyType.Enum, '', tryGetModuleWijmoChart().LineMarkerLines), this.CreateProp('interaction', PropertyType.Enum, '', tryGetModuleWijmoChart().LineMarkerInteraction), this.CreateProp('dragLines', PropertyType.Boolean), this.CreateProp('dragThreshold', PropertyType.Number), this.CreateProp('dragContent', PropertyType.Boolean), ], [this.CreateEvent('positionChanged'), ], [], undefined, undefined, undefined, '');
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().DataPoint:
return new MetaDataBase([this.CreateProp('x', PropertyType.AnyPrimitive), this.CreateProp('y', PropertyType.AnyPrimitive)], [], [], '');
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnnotation() && tryGetModuleWijmoChartAnnotation().AnnotationLayer:
return new MetaDataBase([], [], [], undefined, undefined, undefined, '');
case'FlexChartAnnotation':
return new MetaDataBase([this.CreateProp('type', PropertyType.String, '', null, !1), this.CreateProp('attachment', PropertyType.Enum, '', tryGetModuleWijmoChartAnnotation().AnnotationAttachment), this.CreateProp('position', PropertyType.Enum, '', tryGetModuleWijmoChartAnnotation().AnnotationPosition), this.CreateProp('point', PropertyType.Any), this.CreateProp('seriesIndex', PropertyType.Number), this.CreateProp('pointIndex', PropertyType.Number), this.CreateProp('offset', PropertyType.Any), this.CreateProp('style', PropertyType.Any), this.CreateProp('isVisible', PropertyType.Boolean), this.CreateProp('tooltip', PropertyType.String), this.CreateProp('text', PropertyType.String), this.CreateProp('content', PropertyType.String), this.CreateProp('name', PropertyType.String), this.CreateProp('width', PropertyType.Number), this.CreateProp('height', PropertyType.Number), this.CreateProp('start', PropertyType.Any), this.CreateProp('end', PropertyType.Any), this.CreateProp('radius', PropertyType.Number), this.CreateProp('length', PropertyType.Number), this.CreateProp('href', PropertyType.String)], [], [this.CreateComplexProp('point', !1, !0), this.CreateComplexProp('start', !1, !0), this.CreateComplexProp('end', !1, !0), this.CreateComplexProp('points', !0), ], 'items', !0);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartInteraction() && tryGetModuleWijmoChartInteraction().RangeSelector:
return new MetaDataBase([this.CreateProp('isVisible', PropertyType.Boolean), this.CreateProp('min', PropertyType.Number), this.CreateProp('max', PropertyType.Number), this.CreateProp('orientation', PropertyType.Enum, '', tryGetModuleWijmoChartInteraction().Orientation), this.CreateProp('seamless', PropertyType.Boolean), this.CreateProp('minScale', PropertyType.Number), this.CreateProp('maxScale', PropertyType.Number), ], [this.CreateEvent('rangeChanged'), ], [], undefined, undefined, undefined, '');
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartInteraction() && tryGetModuleWijmoChartInteraction().ChartGestures:
return new MetaDataBase([this.CreateProp('mouseAction', PropertyType.Enum, '', tryGetModuleWijmoChartInteraction().MouseAction), this.CreateProp('interactiveAxes', PropertyType.Enum, '', tryGetModuleWijmoChartInteraction().InteractiveAxes), this.CreateProp('enable', PropertyType.Boolean), this.CreateProp('scaleX', PropertyType.Number), this.CreateProp('scaleY', PropertyType.Number), this.CreateProp('posX', PropertyType.Number), this.CreateProp('posY', PropertyType.Number), ], [], [], undefined, undefined, undefined, '');
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnimation() && tryGetModuleWijmoChartAnimation().ChartAnimation:
return new MetaDataBase([this.CreateProp('animationMode', PropertyType.Enum, '', tryGetModuleWijmoChartAnimation().AnimationMode), this.CreateProp('easing', PropertyType.Enum, '', tryGetModuleWijmoChartAnimation().Easing), this.CreateProp('duration', PropertyType.Number), this.CreateProp('axisAnimation', PropertyType.Boolean)], [], [], undefined, undefined, undefined, '');
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialChart:
return this.getMetaData(tryGetModuleWijmoChart().FlexChartCore).add([this.CreateProp('chartType', PropertyType.Enum, '', tryGetModuleWijmoChartFinance().FinancialChartType), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinance().FinancialSeries:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('chartType', PropertyType.Enum, '', tryGetModuleWijmoChartFinance().FinancialChartType)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartRadar() && tryGetModuleWijmoChartRadar().FlexRadar:
return this.getMetaData(tryGetModuleWijmoChart().FlexChartCore).add([this.CreateProp('chartType', PropertyType.Enum, '', tryGetModuleWijmoChartRadar().RadarChartType), this.CreateProp('startAngle', PropertyType.Number), this.CreateProp('totalAngle', PropertyType.Number), this.CreateProp('reversed', PropertyType.Boolean), this.CreateProp('stacking', PropertyType.Enum, '', tryGetModuleWijmoChart().Stacking)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartRadar() && tryGetModuleWijmoChartRadar().FlexRadarSeries:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('chartType', PropertyType.Enum, '', tryGetModuleWijmoChartRadar().RadarChartType)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartRadar() && tryGetModuleWijmoChartRadar().FlexRadarAxis:
return this.getMetaData(tryGetModuleWijmoChart().Axis);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().TrendLineBase:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('sampleCount', PropertyType.Number)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().TrendLine:
return this.getMetaData(tryGetModuleWijmoChartAnalytics().TrendLineBase).add([this.CreateProp('order', PropertyType.Number), this.CreateProp('fitType', PropertyType.Enum, '', tryGetModuleWijmoChartAnalytics().TrendLineFitType)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().MovingAverage:
return this.getMetaData(tryGetModuleWijmoChartAnalytics().TrendLineBase).add([this.CreateProp('period', PropertyType.Number), this.CreateProp('type', PropertyType.Enum, '', tryGetModuleWijmoChartAnalytics().MovingAverageType)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().FunctionSeries:
return this.getMetaData(tryGetModuleWijmoChartAnalytics().TrendLineBase).add([this.CreateProp('min', PropertyType.Number), this.CreateProp('max', PropertyType.Number), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().YFunctionSeries:
return this.getMetaData(tryGetModuleWijmoChartAnalytics().FunctionSeries).add([this.CreateProp('func', PropertyType.Function), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().ParametricFunctionSeries:
return this.getMetaData(tryGetModuleWijmoChartAnalytics().FunctionSeries).add([this.CreateProp('func', PropertyType.Function), this.CreateProp('xFunc', PropertyType.Function), this.CreateProp('yFunc', PropertyType.Function), ]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().Waterfall:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('relativeData', PropertyType.Boolean), this.CreateProp('start', PropertyType.Number), this.CreateProp('startLabel', PropertyType.String), this.CreateProp('showTotal', PropertyType.Boolean), this.CreateProp('totalLabel', PropertyType.String), this.CreateProp('showIntermediateTotal', PropertyType.Boolean), this.CreateProp('intermediateTotalPositions', PropertyType.Any), this.CreateProp('intermediateTotalLabels', PropertyType.Any), this.CreateProp('connectorLines', PropertyType.Boolean), this.CreateProp('styles', PropertyType.Any)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().BoxWhisker:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('quartileCalculation', PropertyType.Enum, '', tryGetModuleWijmoChartAnalytics().QuartileCalculation), this.CreateProp('groupWidth', PropertyType.Number), this.CreateProp('gapWidth', PropertyType.Number), this.CreateProp('showMeanLine', PropertyType.Boolean), this.CreateProp('meanLineStyle', PropertyType.Any), this.CreateProp('showMeanMarker', PropertyType.Boolean), this.CreateProp('meanMarkerStyle', PropertyType.Any), this.CreateProp('showInnerPoints', PropertyType.Boolean), this.CreateProp('showOutliers', PropertyType.Boolean)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartAnalytics() && tryGetModuleWijmoChartAnalytics().ErrorBar:
return this.getMetaData(tryGetModuleWijmoChart().Series).add([this.CreateProp('errorBarStyle', PropertyType.Any), this.CreateProp('value', PropertyType.Any), this.CreateProp('errorAmount', PropertyType.Enum, '', tryGetModuleWijmoChartAnalytics().ErrorAmount), this.CreateProp('endStyle', PropertyType.Enum, '', tryGetModuleWijmoChartAnalytics().ErrorBarEndStyle), this.CreateProp('direction', PropertyType.Enum, '', tryGetModuleWijmoChartAnalytics().ErrorBarDirection)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChart().PlotArea:
return new MetaDataBase([this.CreateProp('column', PropertyType.Number), this.CreateProp('height', PropertyType.String), this.CreateProp('name', PropertyType.String), this.CreateProp('row', PropertyType.Number), this.CreateProp('style', PropertyType.Any), this.CreateProp('width', PropertyType.String), ], [], [], 'plotAreas', !0);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().Fibonacci:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('high', PropertyType.Number), this.CreateProp('low', PropertyType.Number), this.CreateProp('labelPosition', PropertyType.Enum, '', tryGetModuleWijmoChart().LabelPosition), this.CreateProp('levels', PropertyType.Any), this.CreateProp('minX', PropertyType.AnyPrimitive), this.CreateProp('maxX', PropertyType.AnyPrimitive), this.CreateProp('uptrend', PropertyType.Boolean)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().FibonacciTimeZones:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('startX', PropertyType.Any), this.CreateProp('endX', PropertyType.Any), this.CreateProp('labelPosition', PropertyType.Enum, '', tryGetModuleWijmoChart().LabelPosition), this.CreateProp('levels', PropertyType.Any)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().FibonacciArcs:
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().FibonacciFans:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase).add([this.CreateProp('start', PropertyType.Any), this.CreateProp('end', PropertyType.Any), this.CreateProp('labelPosition', PropertyType.Enum, '', tryGetModuleWijmoChart().LabelPosition), this.CreateProp('levels', PropertyType.Any)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().OverlayIndicatorBase:
return this.getMetaData(tryGetModuleWijmoChart().SeriesBase);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().SingleOverlayIndicatorBase:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().OverlayIndicatorBase).add([this.CreateProp('period', PropertyType.Number)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().MacdBase:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().OverlayIndicatorBase).add([this.CreateProp('fastPeriod', PropertyType.Number), this.CreateProp('slowPeriod', PropertyType.Number), this.CreateProp('smoothingPeriod', PropertyType.Number)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().Macd:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().MacdBase).add([this.CreateProp('styles', PropertyType.Any)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().MacdHistogram:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().MacdBase);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().ATR:
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().RSI:
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().WilliamsR:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().SingleOverlayIndicatorBase);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().CCI:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().SingleOverlayIndicatorBase).add([this.CreateProp('constant', PropertyType.Number)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().Stochastic:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().OverlayIndicatorBase).add([this.CreateProp('dPeriod', PropertyType.Number), this.CreateProp('kPeriod', PropertyType.Number), this.CreateProp('smoothingPeriod', PropertyType.Number), this.CreateProp('styles', PropertyType.Any)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().Envelopes:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().OverlayIndicatorBase).add([this.CreateProp('period', PropertyType.Number), this.CreateProp('size', PropertyType.Number), this.CreateProp('type', PropertyType.Enum, '', tryGetModuleWijmoChartFinanceAnalytics().MovingAverageType)]);
case tryGetModuleWijmoChart() && tryGetModuleWijmoChartFinance() && tryGetModuleWijmoChartFinanceAnalytics() && tryGetModuleWijmoChartFinanceAnalytics().BollingerBands:
return this.getMetaData(tryGetModuleWijmoChartFinanceAnalytics().OverlayIndicatorBase).add([this.CreateProp('period', PropertyType.Number), this.CreateProp('multiplier', PropertyType.Number)]);
case tryGetModuleWijmoGauge() && tryGetModuleWijmoGauge().Gauge:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('value', PropertyType.Number, 'valueChanged'), this.CreateProp('min', PropertyType.Number), this.CreateProp('max', PropertyType.Number), this.CreateProp('origin', PropertyType.Number), this.CreateProp('isReadOnly', PropertyType.Boolean), this.CreateProp('step', PropertyType.Number), this.CreateProp('format', PropertyType.String), this.CreateProp('thickness', PropertyType.Number), this.CreateProp('hasShadow', PropertyType.Boolean), this.CreateProp('isAnimated', PropertyType.Boolean), this.CreateProp('showText', PropertyType.Enum, '', tryGetModuleWijmoGauge().ShowText), this.CreateProp('showTicks', PropertyType.Boolean), this.CreateProp('showRanges', PropertyType.Boolean), this.CreateProp('thumbSize', PropertyType.Number), this.CreateProp('tickSpacing', PropertyType.Number), this.CreateProp('getText', PropertyType.Function)], [this.CreateEvent('valueChanged', !0)], [this.CreateComplexProp('ranges', !0), this.CreateComplexProp('pointer', !1, !1), this.CreateComplexProp('face', !1, !1)]).addOptions({ngModelProperty: 'value'});
case tryGetModuleWijmoGauge() && tryGetModuleWijmoGauge().LinearGauge:
return this.getMetaData(tryGetModuleWijmoGauge().Gauge).add([this.CreateProp('direction', PropertyType.Enum, '', tryGetModuleWijmoGauge().GaugeDirection)]);
case tryGetModuleWijmoGauge() && tryGetModuleWijmoGauge().BulletGraph:
return this.getMetaData(tryGetModuleWijmoGauge().LinearGauge).add([this.CreateProp('target', PropertyType.Number), this.CreateProp('good', PropertyType.Number), this.CreateProp('bad', PropertyType.Number)]);
case tryGetModuleWijmoGauge() && tryGetModuleWijmoGauge().RadialGauge:
return this.getMetaData(tryGetModuleWijmoGauge().Gauge).add([this.CreateProp('autoScale', PropertyType.Boolean), this.CreateProp('startAngle', PropertyType.Number), this.CreateProp('sweepAngle', PropertyType.Number)]);
case tryGetModuleWijmoGauge() && tryGetModuleWijmoGauge().Range:
return new MetaDataBase([this.CreateProp('color', PropertyType.String), this.CreateProp('min', PropertyType.Number), this.CreateProp('max', PropertyType.Number), this.CreateProp('name', PropertyType.String), this.CreateProp('thickness', PropertyType.Number)], [], [], 'ranges', !0);
case tryGetModuleWijmoOlap() && tryGetModuleWijmoOlap().PivotGrid:
return this.getMetaData(tryGetModuleWijmoGrid().FlexGrid).add([this.CreateProp('showDetailOnDoubleClick', PropertyType.Boolean), this.CreateProp('customContextMenu', PropertyType.Boolean), this.CreateProp('collapsibleSubtotals', PropertyType.Boolean), this.CreateProp('centerHeadersVertically', PropertyType.Boolean), this.CreateProp('showColumnFieldHeaders', PropertyType.Boolean), this.CreateProp('showRowFieldHeaders', PropertyType.Boolean), ]);
case tryGetModuleWijmoOlap() && tryGetModuleWijmoOlap().PivotChart:
return new MetaDataBase([this.CreateProp('chartType', PropertyType.Enum, '', tryGetModuleWijmoOlap().PivotChartType), this.CreateProp('showHierarchicalAxes', PropertyType.Boolean), this.CreateProp('showTotals', PropertyType.Boolean), this.CreateProp('showTitle', PropertyType.Boolean), this.CreateProp('showLegend', PropertyType.Enum, '', tryGetModuleWijmoOlap().LegendVisibility), this.CreateProp('legendPosition', PropertyType.Enum, '', tryGetModuleWijmoChart().Position), this.CreateProp('stacking', PropertyType.Enum, '', tryGetModuleWijmoChart().Stacking), this.CreateProp('maxSeries', PropertyType.Number), this.CreateProp('maxPoints', PropertyType.Number), this.CreateProp('itemsSource', PropertyType.Any), ]);
case tryGetModuleWijmoOlap() && tryGetModuleWijmoOlap().PivotPanel:
return new MetaDataBase([this.CreateProp('autoGenerateFields', PropertyType.Boolean), this.CreateProp('viewDefinition', PropertyType.String), this.CreateProp('engine', PropertyType.Any), this.CreateProp('itemsSource', PropertyType.Any), ], [this.CreateEvent('itemsSourceChanged'), this.CreateEvent('viewDefinitionChanged'), this.CreateEvent('updatingView'), this.CreateEvent('updatedView')]);
case tryGetModuleWijmoOlap() && tryGetModuleWijmoOlap().PivotField:
return new MetaDataBase([this.CreateProp('binding', PropertyType.String), this.CreateProp('header', PropertyType.String), this.CreateProp('dataType', PropertyType.Enum, '', wjcCore.DataType), ], [], [], '', !0, !0, '');
case tryGetModuleWijmoViewer() && tryGetModuleWijmoViewer().ViewerBase:
return new MetaDataBase([this.CreateProp('serviceUrl', PropertyType.String), this.CreateProp('filePath', PropertyType.String), this.CreateProp('fullScreen', PropertyType.Boolean, 'fullScreenChanged'), this.CreateProp('zoomFactor', PropertyType.Number, 'zoomFactorChanged'), this.CreateProp('mouseMode', PropertyType.Enum, 'mouseModeChanged', tryGetModuleWijmoViewer().MouseMode), this.CreateProp('selectMouseMode', PropertyType.Boolean, 'selectMouseModeChanged'), this.CreateProp('viewMode', PropertyType.Enum, 'viewModeChanged', tryGetModuleWijmoViewer().ViewMode), ], [this.CreateEvent('pageIndexChanged'), this.CreateEvent('viewModeChanged'), this.CreateEvent('mouseModeChanged'), this.CreateEvent('selectMouseModeChanged'), this.CreateEvent('fullScreenChanged'), this.CreateEvent('zoomFactorChanged', !0), this.CreateEvent('queryLoadingData')]);
case tryGetModuleWijmoViewer() && tryGetModuleWijmoViewer().ReportViewer:
return this.getMetaData(tryGetModuleWijmoViewer().ViewerBase).add([this.CreateProp('paginated', PropertyType.Boolean), this.CreateProp('reportName', PropertyType.String), ]);
case tryGetModuleWijmoViewer() && tryGetModuleWijmoViewer().PdfViewer:
return this.getMetaData(tryGetModuleWijmoViewer().ViewerBase);
case tryGetModuleWijmoNav() && tryGetModuleWijmoNav().TreeView:
return this.getMetaData(wjcCore.Control).add([this.CreateProp('childItemsPath', PropertyType.Any), this.CreateProp('displayMemberPath', PropertyType.Any), this.CreateProp('imageMemberPath', PropertyType.Any), this.CreateProp('isContentHtml', PropertyType.Boolean), this.CreateProp('showCheckboxes', PropertyType.Boolean), this.CreateProp('autoCollapse', PropertyType.Boolean), this.CreateProp('isAnimated', PropertyType.Boolean), this.CreateProp('isReadOnly', PropertyType.Boolean), this.CreateProp('allowDragging', PropertyType.Boolean), this.CreateProp('expandOnClick', PropertyType.Boolean), this.CreateProp('lazyLoadFunction', PropertyType.Function), this.CreateProp('itemsSource', PropertyType.Any), this.CreateProp('selectedItem', PropertyType.Any, 'selectedItemChanged'), this.CreateProp('selectedNode', PropertyType.Any, 'selectedItemChanged'), this.CreateProp('checkedItems', PropertyType.Any, 'checkedItemsChanged'), ], [this.CreateEvent('itemsSourceChanged', !0), this.CreateEvent('loadingItems'), this.CreateEvent('loadedItems'), this.CreateEvent('itemClicked'), this.CreateEvent('selectedItemChanged'), this.CreateEvent('checkedItemsChanged', !0), this.CreateEvent('isCollapsedChanging'), this.CreateEvent('isCollapsedChanged'), this.CreateEvent('isCheckedChanging'), this.CreateEvent('isCheckedChanged'), this.CreateEvent('formatItem'), this.CreateEvent('dragStart'), this.CreateEvent('dragOver'), this.CreateEvent('drop'), this.CreateEvent('dragEnd'), this.CreateEvent('nodeEditStarting'), this.CreateEvent('nodeEditStarted'), this.CreateEvent('nodeEditEnding'), this.CreateEvent('nodeEditEnded')])
}
return new MetaDataBase([])
}, ControlMetaFactory.getClassName = function(classRef)
{
return (classRef.toString().match(/function (.+?)\(/) || [, ''])[1]
}, ControlMetaFactory.toCamelCase = function(s)
{
return s.toLowerCase().replace(/-(.)/g, function(match, group1)
{
return group1.toUpperCase()
})
}, ControlMetaFactory.findInArr = function(arr, propName, value)
{
for (var i in arr)
if (arr[i][propName] === value)
return arr[i];
return null
}, ControlMetaFactory
}();
exports.ControlMetaFactory = ControlMetaFactory;
PropDescBase = function()
{
function PropDescBase(propertyName, propertyType, changeEvent, enumType, isNativeControlProperty, priority)
{
isNativeControlProperty === void 0 && (isNativeControlProperty = !0);
priority === void 0 && (priority = 0);
this._priority = 0;
this._propertyName = propertyName;
this._propertyType = propertyType;
this._changeEvent = changeEvent;
this._enumType = enumType;
this._isNativeControlProperty = isNativeControlProperty;
this._priority = priority
}
return Object.defineProperty(PropDescBase.prototype, "propertyName", {
get: function()
{
return this._propertyName
}, enumerable: !0, configurable: !0
}), Object.defineProperty(PropDescBase.prototype, "propertyType", {
get: function()
{
return this._propertyType
}, enumerable: !0, configurable: !0
}), Object.defineProperty(PropDescBase.prototype, "changeEvent", {
get: function()
{
return this._changeEvent
}, enumerable: !0, configurable: !0
}), Object.defineProperty(PropDescBase.prototype, "enumType", {
get: function()
{
return this._enumType
}, enumerable: !0, configurable: !0
}), Object.defineProperty(PropDescBase.prototype, "bindingMode", {
get: function()
{
return this.changeEvent ? BindingMode.TwoWay : BindingMode.OneWay
}, enumerable: !0, configurable: !0
}), Object.defineProperty(PropDescBase.prototype, "isNativeControlProperty", {
get: function()
{
return this._isNativeControlProperty
}, enumerable: !0, configurable: !0
}), Object.defineProperty(PropDescBase.prototype, "priority", {
get: function()
{
return this._priority
}, enumerable: !0, configurable: !0
}), Object.defineProperty(PropDescBase.prototype, "shouldUpdateSource", {
get: function()
{
return this.bindingMode === BindingMode.TwoWay && this.propertyType != PropertyType.EventHandler
}, enumerable: !0, configurable: !0
}), PropDescBase.prototype.initialize = function(options)
{
wjcCore.copy(this, options)
}, PropDescBase.prototype.castValueToType = function(value)
{
var type,
pt,
castVal;
if (value == undefined)
return value;
if (type = this.propertyType, pt = PropertyType, type === pt.AnyPrimitive)
{
if (!wjcCore.isString(value))
return value;
if (value === 'true' || value === 'false')
type = pt.Boolean;
else
return (castVal = +value, !isNaN(castVal)) ? castVal : (castVal = this._parseDate(value), !wjcCore.isString(castVal)) ? castVal : value
}
switch (type)
{
case pt.Number:
if (typeof value == 'string')
{
if (value.indexOf('*') >= 0)
return value;
if (value.trim() === '')
return null
}
return +value;
case pt.Boolean:
return value === 'true' ? !0 : value === 'false' ? !1 : !!value;
case pt.String:
return value + '';
case pt.Date:
return this._parseDate(value);
case pt.Enum:
return typeof value == 'number' ? value : this.enumType[value];
default:
return value
}
}, PropDescBase.prototype._parseDate = function(value)
{
if (value && wjcCore.isString(value))
{
value = value.replace(/["']/g, '');
var dt=wjcCore.changeType(value, wjcCore.DataType.Date, 'r');
if (wjcCore.isDate(dt))
return dt
}
return value
}, PropDescBase
}();
exports.PropDescBase = PropDescBase,
function(PropertyType)
{
PropertyType[PropertyType.Boolean = 0] = "Boolean";
PropertyType[PropertyType.Number = 1] = "Number";
PropertyType[PropertyType.Date = 2] = "Date";
PropertyType[PropertyType.String = 3] = "String";
PropertyType[PropertyType.AnyPrimitive = 4] = "AnyPrimitive";
PropertyType[PropertyType.Enum = 5] = "Enum";
PropertyType[PropertyType.Function = 6] = "Function";
PropertyType[PropertyType.EventHandler = 7] = "EventHandler";
PropertyType[PropertyType.Any = 8] = "Any"
}(PropertyType = exports.PropertyType || (exports.PropertyType = {}));
exports.isSimpleType = isSimpleType,
function(BindingMode)
{
BindingMode[BindingMode.OneWay = 0] = "OneWay";
BindingMode[BindingMode.TwoWay = 1] = "TwoWay"
}(BindingMode = exports.BindingMode || (exports.BindingMode = {}));
EventDescBase = function()
{
function EventDescBase(eventName, isPropChanged)
{
this._eventName = eventName;
this._isPropChanged = isPropChanged
}
return Object.defineProperty(EventDescBase.prototype, "eventName", {
get: function()
{
return this._eventName
}, enumerable: !0, configurable: !0
}), Object.defineProperty(EventDescBase.prototype, "isPropChanged", {
get: function()
{
return this._isPropChanged === !0
}, enumerable: !0, configurable: !0
}), EventDescBase
}();
exports.EventDescBase = EventDescBase;
ComplexPropDescBase = function()
{
function ComplexPropDescBase(propertyName, isArray, ownsObject)
{
ownsObject === void 0 && (ownsObject = !1);
this.isArray = !1;
this._ownsObject = !1;
this.propertyName = propertyName;
this.isArray = isArray;
this._ownsObject = ownsObject
}
return Object.defineProperty(ComplexPropDescBase.prototype, "ownsObject", {
get: function()
{
return this.isArray || this._ownsObject
}, enumerable: !0, configurable: !0
}), ComplexPropDescBase
}();
exports.ComplexPropDescBase = ComplexPropDescBase;
MetaDataBase = function()
{
function MetaDataBase(props, events, complexProps, parentProperty, isParentPropertyArray, ownsObject, parentReferenceProperty, ngModelProperty)
{
this._props = [];
this._events = [];
this._complexProps = [];
this.props = props;
this.events = events;
this.complexProps = complexProps;
this.parentProperty = parentProperty;
this.isParentPropertyArray = isParentPropertyArray;
this.ownsObject = ownsObject;
this.parentReferenceProperty = parentReferenceProperty;
this.ngModelProperty = ngModelProperty
}
return Object.defineProperty(MetaDataBase.prototype, "props", {
get: function()
{
return this._props
}, set: function(value)
{
this._props = value || []
}, enumerable: !0, configurable: !0
}), Object.defineProperty(MetaDataBase.prototype, "events", {
get: function()
{
return this._events
}, set: function(value)
{
this._events = value || []
}, enumerable: !0, configurable: !0
}), Object.defineProperty(MetaDataBase.prototype, "complexProps", {
get: function()
{
return this._complexProps
}, set: function(value)
{
this._complexProps = value || []
}, enumerable: !0, configurable: !0
}), MetaDataBase.prototype.add = function(props, events, complexProps, parentProperty, isParentPropertyArray, ownsObject, parentReferenceProperty, ngModelProperty)
{
return this.addOptions({
props: props, events: events, complexProps: complexProps, parentProperty: parentProperty, isParentPropertyArray: isParentPropertyArray, ownsObject: ownsObject, parentReferenceProperty: parentReferenceProperty, ngModelProperty: ngModelProperty
})
}, MetaDataBase.prototype.addOptions = function(options)
{
var prop,
thisValue,
optionsValue;
for (prop in options)
thisValue = this[prop],
optionsValue = options[prop],
thisValue instanceof Array ? this[prop] = thisValue.concat(optionsValue || []) : optionsValue !== undefined && (this[prop] = optionsValue);
return this
}, MetaDataBase.prototype.prepare = function()
{
var baseArr=[].concat(this._props);
this._props.sort(function(a, b)
{
var ret=a.priority - b.priority;
return ret || (ret = baseArr.indexOf(a) - baseArr.indexOf(b)), ret
})
}, MetaDataBase
}();
exports.MetaDataBase = MetaDataBase