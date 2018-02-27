/**
 * Creates the main form container but gets the fields from the form-fields-service
 * This is the envelop for Create Step 1 form.
 */
import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormFieldsControlService } from '../shared/services/form-fields-control.service';
import { FormFieldsBase } from '../form-fields-base';


@Component({
    selector: 'app-create-step1',
    templateUrl: './create-step1.component.html',
    providers: [FormFieldsControlService]
})
export class CreateStep1Component implements OnInit {

    @Input() fields: FormFieldsBase<any>[] = [];    // all fields
    form: FormGroup;
    payload = '';

    constructor(private fieldcontrolserv: FormFieldsControlService) {}

    ngOnInit() {
        this.form = this.fieldcontrolserv.toFormGroup(this.fields);
    }

    onSubmit() {
        this.payload = JSON.stringify(this.form.value);
    }

}
