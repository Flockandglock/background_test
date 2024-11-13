import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IFieldForm } from '../../../types';
import { FormServiceService } from '../../service/form-service.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  fields$?: Observable<Array<IFieldForm>>;

  constructor(
    private fb: FormBuilder,
    private serviceForm: FormServiceService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({});
    this.fields$ = this.serviceForm.getFileds().pipe(
      tap((res) => {
        res.forEach((item: IFieldForm) => {
          this.form.addControl(item.type, new FormControl(''));
        });
      })
    );
  }

  getControl(type: string): FormControl {
    const control = this.form.get(type);
    if (control instanceof FormControl) {
        console.log('control instanceof FormControl')
      return control; 
    }
    console.log('control instanceof не прошел')
    return new FormControl(''); 
  }

  onSubmit() {
    console.log(this.form.value);
    // Handle form submission to server here
  }
}
