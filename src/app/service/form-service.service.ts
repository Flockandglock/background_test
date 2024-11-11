import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFieldForm } from '../../types';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }

  createForm(field: IFieldForm) {
    return this.http.post(`http://localhost:3000/field`, field)
      
  }

  getFileds(): Observable<Array<IFieldForm>> {
    return this.http.get<Array<IFieldForm>>(`http://localhost:3000/field`)
  }
}
