import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataService, Field } from '../../form-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit{
  formContent: string = '';
  fields: Field[] = [];
  constructor(private formDataService:FormDataService){}  // object banao to use the service

  ngOnInit() {
    this.formDataService.fields$.subscribe((fields) => {
      this.fields = fields;
    });
  }

  generateFormHtml() {
    console.log("Hello World")
    let formHtml = '<form>';
    this.fields.forEach(field => {
      switch (field.type) {
        case 'text':
        case 'email':
        case 'number':
          formHtml += `<label for="${field.name}">${field.label}</label>
                       <input type="${field.type}" name="${field.name}" required="${field.required}" />`;
          break;
        case 'radio':
          formHtml += `<label for="${field.name}">${field.label}</label>
                       <input type="radio" name="${field.name}" required="${field.required}" />`;
          break;
        case 'checkbox':
          formHtml += `<label for="${field.name}">${field.label}</label>
                       <input type="checkbox" name="${field.name}" required="${field.required}" />`;
          break;
        case 'dropdown':
          formHtml += `<label for="${field.name}">${field.label}</label>
                       <select name="${field.name}">
                         <option value="option1">Option 1</option>
                         <option value="option2">Option 2</option>
                       </select>`;
          break;
        case 'file':
          formHtml += `<label for="${field.name}">${field.label}</label>
                       <input type="file" name="${field.name}" />`;
          break;
      }
    });
    formHtml += '</form>';
    console.log("FOrmHmtl:", formHtml);
    this.formContent = formHtml;
  }

}
