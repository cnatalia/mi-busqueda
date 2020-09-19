import { Component, OnInit, ViewChild, ElementRef, Input, Attribute } from '@angular/core';
import { distinctUntilChanged, filter, tap, debounceTime, switchMap } from 'rxjs/operators';
import { AutocompleteOptions } from './auto-complete-options';
import { AutocompleteItem } from './auto-complete-item';
import { Observer, Observable } from 'rxjs';

@Component({
  selector: 'lib-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  @ViewChild('inputElement') inputElement: ElementRef;
  @ViewChild('inputWrapper') inputWrapper: ElementRef;

  inputTextValue = '';
  inputObserver: Observer<string>;

  disabled = false;

  isQuerying = false;
  hasQueried = false;

  isFocusedInput = false;
  isFocusedItem = false;

  requiresMinCharacters = false;

  // tslint:disable-next-line:variable-name
  _options: AutocompleteOptions = new AutocompleteOptions({
    clearOnSelect: false,
    delayTime: 600,
    minCharacters: 3,
    mapFunction: null,
    control: null,
    placeholder: '',
    isSelect: false,
    maxResults: null
  });

  highlightedItem = -1;
  selectedItem: AutocompleteItem;

  itemList: AutocompleteItem[] = [];

  completeList: AutocompleteItem[] = null;
  // tslint:disable-next-line:variable-name
  listProvider: (any) => Observable<any[]>;

  get noResults(): boolean { return !this.isQuerying && this.hasQueried && this.itemList.length < 1; }

  // get controlClasses() {
  //   return {
  //     'ng-pristine': this._options.control && this._options.control.pristine,
  //     'ng-dirty': this._options.control && this._options.control.dirty,
  //     'ng-valid': this._options.control && this._options.control.valid,
  //     'ng-invalid': this._options.control && this._options.control.invalid,
  //     'ng-touched': this._options.control && this._options.control.touched,
  //     'ng-untouched': this._options.control && this._options.control.untouched
  //   };
  // }

  get isOpen() {
    if (this.listProvider) {
      return ((this.isFocusedInput || this.isFocusedItem) && (this.isQuerying || this.hasQueried));
    } else {
      return this.isFocusedInput || this.isFocusedItem;
    }
  }

  get inputPlaceholder() {
    return this.bootstrap ? this._options.placeholder : '';
  }

  @Input() id: string;
  @Input() bootstrap = false;
  @Input()
  set options(options: AutocompleteOptions) {
    this._options._assign(options);
    if (options.control) {
      options.control.valueChanges.subscribe(data => {
        if (data === null) {
          this.inputTextValue = options.placeholder;
          this._options.control.markAsPristine();
        }
      });
    }
  }

  @Input()
  // tslint:disable-next-line:variable-name
  set provider(provider: (any) => Observable<any[]>) {
    if (provider) {
      this.listProvider = provider;
      if (this._options.selectedElement) {
        this.selectItem(this._options.selectedElement);
        this._options.selectedElement = null;
      }
      this.createQueryObservable();
    }
  }

  @Input()
  set list(list: any[]) {
    if (list) {
      if (list[0] && !list[0].original) {
        this.itemList = this._options.mapFunction ?
          list.map(this._options.mapFunction) :
          list.map(item => new AutocompleteItem({ id: item.id, value: item.value, disabled: item.disabled }));
        this.itemList.forEach((item, index) => item.original = list[index]);
        if (this._options.control && this._options.control.value) {
          // tslint:disable-next-line:variable-name
          const item = this.itemList.find(_item => _item.id === this._options.control.value);
          if (item) {
            this.selectItem(item, false);
          }
        }
      } else {
        this.itemList = list;
        if (this._options.maxResults) {
          this.itemList = this.itemList.slice(0, this._options.maxResults);
        }
      }
      if (this._options.selectedElement) {
        this.selectItem(this._options.selectedElement, false);
        this._options.selectedElement = null;
      }
      if (!this.completeList) {
        this.completeList = this.itemList;
        if (!this._options.isSelect && !this.listProvider) {
          this.itemList = [];
        }
      }
    }
    this.resetFocus();
  }
  constructor(
    // tslint:disable-next-line:variable-name
    @Attribute('disabled') public _disabled: string
  ) {
    this.disabled = _disabled !== null || (_disabled && _disabled.toUpperCase() === 'DISABLED');
  }


  ngOnInit() {
    if (this.itemList && this.itemList.length > 0) {
      this.completeList = this.itemList.map(item => item);
    }
  }

  private createQueryObservable() {
    this.inputObserver = null;
    // Create an observable to use the provider
    Observable.create(observer => this.inputObserver = observer)
      .pipe(
        distinctUntilChanged(),
        // tslint:disable-next-line:variable-name
        filter((_query: string) => _query && _query.length >= this._options.minCharacters),
        tap(() => {
          this.isQuerying = true;
          this.list = [];
        }),
        debounceTime(this._options.delayTime),
        switchMap(this.listProvider)
      )
      .subscribe(
        // tslint:disable-next-line:variable-name
        _list => {
          this.list = _list;
          this.isQuerying = false;
          this.hasQueried = true;
        },
        error => console.error(error)
      );
  }

  // tslint:disable-next-line:variable-name
  selectItem(_element: number | string | AutocompleteItem, emitEvent = true) {
    // Find the element (wheter it is an item or an id)
    const element = _element instanceof AutocompleteItem ?
      _element :
      this.itemList.filter(item => item.id === _element)[0];

    // If there is an element and the element is not disabled, select it
    if (element && !element.disabled) {
      // Replace the input text within the element
      this.inputTextValue = element.prettyPrint ? element.prettyPrint : element.value;
      // If there is a control, set the value to it
      if (this._options.control) {
        this._options.control.setValue(element.id, { emitEvent });
        this._options.control.markAsDirty();
      }
      // Clear the list if told to
      if (this._options.clearOnSelect) {
        this.list = [];
      }
      // Update the selected item
      this.selectedItem = element;
      // Close the dropdown
      this.isFocusedInput = false;
      this.isFocusedItem = false;
      this.isQuerying = false;
      this.hasQueried = false;

      this.inputWrapper.nativeElement.blur();
      this.inputElement.nativeElement.blur();
    }
  }

  inputTextKeyDown(event) {
    // Prevent the caret from moving inside the input if the user presses the Up Arrow
    if (event.keyCode === 38) {
      event.preventDefault();
    }
  }

  inputTextKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      // Arrow down, move the highlighted element
      this.highlightedItem = this.highlightedItem + 1 >= this.itemList.length ? 0 : this.highlightedItem + 1;
    } else if (event.key === 'ArrowUp') {
      // Arrow up, move the hightlighted element
      this.highlightedItem = this.highlightedItem - 1 < 0 ? this.itemList.length - 1 : this.highlightedItem - 1;
    } else if (event.key === 'Enter' && this.itemList.length > 0) {
      // Enter, select the element
      const element = this.itemList[this.highlightedItem];
      this.selectItem(element.id);
    }
  }

  inputChange(event: any) {
    this.inputTextValue = event.target.value;
    this._options.control.markAsDirty();

    // If there is a list provider, fetch results from it
    if (this.listProvider) {
      this.fetchList(this.inputTextValue);
      // Else, if the element is not a select input, filter the complete list to fetch the results
    } else if (!this._options.isSelect) {
      this.filterlist(this.inputTextValue);
    }
  }

  // Filter a complete list for results
  filterlist(query) {
    // If there is no query or the query is empty, use an empty list, else filter the complete list
    this.list = query && query.length >= this._options.minCharacters ?
      this.completeList.filter(item => {
        if (item.prettyPrint) {
          return item.prettyPrint.toUpperCase().includes(query.toUpperCase());
        } else {
          return item.value.toUpperCase().includes(query.toUpperCase());
        }
      }) :
      [];
    this.hasQueried = query.length >= this._options.minCharacters;
    this.requiresMinCharacters = query.length < this._options.minCharacters;
  }

  // Send a new event to fetch from the list provider
  fetchList(query) {
    this.inputObserver.next(query);
    if (query && query.length < this._options.minCharacters) {
      this.list = [];
      this.isQuerying = false;
      this.hasQueried = false;
    }
  }
  /*******************EVENTS*******************/

  elementFocus() { this.onFocus(); }

  elementBlur() { this.onBlur(); }

  dropdownMouseEnter() { this.isFocusedItem = true; }

  dropdownMouseLeave() { this.isFocusedItem = false; }

  itemClick(id, index) {
    this.highlightedItem = index;
    this.selectItem(id);
  }

  itemHover(index) { this.highlightedItem = index; }

  onBlur() {
    this._options.control.markAsTouched();

    // If the input has been blurred, pretty print the element (if there is one)
    this.isFocusedInput = false;
    if (this.selectedItem) {
      this.inputElement.nativeElement.value = this.selectedItem.prettyPrint ? this.selectedItem.prettyPrint : this.selectedItem.value;
    }
    this.inputElement.nativeElement.blur();
    this.inputWrapper.nativeElement.blur();

    if (this._options.control) {
      this._options.control.markAsTouched();
    }
  }

  onFocus() {
    this._options.control.markAsUntouched();

    // If the input is focused, remove the pretty print
    if (this.selectedItem && this.selectedItem.prettyPrint) {
      this.inputElement.nativeElement.value = this.selectedItem.value;
    }
    this.isFocusedInput = true;
    // Select the first element
    this.resetFocus();
  }

  resetFocus() {
    // Reset the selected element, use the first one if it is not a select component
    if (this.itemList && this.itemList.length > 0) {
      this.highlightedItem = this._options.isSelect && this.selectedItem ?
        this.highlightedItem = this.itemList.indexOf(this.selectedItem) :
        0;
    }
  }

  wrapperBlur() {
    if (this._options.isSelect) {
      this.onBlur();
    }
  }

  wrapperFocus() {
    if (!this._options.isSelect) {
      this.inputElement.nativeElement.focus();
    } else {
      this.onFocus();
    }
  }
}
