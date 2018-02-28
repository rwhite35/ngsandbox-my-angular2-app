/**
 * Service provider to app.components for transforming the form fields to a FormGroup.
 * The formGroup consumes the metadata from the form-fields-base.
 * @used create-step1.component,
 * @return {object} fields, each form input control for this form instance.
 */
import {Injectable} from '@angular/core';

import { FormFieldsBase} from '../../form-fields-base'; // model
import { FieldSelect } from './field-select';           // prototype
import { FieldTextbox } from './field-textbox';         // prototype


@Injectable()
export class FormFieldsService {

    getFields() {

        const fields: FormFieldsBase<any>[] = [

            new FieldSelect({
                key: 'levels',
                label: 'Select A Level',
                options: [
                    {key: '1', value: 1},
                    {key: '2', value: 2},
                    {key: '3', value: 4},
                    {key: '4', value: 5},
                    {key: 'unproven', value: 'Unproven'}
                ],
                order: 2
            }),

            new FieldTextbox({
                key: 'title',
                label: 'Rubric Title',
                value: '',
                required: true,
                minlength: 23,
                order: 1
            }),

            new FieldTextbox({
                key: 'score',
                label: 'Scores',
                value: '',
                required: true,
                minlength: 4,
                order: 3
            })

        ];
        console.log('fields object ' + JSON.stringify(fields));

        return fields.sort((a, b) => a.order - b.order);
    }
}
