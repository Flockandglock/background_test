import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-test-number',
    templateUrl: './test-number.component.html',
    styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent {
    @Input() field: any;
    @Input() control?: FormControl;
}