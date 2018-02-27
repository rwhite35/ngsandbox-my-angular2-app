/**
 * Provider to form component (create-step1 or create-step2). the form group consumes
 * the metadata from the model and allows us to specify default values and validation rules.
 *
 * @return {object} FormGroup, the formGroup being processed for the calling component.
 */
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormFieldsBase } from '../../form-fields-base';

@Injectable()
export class FormFieldsControlService {
    constructor() { }

    toFormGroup(fields: FormFieldsBase<any>[] ) {

        const group: any = {};

        fields.forEach(field => {
            group[field.key] = field.required
                ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}
