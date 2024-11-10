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
  ]


  public typeComponent: string = this.arrTypesComponent[0].value;
  public labelInputTypeComponent: string = '';
  public typeInputComponent: string = this.arrTypesInputComponent[0].value;

  public arrayFieldsForm: Array<IFieldForm> = [];

constructor(
  private serviceForm: FormServiceService
) {}

  public addFieldForm () {
    const field = {
      type: this.typeComponent,
      label: this.labelInputTypeComponent,
      typeComponent: this.typeInputComponent,
      key: String(new Date())
    };
    this.arrayFieldsForm.push(field);
    console.log(this.arrayFieldsForm)
  }

  public submit () {
    this.serviceForm.createForm(this.arrayFieldsForm);
    console.log('submit is done', this.arrayFieldsForm);
  }
}
