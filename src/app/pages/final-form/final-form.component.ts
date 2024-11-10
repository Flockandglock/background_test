import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../../service/form-service.service';
import { IFieldForm } from '../../../types';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrl: './final-form.component.scss'
})
export class FinalFormComponent implements OnInit {

  public form!: FormGroup;
  public formField?: Array<IFieldForm>;

  constructor(
    private serviceForm: FormServiceService,
    private fb: FormBuilder 
  ) {}

  ngOnInit(): void {
    
    this.form = this.fb.group({});
    this.serviceForm.getForm().subscribe(form => {
      this.formField = form;
    });
    this.formField?.forEach(field => {
      this.form.addControl(field.key, new FormControl(''));
      
    });
  }

  getControl(key: string): FormControl {
    const control = this.form.get(key);
    if (control instanceof FormControl) {
        return control; // Return the control if it's a FormControl
    }
    return new FormControl(''); // Return a new FormControl if not found
  }

  public onSubmit() {
    console.log( this.form)
    // Handle form submission to server here
  }

}
