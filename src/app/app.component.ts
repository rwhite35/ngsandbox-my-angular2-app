/**
 * Gets this forms fields object which is configured in FormFieldService.getFields().
 * Each form can configure its own fields and validation in one place.
 */
import { Component } from '@angular/core';
import { FormFieldsService } from './shared/services/form-fields.service';

@Component({
  selector: 'app-root',
  template: `<div>
      <h2>Angular Sanbox Application</h2>
      <app-create-step1 [fields]="fields"></app-create-step1>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  providers: [ FormFieldsService ]
})
export class AppComponent {
  fields: any[];

  constructor(service: FormFieldsService) {
        this.fields = service.getFields();
  }
}
