import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../../service/form-service.service';
import { IFieldForm } from '../../../types';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrl: './final-form.component.scss'
})
export class FinalFormComponent implements OnInit {
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
          this.form.addControl(item.label, new FormControl(''));
        });
      })
    );
    console.log('ngOnInit', this.form)
  }

  getControl(label: string): FormControl {
    const control = this.form.get(label);
    if (control instanceof FormControl) {
        console.log('control instanceof FormControl')
      return control; 
    }
    console.log('control instanceof не прошел')
    return new FormControl(''); 
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
