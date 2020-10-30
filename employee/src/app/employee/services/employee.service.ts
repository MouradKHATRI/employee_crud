import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.REST_API + 'employees');
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.REST_API + 'delete' + id);
  }

  save(request: any): Observable<any> {
    if (request.id === undefined) {
      return this.http.post(environment.REST_API + 'create', request);
    } else {
      return this.http.put(environment.REST_API + '/update/' + request.id, request);
    }
  }

  get(id: number): Observable<any> {
    return this.http.get(environment.REST_API + 'employee/' + id);
  }

}
