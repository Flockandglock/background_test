import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrl: './test-select.component.scss'
})
export class TestSelectComponent {

  public selectIsOpen:boolean = false;

  @Input() field: any;
  @Input() control?: FormControl;

  public toggleSelect () {
    this.selectIsOpen = !this.selectIsOpen;
  }

  public chooseItem (str: string) {
    if (this.field.required) {
      this.control = new FormControl(str, [ Validators.required]);
    } else {
      this.control = new FormControl(str);
    }
    this.selectIsOpen = false;
  }
}
