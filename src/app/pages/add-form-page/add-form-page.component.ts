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



  public typeComponent: string = this.arrTypesComponent[0].value;
  public labelInputTypeComponent: string = '';
  public typeInputComponent: string = this.arrTypesInputComponent[0].value;
  public typeRequareComponent: boolean = false;

  public fieldForm?: IFieldForm;

constructor(
  private serviceForm: FormServiceService
) {}

  public addFieldForm () {
    const field = {
      type: this.typeComponent,
      required: this.typeRequareComponent,
      label: this.labelInputTypeComponent,
      typeComponent: this.typeInputComponent,
      key: String(new Date())
    };
    this.fieldForm = {
      ...field
    };
    console.log(this.fieldForm)
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
