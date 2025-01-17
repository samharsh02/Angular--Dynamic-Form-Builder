import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Field {
  name: string;
  type: string;
  required: boolean;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private fieldsSubject = new BehaviorSubject<Field[]>([]);
  fields$ = this.fieldsSubject.asObservable();

  addField(field: Field) {
    const currentFields = this.fieldsSubject.value;
    this.fieldsSubject.next([...currentFields, field]);
  }
}
