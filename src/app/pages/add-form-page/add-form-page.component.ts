import { Component, OnInit } from '@angular/core';

import {
  IFieldForm,
  ITypesComponents,
  ITypesInputComponents,
} from '../../../types';
import { FormServiceService } from '../../service/form-service.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form-page',
  templateUrl: './add-form-page.component.html',
  styleUrl: './add-form-page.component.scss',
})
export class AddFormPageComponent {
  public arrTypesComponent: Array<ITypesComponents> = [
    {
      value: 'input',
      name: 'Поле ввода',
    },
    {
      value: 'select',
      name: 'Селект',
    },
    {
      value: 'checkbox',
      name: 'Чекбокс',
    },
    {
      value: 'number',
      name: 'Число',
    },
  ];

  public arrTypesInputComponent: Array<ITypesInputComponents> = [
    {
      value: 'common input',
      name: 'Поле ввода',
    },
    {
      value: 'multi input',
      name: 'Поле воода с возможностью добавлять доп. поля ввода',
    },
  ];

  public fieldForm = new FormGroup({
    type: new FormControl(null, [Validators.required]),
    required: new FormControl(null),
    label: new FormControl(null, [Validators.required]),
    optionType: new FormControl(null),
    varietyComponent: new FormControl(null),
  });
  public submitted: boolean = false;

  constructor(private serviceForm: FormServiceService) {}

  public createObjFromSubmit(typeField: string): IFieldForm | null {
    if (typeField === 'input' || typeField === 'number') {
      return {
        type: this.fieldForm.value.type ? this.fieldForm.value.type : '',
        required: this.fieldForm.value.required
          ? this.fieldForm.value.required
          : false,
        label: this.fieldForm.value.label ? this.fieldForm.value.label : '',
        varietyComponent: this.fieldForm.value.varietyComponent
          ? this.fieldForm.value.varietyComponent
          : '',
        id: String(new Date().getTime()),
      };
    } else if (typeField === 'select' || typeField === 'checkbox') {
      const stringToArr = (string: string) => {
        return string.split(', ').map((str) => str.trim());
      };

      return {
        type: this.fieldForm.value.type ? this.fieldForm.value.type : '',
        required: this.fieldForm.value.required
          ? this.fieldForm.value.required
          : false,
        label: this.fieldForm.value.label ? this.fieldForm.value.label : '',
        optionType: this.fieldForm.value.optionType
          ? stringToArr(this.fieldForm.value.optionType)
          : [],
        id: String(new Date().getTime()),
      };
    } else {
      return null;
    }
  }

  public submit() {
    if (this.fieldForm.invalid) {
      return;
    }

    const field = this.fieldForm.value.type
      ? this.createObjFromSubmit(this.fieldForm.value.type)
      : null;

    if (field) {
      this.serviceForm.createForm(field).subscribe({
        next: (response) => {
          this.fieldForm.reset();
          this.submitted = true;
          console.log('Данные успешно отправлены:', response);
        },
        error: (err) => {
          console.error('Ошибка при отправке данных:', err);
        },
      });
    }
  }
}
