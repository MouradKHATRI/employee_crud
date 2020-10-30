import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: EmployeeModel[];
  constructor(private emplService: EmployeeService) { }

  ngOnInit() {
    this.emplService.getAll().subscribe(result => {
      this.list = result.data;
    });
  }

}
