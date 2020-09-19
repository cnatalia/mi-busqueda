(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('lib-utilidades', ['exports', '@angular/core', 'rxjs/operators', 'rxjs'], factory) :
    (global = global || self, factory(global['lib-utilidades'] = {}, global.ng.core, global.rxjs.operators, global.rxjs));
}(this, (function (exports, core, operators, rxjs) { 'use strict';

    var LibUtilidadesService = /** @class */ (function () {
        function LibUtilidadesService() {
        }
        LibUtilidadesService.ɵfac = function LibUtilidadesService_Factory(t) { return new (t || LibUtilidadesService)(); };
        LibUtilidadesService.ɵprov = core.ɵɵdefineInjectable({ token: LibUtilidadesService, factory: LibUtilidadesService.ɵfac, providedIn: 'root' });
        return LibUtilidadesService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LibUtilidadesService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var LibUtilidadesComponent = /** @class */ (function () {
        function LibUtilidadesComponent() {
        }
        LibUtilidadesComponent.prototype.ngOnInit = function () {
        };
        LibUtilidadesComponent.ɵfac = function LibUtilidadesComponent_Factory(t) { return new (t || LibUtilidadesComponent)(); };
        LibUtilidadesComponent.ɵcmp = core.ɵɵdefineComponent({ type: LibUtilidadesComponent, selectors: [["lib-lib-utilidades"]], decls: 2, vars: 0, template: function LibUtilidadesComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " lib-utilidades works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return LibUtilidadesComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LibUtilidadesComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-lib-utilidades',
                    template: "\n    <p>\n      lib-utilidades works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var AutocompleteItem = /** @class */ (function () {
        function AutocompleteItem(item) {
            this.disabled = false;
            this.id = item && item.id ? item.id : null;
            this.value = item && item.value ? item.value : null;
            this.prettyPrint = item && item.prettyPrint ? item.prettyPrint : null;
            this.original = item && item.original ? item.original : null;
            this.disabled = item && item.disabled === true;
        }
        // tslint:disable-next-line:variable-name
        AutocompleteItem.prototype._assign = function (_item) {
            this.id = _item.id;
            this.value = _item.value;
            this.prettyPrint = _item.prettyPrint;
            this.disabled = _item.disabled === true;
            this.original = _item.original;
        };
        return AutocompleteItem;
    }());

    var AutocompleteOptions = /** @class */ (function () {
        function AutocompleteOptions(options) {
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
        AutocompleteOptions.prototype._assign = function (_options) {
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
        };
        return AutocompleteOptions;
    }());

    var _c0 = ["inputElement"];
    var _c1 = ["inputWrapper"];
    function AutoCompleteComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 11);
    } }
    function AutoCompleteComponent_label_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "label", 12);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵpropertyInterpolate("for", ctx_r3.id);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r3._options.placeholder);
    } }
    function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r13 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 16);
        core.ɵɵlistener("mouseenter", function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template_li_mouseenter_0_listener() { core.ɵɵrestoreView(_r13); var i_r11 = ctx.index; var ctx_r12 = core.ɵɵnextContext(3); return ctx_r12.itemHover(i_r11); })("click", function AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template_li_click_0_listener() { core.ɵɵrestoreView(_r13); var item_r10 = ctx.$implicit; var i_r11 = ctx.index; var ctx_r14 = core.ɵɵnextContext(3); return ctx_r14.itemClick(item_r10.id, i_r11); });
        core.ɵɵelementStart(1, "span", 17);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r10 = ctx.$implicit;
        var i_r11 = ctx.index;
        var ctx_r9 = core.ɵɵnextContext(3);
        core.ɵɵclassProp("disabled", item_r10.disabled)("next", i_r11 === ctx_r9.highlightedItem + 1)("active", i_r11 === ctx_r9.highlightedItem);
        core.ɵɵproperty("tabindex", ctx_r9.isOpen ? 0 : 0 - 1);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(item_r10.prettyPrint ? item_r10.prettyPrint : item_r10.value);
    } }
    function AutoCompleteComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, AutoCompleteComponent_ng_container_10_ng_container_1_li_1_Template, 3, 8, "li", 15);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r5 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r5.itemList);
    } }
    function AutoCompleteComponent_ng_container_10_li_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 18);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2, "Buscando...");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function AutoCompleteComponent_ng_container_10_li_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 18);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r7 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("Digita por lo menos ", ctx_r7._options.minCharacters, " caracteres");
    } }
    function AutoCompleteComponent_ng_container_10_li_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 19);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2, "No se encontraron resultados");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function AutoCompleteComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, AutoCompleteComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 10);
        core.ɵɵtemplate(2, AutoCompleteComponent_ng_container_10_li_2_Template, 3, 0, "li", 13);
        core.ɵɵtemplate(3, AutoCompleteComponent_ng_container_10_li_3_Template, 3, 1, "li", 13);
        core.ɵɵtemplate(4, AutoCompleteComponent_ng_container_10_li_4_Template, 3, 0, "li", 14);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r4.itemList.length > 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r4.isQuerying);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r4.requiresMinCharacters);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r4.noResults);
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
            rxjs.Observable.create(function (observer) { return _this.inputObserver = observer; })
                .pipe(operators.distinctUntilChanged(), 
            // tslint:disable-next-line:variable-name
            operators.filter(function (_query) { return _query && _query.length >= _this._options.minCharacters; }), operators.tap(function () {
                _this.isQuerying = true;
                _this.list = [];
            }), operators.debounceTime(this._options.delayTime), operators.switchMap(this.listProvider))
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
        AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) { return new (t || AutoCompleteComponent)(core.ɵɵinjectAttribute('disabled')); };
        AutoCompleteComponent.ɵcmp = core.ɵɵdefineComponent({ type: AutoCompleteComponent, selectors: [["lib-auto-complete"]], viewQuery: function AutoCompleteComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
                core.ɵɵviewQuery(_c1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.inputWrapper = _t.first);
            } }, inputs: { id: "id", bootstrap: "bootstrap", options: "options", provider: "provider", list: "list" }, decls: 11, vars: 23, consts: [["class", "ios-blur-fix", "tabindex", "0", 4, "ngIf"], [1, "autocomplete-container"], [1, "input-wrapper", 3, "tabindex", "blur", "input", "focus", "keyup"], ["inputWrapper", ""], ["type", "text", "autocomplete", "off", 3, "placeholder", "value", "tabindex", "id", "disabled", "focus", "blur", "keydown"], ["inputElement", ""], ["class", "placeholder", 3, "for", 4, "ngIf"], [1, "dropdown-caret"], [1, "input-bottom-border"], [1, "autocomplete-dropdown", "list-group", 3, "mouseenter", "mouseleave"], [4, "ngIf"], ["tabindex", "0", 1, "ios-blur-fix"], [1, "placeholder", 3, "for"], ["class", "list-group-item d-block querying", 4, "ngIf"], ["class", "list-group-item d-block no-results", 4, "ngIf"], ["class", "list-group-item d-block result", 3, "disabled", "next", "active", "tabindex", "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-block", "result", 3, "tabindex", "mouseenter", "click"], [1, "text-capitalize"], [1, "list-group-item", "d-block", "querying"], [1, "list-group-item", "d-block", "no-results"]], template: function AutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, AutoCompleteComponent_div_0_Template, 1, 0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "div", 2, 3);
                core.ɵɵlistener("blur", function AutoCompleteComponent_Template_div_blur_2_listener() { return ctx.wrapperBlur(); })("input", function AutoCompleteComponent_Template_div_input_2_listener($event) { return ctx.inputChange($event); })("focus", function AutoCompleteComponent_Template_div_focus_2_listener() { return ctx.wrapperFocus(); })("keyup", function AutoCompleteComponent_Template_div_keyup_2_listener($event) { return ctx.inputTextKeyUp($event); });
                core.ɵɵelementStart(4, "input", 4, 5);
                core.ɵɵlistener("focus", function AutoCompleteComponent_Template_input_focus_4_listener() { return ctx.elementFocus(); })("blur", function AutoCompleteComponent_Template_input_blur_4_listener() { return ctx.elementBlur(); })("keydown", function AutoCompleteComponent_Template_input_keydown_4_listener($event) { return ctx.inputTextKeyDown($event); });
                core.ɵɵelementEnd();
                core.ɵɵtemplate(6, AutoCompleteComponent_label_6_Template, 2, 2, "label", 6);
                core.ɵɵelement(7, "span", 7);
                core.ɵɵelementEnd();
                core.ɵɵelement(8, "div", 8);
                core.ɵɵelementStart(9, "ul", 9);
                core.ɵɵlistener("mouseenter", function AutoCompleteComponent_Template_ul_mouseenter_9_listener() { return ctx.dropdownMouseEnter(); })("mouseleave", function AutoCompleteComponent_Template_ul_mouseleave_9_listener() { return ctx.dropdownMouseLeave(); });
                core.ɵɵtemplate(10, AutoCompleteComponent_ng_container_10_Template, 5, 4, "ng-container", 10);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.isOpen);
                core.ɵɵadvance(1);
                core.ɵɵclassProp("querying", ctx.isQuerying)("focused", ctx.isFocusedInput || ctx.isFocusedItem)("open", ctx.isOpen);
                core.ɵɵadvance(1);
                core.ɵɵclassProp("form-group", ctx.bootstrap);
                core.ɵɵproperty("tabindex", ctx._options.isSelect ? 0 : 0 - 1);
                core.ɵɵadvance(2);
                core.ɵɵclassProp("form-control", ctx.bootstrap);
                core.ɵɵpropertyInterpolate("id", ctx.id);
                core.ɵɵproperty("placeholder", ctx.inputPlaceholder)("value", ctx.inputTextValue)("tabindex", !ctx._options.isSelect ? 0 : 0 - 1)("disabled", ctx.disabled);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.bootstrap);
                core.ɵɵadvance(1);
                core.ɵɵclassProp("is-arrow", ctx._options.isSelect);
                core.ɵɵadvance(2);
                core.ɵɵclassProp("d-none", !ctx.isOpen);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.itemList);
            } }, styles: [""] });
        return AutoCompleteComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AutoCompleteComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-auto-complete',
                    templateUrl: './auto-complete.component.html',
                    styleUrls: ['./auto-complete.component.css']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Attribute,
                    args: ['disabled']
                }] }]; }, { inputElement: [{
                type: core.ViewChild,
                args: ['inputElement']
            }], inputWrapper: [{
                type: core.ViewChild,
                args: ['inputWrapper']
            }], id: [{
                type: core.Input
            }], bootstrap: [{
                type: core.Input
            }], options: [{
                type: core.Input
            }], provider: [{
                type: core.Input
            }], list: [{
                type: core.Input
            }] }); })();

    var LibUtilidadesModule = /** @class */ (function () {
        function LibUtilidadesModule() {
        }
        LibUtilidadesModule.ɵmod = core.ɵɵdefineNgModule({ type: LibUtilidadesModule });
        LibUtilidadesModule.ɵinj = core.ɵɵdefineInjector({ factory: function LibUtilidadesModule_Factory(t) { return new (t || LibUtilidadesModule)(); }, imports: [[]] });
        return LibUtilidadesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(LibUtilidadesModule, { declarations: [LibUtilidadesComponent, AutoCompleteComponent], exports: [LibUtilidadesComponent, AutoCompleteComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LibUtilidadesModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [LibUtilidadesComponent, AutoCompleteComponent],
                    imports: [],
                    exports: [LibUtilidadesComponent, AutoCompleteComponent]
                }]
        }], null, null); })();

    exports.AutoCompleteComponent = AutoCompleteComponent;
    exports.AutocompleteItem = AutocompleteItem;
    exports.AutocompleteOptions = AutocompleteOptions;
    exports.LibUtilidadesComponent = LibUtilidadesComponent;
    exports.LibUtilidadesModule = LibUtilidadesModule;
    exports.LibUtilidadesService = LibUtilidadesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib-utilidades.umd.js.map
