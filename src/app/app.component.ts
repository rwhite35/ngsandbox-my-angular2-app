import { Component } from '@angular/core';
import { ModelFormComponent } from './shared/ModelFormComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sandbox Apps';

  public goodFormCreate: Object;

  constructor(private modelFormComponent: ModelFormComponent) {
      this.goodFormCreate = modelFormComponent.goodForm; // the formGroup to create
  }
}
