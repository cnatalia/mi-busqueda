import { AbstractControl } from '@angular/forms';

import { AutocompleteItem } from './auto-complete-item';

export class AutocompleteOptions {

 public clearOnSelect: boolean;
 public delayTime: number;
 public minCharacters: number;
 public selectedElement: AutocompleteItem | string | number;
 public control: AbstractControl;
 // tslint:disable-next-line:variable-name
 public mapFunction: (any) => AutocompleteItem;
 public placeholder: string;
 public isSelect = false;
 public maxResults = null;

 constructor(options: {
  clearOnSelect?: boolean,
  delayTime?: number,
  minCharacters?: number,
  selectedElement?: AutocompleteItem | string | number,
  control?: AbstractControl,
  // tslint:disable-next-line:variable-name
  mapFunction?: (any) => AutocompleteItem,
  placeholder?: string,
  isSelect?: boolean,
  maxResults?: number
 }) {

  this.clearOnSelect = options.clearOnSelect ? options.clearOnSelect : null;
  this.delayTime = options.delayTime ? options.delayTime : null;
  this.minCharacters = options.minCharacters ? options.minCharacters : null;
  this.selectedElement = options.selectedElement ? options.selectedElement : null;
  this.control = options.control ? options.control : null;
  this.mapFunction = options.mapFunction ? options.mapFunction : null;
  this.placeholder = options.placeholder ? options.placeholder : null;
  this.isSelect = options.isSelect && options.isSelect === true;
  this.maxResults = options.maxResults ? options.maxResults : null;

 }

 // tslint:disable-next-line:variable-name
 _assign(_options: AutocompleteOptions) {
  console.log(_options);
  this.clearOnSelect = _options.clearOnSelect ? _options.clearOnSelect : this.clearOnSelect;
  this.delayTime = _options.delayTime ? _options.delayTime : this.delayTime;
  this.minCharacters = _options.minCharacters ? _options.minCharacters : this.minCharacters;
  if (_options.selectedElement) {
   if (typeof _options.selectedElement !== 'string' && typeof _options.selectedElement !== 'number') {
    this.selectedElement = new AutocompleteItem();
    this.selectedElement._assign(_options.selectedElement);
   } else {
    this.selectedElement = _options.selectedElement;
   }
  }
  this.control = _options.control ? _options.control : this.control;
  this.mapFunction = _options.mapFunction ? _options.mapFunction : this.mapFunction;
  this.placeholder = _options.placeholder ? _options.placeholder : this.placeholder;
  this.isSelect = _options.isSelect && _options.isSelect === true;
  this.maxResults = _options.maxResults ? _options.maxResults : null;

 }

}
