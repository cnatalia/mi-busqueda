export declare class AutocompleteItem {
    id?: string | number;
    value?: string;
    prettyPrint?: string;
    original?: any;
    disabled: boolean;
    constructor(item?: {
        id?: string | number;
        value?: string;
        prettyPrint?: string;
        disabled?: boolean;
        original?: any;
    });
    _assign(_item: AutocompleteItem): void;
}
