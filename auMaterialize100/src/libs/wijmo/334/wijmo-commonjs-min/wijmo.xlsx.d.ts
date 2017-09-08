export declare class _xlsx {
    private static _alphabet;
    private static _indexedColors;
    private static _numFmts;
    private static _xmlDescription;
    private static _workbookNS;
    private static _relationshipsNS;
    private static _defaultFontName;
    private static _defaultFontSize;
    private static _macroEnabled;
    private static _sharedStrings;
    private static _colorThemes;
    private static _styles;
    private static _sharedFormulas;
    private static _borders;
    private static _fonts;
    private static _fills;
    private static _contentTypes;
    private static _props;
    private static _xlRels;
    private static _worksheets;
    static load(base64: string): any;
    static loadAsync(base64: string): _Promise;
    static save(workbook: any): any;
    static saveAsync(workbook: any, onError?: (reason?: any) => any): any;
    private static _saveWorkbookToZip(workbook, isAsync?);
    private static _getSharedString(sharedString);
    private static _getInlineString(cell);
    private static _getCoreSetting(coreSetting, result);
    private static _getWorkbook(workbook, result);
    private static _getTheme(theme);
    private static _getStyle(styleSheet);
    private static _getEdgeBorder(strBorder, edge);
    private static _getSheet(sheet, index, result);
    private static _generateRelsDoc();
    private static _generateThemeDoc();
    private static _generateClrScheme();
    private static _generateFontScheme();
    private static _generateFmtScheme();
    private static _generateFillScheme();
    private static _generateLineStyles();
    private static _generateEffectScheme();
    private static _generateBgFillScheme();
    private static _generateCoreDoc(file);
    private static _generateSheetGlobalSetting(index, worksheet, file);
    private static _generateCell(rowIndex, colIndex, styleIndex, type, val, formula);
    private static _generateMergeSetting(merges);
    private static _generateStyleDoc();
    private static _generateBorderStyle(borders);
    private static _generateFontStyle(fontStyle, needScheme?);
    private static _generateFillStyle(patternType, fillColor);
    private static _generateCellXfs(numFmtId, borderId, fontId, fillId, style);
    private static _generateContentTypesDoc();
    private static _generateAppDoc(file);
    private static _generateWorkbookRels();
    private static _generateWorkbook(file);
    private static _generateWorkSheet(sheetIndex, file, xlWorksheets);
    private static _generateSharedStringsDoc();
    private static _getColor(s, isFillColor);
    private static _getThemeColor(theme, tint);
    private static _parseColor(color);
    private static _getsBaseSharedFormulas(sheet);
    private static _parseSharedFormulaInfo(cellRef, formula);
    private static _getSharedFormula(si, cellRef);
    private static _convertDate(input);
    private static _parseBorder(border);
    private static _resolveStyleInheritance(style);
    private static _parsePixelToCharWidth(pixels);
    private static _parseCharWidthToPixel(charWidth);
    private static _parseCharCountToCharWidth(charCnt);
    private static _numAlpha(i);
    private static _alphaNum(s);
    private static _typeOf(obj);
    private static _extend(dst, src);
    private static _isEmpty(obj);
    private static _cloneStyle(src);
    private static _cloneColumnsStyle(columns);
    private static _getSheetIndex(fileName);
    private static _checkValidMergeCell(merges, startRow, rowSpan, startCol, colSpan);
    private static _getAttr(s, attr);
    private static _getChildNodeValue(s, child);
    private static _getSheetIndexBySheetName(file, sheetName);
}
export declare class _Promise {
    private _callbacks;
    then(onFulfilled?: (value?: any) => any, onRejected?: (reason?: any) => any): _Promise;
    catch(onRejected: (reason?: any) => any): _Promise;
    resolve(value?: any): void;
    reject(reason?: any): void;
    private _onFulfilled(value);
    private _onRejected(reason);
}
export declare class _CompositedPromise extends _Promise {
    private _promises;
    constructor(promises: _Promise[]);
    _init(): void;
}
export declare class Workbook implements IWorkbook {
    application: string;
    company: string;
    creator: string;
    created: Date;
    lastModifiedBy: string;
    modified: Date;
    activeWorksheet: number;
    private _reservedContent;
    private _sheets;
    private _styles;
    private _definedNames;
    private static _alphabet;
    private static _formatMap;
    constructor();
    readonly sheets: WorkSheet[];
    readonly styles: WorkbookStyle[];
    readonly definedNames: DefinedName[];
    reservedContent: any;
    save(fileName?: string): string;
    saveAsync(fileName?: string, onSaved?: (base64?: string) => any, onError?: (reason?: any) => any): void;
    load(base64: string): void;
    loadAsync(base64: string, onLoaded: (workbook: Workbook) => void, onError?: (reason?: any) => any): void;
    _serialize(): IWorkbook;
    _deserialize(workbookOM: IWorkbook): void;
    _addWorkSheet(workSheet: WorkSheet, sheetIndex?: number): void;
    private _saveToFile(base64, fileName);
    private _getBase64String(base64);
    static toXlsxDateFormat(format: string): string;
    static toXlsxNumberFormat(format: string): string;
    static fromXlsxFormat(xlsxFormat: string): string[];
    static _parseCellFormat(format: string, isDate: boolean): string;
    static _parseExcelFormat(item: any): string;
    static xlsxAddress(row: number, col: number, absolute?: boolean, absoluteCol?: boolean): string;
    static tableAddress(xlsxIndex: string): ITableAddress;
    static _parseHAlignToString(hAlign: HAlign): string;
    static _parseStringToHAlign(hAlign: string): HAlign;
    static _parseVAlignToString(vAlign: VAlign): string;
    static _parseStringToVAlign(vAlign: string): VAlign;
    static _parseBorderTypeToString(type: BorderStyle): string;
    static _parseStringToBorderType(type: string): BorderStyle;
    static _escapeXML(s: any): string;
    static _unescapeXML(val: any): string;
    private static _numAlpha(i);
    private static _alphaNum(s);
    private static _b64ToUint6(nChr);
    static _base64DecToArr(sBase64: string, nBlocksSize?: number): Uint8Array;
    private static _uint6ToB64(nUint6);
    static _base64EncArr(aBytes: Uint8Array): string;
    private _serializeWorkSheets();
    private _serializeWorkbookStyles();
    private _serializeDefinedNames();
    private _deserializeWorkSheets(workSheets);
    private _deserializeWorkbookStyles(workbookStyles);
    private _deserializeDefinedNames(definedNames);
}
export declare class WorkSheet implements IWorkSheet {
    name: string;
    frozenPane: WorkbookFrozenPane;
    summaryBelow: boolean;
    visible: boolean;
    style: WorkbookStyle;
    private _columns;
    private _rows;
    constructor();
    readonly columns: WorkbookColumn[];
    readonly rows: WorkbookRow[];
    _serialize(): IWorkSheet;
    _deserialize(workSheetOM: IWorkSheet): void;
    _addWorkbookColumn(column: WorkbookColumn, columnIndex?: number): void;
    _addWorkbookRow(row: WorkbookRow, rowIndex?: number): void;
    private _serializeWorkbookColumns();
    private _serializeWorkbookRows();
    private _deserializeWorkbookColumns(workbookColumns);
    private _deserializeWorkbookRows(workbookRows);
    private _checkEmptyWorkSheet();
}
export declare class WorkbookColumn implements IWorkbookColumn {
    width: any;
    visible: boolean;
    style: WorkbookStyle;
    autoWidth: boolean;
    constructor();
    _serialize(): IWorkbookColumn;
    _deserialize(workbookColumnOM: IWorkbookColumn): void;
    private _checkEmptyWorkbookColumn();
}
export declare class WorkbookRow implements IWorkbookRow {
    height: number;
    visible: boolean;
    groupLevel: number;
    style: WorkbookStyle;
    collapsed: boolean;
    private _cells;
    constructor();
    readonly cells: WorkbookCell[];
    _serialize(): IWorkbookRow;
    _deserialize(workbookRowOM: IWorkbookRow): void;
    _addWorkbookCell(cell: WorkbookCell, cellIndex?: number): void;
    private _serializeWorkbookCells();
    private _deserializeWorkbookCells(workbookCells);
    private _checkEmptyWorkbookRow();
}
export declare class WorkbookCell implements IWorkbookCell {
    value: any;
    isDate: boolean;
    formula: string;
    style: WorkbookStyle;
    colSpan: number;
    rowSpan: number;
    constructor();
    _serialize(): IWorkbookCell;
    _deserialize(workbookCellOM: IWorkbookCell): void;
    private _checkEmptyWorkbookCell();
}
export declare class WorkbookFrozenPane implements IWorkbookFrozenPane {
    rows: number;
    columns: number;
    constructor();
    _serialize(): IWorkbookFrozenPane;
    _deserialize(workbookFrozenPaneOM: IWorkbookFrozenPane): void;
}
export declare class WorkbookStyle implements IWorkbookStyle {
    format: string;
    basedOn: WorkbookStyle;
    font: WorkbookFont;
    hAlign: HAlign;
    vAlign: VAlign;
    indent: number;
    fill: WorkbookFill;
    borders: WorkbookBorder;
    wordWrap: boolean;
    constructor();
    _serialize(): IWorkbookStyle;
    _deserialize(workbookStyleOM: IWorkbookStyle): void;
    private _checkEmptyWorkbookStyle();
}
export declare class WorkbookFont implements IWorkbookFont {
    family: string;
    size: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    color: string;
    constructor();
    _serialize(): IWorkbookFont;
    _deserialize(workbookFontOM: IWorkbookFont): void;
    private _checkEmptyWorkbookFont();
}
export declare class WorkbookFill implements IWorkbookFill {
    color: string;
    constructor();
    _serialize(): IWorkbookFill;
    _deserialize(workbookFillOM: IWorkbookFill): void;
}
export declare class WorkbookBorder implements IWorkbookBorder {
    top: WorkbookBorderSetting;
    bottom: WorkbookBorderSetting;
    left: WorkbookBorderSetting;
    right: WorkbookBorderSetting;
    diagonal: WorkbookBorderSetting;
    constructor();
    _serialize(): IWorkbookBorder;
    _deserialize(workbookBorderOM: IWorkbookBorder): void;
    private _checkEmptyWorkbookBorder();
}
export declare class WorkbookBorderSetting implements IWorkbookBorderSetting {
    color: string;
    style: BorderStyle;
    constructor();
    _serialize(): IWorkbookBorderSetting;
    _deserialize(workbookBorderSettingOM: IWorkbookBorderSetting): void;
}
export declare class DefinedName implements IDefinedName {
    name: string;
    value: any;
    sheetName: string;
    constructor();
    _serialize(): IDefinedName;
    _deserialize(definedNameOM: IDefinedName): void;
}
export interface IXlsxFileContent {
    base64: string;
    base64Array: Uint8Array;
    href: Function;
}
export interface IWorkSheet {
    name?: string;
    columns?: IWorkbookColumn[];
    rows?: IWorkbookRow[];
    frozenPane?: IWorkbookFrozenPane;
    summaryBelow?: boolean;
    visible?: boolean;
    style?: IWorkbookStyle;
}
export interface IWorkbookColumn {
    width?: any;
    visible?: boolean;
    style?: IWorkbookStyle;
    autoWidth?: boolean;
}
export interface IWorkbookRow {
    height?: number;
    visible?: boolean;
    groupLevel?: number;
    style?: IWorkbookStyle;
    collapsed?: boolean;
    cells?: IWorkbookCell[];
}
export interface IWorkbookCell {
    value?: any;
    isDate?: boolean;
    formula?: string;
    style?: IWorkbookStyle;
    colSpan?: number;
    rowSpan?: number;
}
export interface IWorkbookFrozenPane {
    rows: number;
    columns: number;
}
export interface IWorkbook {
    sheets: IWorkSheet[];
    application?: string;
    company?: string;
    creator?: string;
    created?: Date;
    lastModifiedBy?: string;
    modified?: Date;
    activeWorksheet?: number;
    styles?: IWorkbookStyle[];
    reservedContent?: any;
    definedNames?: IDefinedName[];
}
export interface IWorkbookStyle {
    format?: string;
    basedOn?: IWorkbookStyle;
    font?: IWorkbookFont;
    hAlign?: HAlign;
    vAlign?: VAlign;
    indent?: number;
    borders?: IWorkbookBorder;
    fill?: IWorkbookFill;
    wordWrap?: boolean;
}
export interface IWorkbookFont {
    family?: string;
    size?: number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    color?: string;
}
export interface IWorkbookBorder {
    top?: IWorkbookBorderSetting;
    bottom?: IWorkbookBorderSetting;
    left?: IWorkbookBorderSetting;
    right?: IWorkbookBorderSetting;
    diagonal?: IWorkbookBorderSetting;
}
export interface IWorkbookBorderSetting {
    color?: string;
    style?: BorderStyle;
}
export interface IWorkbookFill {
    color?: string;
}
export interface ITableIndex {
    row: number;
    col: number;
    absCol: boolean;
    absRow: boolean;
}
export interface ITableAddress {
    row: number;
    col: number;
    absCol: boolean;
    absRow: boolean;
}
export interface IDefinedName {
    name: string;
    value: any;
    sheetName?: string;
}
export declare enum HAlign {
    General = 0,
    Left = 1,
    Center = 2,
    Right = 3,
    Fill = 4,
    Justify = 5,
}
export declare enum VAlign {
    Top = 0,
    Center = 1,
    Bottom = 2,
    Justify = 3,
}
export declare enum BorderStyle {
    None = 0,
    Thin = 1,
    Medium = 2,
    Dashed = 3,
    Dotted = 4,
    Thick = 5,
    Double = 6,
    Hair = 7,
    MediumDashed = 8,
    ThinDashDotted = 9,
    MediumDashDotted = 10,
    ThinDashDotDotted = 11,
    MediumDashDotDotted = 12,
    SlantedMediumDashDotted = 13,
}
