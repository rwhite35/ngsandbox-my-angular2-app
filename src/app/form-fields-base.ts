/**
 * Object model defines all input attributes for all form input controls
 * The input field is the basic input control.
 *
 * Service classes (field-textbox, field-select) use this model to define a fields attributes.
 * Properties can be added/subtracted as each form requires. This allows the form to dynamically
 * render its fields and validation rules.
 *
 * @see https://angular.io/guide/dynamic-form
 */

export class FormFieldsBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    minlength: number;
    maxlength: number;
    controlType: string;
    order: number;
    // added later
    placeholder: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        minlength?: number,
        maxlength?: number,
        controlType?: string,
        order?: number,
        placeholder?: string,
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        // this.minlength = options.minlength === undefined ? 3 : options.required;
        this.maxlength = options.maxlength === undefined ? 23 : options.maxlength;
        this.controlType = options.controlType || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.placeholder = options.placeholder !== undefined ? options.placeholder : '';
    }
}

