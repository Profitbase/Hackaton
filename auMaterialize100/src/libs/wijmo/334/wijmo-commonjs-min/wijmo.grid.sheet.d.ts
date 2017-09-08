import * as wjcCore from 'wijmo/wijmo';
import * as wjcXlsx from 'wijmo/wijmo.xlsx';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridFilter from 'wijmo/wijmo.grid.filter';
export declare class _CalcEngine {
    private _owner;
    private _expression;
    private _expressLength;
    private _pointer;
    private _expressionCache;
    private _tokenTable;
    private _token;
    private _idChars;
    private _functionTable;
    private _cacheSize;
    constructor(owner: FlexSheet);
    unknownFunction: wjcCore.Event;
    onUnknownFunction(funcName: string, params: Array<_Expression>): _Expression;
    evaluate(expression: string, format?: string, sheet?: Sheet, rowIndex?: number, columnIndex?: number): any;
    addCustomFunction(name: string, func: Function, minParamsCount?: number, maxParamsCount?: number): void;
    addFunction(name: string, func: Function, minParamsCount?: number, maxParamsCount?: number): void;
    _clearExpressionCache(): void;
    private _parse(expression);
    private _buildSymbolTable();
    private _registerAggregateFunction();
    private _registerMathFunction();
    private _registerLogicalFunction();
    private _registerTextFunction();
    private _registerDateFunction();
    private _registLookUpReferenceFunction();
    private _registFinacialFunction();
    private _addToken(symbol, id, type);
    private _parseExpression();
    private _parseCompareOrConcat();
    private _parseAddSub();
    private _parseMulDiv();
    private _parsePower();
    private _parseUnary();
    private _parseAtom();
    private _getToken();
    private _parseDigit();
    private _parseString();
    private _parseDate();
    private _parseSheetRef();
    private _getCellRange(identifier);
    private _parseCellRange(cell);
    private _parseCell(cell);
    private _getParameters();
    private _getAggregateResult(aggType, params, sheet?);
    private _getFlexSheetAggregateResult(aggType, params, sheet?);
    private _getItemList(params, sheet?, needParseToNum?, isGetEmptyValue?, isGetHiddenValue?, columnIndex?);
    private _countBlankCells(items);
    private _countNumberCells(items);
    private _getRankOfCellRange(num, items, order?);
    private _handleCountIfs(params, sheet?);
    private _countCellsByCriterias(itemsList, criterias, sheet?, countItems?);
    private _handleSumIfs(params, sheet?);
    private _sumCellsByCriterias(itemsList, criterias, sumItems?, sheet?);
    private _getProductOfNumbers(items);
    private _handleSubtotal(params, sheet);
    private _handleDCount(params, sheet);
    private _DCountWithCriterias(countItems, countRef, criteriaRef);
    private _getColumnIndexByField(cellExpr, field);
    private _getSumProduct(params, sheet);
    private _getItemListForSumProduct(params, sheet);
    private _getSheet(sheetRef);
    private _parseRightExpr(rightExpr);
    private _combineExpr(leftExpr, rightExpr);
    private _parseRegCriteria(criteria);
    private _calculateRate(params, sheet?);
    private _handleHLookup(params, sheet?);
    private _exactMatch(lookupValue, cells, sheet?, needHandleWildCard?);
    private _approximateMatch(lookupValue, cells, sheet?);
    private _checkCache(expression);
    private _ensureNonFunctionExpression(expr, sheet?);
    private _getDefinedName(name);
}
export declare class _Token {
    private _tokenType;
    private _tokenID;
    private _value;
    constructor(val: any, tkID: _TokenID, tkType: _TokenType);
    readonly value: any;
    readonly tokenID: _TokenID;
    readonly tokenType: _TokenType;
}
export declare class _FunctionDefinition {
    private _paramMax;
    private _paramMin;
    private _func;
    constructor(func: Function, paramMax?: number, paramMin?: number);
    readonly paramMax: number;
    readonly paramMin: number;
    readonly func: Function;
}
export declare enum _TokenType {
    COMPARE = 0,
    ADDSUB = 1,
    MULDIV = 2,
    POWER = 3,
    CONCAT = 4,
    GROUP = 5,
    LITERAL = 6,
    IDENTIFIER = 7,
}
export declare enum _TokenID {
    GT = 0,
    LT = 1,
    GE = 2,
    LE = 3,
    EQ = 4,
    NE = 5,
    ADD = 6,
    SUB = 7,
    MUL = 8,
    DIV = 9,
    DIVINT = 10,
    MOD = 11,
    POWER = 12,
    CONCAT = 13,
    OPEN = 14,
    CLOSE = 15,
    END = 16,
    COMMA = 17,
    PERIOD = 18,
    ATOM = 19,
}
export declare class _Expression {
    private _token;
    _evaluatedValue: any;
    constructor(arg?: any);
    readonly token: _Token;
    evaluate(sheet?: Sheet, rowIndex?: number, columnIndex?: number): any;
    static toString(x: _Expression, sheet?: Sheet): string;
    static toNumber(x: _Expression, sheet?: Sheet): number;
    static toBoolean(x: _Expression, sheet?: Sheet): any;
    static toDate(x: _Expression, sheet?: Sheet): any;
    static _toOADate(val: Date): number;
    static _fromOADate(oADate: number): Date;
}
export declare class _UnaryExpression extends _Expression {
    private _expr;
    constructor(arg: any, expr: _Expression);
    evaluate(sheet?: Sheet): any;
}
export declare class _BinaryExpression extends _Expression {
    private _leftExpr;
    private _rightExpr;
    constructor(arg: any, leftExpr: _Expression, rightExpr: _Expression);
    evaluate(sheet?: Sheet): any;
    private _isDateValue(val);
}
export declare class _CellRangeExpression extends _Expression {
    private _cells;
    private _sheetRef;
    private _flex;
    private _evalutingRange;
    constructor(cells: wjcGrid.CellRange, sheetRef: string, flex: FlexSheet);
    evaluate(sheet?: Sheet): any;
    getValues(isGetHiddenValue?: boolean, columnIndex?: number, sheet?: Sheet): any[];
    getValuseWithTwoDimensions(isGetHiddenValue?: boolean, sheet?: Sheet): any[];
    readonly cells: wjcGrid.CellRange;
    readonly sheetRef: string;
    private _getCellValue(cell, sheet?);
    _getSheet(): Sheet;
}
export declare class _FunctionExpression extends _Expression {
    private _funcDefinition;
    private _params;
    private _needCacheEvaluatedVal;
    constructor(func: _FunctionDefinition, params: Array<_Expression>, needCacheEvaluatedVal?: boolean);
    evaluate(sheet?: Sheet, rowIndex?: number, columnIndex?: number): any;
}
export declare class _UndoAction {
    _owner: FlexSheet;
    private _sheetIndex;
    constructor(owner: FlexSheet);
    readonly sheetIndex: number;
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _EditAction extends _UndoAction {
    private _selections;
    private _oldValues;
    private _newValues;
    private _isPaste;
    private _mergeAction;
    constructor(owner: FlexSheet, selection?: wjcGrid.CellRange);
    readonly isPaste: boolean;
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    markIsPaste(): void;
    updateForPasting(rng: wjcGrid.CellRange): void;
    private _checkActionState();
}
export declare class _ColumnResizeAction extends _UndoAction {
    private _colIndex;
    private _panel;
    private _oldColWidth;
    private _newColWidth;
    constructor(owner: FlexSheet, panel: wjcGrid.GridPanel, colIndex: number);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _RowResizeAction extends _UndoAction {
    private _rowIndex;
    private _panel;
    private _oldRowHeight;
    private _newRowHeight;
    constructor(owner: FlexSheet, panel: wjcGrid.GridPanel, rowIndex: number);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _ColumnsChangedAction extends _UndoAction {
    private _oldValue;
    private _newValue;
    private _selection;
    _affectedFormulas: any;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _RowsChangedAction extends _UndoAction {
    private _oldValue;
    private _newValue;
    private _selection;
    _affectedFormulas: any;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _CellStyleAction extends _UndoAction {
    private _oldStyledCells;
    private _newStyledCells;
    constructor(owner: FlexSheet, styledCells?: any);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _CellMergeAction extends _UndoAction {
    private _oldMergedCells;
    private _newMergedCells;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _SortColumnAction extends _UndoAction {
    private _oldValue;
    private _newValue;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _MoveCellsAction extends _UndoAction {
    private _draggingCells;
    private _draggingColumnSetting;
    private _oldDroppingCells;
    private _newDroppingCells;
    private _oldDroppingColumnSetting;
    private _newDroppingColumnSetting;
    private _dragRange;
    private _dropRange;
    private _isCopyCells;
    private _isDraggingColumns;
    constructor(owner: FlexSheet, draggingCells: wjcGrid.CellRange, droppingCells: wjcGrid.CellRange, isCopyCells: boolean);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
}
export declare class _CutAction extends _UndoAction {
    private _selection;
    private _cutSelection;
    private _cutSheet;
    private _oldValues;
    private _newValues;
    private _oldCutValues;
    private _newCutValues;
    private _mergeAction;
    constructor(owner: FlexSheet);
    undo(): void;
    redo(): void;
    saveNewState(): boolean;
    updateForPasting(rng: wjcGrid.CellRange): void;
}
export declare class _ContextMenu extends wjcCore.Control {
    private _owner;
    private _insRows;
    private _delRows;
    private _insCols;
    private _delCols;
    static controlTemplate: string;
    constructor(element: any, owner: FlexSheet);
    show(e: MouseEvent, point?: wjcCore.Point): void;
    hide(): void;
    private _init();
}
export declare class _TabHolder extends wjcCore.Control {
    private _owner;
    private _sheetControl;
    private _divSheet;
    private _divSplitter;
    private _divRight;
    private _funSplitterMousedown;
    private _splitterMousedownHdl;
    private _startPos;
    static controlTemplate: string;
    constructor(element: any, owner: FlexSheet);
    readonly sheetControl: _SheetTabs;
    visible: boolean;
    getSheetBlanketSize(): number;
    adjustSize(): void;
    private _init();
    private _splitterMousedownHandler(e);
    private _splitterMousemoveHandler(e);
    private _splitterMouseupHandler(e);
    private _adjustDis(dis);
}
export declare class _FlexSheetCellFactory extends wjcGrid.CellFactory {
    updateCell(panel: wjcGrid.GridPanel, r: number, c: number, cell: HTMLElement, rng?: wjcGrid.CellRange): void;
    private _resetCellStyle(column, cell);
    private _getFormattedValue(value, format);
    private _getFirstVisibleCell(g, rng);
}
export declare class FlexSheet extends wjcGrid.FlexGrid {
    private _sheets;
    private _selectedSheetIndex;
    private _tabHolder;
    private _contextMenu;
    private _divContainer;
    private _columnHeaderClicked;
    private _htDown;
    _filter: _FlexSheetFilter;
    private _calcEngine;
    private _functionListHost;
    private _functionList;
    private _functionTarget;
    private _undoStack;
    private _longClickTimer;
    private _cloneStyle;
    private _sortManager;
    private _dragable;
    private _isDragging;
    private _draggingColumn;
    private _draggingRow;
    private _draggingMarker;
    private _draggingTooltip;
    private _draggingCells;
    private _dropRange;
    private _wholeColumnsSelected;
    private _addingSheet;
    private _mouseMoveHdl;
    private _clickHdl;
    private _touchStartHdl;
    private _touchEndHdl;
    private _toRefresh;
    _copiedRanges: wjcGrid.CellRange[];
    _copiedSheet: Sheet;
    _cutData: string;
    private _cutValue;
    private _isContextMenuKeyDown;
    _enableMulSel: boolean;
    _isClicking: boolean;
    _isCopying: boolean;
    _isUndoing: boolean;
    _reservedContent: any;
    _lastVisibleFrozenRow: number;
    _lastVisibleFrozenColumn: number;
    _resettingFilter: boolean;
    private _definedNames;
    static controlTemplate: string;
    constructor(element: any, options?: any);
    readonly sheets: SheetCollection;
    selectedSheetIndex: number;
    readonly selectedSheet: Sheet;
    readonly isFunctionListOpen: boolean;
    isTabHolderVisible: boolean;
    readonly undoStack: UndoStack;
    readonly sortManager: SortManager;
    showFilterIcons: boolean;
    readonly definedNames: wjcCore.ObservableArray;
    selectedSheetChanged: wjcCore.Event;
    onSelectedSheetChanged(e: wjcCore.PropertyChangedEventArgs): void;
    draggingRowColumn: wjcCore.Event;
    onDraggingRowColumn(e: DraggingRowColumnEventArgs): void;
    droppingRowColumn: wjcCore.Event;
    onDroppingRowColumn(e?: wjcCore.EventArgs): void;
    loaded: wjcCore.Event;
    onLoaded(e?: wjcCore.EventArgs): void;
    unknownFunction: wjcCore.Event;
    onUnknownFunction(e: UnknownFunctionEventArgs): void;
    sheetCleared: wjcCore.Event;
    onSheetCleared(e?: wjcCore.EventArgs): void;
    prepareChangingRow: wjcCore.Event;
    onPrepareChangingRow(): void;
    prepareChangingColumn: wjcCore.Event;
    onPrepareChangingColumn(): void;
    rowChanged: wjcCore.Event;
    onRowChanged(e: RowColumnChangedEventArgs): void;
    columnChanged: wjcCore.Event;
    onColumnChanged(e: RowColumnChangedEventArgs): void;
    refresh(fullUpdate?: boolean): void;
    setCellData(r: number, c: any, value: any, coerce?: boolean): boolean;
    containsFocus(): boolean;
    addUnboundSheet(sheetName?: string, rows?: number, cols?: number, pos?: number, grid?: wjcGrid.FlexGrid): Sheet;
    addBoundSheet(sheetName: string, source: any, pos?: number, grid?: wjcGrid.FlexGrid): Sheet;
    applyCellsStyle(cellStyle: ICellStyle, cells?: wjcGrid.CellRange[], isPreview?: boolean): void;
    freezeAtCursor(): void;
    showColumnFilter(): void;
    clear(): void;
    getSelectionFormatState(): IFormatState;
    insertRows(index?: number, count?: number): void;
    deleteRows(index?: number, count?: number): void;
    insertColumns(index?: number, count?: number): void;
    deleteColumns(index?: number, count?: number): void;
    mergeRange(cells?: wjcGrid.CellRange, isCopyMergeCell?: boolean): void;
    getMergedRange(panel: wjcGrid.GridPanel, r: number, c: number, clip?: boolean): wjcGrid.CellRange;
    evaluate(formula: string, format?: string, sheet?: Sheet): any;
    getCellValue(rowIndex: number, colIndex: number, formatted?: boolean, sheet?: Sheet): any;
    showFunctionList(target: HTMLElement): void;
    hideFunctionList(): void;
    selectPreviousFunction(): void;
    selectNextFunction(): void;
    applyFunctionToCell(): void;
    save(fileName?: string): wjcXlsx.Workbook;
    saveAsync(fileName?: string, onSaved?: (base64?: string) => any, onError?: (reason?: any) => any): wjcXlsx.Workbook;
    saveToWorkbookOM(): wjcXlsx.IWorkbook;
    load(workbook: any): void;
    loadAsync(workbook: any, onLoaded?: (workbook: wjcXlsx.Workbook) => void, onError?: (reason?: any) => any): void;
    loadFromWorkbookOM(workbook: wjcXlsx.IWorkbook): void;
    undo(): void;
    redo(): void;
    select(rng: any, show?: any): void;
    addCustomFunction(name: string, func: Function, description?: string, minParamsCount?: number, maxParamsCount?: number): void;
    addFunction(name: string, func: Function, description?: string, minParamsCount?: number, maxParamsCount?: number): void;
    dispose(): void;
    getClipString(rng?: wjcGrid.CellRange): string;
    setClipString(text: string, rng?: wjcGrid.CellRange): void;
    _getCvIndex(index: number): number;
    private _init();
    private _initFuncsList();
    private _getFunctions();
    private _addCustomFunctionDescription(name, description);
    private _getCurrentFormulaIndex(searchText);
    private _prepareCellForEditHandler();
    private _addSheet(sheetName?, rows?, cols?, pos?, grid?);
    private _showSheet(index);
    private _selectedSheetChange(sender, e);
    private _sourceChange(sender, e);
    private _sheetVisibleChange(sender, e);
    private _applyStyleForCell(rowIndex, colIndex, cellStyle);
    private _checkCellFormat(rowIndex, colIndex, formatState);
    private _resetMergedRange(range);
    private _updateCellsForUpdatingRow(originalRowCount, index, count, isDelete?);
    private _updateCellMergeRangeForRow(currentRange, index, count, updatedMergeCell, isDelete?);
    private _updateCellsForUpdatingColumn(originalColumnCount, index, count, isDelete?);
    private _updateCellMergeRangeForColumn(currentRange, index, count, originalColumnCount, updatedMergeCell, isDelete?);
    _cloneMergedCells(): any;
    private _evaluate(formula, format?, sheet?, rowIndex?, columnIndex?);
    _copyTo(sheet: Sheet): void;
    _copyFrom(sheet: Sheet, needRefresh?: boolean): void;
    private _resetMappedColumns(flex);
    private _resetFilterDefinition();
    private _loadFromWorkbook(workbook);
    private _saveToWorkbook();
    private _mouseDown(e);
    private _mouseMove(e);
    private _mouseUp(e);
    private _click();
    private _touchStart(e);
    private _touchEnd();
    private _showDraggingMarker(e);
    private _handleDropping(e);
    private _moveCellContent(srcRowIndex, srcColIndex, desRowIndex, desColIndex, isCopyContent);
    private _exchangeCellStyle(isReverse);
    private _containsMergedCells(rng);
    private _multiSelectColumns(ht);
    private _cumulativeOffset(element);
    private _cumulativeScrollOffset(element);
    private _checkHitWithinSelection(ht);
    private _clearForEmptySheet(rowsOrColumns);
    private _containsGroupRows(cellRange);
    private _delSeletionContent(evt);
    private _updateAffectedFormula(index, count, isAdding, isRow);
    _updateColumnFiler(srcColIndex: number, descColIndex: number): void;
    private _isDescendant(paranet, child);
    _clearCalcEngine(): void;
    private _getRangeString(ranges, sheet, isGetCellValue?);
    private _containsRandFormula(ranges, sheet);
    private _isMultipleRowsSelected(ranges?, sheet?);
    private _isMultipleColumnsSelected(ranges?, sheet?);
    private _postSetClipStringProcess(cellData, row, col, copiedRow, copiedCol);
    private _delCutData();
    private _containsMultiLineText(lines);
    private _sortByRow(sel1, sel2);
    private _sortByColumn(sel1, sel2);
    _setFlexSheetToDirty(): void;
    static convertNumberToAlpha(c: number): string;
    _updateFormulaForReorderingRows(srcRow: number, dstRow: number): void;
    _scanFormulas(): any[];
    _resetFormulas(formulas: any[]): void;
    _getCellStyle(rowIndex: number, colIndex: number, sheet?: Sheet): ICellStyle;
    private _validateSheetName(sheetName);
    private _updateDefinedNameWithSheetRefUpdating(oldSheetName, newSheetName);
}
export declare class DraggingRowColumnEventArgs extends wjcCore.EventArgs {
    private _isDraggingRows;
    private _isShiftKey;
    constructor(isDraggingRows: boolean, isShiftKey: boolean);
    readonly isDraggingRows: boolean;
    readonly isShiftKey: boolean;
}
export declare class UnknownFunctionEventArgs extends wjcCore.EventArgs {
    private _funcName;
    private _params;
    value: string;
    constructor(funcName: string, params: any[]);
    readonly funcName: string;
    readonly params: any[];
}
export declare class RowColumnChangedEventArgs extends wjcCore.EventArgs {
    private _index;
    private _count;
    private _added;
    constructor(index: number, count: number, added: boolean);
    readonly index: number;
    readonly count: number;
    readonly added: boolean;
    readonly isAdd: boolean;
}
export declare class FlexSheetPanel extends wjcGrid.GridPanel {
    constructor(grid: wjcGrid.FlexGrid, cellType: wjcGrid.CellType, rows: wjcGrid.RowCollection, cols: wjcGrid.ColumnCollection, element: HTMLElement);
    getSelectedState(r: number, c: number, rng: wjcGrid.CellRange): wjcGrid.SelectedState;
    getCellData(r: number, c: any, formatted: boolean): any;
    setCellData(r: number, c: any, value: any, coerce?: boolean): boolean;
    _renderCell(row: HTMLElement, r: number, c: number, vrng: wjcGrid.CellRange, state: boolean, ctr: number): number;
}
export declare class HeaderRow extends wjcGrid.Row {
    constructor();
}
export interface ICellStyle {
    className?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string;
    textDecoration?: string;
    textAlign?: string;
    verticalAlign?: string;
    backgroundColor?: string;
    color?: string;
    format?: string;
    whiteSpace?: string;
}
export interface IFormatState {
    isBold?: boolean;
    isItalic?: boolean;
    isUnderline?: boolean;
    textAlign?: string;
    isMergedCell?: boolean;
}
export declare class Sheet {
    private _name;
    private _owner;
    private _rowCount;
    private _columnCount;
    private _visible;
    _unboundSortDesc: wjcCore.ObservableArray;
    private _currentStyledCells;
    private _currentMergedRanges;
    private _grid;
    private _selectionRanges;
    private _isEmptyGrid;
    _rowSettings: any[];
    _filterDefinition: string;
    _scrollPosition: wjcCore.Point;
    _freezeHiddenRowCnt: number;
    _freezeHiddenColumnCnt: number;
    constructor(owner?: FlexSheet, grid?: wjcGrid.FlexGrid, sheetName?: string, rows?: number, cols?: number);
    readonly grid: wjcGrid.FlexGrid;
    name: string;
    visible: boolean;
    rowCount: number;
    columnCount: number;
    readonly selectionRanges: wjcCore.ObservableArray;
    itemsSource: any;
    _styledCells: any;
    _mergedRanges: any;
    nameChanged: wjcCore.Event;
    onNameChanged(e: wjcCore.PropertyChangedEventArgs): void;
    visibleChanged: wjcCore.Event;
    onVisibleChanged(e: wjcCore.EventArgs): void;
    getCellStyle(rowIndex: number, columnIndex: number): ICellStyle;
    _attachOwner(owner: FlexSheet): void;
    _setValidName(validName: string): void;
    _storeRowSettings(): void;
    _setRowSettings(): void;
    private _compareRows();
    private _createGrid();
    private _clearGrid();
    private _gridItemsSourceChanged();
    private _addHeaderRow();
}
export declare class SheetCollection extends wjcCore.ObservableArray {
    private _current;
    sheetCleared: wjcCore.Event;
    onSheetCleared(): void;
    selectedIndex: number;
    selectedSheetChanged: wjcCore.Event;
    onSelectedSheetChanged(e: wjcCore.PropertyChangedEventArgs): void;
    insert(index: number, item: any): void;
    push(...item: any[]): number;
    splice(index: number, count: number, item?: any): any[];
    removeAt(index: number): void;
    sheetNameChanged: wjcCore.Event;
    onSheetNameChanged(e: wjcCore.NotifyCollectionChangedEventArgs): void;
    sheetVisibleChanged: wjcCore.Event;
    onSheetVisibleChanged(e: wjcCore.NotifyCollectionChangedEventArgs): void;
    selectFirst(): boolean;
    selectLast(): boolean;
    selectPrevious(): boolean;
    selectNext(): boolean;
    hide(pos: number): boolean;
    show(pos: number): boolean;
    clear(): void;
    isValidSheetName(sheet: Sheet): boolean;
    getValidSheetName(currentSheet: Sheet): string;
    private _moveCurrentTo(pos);
    private _getSheetIndexFrom(sheetName);
    private _postprocessSheet(item);
    private _getUniqueName();
}
export declare class _SheetTabs extends wjcCore.Control {
    private _sheets;
    private _sheetContainer;
    private _tabContainer;
    private _sheetPage;
    private _newSheet;
    private _owner;
    private _rtl;
    private _sheetTabClicked;
    static controlTemplate: string;
    constructor(element: any, owner: FlexSheet, options?: any);
    refresh(fullUpdate: any): void;
    private _sourceChanged(sender, e?);
    private _selectedSheetChanged(sender, e);
    private _initControl();
    private _initSheetTab();
    private _initSheetPage();
    private _getSheetTabs();
    private _getSheetElement(sheetItem, isActive?);
    private _updateTabActive(pos, active);
    private _updateTabShown(sender, e);
    _adjustSize(): void;
    private _getItemIndex(container, item);
    private _updateSheetName(sender, e);
    private _scrollSheetTabContainer(currentSheetTab);
    private _adjustSheetsPosition();
    private _scrollToActiveSheet(newIndex, oldIndex);
    private _adjustNavigationButtons(rtl);
}
export declare class _UnboundSortDescription {
    private _column;
    private _ascending;
    constructor(column: wjcGrid.Column, ascending: boolean);
    readonly column: wjcGrid.Column;
    readonly ascending: boolean;
}
export declare class SortManager {
    private _sortDescriptions;
    private _owner;
    _committedList: ColumnSortDescription[];
    constructor(owner: FlexSheet);
    sortDescriptions: wjcCore.CollectionView;
    addSortLevel(columnIndex?: number, ascending?: boolean): void;
    deleteSortLevel(columnIndex?: number): void;
    copySortLevel(): void;
    editSortLevel(columnIndex?: number, ascending?: boolean): void;
    moveSortLevel(offset: number): void;
    checkSortItemExists(columnIndex: any): number;
    commitSort(undoable?: boolean): void;
    cancelSort(): void;
    _refresh(): void;
    private _getColumnIndex(property);
    private _getSortItem(columnIndex);
    private _scanUnboundRows();
}
export declare class ColumnSortDescription {
    private _columnIndex;
    private _ascending;
    constructor(columnIndex: number, ascending: boolean);
    columnIndex: number;
    ascending: boolean;
}
export declare class UndoStack {
    private MAX_STACK_SIZE;
    private _owner;
    private _stack;
    private _pointer;
    private _pendingAction;
    private _resizingTriggered;
    constructor(owner: FlexSheet);
    readonly canUndo: boolean;
    readonly canRedo: boolean;
    undoStackChanged: wjcCore.Event;
    onUndoStackChanged(): void;
    undo(): void;
    redo(): void;
    _addAction(action: _UndoAction): void;
    _pop(): _UndoAction;
    clear(): void;
    private _initCellEditAction(sender, args);
    private _initCellEditActionForPasting();
    private _afterProcessCellEditAction(self);
    private _beforeUndoRedo(action);
}
export declare class _FlexSheetValueFilter extends wjcGridFilter.ValueFilter {
    apply(value: any): boolean;
}
export declare class _FlexSheetValueFilterEditor extends wjcGridFilter.ValueFilterEditor {
    updateEditor(): void;
}
export declare class _FlexSheetConditionFilter extends wjcGridFilter.ConditionFilter {
    apply(value: any): boolean;
}
export declare class _FlexSheetColumnFilter extends wjcGridFilter.ColumnFilter {
    constructor(owner: _FlexSheetFilter, column: wjcGrid.Column);
}
export declare class _FlexSheetColumnFilterEditor extends wjcGridFilter.ColumnFilterEditor {
    constructor(element: any, filter: _FlexSheetColumnFilter, sortButtons?: boolean);
    _showFilter(filterType: wjcGridFilter.FilterType): void;
    private _sortBtnClick(e, asceding);
    private cloneElement(element);
}
export declare class _FlexSheetFilter extends wjcGridFilter.FlexGridFilter {
    filterDefinition: string;
    apply(): void;
    editColumnFilter(col: any, ht?: wjcGrid.HitTestInfo): void;
    getColumnFilter(col: any, create?: boolean): _FlexSheetColumnFilter;
    private _checkGroupVisible(range);
}
