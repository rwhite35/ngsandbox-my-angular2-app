/**
 * Prototype for input fields, can be text, email, url etc.
 */
import {FormFieldsBase} from '../../form-fields-base';

export class FieldTextbox extends FormFieldsBase<string> {

    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
