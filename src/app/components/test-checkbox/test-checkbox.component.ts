import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IOptionTypeForCheckbox } from '../../../types';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.scss',
})
export class TestCheckboxComponent implements OnInit {
  @Input() field: any;
  @Input() control?: FormControl;
  public renderField = [];

  ngOnInit(): void {
    this.renderField = this.field;
    this.control = new FormControl([], [Validators.required]);
    
  }

  public chooseCheckboxName(obj: IOptionTypeForCheckbox) {
    if (this.control) {
      const isContains = () => {
        const currentArr = this.control?.value;
        if (currentArr.length === 0) {
          this.control?.value.push({
            ...obj,
            checked: true,
          });
        } else {
          let objIsExist = false;
          for (let i = 0; i < currentArr.length; i++) {
            if (currentArr[i].id === obj.id) {
              objIsExist = true;
            }
          }

          if (objIsExist && this.control?.value && this.control.value) {
            const newArr = this.control?.value.map(
              (item: IOptionTypeForCheckbox) => {
                if (item.id === obj.id) {
                  return {
                    ...item,
                    checked: !item.checked,
                  };
                } else {
                  return item;
                }
              }
            );
            this.control.setValue(newArr);
            console.log('Такой объект уже есть');
          } else {
            this.control?.value.push({
              ...obj,
              checked: true,
            });
          }
        }
      };

      isContains();
    }

    console.log('FormControl', this.control?.value);
  }
}
