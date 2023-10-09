import { RowId, RowElement } from './interface';

export function insertRow(row: RowElement): number;
export function updateRow(rowId: RowId, row: RowElement): number;
export function deleteRow(rowId: RowId): void;