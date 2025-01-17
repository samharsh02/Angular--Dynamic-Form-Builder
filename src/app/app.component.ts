import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './MyComponents/dynamic-form/dynamic-form.component'
import { FormBuilderComponent } from './MyComponents/form-builder/form-builder.component';
@Component({
  selector: 'app-root',
  imports: [FormBuilderComponent,DynamicFormComponent],
  // template: `<router-outlet />`
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-builder';
}
