import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.scss'
})
export class TestCheckboxComponent {
  @Input() field: any;
  @Input() control?: FormControl;

  public chooseCheckboxName (str: string) {
    
  }
}
