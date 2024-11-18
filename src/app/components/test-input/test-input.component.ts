import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.scss'
})
export class TestInputComponent implements OnInit {
  
  @Input() field: any;
  @Input() control?: FormControl;

  ngOnInit(): void {
    
  }
}


