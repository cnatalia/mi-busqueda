export class AutocompleteItem {

 public id?: string | number;
 public value?: string;
 public prettyPrint?: string;
 public original?: any;
 public disabled = false;

 constructor(item?: {
  id?: string | number,
  value?: string,
  prettyPrint?: string,
  disabled?: boolean,
  original?: any
 }) {
  this.id = item && item.id ? item.id : null;
  this.value = item && item.value ? item.value : null;
  this.prettyPrint = item && item.prettyPrint ? item.prettyPrint : null;
  this.original = item && item.original ? item.original : null;
  this.disabled = item && item.disabled === true;
 }

 // tslint:disable-next-line:variable-name
 _assign(_item: AutocompleteItem) {
  this.id = _item.id;
  this.value = _item.value;
  this.prettyPrint = _item.prettyPrint;
  this.disabled = _item.disabled === true;
  this.original = _item.original;
 }

}
