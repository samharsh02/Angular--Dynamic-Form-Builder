import { Component} from '@angular/core';
import { FormDataService,Field } from '../../form-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {
  fieldName: string = '';
  fieldType: string = 'text';
  fieldRequired: string = 'false';
  fieldLabel: string = '';

  fields : Field[] = []

  constructor(private formDataService: FormDataService) {}

  addField(){
    console.log("Are we here?")
    const newField: Field = {
      name: this.fieldName,
      type: this.fieldType,
      required: this.fieldRequired === 'true',
      label: this.fieldLabel,
    };
    this.fields.push(newField);
    this.formDataService.addField(newField);
    this.fieldName = '';
    this.fieldType = 'text';
    this.fieldRequired = 'false';
    this.fieldLabel = '';
  }
}
