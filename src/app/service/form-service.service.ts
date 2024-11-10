import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFieldForm } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }

  createForm(form: Array<IFieldForm>) {
    return this.http.post(`http://localhost:3000/form`, form)
  }

  getForm() {
    return this.http.get(`http://localhost:3000/form`)
  }
}
