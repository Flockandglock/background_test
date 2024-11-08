import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrl: './test-select.component.scss'
})
export class TestSelectComponent {
  @Input() field: any;
  @Input() control?: FormControl;
}
