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
    required: new FormControl(null, [Validators.required]),
    label: new FormControl(null, [Validators.required]),
    varietyComponent:new FormControl(null, [Validators.required]),
  });
  public submitted: boolean = false;

  constructor(private serviceForm: FormServiceService) {}

  public submit() {
    if (this.fieldForm.invalid) {
      return
    }

    this.submitted = true

    const field = {
      type: this.fieldForm.value.type ? this.fieldForm.value.type : '',
      required: this.fieldForm.value.required ? this.fieldForm.value.required : false,
      label: this.fieldForm.value.label ? this.fieldForm.value.label : '',
      varietyComponent: this.fieldForm.value.varietyComponent ? this.fieldForm.value.varietyComponent : '',
      id: String(new Date().getTime())
    };

    this.serviceForm.createForm(field).subscribe({
      next: (response) => {
        this.fieldForm.reset();
        this.submitted = false;
        console.log('Данные успешно отправлены:', response);
      },
      error: (err) => {
        console.error('Ошибка при отправке данных:', err);
      }
      
      
    })
  }

}
