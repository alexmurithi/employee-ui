import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
