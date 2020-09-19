import { AbstractControl } from '@angular/forms';
import { AutocompleteItem } from './auto-complete-item';
export declare class AutocompleteOptions {
    clearOnSelect: boolean;
    delayTime: number;
    minCharacters: number;
    selectedElement: AutocompleteItem | string | number;
    control: AbstractControl;
    mapFunction: (any: any) => AutocompleteItem;
    placeholder: string;
    isSelect: boolean;
    maxResults: any;
    constructor(options: {
        clearOnSelect?: boolean;
        delayTime?: number;
        minCharacters?: number;
        selectedElement?: AutocompleteItem | string | number;
        control?: AbstractControl;
        mapFunction?: (any: any) => AutocompleteItem;
        placeholder?: string;
        isSelect?: boolean;
        maxResults?: number;
    });
    _assign(_options: AutocompleteOptions): void;
}
