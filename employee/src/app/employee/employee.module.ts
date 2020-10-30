import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { EmployeeRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    TableModule
  ],
  providers: [],
})
export class EmployeeModule { }
