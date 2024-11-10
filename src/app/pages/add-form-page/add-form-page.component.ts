import { Component } from '@angular/core';

import { IFieldForm, ITypesComponents, ITypesInputComponents } from '../../../types';
import { FormServiceService } from '../../service/form-service.service';

@Component({
  selector: 'app-add-form-page',
  templateUrl: './add-form-page.component.html',
  styleUrl: './add-form-page.component.scss'
})
export class AddFormPageComponent {
  public arrTypesComponent: Array<ITypesComponents> = [
    {
      value: 'input',
      name: 'Поле ввода'
    },
    {
      value: 'select',
      name: 'Селект'
    },
    {
      value: 'checkbox',
      name: 'Чекбокс'
    },
    {
      value: 'number',
      name: 'Число'
    }
  ];
  
  public arrTypesInputComponent: Array<ITypesInputComponents> = [
    {
      value: 'common input',
      name: 'Поле ввода'
    },
    {
      value: 'multi input',
      name: 'Поле воода с возможностью добавлять доп. поля ввода'
    }
  ];

  public fieldForm?: IFieldForm;
  public arrayFiledsForm: Array<IFieldForm> = [];

constructor(
  private serviceForm: FormServiceService
) {}

  public addFieldForm (key: string) {
    const field = this.arrayFiledsForm.find((item) => {
      item.key === key
    });
    if (field) {
      this.arrayFiledsForm.push(field)
    }
    console.log(this.arrayFiledsForm)
  }

  public removeFieldForm (key: string) {
    
    if (this.arrayFiledsForm) {
      const newArr = this.arrayFiledsForm.filter(item => item.key !== key);
      this.arrayFiledsForm = newArr;
    }
    
    return this.arrayFiledsForm;
  }

  public createField () {
    this.arrayFiledsForm.push({
      type: this.arrTypesComponent[0].value,
      required: false,
      label: '',
      typeComponent: '',
      key: String(new Date().getTime())
    })
  }

  public submit () {
    if (this.fieldForm) {
      console.log(this.fieldForm)
      this.serviceForm.createForm(this.fieldForm).subscribe({
        next: (response) => {
          console.log('Данные успешно отправлены:', response);
        },
        error: (err) => {
          console.error('Ошибка при отправке данных:', err);
        }
      });
    }
  }
}
