import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { TestSelectComponent } from './components/test-select/test-select.component';
import { TestNumberComponent } from './components/test-number/test-number.component';
import { TestInputComponent } from './components/test-input/test-input.component';
import { TestCheckboxComponent } from './components/test-checkbox/test-checkbox.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    TestSelectComponent,
    TestNumberComponent,
    TestInputComponent,
    TestCheckboxComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
