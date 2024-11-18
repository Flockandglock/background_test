import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IFieldForm, IOptionTypeForCheckbox } from '../../../types';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.scss',
})
export class TestCheckboxComponent implements OnInit {
  @Input() field: any;
  @Input() control?: FormControl;

  @Output() eventChangeField = new EventEmitter<IFieldForm>();

  public typeCheckBox: Array<IOptionTypeForCheckbox> = [];

  ngOnInit(): void {
    this.typeCheckBox = this.field.optionTypeCheckBox;
    this.control = new FormControl([], [Validators.required]);
  }




  public chooseCheckboxName(selectedOption: IOptionTypeForCheckbox) {
    if (!this.control) return;
  
    const currentArr = this.control.value || [];
    const optionExists = currentArr.some((item: IOptionTypeForCheckbox) => item.id === selectedOption.id);
  
    if (optionExists) {
      // Если опция уже выбрана, обновляем ее состояние
      const newArr = currentArr.map((item: IOptionTypeForCheckbox) => {
        if (item.id === selectedOption.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      this.control.setValue(newArr);
    } else {
      // Если опция не выбрана, добавляем ее
      const newField = { ...selectedOption, checked: true };
      this.control.setValue([...currentArr, newField]);
    }
  
    // Обновляем состояние typeCheckBox
    this.typeCheckBox = this.typeCheckBox.map((field: IOptionTypeForCheckbox) => {
      if (field.id === selectedOption.id) {
        return { ...field, checked: !field.checked };
      }
      return field;
    });
  
    // Эмитируем событие изменения
    this.eventChangeField.emit({ ...this.field, optionTypeCheckBox: this.typeCheckBox });
  }
}
