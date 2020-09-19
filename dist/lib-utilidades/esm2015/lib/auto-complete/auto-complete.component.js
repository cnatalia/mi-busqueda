import { Component, ViewChild, Input, Attribute } from '@angular/core';
import { distinctUntilChanged, filter, tap, debounceTime, switchMap } from 'rxjs/operators';
import { AutocompleteOptions } from './auto-complete-options';
import { AutocompleteItem } from './auto-complete-item';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["inputElement"];
const _c1 = ["inputWrapper"];
function AutoCompleteComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} }
function AutoCompleteComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("for", ctx_r3.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3._options.placeholder);
} }
function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵlistener("mouseenter", function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template_li_mouseenter_0_listener() { i0.ɵɵrestoreView(_r13); const i_r11 = ctx.index; const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.itemHover(i_r11); })("click", function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r13); const item_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.itemClick(item_r10.id, i_r11); });
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(3);
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
    const ctx_r5 = i0.ɵɵnextContext(2);
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
    const ctx_r7 = i0.ɵɵnextContext(2);
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
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.itemList.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.isQuerying);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.requiresMinCharacters);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.noResults);
} }
export class AutoCompleteComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWItdXRpbGlkYWRlcy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIiwibGliL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBYyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQVksVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztJQ0o1QywwQkFBNEQ7OztJQUl4RCxpQ0FBMkQ7SUFBQSxZQUEwQjtJQUFBLGlCQUFROzs7SUFBbkUsMENBQVk7SUFBcUIsZUFBMEI7SUFBMUIsaURBQTBCOzs7O0lBT2pGLDhCQUNFO0lBRHVNLDhQQUEyQixvUkFBQTtJQUNsTyxnQ0FBOEI7SUFBQSxZQUFzRDtJQUFBLGlCQUFPO0lBQzdGLGlCQUFLOzs7OztJQUZtRiw2Q0FBZ0MsOENBQUEsNENBQUE7SUFBNkksb0RBQTRCO0lBQ2pRLGVBQXNEO0lBQXRELGtGQUFzRDs7O0lBRnhGLDZCQUNFO0lBQUEsb0dBQ0U7SUFFSiwwQkFBZTs7O0lBSDhCLGVBQTRDO0lBQTVDLHlDQUE0Qzs7O0lBSXpGLDhCQUNFO0lBQUEsNEJBQU07SUFBQSwyQkFBVztJQUFBLGlCQUFPO0lBQzFCLGlCQUFLOzs7SUFDTCw4QkFDRTtJQUFBLDRCQUFNO0lBQUEsWUFBMkQ7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MENBQTZCLG9EQUFBLG9CQUFBO1FBQ3RCLGVBQThCO1FBQTlCLDJDQUE4QjtRQUFnSCw0REFBdUM7UUFDdk0sZUFBZ0M7UUFBaEMsNkNBQWdDO1FBQXNNLHNDQUFXO1FBQWhOLGtEQUFnQyw2QkFBQSxnREFBQSwwQkFBQTtRQUMvRSxlQUFrQjtRQUFsQixxQ0FBa0I7UUFDSSxlQUFvQztRQUFwQyxpREFBb0M7UUFHa0QsZUFBd0I7UUFBeEIscUNBQXdCO1FBQzdILGVBQWdCO1FBQWhCLG1DQUFnQjs7a0RERXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7O3NCQWlJSSxTQUFTO3VCQUFDLFVBQVU7O2tCQTlIdEIsU0FBUzttQkFBQyxjQUFjOztrQkFDeEIsU0FBUzttQkFBQyxjQUFjOztrQkE2RHhCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQWFMLEtBQUs7O2tCQWFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCB0YXAsIGRlYm91bmNlVGltZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlT3B0aW9ucyB9IGZyb20gJy4vYXV0by1jb21wbGV0ZS1vcHRpb25zJztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUl0ZW0gfSBmcm9tICcuL2F1dG8tY29tcGxldGUtaXRlbSc7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYXV0by1jb21wbGV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0by1jb21wbGV0ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0V3JhcHBlcicpIGlucHV0V3JhcHBlcjogRWxlbWVudFJlZjtcblxuICBpbnB1dFRleHRWYWx1ZSA9ICcnO1xuICBpbnB1dE9ic2VydmVyOiBPYnNlcnZlcjxzdHJpbmc+O1xuXG4gIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgaXNRdWVyeWluZyA9IGZhbHNlO1xuICBoYXNRdWVyaWVkID0gZmFsc2U7XG5cbiAgaXNGb2N1c2VkSW5wdXQgPSBmYWxzZTtcbiAgaXNGb2N1c2VkSXRlbSA9IGZhbHNlO1xuXG4gIHJlcXVpcmVzTWluQ2hhcmFjdGVycyA9IGZhbHNlO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIF9vcHRpb25zOiBBdXRvY29tcGxldGVPcHRpb25zID0gbmV3IEF1dG9jb21wbGV0ZU9wdGlvbnMoe1xuICAgIGNsZWFyT25TZWxlY3Q6IGZhbHNlLFxuICAgIGRlbGF5VGltZTogNjAwLFxuICAgIG1pbkNoYXJhY3RlcnM6IDMsXG4gICAgbWFwRnVuY3Rpb246IG51bGwsXG4gICAgY29udHJvbDogbnVsbCxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgaXNTZWxlY3Q6IGZhbHNlLFxuICAgIG1heFJlc3VsdHM6IG51bGxcbiAgfSk7XG5cbiAgaGlnaGxpZ2h0ZWRJdGVtID0gLTE7XG4gIHNlbGVjdGVkSXRlbTogQXV0b2NvbXBsZXRlSXRlbTtcblxuICBpdGVtTGlzdDogQXV0b2NvbXBsZXRlSXRlbVtdID0gW107XG5cbiAgY29tcGxldGVMaXN0OiBBdXRvY29tcGxldGVJdGVtW10gPSBudWxsO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBsaXN0UHJvdmlkZXI6IChhbnkpID0+IE9ic2VydmFibGU8YW55W10+O1xuXG4gIGdldCBub1Jlc3VsdHMoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5pc1F1ZXJ5aW5nICYmIHRoaXMuaGFzUXVlcmllZCAmJiB0aGlzLml0ZW1MaXN0Lmxlbmd0aCA8IDE7IH1cblxuICAvLyBnZXQgY29udHJvbENsYXNzZXMoKSB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgICduZy1wcmlzdGluZSc6IHRoaXMuX29wdGlvbnMuY29udHJvbCAmJiB0aGlzLl9vcHRpb25zLmNvbnRyb2wucHJpc3RpbmUsXG4gIC8vICAgICAnbmctZGlydHknOiB0aGlzLl9vcHRpb25zLmNvbnRyb2wgJiYgdGhpcy5fb3B0aW9ucy5jb250cm9sLmRpcnR5LFxuICAvLyAgICAgJ25nLXZhbGlkJzogdGhpcy5fb3B0aW9ucy5jb250cm9sICYmIHRoaXMuX29wdGlvbnMuY29udHJvbC52YWxpZCxcbiAgLy8gICAgICduZy1pbnZhbGlkJzogdGhpcy5fb3B0aW9ucy5jb250cm9sICYmIHRoaXMuX29wdGlvbnMuY29udHJvbC5pbnZhbGlkLFxuICAvLyAgICAgJ25nLXRvdWNoZWQnOiB0aGlzLl9vcHRpb25zLmNvbnRyb2wgJiYgdGhpcy5fb3B0aW9ucy5jb250cm9sLnRvdWNoZWQsXG4gIC8vICAgICAnbmctdW50b3VjaGVkJzogdGhpcy5fb3B0aW9ucy5jb250cm9sICYmIHRoaXMuX29wdGlvbnMuY29udHJvbC51bnRvdWNoZWRcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgZ2V0IGlzT3BlbigpIHtcbiAgICBpZiAodGhpcy5saXN0UHJvdmlkZXIpIHtcbiAgICAgIHJldHVybiAoKHRoaXMuaXNGb2N1c2VkSW5wdXQgfHwgdGhpcy5pc0ZvY3VzZWRJdGVtKSAmJiAodGhpcy5pc1F1ZXJ5aW5nIHx8IHRoaXMuaGFzUXVlcmllZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0ZvY3VzZWRJbnB1dCB8fCB0aGlzLmlzRm9jdXNlZEl0ZW07XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlucHV0UGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwID8gdGhpcy5fb3B0aW9ucy5wbGFjZWhvbGRlciA6ICcnO1xuICB9XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgYm9vdHN0cmFwID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IEF1dG9jb21wbGV0ZU9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zLl9hc3NpZ24ob3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMuY29udHJvbCkge1xuICAgICAgb3B0aW9ucy5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dFRleHRWYWx1ZSA9IG9wdGlvbnMucGxhY2Vob2xkZXI7XG4gICAgICAgICAgdGhpcy5fb3B0aW9ucy5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHNldCBwcm92aWRlcihwcm92aWRlcjogKGFueSkgPT4gT2JzZXJ2YWJsZTxhbnlbXT4pIHtcbiAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgIHRoaXMubGlzdFByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5zZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtKHRoaXMuX29wdGlvbnMuc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5jcmVhdGVRdWVyeU9ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbGlzdChsaXN0OiBhbnlbXSkge1xuICAgIGlmIChsaXN0KSB7XG4gICAgICBpZiAobGlzdFswXSAmJiAhbGlzdFswXS5vcmlnaW5hbCkge1xuICAgICAgICB0aGlzLml0ZW1MaXN0ID0gdGhpcy5fb3B0aW9ucy5tYXBGdW5jdGlvbiA/XG4gICAgICAgICAgbGlzdC5tYXAodGhpcy5fb3B0aW9ucy5tYXBGdW5jdGlvbikgOlxuICAgICAgICAgIGxpc3QubWFwKGl0ZW0gPT4gbmV3IEF1dG9jb21wbGV0ZUl0ZW0oeyBpZDogaXRlbS5pZCwgdmFsdWU6IGl0ZW0udmFsdWUsIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkIH0pKTtcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gaXRlbS5vcmlnaW5hbCA9IGxpc3RbaW5kZXhdKTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuY29udHJvbCAmJiB0aGlzLl9vcHRpb25zLmNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1MaXN0LmZpbmQoX2l0ZW0gPT4gX2l0ZW0uaWQgPT09IHRoaXMuX29wdGlvbnMuY29udHJvbC52YWx1ZSk7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbShpdGVtLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLml0ZW1MaXN0ID0gbGlzdDtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMubWF4UmVzdWx0cykge1xuICAgICAgICAgIHRoaXMuaXRlbUxpc3QgPSB0aGlzLml0ZW1MaXN0LnNsaWNlKDAsIHRoaXMuX29wdGlvbnMubWF4UmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0odGhpcy5fb3B0aW9ucy5zZWxlY3RlZEVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5zZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmNvbXBsZXRlTGlzdCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlTGlzdCA9IHRoaXMuaXRlbUxpc3Q7XG4gICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy5pc1NlbGVjdCAmJiAhdGhpcy5saXN0UHJvdmlkZXIpIHtcbiAgICAgICAgICB0aGlzLml0ZW1MaXN0ID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXNldEZvY3VzKCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBAQXR0cmlidXRlKCdkaXNhYmxlZCcpIHB1YmxpYyBfZGlzYWJsZWQ6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmRpc2FibGVkID0gX2Rpc2FibGVkICE9PSBudWxsIHx8IChfZGlzYWJsZWQgJiYgX2Rpc2FibGVkLnRvVXBwZXJDYXNlKCkgPT09ICdESVNBQkxFRCcpO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pdGVtTGlzdCAmJiB0aGlzLml0ZW1MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29tcGxldGVMaXN0ID0gdGhpcy5pdGVtTGlzdC5tYXAoaXRlbSA9PiBpdGVtKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVF1ZXJ5T2JzZXJ2YWJsZSgpIHtcbiAgICB0aGlzLmlucHV0T2JzZXJ2ZXIgPSBudWxsO1xuICAgIC8vIENyZWF0ZSBhbiBvYnNlcnZhYmxlIHRvIHVzZSB0aGUgcHJvdmlkZXJcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB0aGlzLmlucHV0T2JzZXJ2ZXIgPSBvYnNlcnZlcilcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgICAgICBmaWx0ZXIoKF9xdWVyeTogc3RyaW5nKSA9PiBfcXVlcnkgJiYgX3F1ZXJ5Lmxlbmd0aCA+PSB0aGlzLl9vcHRpb25zLm1pbkNoYXJhY3RlcnMpLFxuICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNRdWVyeWluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgIH0pLFxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5fb3B0aW9ucy5kZWxheVRpbWUpLFxuICAgICAgICBzd2l0Y2hNYXAodGhpcy5saXN0UHJvdmlkZXIpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgICAgICBfbGlzdCA9PiB7XG4gICAgICAgICAgdGhpcy5saXN0ID0gX2xpc3Q7XG4gICAgICAgICAgdGhpcy5pc1F1ZXJ5aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5oYXNRdWVyaWVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBzZWxlY3RJdGVtKF9lbGVtZW50OiBudW1iZXIgfCBzdHJpbmcgfCBBdXRvY29tcGxldGVJdGVtLCBlbWl0RXZlbnQgPSB0cnVlKSB7XG4gICAgLy8gRmluZCB0aGUgZWxlbWVudCAod2hldGVyIGl0IGlzIGFuIGl0ZW0gb3IgYW4gaWQpXG4gICAgY29uc3QgZWxlbWVudCA9IF9lbGVtZW50IGluc3RhbmNlb2YgQXV0b2NvbXBsZXRlSXRlbSA/XG4gICAgICBfZWxlbWVudCA6XG4gICAgICB0aGlzLml0ZW1MaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IF9lbGVtZW50KVswXTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGFuIGVsZW1lbnQgYW5kIHRoZSBlbGVtZW50IGlzIG5vdCBkaXNhYmxlZCwgc2VsZWN0IGl0XG4gICAgaWYgKGVsZW1lbnQgJiYgIWVsZW1lbnQuZGlzYWJsZWQpIHtcbiAgICAgIC8vIFJlcGxhY2UgdGhlIGlucHV0IHRleHQgd2l0aGluIHRoZSBlbGVtZW50XG4gICAgICB0aGlzLmlucHV0VGV4dFZhbHVlID0gZWxlbWVudC5wcmV0dHlQcmludCA/IGVsZW1lbnQucHJldHR5UHJpbnQgOiBlbGVtZW50LnZhbHVlO1xuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjb250cm9sLCBzZXQgdGhlIHZhbHVlIHRvIGl0XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5jb250cm9sKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuY29udHJvbC5zZXRWYWx1ZShlbGVtZW50LmlkLCB7IGVtaXRFdmVudCB9KTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICB9XG4gICAgICAvLyBDbGVhciB0aGUgbGlzdCBpZiB0b2xkIHRvXG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGVhck9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGVsZW1lbnQ7XG4gICAgICAvLyBDbG9zZSB0aGUgZHJvcGRvd25cbiAgICAgIHRoaXMuaXNGb2N1c2VkSW5wdXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNGb2N1c2VkSXRlbSA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1F1ZXJ5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc1F1ZXJpZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5pbnB1dFdyYXBwZXIubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBpbnB1dFRleHRLZXlEb3duKGV2ZW50KSB7XG4gICAgLy8gUHJldmVudCB0aGUgY2FyZXQgZnJvbSBtb3ZpbmcgaW5zaWRlIHRoZSBpbnB1dCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBVcCBBcnJvd1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBpbnB1dFRleHRLZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAvLyBBcnJvdyBkb3duLCBtb3ZlIHRoZSBoaWdobGlnaHRlZCBlbGVtZW50XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtICsgMSA+PSB0aGlzLml0ZW1MaXN0Lmxlbmd0aCA/IDAgOiB0aGlzLmhpZ2hsaWdodGVkSXRlbSArIDE7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgLy8gQXJyb3cgdXAsIG1vdmUgdGhlIGhpZ2h0bGlnaHRlZCBlbGVtZW50XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IHRoaXMuaGlnaGxpZ2h0ZWRJdGVtIC0gMSA8IDAgPyB0aGlzLml0ZW1MaXN0Lmxlbmd0aCAtIDEgOiB0aGlzLmhpZ2hsaWdodGVkSXRlbSAtIDE7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgdGhpcy5pdGVtTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBFbnRlciwgc2VsZWN0IHRoZSBlbGVtZW50XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5pdGVtTGlzdFt0aGlzLmhpZ2hsaWdodGVkSXRlbV07XG4gICAgICB0aGlzLnNlbGVjdEl0ZW0oZWxlbWVudC5pZCk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaW5wdXRUZXh0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5fb3B0aW9ucy5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGxpc3QgcHJvdmlkZXIsIGZldGNoIHJlc3VsdHMgZnJvbSBpdFxuICAgIGlmICh0aGlzLmxpc3RQcm92aWRlcikge1xuICAgICAgdGhpcy5mZXRjaExpc3QodGhpcy5pbnB1dFRleHRWYWx1ZSk7XG4gICAgICAvLyBFbHNlLCBpZiB0aGUgZWxlbWVudCBpcyBub3QgYSBzZWxlY3QgaW5wdXQsIGZpbHRlciB0aGUgY29tcGxldGUgbGlzdCB0byBmZXRjaCB0aGUgcmVzdWx0c1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX29wdGlvbnMuaXNTZWxlY3QpIHtcbiAgICAgIHRoaXMuZmlsdGVybGlzdCh0aGlzLmlucHV0VGV4dFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaWx0ZXIgYSBjb21wbGV0ZSBsaXN0IGZvciByZXN1bHRzXG4gIGZpbHRlcmxpc3QocXVlcnkpIHtcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBxdWVyeSBvciB0aGUgcXVlcnkgaXMgZW1wdHksIHVzZSBhbiBlbXB0eSBsaXN0LCBlbHNlIGZpbHRlciB0aGUgY29tcGxldGUgbGlzdFxuICAgIHRoaXMubGlzdCA9IHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCA+PSB0aGlzLl9vcHRpb25zLm1pbkNoYXJhY3RlcnMgP1xuICAgICAgdGhpcy5jb21wbGV0ZUxpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcmV0dHlQcmludCkge1xuICAgICAgICAgIHJldHVybiBpdGVtLnByZXR0eVByaW50LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSkgOlxuICAgICAgW107XG4gICAgdGhpcy5oYXNRdWVyaWVkID0gcXVlcnkubGVuZ3RoID49IHRoaXMuX29wdGlvbnMubWluQ2hhcmFjdGVycztcbiAgICB0aGlzLnJlcXVpcmVzTWluQ2hhcmFjdGVycyA9IHF1ZXJ5Lmxlbmd0aCA8IHRoaXMuX29wdGlvbnMubWluQ2hhcmFjdGVycztcbiAgfVxuXG4gIC8vIFNlbmQgYSBuZXcgZXZlbnQgdG8gZmV0Y2ggZnJvbSB0aGUgbGlzdCBwcm92aWRlclxuICBmZXRjaExpc3QocXVlcnkpIHtcbiAgICB0aGlzLmlucHV0T2JzZXJ2ZXIubmV4dChxdWVyeSk7XG4gICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCA8IHRoaXMuX29wdGlvbnMubWluQ2hhcmFjdGVycykge1xuICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICB0aGlzLmlzUXVlcnlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzUXVlcmllZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvKioqKioqKioqKioqKioqKioqKkVWRU5UUyoqKioqKioqKioqKioqKioqKiovXG5cbiAgZWxlbWVudEZvY3VzKCkgeyB0aGlzLm9uRm9jdXMoKTsgfVxuXG4gIGVsZW1lbnRCbHVyKCkgeyB0aGlzLm9uQmx1cigpOyB9XG5cbiAgZHJvcGRvd25Nb3VzZUVudGVyKCkgeyB0aGlzLmlzRm9jdXNlZEl0ZW0gPSB0cnVlOyB9XG5cbiAgZHJvcGRvd25Nb3VzZUxlYXZlKCkgeyB0aGlzLmlzRm9jdXNlZEl0ZW0gPSBmYWxzZTsgfVxuXG4gIGl0ZW1DbGljayhpZCwgaW5kZXgpIHtcbiAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IGluZGV4O1xuICAgIHRoaXMuc2VsZWN0SXRlbShpZCk7XG4gIH1cblxuICBpdGVtSG92ZXIoaW5kZXgpIHsgdGhpcy5oaWdobGlnaHRlZEl0ZW0gPSBpbmRleDsgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLl9vcHRpb25zLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuXG4gICAgLy8gSWYgdGhlIGlucHV0IGhhcyBiZWVuIGJsdXJyZWQsIHByZXR0eSBwcmludCB0aGUgZWxlbWVudCAoaWYgdGhlcmUgaXMgb25lKVxuICAgIHRoaXMuaXNGb2N1c2VkSW5wdXQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLnNlbGVjdGVkSXRlbS5wcmV0dHlQcmludCA/IHRoaXMuc2VsZWN0ZWRJdGVtLnByZXR0eVByaW50IDogdGhpcy5zZWxlY3RlZEl0ZW0udmFsdWU7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIHRoaXMuaW5wdXRXcmFwcGVyLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuY29udHJvbCkge1xuICAgICAgdGhpcy5fb3B0aW9ucy5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuX29wdGlvbnMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcblxuICAgIC8vIElmIHRoZSBpbnB1dCBpcyBmb2N1c2VkLCByZW1vdmUgdGhlIHByZXR0eSBwcmludFxuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAmJiB0aGlzLnNlbGVjdGVkSXRlbS5wcmV0dHlQcmludCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmlzRm9jdXNlZElucHV0ID0gdHJ1ZTtcbiAgICAvLyBTZWxlY3QgdGhlIGZpcnN0IGVsZW1lbnRcbiAgICB0aGlzLnJlc2V0Rm9jdXMoKTtcbiAgfVxuXG4gIHJlc2V0Rm9jdXMoKSB7XG4gICAgLy8gUmVzZXQgdGhlIHNlbGVjdGVkIGVsZW1lbnQsIHVzZSB0aGUgZmlyc3Qgb25lIGlmIGl0IGlzIG5vdCBhIHNlbGVjdCBjb21wb25lbnRcbiAgICBpZiAodGhpcy5pdGVtTGlzdCAmJiB0aGlzLml0ZW1MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5fb3B0aW9ucy5pc1NlbGVjdCAmJiB0aGlzLnNlbGVjdGVkSXRlbSA/XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5pdGVtTGlzdC5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKSA6XG4gICAgICAgIDA7XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlckJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMuaXNTZWxlY3QpIHtcbiAgICAgIHRoaXMub25CbHVyKCk7XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlckZvY3VzKCkge1xuICAgIGlmICghdGhpcy5fb3B0aW9ucy5pc1NlbGVjdCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpb3MtYmx1ci1maXhcIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cImlzT3BlblwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cImF1dG9jb21wbGV0ZS1jb250YWluZXJcIiBbY2xhc3MucXVlcnlpbmddPVwiaXNRdWVyeWluZ1wiIFtjbGFzcy5mb2N1c2VkXT1cImlzRm9jdXNlZElucHV0IHx8IGlzRm9jdXNlZEl0ZW1cIiBbY2xhc3Mub3Blbl09XCJpc09wZW5cIj5cbiAgPGRpdiAjaW5wdXRXcmFwcGVyIGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiIFtjbGFzcy5mb3JtLWdyb3VwXT1cImJvb3RzdHJhcFwiIChibHVyKT1cIndyYXBwZXJCbHVyKClcIiAoaW5wdXQpPVwiaW5wdXRDaGFuZ2UoJGV2ZW50KVwiIChmb2N1cyk9XCJ3cmFwcGVyRm9jdXMoKVwiIChrZXl1cCk9XCJpbnB1dFRleHRLZXlVcCgkZXZlbnQpXCIgW3RhYmluZGV4XT1cIl9vcHRpb25zLmlzU2VsZWN0ID8gMCA6IC0xXCI+XG4gICAgPGlucHV0ICNpbnB1dEVsZW1lbnQgW2NsYXNzLmZvcm0tY29udHJvbF09XCJib290c3RyYXBcIiBbcGxhY2Vob2xkZXJdPVwiaW5wdXRQbGFjZWhvbGRlclwiIHR5cGU9XCJ0ZXh0XCIgKGZvY3VzKT1cImVsZW1lbnRGb2N1cygpXCIgIChibHVyKT1cImVsZW1lbnRCbHVyKClcIiAoa2V5ZG93bik9XCJpbnB1dFRleHRLZXlEb3duKCRldmVudClcIiBbdmFsdWVdPVwiaW5wdXRUZXh0VmFsdWVcIiBbdGFiaW5kZXhdPVwiIV9vcHRpb25zLmlzU2VsZWN0ID8gMCA6IC0xXCIgaWQ9XCJ7e2lkfX1cIiBhdXRvY29tcGxldGU9XCJvZmZcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIi8+XG4gICAgPGxhYmVsICpuZ0lmPVwiIWJvb3RzdHJhcFwiIGZvcj1cInt7aWR9fVwiIGNsYXNzPVwicGxhY2Vob2xkZXJcIj57eyBfb3B0aW9ucy5wbGFjZWhvbGRlciB9fTwvbGFiZWw+XG4gICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1jYXJldFwiIFtjbGFzcy5pcy1hcnJvd109XCJfb3B0aW9ucy5pc1NlbGVjdFwiPjwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3R0b20tYm9yZGVyXCI+PC9kaXY+XG4gIDx1bCBjbGFzcz1cImF1dG9jb21wbGV0ZS1kcm9wZG93biBsaXN0LWdyb3VwXCIgKG1vdXNlZW50ZXIpPVwiZHJvcGRvd25Nb3VzZUVudGVyKClcIiAobW91c2VsZWF2ZSk9XCJkcm9wZG93bk1vdXNlTGVhdmUoKVwiIFtjbGFzcy5kLW5vbmVdPVwiIWlzT3BlblwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtTGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1MaXN0Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtYmxvY2sgcmVzdWx0XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbUxpc3Q7IGxldCBpID0gaW5kZXhcIiBbY2xhc3MuZGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiIFtjbGFzcy5uZXh0XT1cImkgPT09IGhpZ2hsaWdodGVkSXRlbSArIDFcIiBbY2xhc3MuYWN0aXZlXT1cImkgPT09IGhpZ2hsaWdodGVkSXRlbVwiIChtb3VzZWVudGVyKT1cIml0ZW1Ib3ZlcihpKVwiIChjbGljayk9XCJpdGVtQ2xpY2soaXRlbS5pZCwgaSlcIiBbdGFiaW5kZXhdPVwiaXNPcGVuID8gMCA6IC0xXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWNhcGl0YWxpemVcIj57eyBpdGVtLnByZXR0eVByaW50ID8gaXRlbS5wcmV0dHlQcmludCA6IGl0ZW0udmFsdWUgfX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWJsb2NrIHF1ZXJ5aW5nXCIgKm5nSWY9XCJpc1F1ZXJ5aW5nXCI+XG4gICAgICAgIDxzcGFuPkJ1c2NhbmRvLi4uPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWJsb2NrIHF1ZXJ5aW5nXCIgKm5nSWY9XCJyZXF1aXJlc01pbkNoYXJhY3RlcnNcIj5cbiAgICAgICAgPHNwYW4+RGlnaXRhIHBvciBsbyBtZW5vcyB7eyBfb3B0aW9ucy5taW5DaGFyYWN0ZXJzIH19IGNhcmFjdGVyZXM8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtYmxvY2sgbm8tcmVzdWx0c1wiICpuZ0lmPVwibm9SZXN1bHRzXCI+XG4gICAgICAgIDxzcGFuPk5vIHNlIGVuY29udHJhcm9uIHJlc3VsdGFkb3M8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3VsPlxuPC9kaXY+XG5cbiJdfQ==