/**
 * Responsible for rendering the details of each individual field based on values
 * in the data-bound field object. Used by ngFor to define the field.
 *
 * Checks if field is valid.
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFieldsBase } from '../form-fields-base';

@Component({
    selector: 'app-field',
    templateUrl: './create-step1-field.component.html'
})
export class CreateStep1FieldComponent {
    @Input() field: FormFieldsBase<any>;
    @Input() form: FormGroup;

    get isValid() { return this.form.controls[this.field.key].valid; }
}
