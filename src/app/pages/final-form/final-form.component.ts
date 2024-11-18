import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../../service/form-service.service';
import { IFieldForm, IOptionTypeForCheckbox } from '../../../types';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrl: './final-form.component.scss'
})
export class FinalFormComponent implements OnInit {
  public submitted: boolean = false;
  public form!: FormGroup;
  public fields$?: Observable<Array<IFieldForm>>;

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

  public handleEventField(field: IFieldForm) {
    if (!this.fields$) return;

    this.fields$ = this.fields$.pipe(
        map((items: IFieldForm[]) => {
            return items.map((item: IFieldForm) => {
                if (item.id === field.id) {
                    return {
                        ...field
                    };
                }
                return item;
            });
        })
    );
}

  getControl(label: string): FormControl {
    const control = this.form.get(label);
    if (control instanceof FormControl) {
        
      return control; 
    }
    
    return new FormControl(''); 
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
