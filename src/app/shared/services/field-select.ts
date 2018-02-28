/**
 * Prototype for select menus
 */
import { FormFieldsBase } from '../../form-fields-base';

export class FieldSelect extends FormFieldsBase<string> {

    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
