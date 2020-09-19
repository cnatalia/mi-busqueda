import { Component, ViewChild, Input, Attribute } from '@angular/core';
import { distinctUntilChanged, filter, tap, debounceTime, switchMap } from 'rxjs/operators';
import { AutocompleteOptions } from './auto-complete-options';
import { AutocompleteItem } from './auto-complete-item';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var _c0 = ["inputElement"];
var _c1 = ["inputWrapper"];
function AutoCompleteComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
function AutoCompleteComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("for", ctx_r3.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3._options.placeholder);
} }
function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵlistener("mouseenter", function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template_li_mouseenter_0_listener() { i0.ɵɵrestoreView(_r13); var i_r11 = ctx.index; var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.itemHover(i_r11); })("click", function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r13); var item_r10 = ctx.$implicit; var i_r11 = ctx.index; var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.itemClick(item_r10.id, i_r11); });
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    var i_r11 = ctx.index;
    var ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("disabled", item_r10.disabled)("next", i_r11 === ctx_r9.highlightedItem + 1)("active", i_r11 === ctx_r9.highlightedItem);
    i0.ɵɵproperty("tabindex", ctx_r9.isOpen ? 0 : 0 - 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.prettyPrint ? item_r10.prettyPrint : item_r10.value);
} }
function AutoCompleteComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template, 3, 8, "li", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.itemList);
} }
function AutoCompleteComponent_ng_container_10_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 18);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Buscando...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AutoCompleteComponent_ng_container_10_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 18);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Digita por lo menos ", ctx_r7._options.minCharacters, " caracteres");
} }
function AutoCompleteComponent_ng_container_10_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "No se encontraron resultados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AutoCompleteComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AutoCompleteComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵtemplate(2, AutoCompleteComponent_ng_container_10_li_2_Template, 3, 0, "li", 13);
    i0.ɵɵtemplate(3, AutoCompleteComponent_ng_container_10_li_3_Template, 3, 1, "li", 13);
    i0.ɵɵtemplate(4, AutoCompleteComponent_ng_container_10_li_4_Template, 3, 0, "li", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.itemList.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isQuerying);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.requiresMinCharacters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.noResults);
} }
var AutoCompleteComponent = /** @class */ (function () {
    function AutoCompleteComponent(
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
    Object.defineProperty(AutoCompleteComponent.prototype, "noResults", {
        get: function () { return !this.isQuerying && this.hasQueried && this.itemList.length < 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteComponent.prototype, "isOpen", {
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
        get: function () {
            if (this.listProvider) {
                return ((this.isFocusedInput || this.isFocusedItem) && (this.isQuerying || this.hasQueried));
            }
            else {
                return this.isFocusedInput || this.isFocusedItem;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteComponent.prototype, "inputPlaceholder", {
        get: function () {
            return this.bootstrap ? this._options.placeholder : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteComponent.prototype, "options", {
        set: function (options) {
            var _this = this;
            this._options._assign(options);
            if (options.control) {
                options.control.valueChanges.subscribe(function (data) {
                    if (data === null) {
                        _this.inputTextValue = options.placeholder;
                        _this._options.control.markAsPristine();
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteComponent.prototype, "provider", {
        set: function (provider) {
            if (provider) {
                this.listProvider = provider;
                if (this._options.selectedElement) {
                    this.selectItem(this._options.selectedElement);
                    this._options.selectedElement = null;
                }
                this.createQueryObservable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteComponent.prototype, "list", {
        set: function (list) {
            var _this = this;
            if (list) {
                if (list[0] && !list[0].original) {
                    this.itemList = this._options.mapFunction ?
                        list.map(this._options.mapFunction) :
                        list.map(function (item) { return new AutocompleteItem({ id: item.id, value: item.value, disabled: item.disabled }); });
                    this.itemList.forEach(function (item, index) { return item.original = list[index]; });
                    if (this._options.control && this._options.control.value) {
                        // tslint:disable-next-line:variable-name
                        var item = this.itemList.find(function (_item) { return _item.id === _this._options.control.value; });
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
        },
        enumerable: true,
        configurable: true
    });
    AutoCompleteComponent.prototype.ngOnInit = function () {
        if (this.itemList && this.itemList.length > 0) {
            this.completeList = this.itemList.map(function (item) { return item; });
        }
    };
    AutoCompleteComponent.prototype.createQueryObservable = function () {
        var _this = this;
        this.inputObserver = null;
        // Create an observable to use the provider
        Observable.create(function (observer) { return _this.inputObserver = observer; })
            .pipe(distinctUntilChanged(), 
        // tslint:disable-next-line:variable-name
        filter(function (_query) { return _query && _query.length >= _this._options.minCharacters; }), tap(function () {
            _this.isQuerying = true;
            _this.list = [];
        }), debounceTime(this._options.delayTime), switchMap(this.listProvider))
            .subscribe(
        // tslint:disable-next-line:variable-name
        function (_list) {
            _this.list = _list;
            _this.isQuerying = false;
            _this.hasQueried = true;
        }, function (error) { return console.error(error); });
    };
    // tslint:disable-next-line:variable-name
    AutoCompleteComponent.prototype.selectItem = function (_element, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        // Find the element (wheter it is an item or an id)
        var element = _element instanceof AutocompleteItem ?
            _element :
            this.itemList.filter(function (item) { return item.id === _element; })[0];
        // If there is an element and the element is not disabled, select it
        if (element && !element.disabled) {
            // Replace the input text within the element
            this.inputTextValue = element.prettyPrint ? element.prettyPrint : element.value;
            // If there is a control, set the value to it
            if (this._options.control) {
                this._options.control.setValue(element.id, { emitEvent: emitEvent });
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
    };
    AutoCompleteComponent.prototype.inputTextKeyDown = function (event) {
        // Prevent the caret from moving inside the input if the user presses the Up Arrow
        if (event.keyCode === 38) {
            event.preventDefault();
        }
    };
    AutoCompleteComponent.prototype.inputTextKeyUp = function (event) {
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
            var element = this.itemList[this.highlightedItem];
            this.selectItem(element.id);
        }
    };
    AutoCompleteComponent.prototype.inputChange = function (event) {
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
    };
    // Filter a complete list for results
    AutoCompleteComponent.prototype.filterlist = function (query) {
        // If there is no query or the query is empty, use an empty list, else filter the complete list
        this.list = query && query.length >= this._options.minCharacters ?
            this.completeList.filter(function (item) {
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
    };
    // Send a new event to fetch from the list provider
    AutoCompleteComponent.prototype.fetchList = function (query) {
        this.inputObserver.next(query);
        if (query && query.length < this._options.minCharacters) {
            this.list = [];
            this.isQuerying = false;
            this.hasQueried = false;
        }
    };
    /*******************EVENTS*******************/
    AutoCompleteComponent.prototype.elementFocus = function () { this.onFocus(); };
    AutoCompleteComponent.prototype.elementBlur = function () { this.onBlur(); };
    AutoCompleteComponent.prototype.dropdownMouseEnter = function () { this.isFocusedItem = true; };
    AutoCompleteComponent.prototype.dropdownMouseLeave = function () { this.isFocusedItem = false; };
    AutoCompleteComponent.prototype.itemClick = function (id, index) {
        this.highlightedItem = index;
        this.selectItem(id);
    };
    AutoCompleteComponent.prototype.itemHover = function (index) { this.highlightedItem = index; };
    AutoCompleteComponent.prototype.onBlur = function () {
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
    };
    AutoCompleteComponent.prototype.onFocus = function () {
        this._options.control.markAsUntouched();
        // If the input is focused, remove the pretty print
        if (this.selectedItem && this.selectedItem.prettyPrint) {
            this.inputElement.nativeElement.value = this.selectedItem.value;
        }
        this.isFocusedInput = true;
        // Select the first element
        this.resetFocus();
    };
    AutoCompleteComponent.prototype.resetFocus = function () {
        // Reset the selected element, use the first one if it is not a select component
        if (this.itemList && this.itemList.length > 0) {
            this.highlightedItem = this._options.isSelect && this.selectedItem ?
                this.highlightedItem = this.itemList.indexOf(this.selectedItem) :
                0;
        }
    };
    AutoCompleteComponent.prototype.wrapperBlur = function () {
        if (this._options.isSelect) {
            this.onBlur();
        }
    };
    AutoCompleteComponent.prototype.wrapperFocus = function () {
        if (!this._options.isSelect) {
            this.inputElement.nativeElement.focus();
        }
        else {
            this.onFocus();
        }
    };
    AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) { return new (t || AutoCompleteComponent)(i0.ɵɵinjectAttribute('disabled')); };
    AutoCompleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AutoCompleteComponent, selectors: [["lib-auto-complete"]], viewQuery: function AutoCompleteComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputWrapper = _t.first);
        } }, inputs: { id: "id", bootstrap: "bootstrap", options: "options", provider: "provider", list: "list" }, decls: 11, vars: 23, consts: [["class", "ios-blur-fix", "tabindex", "0", 4, "ngIf"], [1, "autocomplete-container"], [1, "input-wrapper", 3, "tabindex", "blur", "input", "focus", "keyup"], ["inputWrapper", ""], ["type", "text", "autocomplete", "off", 3, "placeholder", "value", "tabindex", "id", "disabled", "focus", "blur", "keydown"], ["inputElement", ""], ["class", "placeholder", 3, "for", 4, "ngIf"], [1, "dropdown-caret"], [1, "input-bottom-border"], [1, "autocomplete-dropdown", "list-group", 3, "mouseenter", "mouseleave"], [4, "ngIf"], ["tabindex", "0", 1, "ios-blur-fix"], [1, "placeholder", 3, "for"], ["class", "list-group-item d-block querying", 4, "ngIf"], ["class", "list-group-item d-block no-results", 4, "ngIf"], ["class", "list-group-item d-block result", 3, "disabled", "next", "active", "tabindex", "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-block", "result", 3, "tabindex", "mouseenter", "click"], [1, "text-capitalize"], [1, "list-group-item", "d-block", "querying"], [1, "list-group-item", "d-block", "no-results"]], template: function AutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AutoCompleteComponent_div_0_Template, 1, 0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2, 3);
            i0.ɵɵlistener("blur", function AutoCompleteComponent_Template_div_blur_2_listener() { return ctx.wrapperBlur(); })("input", function AutoCompleteComponent_Template_div_input_2_listener($event) { return ctx.inputChange($event); })("focus", function AutoCompleteComponent_Template_div_focus_2_listener() { return ctx.wrapperFocus(); })("keyup", function AutoCompleteComponent_Template_div_keyup_2_listener($event) { return ctx.inputTextKeyUp($event); });
            i0.ɵɵelementStart(4, "input", 4, 5);
            i0.ɵɵlistener("focus", function AutoCompleteComponent_Template_input_focus_4_listener() { return ctx.elementFocus(); })("blur", function AutoCompleteComponent_Template_input_blur_4_listener() { return ctx.elementBlur(); })("keydown", function AutoCompleteComponent_Template_input_keydown_4_listener($event) { return ctx.inputTextKeyDown($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, AutoCompleteComponent_label_6_Template, 2, 2, "label", 6);
            i0.ɵɵelement(7, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "div", 8);
            i0.ɵɵelementStart(9, "ul", 9);
            i0.ɵɵlistener("mouseenter", function AutoCompleteComponent_Template_ul_mouseenter_9_listener() { return ctx.dropdownMouseEnter(); })("mouseleave", function AutoCompleteComponent_Template_ul_mouseleave_9_listener() { return ctx.dropdownMouseLeave(); });
            i0.ɵɵtemplate(10, AutoCompleteComponent_ng_container_10_Template, 5, 4, "ng-container", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isOpen);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("querying", ctx.isQuerying)("focused", ctx.isFocusedInput || ctx.isFocusedItem)("open", ctx.isOpen);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("form-group", ctx.bootstrap);
            i0.ɵɵproperty("tabindex", ctx._options.isSelect ? 0 : 0 - 1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("form-control", ctx.bootstrap);
            i0.ɵɵpropertyInterpolate("id", ctx.id);
            i0.ɵɵproperty("placeholder", ctx.inputPlaceholder)("value", ctx.inputTextValue)("tabindex", !ctx._options.isSelect ? 0 : 0 - 1)("disabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.bootstrap);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-arrow", ctx._options.isSelect);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("d-none", !ctx.isOpen);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.itemList);
        } }, styles: [""] });
    return AutoCompleteComponent;
}());
export { AutoCompleteComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutoCompleteComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWItdXRpbGlkYWRlcy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIiwibGliL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBYyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQVksVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztJQ0o1QywwQkFBNEQ7OztJQUl4RCxpQ0FBMkQ7SUFBQSxZQUEwQjtJQUFBLGlCQUFROzs7SUFBbkUsMENBQVk7SUFBcUIsZUFBMEI7SUFBMUIsaURBQTBCOzs7O0lBT2pGLDhCQUNFO0lBRHVNLDBQQUEyQiw4UUFBQTtJQUNsTyxnQ0FBOEI7SUFBQSxZQUFzRDtJQUFBLGlCQUFPO0lBQzdGLGlCQUFLOzs7OztJQUZtRiw2Q0FBZ0MsOENBQUEsNENBQUE7SUFBNkksb0RBQTRCO0lBQ2pRLGVBQXNEO0lBQXRELGtGQUFzRDs7O0lBRnhGLDZCQUNFO0lBQUEsb0dBQ0U7SUFFSiwwQkFBZTs7O0lBSDhCLGVBQTRDO0lBQTVDLHlDQUE0Qzs7O0lBSXpGLDhCQUNFO0lBQUEsNEJBQU07SUFBQSwyQkFBVztJQUFBLGlCQUFPO0lBQzFCLGlCQUFLOzs7SUFDTCw4QkFDRTtJQUFBLDRCQUFNO0lBQUEsWUFBMkQ7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IElucHV0LCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHRhcCwgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVPcHRpb25zIH0gZnJvbSAnLi9hdXRvLWNvbXBsZXRlLW9wdGlvbnMnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlSXRlbSB9IGZyb20gJy4vYXV0by1jb21wbGV0ZS1pdGVtJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hdXRvLWNvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG8tY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW5wdXRXcmFwcGVyJykgaW5wdXRXcmFwcGVyOiBFbGVtZW50UmVmO1xuXG4gIGlucHV0VGV4dFZhbHVlID0gJyc7XG4gIGlucHV0T2JzZXJ2ZXI6IE9ic2VydmVyPHN0cmluZz47XG5cbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBpc1F1ZXJ5aW5nID0gZmFsc2U7XG4gIGhhc1F1ZXJpZWQgPSBmYWxzZTtcblxuICBpc0ZvY3VzZWRJbnB1dCA9IGZhbHNlO1xuICBpc0ZvY3VzZWRJdGVtID0gZmFsc2U7XG5cbiAgcmVxdWlyZXNNaW5DaGFyYWN0ZXJzID0gZmFsc2U7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgX29wdGlvbnM6IEF1dG9jb21wbGV0ZU9wdGlvbnMgPSBuZXcgQXV0b2NvbXBsZXRlT3B0aW9ucyh7XG4gICAgY2xlYXJPblNlbGVjdDogZmFsc2UsXG4gICAgZGVsYXlUaW1lOiA2MDAsXG4gICAgbWluQ2hhcmFjdGVyczogMyxcbiAgICBtYXBGdW5jdGlvbjogbnVsbCxcbiAgICBjb250cm9sOiBudWxsLFxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBpc1NlbGVjdDogZmFsc2UsXG4gICAgbWF4UmVzdWx0czogbnVsbFxuICB9KTtcblxuICBoaWdobGlnaHRlZEl0ZW0gPSAtMTtcbiAgc2VsZWN0ZWRJdGVtOiBBdXRvY29tcGxldGVJdGVtO1xuXG4gIGl0ZW1MaXN0OiBBdXRvY29tcGxldGVJdGVtW10gPSBbXTtcblxuICBjb21wbGV0ZUxpc3Q6IEF1dG9jb21wbGV0ZUl0ZW1bXSA9IG51bGw7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIGxpc3RQcm92aWRlcjogKGFueSkgPT4gT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgZ2V0IG5vUmVzdWx0cygpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmlzUXVlcnlpbmcgJiYgdGhpcy5oYXNRdWVyaWVkICYmIHRoaXMuaXRlbUxpc3QubGVuZ3RoIDwgMTsgfVxuXG4gIC8vIGdldCBjb250cm9sQ2xhc3NlcygpIHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgJ25nLXByaXN0aW5lJzogdGhpcy5fb3B0aW9ucy5jb250cm9sICYmIHRoaXMuX29wdGlvbnMuY29udHJvbC5wcmlzdGluZSxcbiAgLy8gICAgICduZy1kaXJ0eSc6IHRoaXMuX29wdGlvbnMuY29udHJvbCAmJiB0aGlzLl9vcHRpb25zLmNvbnRyb2wuZGlydHksXG4gIC8vICAgICAnbmctdmFsaWQnOiB0aGlzLl9vcHRpb25zLmNvbnRyb2wgJiYgdGhpcy5fb3B0aW9ucy5jb250cm9sLnZhbGlkLFxuICAvLyAgICAgJ25nLWludmFsaWQnOiB0aGlzLl9vcHRpb25zLmNvbnRyb2wgJiYgdGhpcy5fb3B0aW9ucy5jb250cm9sLmludmFsaWQsXG4gIC8vICAgICAnbmctdG91Y2hlZCc6IHRoaXMuX29wdGlvbnMuY29udHJvbCAmJiB0aGlzLl9vcHRpb25zLmNvbnRyb2wudG91Y2hlZCxcbiAgLy8gICAgICduZy11bnRvdWNoZWQnOiB0aGlzLl9vcHRpb25zLmNvbnRyb2wgJiYgdGhpcy5fb3B0aW9ucy5jb250cm9sLnVudG91Y2hlZFxuICAvLyAgIH07XG4gIC8vIH1cblxuICBnZXQgaXNPcGVuKCkge1xuICAgIGlmICh0aGlzLmxpc3RQcm92aWRlcikge1xuICAgICAgcmV0dXJuICgodGhpcy5pc0ZvY3VzZWRJbnB1dCB8fCB0aGlzLmlzRm9jdXNlZEl0ZW0pICYmICh0aGlzLmlzUXVlcnlpbmcgfHwgdGhpcy5oYXNRdWVyaWVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRm9jdXNlZElucHV0IHx8IHRoaXMuaXNGb2N1c2VkSXRlbTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5wdXRQbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ib290c3RyYXAgPyB0aGlzLl9vcHRpb25zLnBsYWNlaG9sZGVyIDogJyc7XG4gIH1cblxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBib290c3RyYXAgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnMob3B0aW9uczogQXV0b2NvbXBsZXRlT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMuX2Fzc2lnbihvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5jb250cm9sKSB7XG4gICAgICBvcHRpb25zLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmlucHV0VGV4dFZhbHVlID0gb3B0aW9ucy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgc2V0IHByb3ZpZGVyKHByb3ZpZGVyOiAoYW55KSA9PiBPYnNlcnZhYmxlPGFueVtdPikge1xuICAgIGlmIChwcm92aWRlcikge1xuICAgICAgdGhpcy5saXN0UHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0odGhpcy5fb3B0aW9ucy5zZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLmNyZWF0ZVF1ZXJ5T2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBsaXN0KGxpc3Q6IGFueVtdKSB7XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIGlmIChsaXN0WzBdICYmICFsaXN0WzBdLm9yaWdpbmFsKSB7XG4gICAgICAgIHRoaXMuaXRlbUxpc3QgPSB0aGlzLl9vcHRpb25zLm1hcEZ1bmN0aW9uID9cbiAgICAgICAgICBsaXN0Lm1hcCh0aGlzLl9vcHRpb25zLm1hcEZ1bmN0aW9uKSA6XG4gICAgICAgICAgbGlzdC5tYXAoaXRlbSA9PiBuZXcgQXV0b2NvbXBsZXRlSXRlbSh7IGlkOiBpdGVtLmlkLCB2YWx1ZTogaXRlbS52YWx1ZSwgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQgfSkpO1xuICAgICAgICB0aGlzLml0ZW1MaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiBpdGVtLm9yaWdpbmFsID0gbGlzdFtpbmRleF0pO1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5jb250cm9sICYmIHRoaXMuX29wdGlvbnMuY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbUxpc3QuZmluZChfaXRlbSA9PiBfaXRlbS5pZCA9PT0gdGhpcy5fb3B0aW9ucy5jb250cm9sLnZhbHVlKTtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKGl0ZW0sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXRlbUxpc3QgPSBsaXN0O1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5tYXhSZXN1bHRzKSB7XG4gICAgICAgICAgdGhpcy5pdGVtTGlzdCA9IHRoaXMuaXRlbUxpc3Quc2xpY2UoMCwgdGhpcy5fb3B0aW9ucy5tYXhSZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbSh0aGlzLl9vcHRpb25zLnNlbGVjdGVkRWxlbWVudCwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY29tcGxldGVMaXN0KSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVMaXN0ID0gdGhpcy5pdGVtTGlzdDtcbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmlzU2VsZWN0ICYmICF0aGlzLmxpc3RQcm92aWRlcikge1xuICAgICAgICAgIHRoaXMuaXRlbUxpc3QgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlc2V0Rm9jdXMoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIEBBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgcHVibGljIF9kaXNhYmxlZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBfZGlzYWJsZWQgIT09IG51bGwgfHwgKF9kaXNhYmxlZCAmJiBfZGlzYWJsZWQudG9VcHBlckNhc2UoKSA9PT0gJ0RJU0FCTEVEJyk7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLml0ZW1MaXN0ICYmIHRoaXMuaXRlbUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb21wbGV0ZUxpc3QgPSB0aGlzLml0ZW1MaXN0Lm1hcChpdGVtID0+IGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUXVlcnlPYnNlcnZhYmxlKCkge1xuICAgIHRoaXMuaW5wdXRPYnNlcnZlciA9IG51bGw7XG4gICAgLy8gQ3JlYXRlIGFuIG9ic2VydmFibGUgdG8gdXNlIHRoZSBwcm92aWRlclxuICAgIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHRoaXMuaW5wdXRPYnNlcnZlciA9IG9ic2VydmVyKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgICAgIGZpbHRlcigoX3F1ZXJ5OiBzdHJpbmcpID0+IF9xdWVyeSAmJiBfcXVlcnkubGVuZ3RoID49IHRoaXMuX29wdGlvbnMubWluQ2hhcmFjdGVycyksXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1F1ZXJ5aW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgfSksXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLl9vcHRpb25zLmRlbGF5VGltZSksXG4gICAgICAgIHN3aXRjaE1hcCh0aGlzLmxpc3RQcm92aWRlcilcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgICAgIF9saXN0ID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3QgPSBfbGlzdDtcbiAgICAgICAgICB0aGlzLmlzUXVlcnlpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmhhc1F1ZXJpZWQgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHNlbGVjdEl0ZW0oX2VsZW1lbnQ6IG51bWJlciB8IHN0cmluZyB8IEF1dG9jb21wbGV0ZUl0ZW0sIGVtaXRFdmVudCA9IHRydWUpIHtcbiAgICAvLyBGaW5kIHRoZSBlbGVtZW50ICh3aGV0ZXIgaXQgaXMgYW4gaXRlbSBvciBhbiBpZClcbiAgICBjb25zdCBlbGVtZW50ID0gX2VsZW1lbnQgaW5zdGFuY2VvZiBBdXRvY29tcGxldGVJdGVtID9cbiAgICAgIF9lbGVtZW50IDpcbiAgICAgIHRoaXMuaXRlbUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gX2VsZW1lbnQpWzBdO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYW4gZWxlbWVudCBhbmQgdGhlIGVsZW1lbnQgaXMgbm90IGRpc2FibGVkLCBzZWxlY3QgaXRcbiAgICBpZiAoZWxlbWVudCAmJiAhZWxlbWVudC5kaXNhYmxlZCkge1xuICAgICAgLy8gUmVwbGFjZSB0aGUgaW5wdXQgdGV4dCB3aXRoaW4gdGhlIGVsZW1lbnRcbiAgICAgIHRoaXMuaW5wdXRUZXh0VmFsdWUgPSBlbGVtZW50LnByZXR0eVByaW50ID8gZWxlbWVudC5wcmV0dHlQcmludCA6IGVsZW1lbnQudmFsdWU7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGNvbnRyb2wsIHNldCB0aGUgdmFsdWUgdG8gaXRcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jb250cm9sLnNldFZhbHVlKGVsZW1lbnQuaWQsIHsgZW1pdEV2ZW50IH0pO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgIH1cbiAgICAgIC8vIENsZWFyIHRoZSBsaXN0IGlmIHRvbGQgdG9cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmNsZWFyT25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gZWxlbWVudDtcbiAgICAgIC8vIENsb3NlIHRoZSBkcm9wZG93blxuICAgICAgdGhpcy5pc0ZvY3VzZWRJbnB1dCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0ZvY3VzZWRJdGVtID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUXVlcnlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzUXVlcmllZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmlucHV0V3JhcHBlci5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0VGV4dEtleURvd24oZXZlbnQpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBjYXJldCBmcm9tIG1vdmluZyBpbnNpZGUgdGhlIGlucHV0IGlmIHRoZSB1c2VyIHByZXNzZXMgdGhlIFVwIEFycm93XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlucHV0VGV4dEtleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIC8vIEFycm93IGRvd24sIG1vdmUgdGhlIGhpZ2hsaWdodGVkIGVsZW1lbnRcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5oaWdobGlnaHRlZEl0ZW0gKyAxID49IHRoaXMuaXRlbUxpc3QubGVuZ3RoID8gMCA6IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtICsgMTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAvLyBBcnJvdyB1cCwgbW92ZSB0aGUgaGlnaHRsaWdodGVkIGVsZW1lbnRcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5oaWdobGlnaHRlZEl0ZW0gLSAxIDwgMCA/IHRoaXMuaXRlbUxpc3QubGVuZ3RoIC0gMSA6IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtIC0gMTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiB0aGlzLml0ZW1MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEVudGVyLCBzZWxlY3QgdGhlIGVsZW1lbnRcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLml0ZW1MaXN0W3RoaXMuaGlnaGxpZ2h0ZWRJdGVtXTtcbiAgICAgIHRoaXMuc2VsZWN0SXRlbShlbGVtZW50LmlkKTtcbiAgICB9XG4gIH1cblxuICBpbnB1dENoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5pbnB1dFRleHRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9vcHRpb25zLmNvbnRyb2wubWFya0FzRGlydHkoKTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgbGlzdCBwcm92aWRlciwgZmV0Y2ggcmVzdWx0cyBmcm9tIGl0XG4gICAgaWYgKHRoaXMubGlzdFByb3ZpZGVyKSB7XG4gICAgICB0aGlzLmZldGNoTGlzdCh0aGlzLmlucHV0VGV4dFZhbHVlKTtcbiAgICAgIC8vIEVsc2UsIGlmIHRoZSBlbGVtZW50IGlzIG5vdCBhIHNlbGVjdCBpbnB1dCwgZmlsdGVyIHRoZSBjb21wbGV0ZSBsaXN0IHRvIGZldGNoIHRoZSByZXN1bHRzXG4gICAgfSBlbHNlIGlmICghdGhpcy5fb3B0aW9ucy5pc1NlbGVjdCkge1xuICAgICAgdGhpcy5maWx0ZXJsaXN0KHRoaXMuaW5wdXRUZXh0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBhIGNvbXBsZXRlIGxpc3QgZm9yIHJlc3VsdHNcbiAgZmlsdGVybGlzdChxdWVyeSkge1xuICAgIC8vIElmIHRoZXJlIGlzIG5vIHF1ZXJ5IG9yIHRoZSBxdWVyeSBpcyBlbXB0eSwgdXNlIGFuIGVtcHR5IGxpc3QsIGVsc2UgZmlsdGVyIHRoZSBjb21wbGV0ZSBsaXN0XG4gICAgdGhpcy5saXN0ID0gcXVlcnkgJiYgcXVlcnkubGVuZ3RoID49IHRoaXMuX29wdGlvbnMubWluQ2hhcmFjdGVycyA/XG4gICAgICB0aGlzLmNvbXBsZXRlTGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnByZXR0eVByaW50KSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0ucHJldHR5UHJpbnQudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICB9XG4gICAgICB9KSA6XG4gICAgICBbXTtcbiAgICB0aGlzLmhhc1F1ZXJpZWQgPSBxdWVyeS5sZW5ndGggPj0gdGhpcy5fb3B0aW9ucy5taW5DaGFyYWN0ZXJzO1xuICAgIHRoaXMucmVxdWlyZXNNaW5DaGFyYWN0ZXJzID0gcXVlcnkubGVuZ3RoIDwgdGhpcy5fb3B0aW9ucy5taW5DaGFyYWN0ZXJzO1xuICB9XG5cbiAgLy8gU2VuZCBhIG5ldyBldmVudCB0byBmZXRjaCBmcm9tIHRoZSBsaXN0IHByb3ZpZGVyXG4gIGZldGNoTGlzdChxdWVyeSkge1xuICAgIHRoaXMuaW5wdXRPYnNlcnZlci5uZXh0KHF1ZXJ5KTtcbiAgICBpZiAocXVlcnkgJiYgcXVlcnkubGVuZ3RoIDwgdGhpcy5fb3B0aW9ucy5taW5DaGFyYWN0ZXJzKSB7XG4gICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgIHRoaXMuaXNRdWVyeWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNRdWVyaWVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8qKioqKioqKioqKioqKioqKioqRVZFTlRTKioqKioqKioqKioqKioqKioqKi9cblxuICBlbGVtZW50Rm9jdXMoKSB7IHRoaXMub25Gb2N1cygpOyB9XG5cbiAgZWxlbWVudEJsdXIoKSB7IHRoaXMub25CbHVyKCk7IH1cblxuICBkcm9wZG93bk1vdXNlRW50ZXIoKSB7IHRoaXMuaXNGb2N1c2VkSXRlbSA9IHRydWU7IH1cblxuICBkcm9wZG93bk1vdXNlTGVhdmUoKSB7IHRoaXMuaXNGb2N1c2VkSXRlbSA9IGZhbHNlOyB9XG5cbiAgaXRlbUNsaWNrKGlkLCBpbmRleCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gaW5kZXg7XG4gICAgdGhpcy5zZWxlY3RJdGVtKGlkKTtcbiAgfVxuXG4gIGl0ZW1Ib3ZlcihpbmRleCkgeyB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IGluZGV4OyB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuX29wdGlvbnMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG5cbiAgICAvLyBJZiB0aGUgaW5wdXQgaGFzIGJlZW4gYmx1cnJlZCwgcHJldHR5IHByaW50IHRoZSBlbGVtZW50IChpZiB0aGVyZSBpcyBvbmUpXG4gICAgdGhpcy5pc0ZvY3VzZWRJbnB1dCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtLnByZXR0eVByaW50ID8gdGhpcy5zZWxlY3RlZEl0ZW0ucHJldHR5UHJpbnQgOiB0aGlzLnNlbGVjdGVkSXRlbS52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgdGhpcy5pbnB1dFdyYXBwZXIubmF0aXZlRWxlbWVudC5ibHVyKCk7XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jb250cm9sKSB7XG4gICAgICB0aGlzLl9vcHRpb25zLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5fb3B0aW9ucy5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xuXG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGZvY3VzZWQsIHJlbW92ZSB0aGUgcHJldHR5IHByaW50XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtICYmIHRoaXMuc2VsZWN0ZWRJdGVtLnByZXR0eVByaW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW0udmFsdWU7XG4gICAgfVxuICAgIHRoaXMuaXNGb2N1c2VkSW5wdXQgPSB0cnVlO1xuICAgIC8vIFNlbGVjdCB0aGUgZmlyc3QgZWxlbWVudFxuICAgIHRoaXMucmVzZXRGb2N1cygpO1xuICB9XG5cbiAgcmVzZXRGb2N1cygpIHtcbiAgICAvLyBSZXNldCB0aGUgc2VsZWN0ZWQgZWxlbWVudCwgdXNlIHRoZSBmaXJzdCBvbmUgaWYgaXQgaXMgbm90IGEgc2VsZWN0IGNvbXBvbmVudFxuICAgIGlmICh0aGlzLml0ZW1MaXN0ICYmIHRoaXMuaXRlbUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLl9vcHRpb25zLmlzU2VsZWN0ICYmIHRoaXMuc2VsZWN0ZWRJdGVtID9cbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSB0aGlzLml0ZW1MaXN0LmluZGV4T2YodGhpcy5zZWxlY3RlZEl0ZW0pIDpcbiAgICAgICAgMDtcbiAgICB9XG4gIH1cblxuICB3cmFwcGVyQmx1cigpIHtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5pc1NlbGVjdCkge1xuICAgICAgdGhpcy5vbkJsdXIoKTtcbiAgICB9XG4gIH1cblxuICB3cmFwcGVyRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLl9vcHRpb25zLmlzU2VsZWN0KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImlvcy1ibHVyLWZpeFwiIHRhYmluZGV4PVwiMFwiICpuZ0lmPVwiaXNPcGVuXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNvbnRhaW5lclwiIFtjbGFzcy5xdWVyeWluZ109XCJpc1F1ZXJ5aW5nXCIgW2NsYXNzLmZvY3VzZWRdPVwiaXNGb2N1c2VkSW5wdXQgfHwgaXNGb2N1c2VkSXRlbVwiIFtjbGFzcy5vcGVuXT1cImlzT3BlblwiPlxuICA8ZGl2ICNpbnB1dFdyYXBwZXIgY2xhc3M9XCJpbnB1dC13cmFwcGVyXCIgW2NsYXNzLmZvcm0tZ3JvdXBdPVwiYm9vdHN0cmFwXCIgKGJsdXIpPVwid3JhcHBlckJsdXIoKVwiIChpbnB1dCk9XCJpbnB1dENoYW5nZSgkZXZlbnQpXCIgKGZvY3VzKT1cIndyYXBwZXJGb2N1cygpXCIgKGtleXVwKT1cImlucHV0VGV4dEtleVVwKCRldmVudClcIiBbdGFiaW5kZXhdPVwiX29wdGlvbnMuaXNTZWxlY3QgPyAwIDogLTFcIj5cbiAgICA8aW5wdXQgI2lucHV0RWxlbWVudCBbY2xhc3MuZm9ybS1jb250cm9sXT1cImJvb3RzdHJhcFwiIFtwbGFjZWhvbGRlcl09XCJpbnB1dFBsYWNlaG9sZGVyXCIgdHlwZT1cInRleHRcIiAoZm9jdXMpPVwiZWxlbWVudEZvY3VzKClcIiAgKGJsdXIpPVwiZWxlbWVudEJsdXIoKVwiIChrZXlkb3duKT1cImlucHV0VGV4dEtleURvd24oJGV2ZW50KVwiIFt2YWx1ZV09XCJpbnB1dFRleHRWYWx1ZVwiIFt0YWJpbmRleF09XCIhX29wdGlvbnMuaXNTZWxlY3QgPyAwIDogLTFcIiBpZD1cInt7aWR9fVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiLz5cbiAgICA8bGFiZWwgKm5nSWY9XCIhYm9vdHN0cmFwXCIgZm9yPVwie3tpZH19XCIgY2xhc3M9XCJwbGFjZWhvbGRlclwiPnt7IF9vcHRpb25zLnBsYWNlaG9sZGVyIH19PC9sYWJlbD5cbiAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWNhcmV0XCIgW2NsYXNzLmlzLWFycm93XT1cIl9vcHRpb25zLmlzU2VsZWN0XCI+PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImlucHV0LWJvdHRvbS1ib3JkZXJcIj48L2Rpdj5cbiAgPHVsIGNsYXNzPVwiYXV0b2NvbXBsZXRlLWRyb3Bkb3duIGxpc3QtZ3JvdXBcIiAobW91c2VlbnRlcik9XCJkcm9wZG93bk1vdXNlRW50ZXIoKVwiIChtb3VzZWxlYXZlKT1cImRyb3Bkb3duTW91c2VMZWF2ZSgpXCIgW2NsYXNzLmQtbm9uZV09XCIhaXNPcGVuXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1MaXN0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbUxpc3QubGVuZ3RoID4gMFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1ibG9jayByZXN1bHRcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtTGlzdDsgbGV0IGkgPSBpbmRleFwiIFtjbGFzcy5kaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCIgW2NsYXNzLm5leHRdPVwiaSA9PT0gaGlnaGxpZ2h0ZWRJdGVtICsgMVwiIFtjbGFzcy5hY3RpdmVdPVwiaSA9PT0gaGlnaGxpZ2h0ZWRJdGVtXCIgKG1vdXNlZW50ZXIpPVwiaXRlbUhvdmVyKGkpXCIgKGNsaWNrKT1cIml0ZW1DbGljayhpdGVtLmlkLCBpKVwiIFt0YWJpbmRleF09XCJpc09wZW4gPyAwIDogLTFcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtY2FwaXRhbGl6ZVwiPnt7IGl0ZW0ucHJldHR5UHJpbnQgPyBpdGVtLnByZXR0eVByaW50IDogaXRlbS52YWx1ZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtYmxvY2sgcXVlcnlpbmdcIiAqbmdJZj1cImlzUXVlcnlpbmdcIj5cbiAgICAgICAgPHNwYW4+QnVzY2FuZG8uLi48L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtYmxvY2sgcXVlcnlpbmdcIiAqbmdJZj1cInJlcXVpcmVzTWluQ2hhcmFjdGVyc1wiPlxuICAgICAgICA8c3Bhbj5EaWdpdGEgcG9yIGxvIG1lbm9zIHt7IF9vcHRpb25zLm1pbkNoYXJhY3RlcnMgfX0gY2FyYWN0ZXJlczwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1ibG9jayBuby1yZXN1bHRzXCIgKm5nSWY9XCJub1Jlc3VsdHNcIj5cbiAgICAgICAgPHNwYW4+Tm8gc2UgZW5jb250cmFyb24gcmVzdWx0YWRvczwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvdWw+XG48L2Rpdj5cblxuIl19