/// <reference path='./crud.d.ts' />

import rowID, RowElement from './interface.ts';
import * from './crud.js' as CRUD;

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const updatedRow: RowElement = {
  age: 23,
};

updateRow();
deleteRow();
