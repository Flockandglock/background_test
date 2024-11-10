import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../../service/form-service.service';
import { IFieldForm } from '../../../types';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrl: './final-form.component.scss'
})
export class FinalFormComponent implements OnInit {

  public form?: Array<IFieldForm>

  constructor(
    private serviceForm: FormServiceService 
  ) {}
  ngOnInit(): void {
    
  }

}
