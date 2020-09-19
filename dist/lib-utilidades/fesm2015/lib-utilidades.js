import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵelement, ɵɵnextContext, ɵɵpropertyInterpolate, ɵɵadvance, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵclassProp, ɵɵproperty, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵtextInterpolate1, ɵɵinjectAttribute, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, Attribute, ViewChild, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { distinctUntilChanged, filter, tap, debounceTime, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

class LibUtilidadesService {
    constructor() { }
}
LibUtilidadesService.ɵfac = function LibUtilidadesService_Factory(t) { return new (t || LibUtilidadesService)(); };
LibUtilidadesService.ɵprov = ɵɵdefineInjectable({ token: LibUtilidadesService, factory: LibUtilidadesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibUtilidadesService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class LibUtilidadesComponent {
    constructor() { }
    ngOnInit() {
    }
}
LibUtilidadesComponent.ɵfac = function LibUtilidadesComponent_Factory(t) { return new (t || LibUtilidadesComponent)(); };
LibUtilidadesComponent.ɵcmp = ɵɵdefineComponent({ type: LibUtilidadesComponent, selectors: [["lib-lib-utilidades"]], decls: 2, vars: 0, template: function LibUtilidadesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " lib-utilidades works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibUtilidadesComponent, [{
        type: Component,
        args: [{
                selector: 'lib-lib-utilidades',
                template: `
    <p>
      lib-utilidades works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class AutocompleteItem {
    constructor(item) {
        this.disabled = false;
        this.id = item && item.id ? item.id : null;
        this.value = item && item.value ? item.value : null;
        this.prettyPrint = item && item.prettyPrint ? item.prettyPrint : null;
        this.original = item && item.original ? item.original : null;
        this.disabled = item && item.disabled === true;
    }
    // tslint:disable-next-line:variable-name
    _assign(_item) {
        this.id = _item.id;
        this.value = _item.value;
        this.prettyPrint = _item.prettyPrint;
        this.disabled = _item.disabled === true;
        this.original = _item.original;
    }
}

class AutocompleteOptions {
    constructor(options) {
        this.isSelect = false;
        this.maxResults = null;
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
    _assign(_options) {
        this.clearOnSelect = _options.clearOnSelect ? _options.clearOnSelect : this.clearOnSelect;
        this.delayTime = _options.delayTime ? _options.delayTime : this.delayTime;
        this.minCharacters = _options.minCharacters ? _options.minCharacters : this.minCharacters;
        if (_options.selectedElement) {
            if (typeof _options.selectedElement !== 'string' && typeof _options.selectedElement !== 'number') {
                this.selectedElement = new AutocompleteItem();
                this.selectedElement._assign(_options.selectedElement);
            }
            else {
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

const _c0 = ["inputElement"];
const _c1 = ["inputWrapper"];
function AutoCompleteComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 11);
} }
function AutoCompleteComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "label", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵpropertyInterpolate("for", ctx_r3.id);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3._options.placeholder);
} }
function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 16);
    ɵɵlistener("mouseenter", function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template_li_mouseenter_0_listener() { ɵɵrestoreView(_r13); const i_r11 = ctx.index; const ctx_r12 = ɵɵnextContext(3); return ctx_r12.itemHover(i_r11); })("click", function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template_li_click_0_listener() { ɵɵrestoreView(_r13); const item_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r14 = ɵɵnextContext(3); return ctx_r14.itemClick(item_r10.id, i_r11); });
    ɵɵelementStart(1, "span", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵclassProp("disabled", item_r10.disabled)("next", i_r11 === ctx_r9.highlightedItem + 1)("active", i_r11 === ctx_r9.highlightedItem);
    ɵɵproperty("tabindex", ctx_r9.isOpen ? 0 : 0 - 1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r10.prettyPrint ? item_r10.prettyPrint : item_r10.value);
} }
function AutoCompleteComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template, 3, 8, "li", 15);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r5.itemList);
} }
function AutoCompleteComponent_ng_container_10_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 18);
    ɵɵelementStart(1, "span");
    ɵɵtext(2, "Buscando...");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function AutoCompleteComponent_ng_container_10_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 18);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Digita por lo menos ", ctx_r7._options.minCharacters, " caracteres");
} }
function AutoCompleteComponent_ng_container_10_li_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 19);
    ɵɵelementStart(1, "span");
    ɵɵtext(2, "No se encontraron resultados");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function AutoCompleteComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AutoCompleteComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵtemplate(2, AutoCompleteComponent_ng_container_10_li_2_Template, 3, 0, "li", 13);
    ɵɵtemplate(3, AutoCompleteComponent_ng_container_10_li_3_Template, 3, 1, "li", 13);
    ɵɵtemplate(4, AutoCompleteComponent_ng_container_10_li_4_Template, 3, 0, "li", 14);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.itemList.length > 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.isQuerying);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.requiresMinCharacters);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.noResults);
} }
class AutoCompleteComponent {
    constructor(
    // tslint:disable-next-line:variable-name
    _disabled) {
        this._disabled = _disabled;
        this.inputTextValue = '';
        this.disabled = false;
        this.isQuerying = false;
        this.hasQueried = false;
        this.isFocusedInput = false;
        this.isFocusedItem = false;
        this.requiresMinCharacters = false;
        // tslint:disable-next-line:variable-name
        this._options = new AutocompleteOptions({
            clearOnSelect: false,
            delayTime: 600,
            minCharacters: 3,
            mapFunction: null,
            control: null,
            placeholder: '',
            isSelect: false,
            maxResults: null
        });
        this.highlightedItem = -1;
        this.itemList = [];
        this.completeList = null;
        this.bootstrap = false;
        this.disabled = _disabled !== null || (_disabled && _disabled.toUpperCase() === 'DISABLED');
    }
    get noResults() { return !this.isQuerying && this.hasQueried && this.itemList.length < 1; }
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
        }
        else {
            return this.isFocusedInput || this.isFocusedItem;
        }
    }
    get inputPlaceholder() {
        return this.bootstrap ? this._options.placeholder : '';
    }
    set options(options) {
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
    set provider(provider) {
        if (provider) {
            this.listProvider = provider;
            if (this._options.selectedElement) {
                this.selectItem(this._options.selectedElement);
                this._options.selectedElement = null;
            }
            this.createQueryObservable();
        }
    }
    set list(list) {
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
            }
            else {
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
    ngOnInit() {
        if (this.itemList && this.itemList.length > 0) {
            this.completeList = this.itemList.map(item => item);
        }
    }
    createQueryObservable() {
        this.inputObserver = null;
        // Create an observable to use the provider
        Observable.create(observer => this.inputObserver = observer)
            .pipe(distinctUntilChanged(), 
        // tslint:disable-next-line:variable-name
        filter((_query) => _query && _query.length >= this._options.minCharacters), tap(() => {
            this.isQuerying = true;
            this.list = [];
        }), debounceTime(this._options.delayTime), switchMap(this.listProvider))
            .subscribe(
        // tslint:disable-next-line:variable-name
        _list => {
            this.list = _list;
            this.isQuerying = false;
            this.hasQueried = true;
        }, error => console.error(error));
    }
    // tslint:disable-next-line:variable-name
    selectItem(_element, emitEvent = true) {
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
    inputTextKeyUp(event) {
        if (event.key === 'ArrowDown') {
            // Arrow down, move the highlighted element
            this.highlightedItem = this.highlightedItem + 1 >= this.itemList.length ? 0 : this.highlightedItem + 1;
        }
        else if (event.key === 'ArrowUp') {
            // Arrow up, move the hightlighted element
            this.highlightedItem = this.highlightedItem - 1 < 0 ? this.itemList.length - 1 : this.highlightedItem - 1;
        }
        else if (event.key === 'Enter' && this.itemList.length > 0) {
            // Enter, select the element
            const element = this.itemList[this.highlightedItem];
            this.selectItem(element.id);
        }
    }
    inputChange(event) {
        this.inputTextValue = event.target.value;
        this._options.control.markAsDirty();
        // If there is a list provider, fetch results from it
        if (this.listProvider) {
            this.fetchList(this.inputTextValue);
            // Else, if the element is not a select input, filter the complete list to fetch the results
        }
        else if (!this._options.isSelect) {
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
                }
                else {
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
        }
        else {
            this.onFocus();
        }
    }
}
AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) { return new (t || AutoCompleteComponent)(ɵɵinjectAttribute('disabled')); };
AutoCompleteComponent.ɵcmp = ɵɵdefineComponent({ type: AutoCompleteComponent, selectors: [["lib-auto-complete"]], viewQuery: function AutoCompleteComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputWrapper = _t.first);
    } }, inputs: { id: "id", bootstrap: "bootstrap", options: "options", provider: "provider", list: "list" }, decls: 11, vars: 23, consts: [["class", "ios-blur-fix", "tabindex", "0", 4, "ngIf"], [1, "autocomplete-container"], [1, "input-wrapper", 3, "tabindex", "blur", "input", "focus", "keyup"], ["inputWrapper", ""], ["type", "text", "autocomplete", "off", 3, "placeholder", "value", "tabindex", "id", "disabled", "focus", "blur", "keydown"], ["inputElement", ""], ["class", "placeholder", 3, "for", 4, "ngIf"], [1, "dropdown-caret"], [1, "input-bottom-border"], [1, "autocomplete-dropdown", "list-group", 3, "mouseenter", "mouseleave"], [4, "ngIf"], ["tabindex", "0", 1, "ios-blur-fix"], [1, "placeholder", 3, "for"], ["class", "list-group-item d-block querying", 4, "ngIf"], ["class", "list-group-item d-block no-results", 4, "ngIf"], ["class", "list-group-item d-block result", 3, "disabled", "next", "active", "tabindex", "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-block", "result", 3, "tabindex", "mouseenter", "click"], [1, "text-capitalize"], [1, "list-group-item", "d-block", "querying"], [1, "list-group-item", "d-block", "no-results"]], template: function AutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, AutoCompleteComponent_div_0_Template, 1, 0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2, 3);
        ɵɵlistener("blur", function AutoCompleteComponent_Template_div_blur_2_listener() { return ctx.wrapperBlur(); })("input", function AutoCompleteComponent_Template_div_input_2_listener($event) { return ctx.inputChange($event); })("focus", function AutoCompleteComponent_Template_div_focus_2_listener() { return ctx.wrapperFocus(); })("keyup", function AutoCompleteComponent_Template_div_keyup_2_listener($event) { return ctx.inputTextKeyUp($event); });
        ɵɵelementStart(4, "input", 4, 5);
        ɵɵlistener("focus", function AutoCompleteComponent_Template_input_focus_4_listener() { return ctx.elementFocus(); })("blur", function AutoCompleteComponent_Template_input_blur_4_listener() { return ctx.elementBlur(); })("keydown", function AutoCompleteComponent_Template_input_keydown_4_listener($event) { return ctx.inputTextKeyDown($event); });
        ɵɵelementEnd();
        ɵɵtemplate(6, AutoCompleteComponent_label_6_Template, 2, 2, "label", 6);
        ɵɵelement(7, "span", 7);
        ɵɵelementEnd();
        ɵɵelement(8, "div", 8);
        ɵɵelementStart(9, "ul", 9);
        ɵɵlistener("mouseenter", function AutoCompleteComponent_Template_ul_mouseenter_9_listener() { return ctx.dropdownMouseEnter(); })("mouseleave", function AutoCompleteComponent_Template_ul_mouseleave_9_listener() { return ctx.dropdownMouseLeave(); });
        ɵɵtemplate(10, AutoCompleteComponent_ng_container_10_Template, 5, 4, "ng-container", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isOpen);
        ɵɵadvance(1);
        ɵɵclassProp("querying", ctx.isQuerying)("focused", ctx.isFocusedInput || ctx.isFocusedItem)("open", ctx.isOpen);
        ɵɵadvance(1);
        ɵɵclassProp("form-group", ctx.bootstrap);
        ɵɵproperty("tabindex", ctx._options.isSelect ? 0 : 0 - 1);
        ɵɵadvance(2);
        ɵɵclassProp("form-control", ctx.bootstrap);
        ɵɵpropertyInterpolate("id", ctx.id);
        ɵɵproperty("placeholder", ctx.inputPlaceholder)("value", ctx.inputTextValue)("tabindex", !ctx._options.isSelect ? 0 : 0 - 1)("disabled", ctx.disabled);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.bootstrap);
        ɵɵadvance(1);
        ɵɵclassProp("is-arrow", ctx._options.isSelect);
        ɵɵadvance(2);
        ɵɵclassProp("d-none", !ctx.isOpen);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.itemList);
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutoCompleteComponent, [{
        type: Component,
        args: [{
                selector: 'lib-auto-complete',
                templateUrl: './auto-complete.component.html',
                styleUrls: ['./auto-complete.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Attribute,
                args: ['disabled']
            }] }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], inputWrapper: [{
            type: ViewChild,
            args: ['inputWrapper']
        }], id: [{
            type: Input
        }], bootstrap: [{
            type: Input
        }], options: [{
            type: Input
        }], provider: [{
            type: Input
        }], list: [{
            type: Input
        }] }); })();

class LibUtilidadesModule {
}
LibUtilidadesModule.ɵmod = ɵɵdefineNgModule({ type: LibUtilidadesModule });
LibUtilidadesModule.ɵinj = ɵɵdefineInjector({ factory: function LibUtilidadesModule_Factory(t) { return new (t || LibUtilidadesModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LibUtilidadesModule, { declarations: [LibUtilidadesComponent, AutoCompleteComponent], exports: [LibUtilidadesComponent, AutoCompleteComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibUtilidadesModule, [{
        type: NgModule,
        args: [{
                declarations: [LibUtilidadesComponent, AutoCompleteComponent],
                imports: [],
                exports: [LibUtilidadesComponent, AutoCompleteComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of lib-utilidades
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AutoCompleteComponent, AutocompleteItem, AutocompleteOptions, LibUtilidadesComponent, LibUtilidadesModule, LibUtilidadesService };
//# sourceMappingURL=lib-utilidades.js.map
