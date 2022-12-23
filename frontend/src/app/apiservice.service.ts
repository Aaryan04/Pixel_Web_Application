import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private _http: HttpClient) {}
  //connect frontend to backend

  apiClients = 'http://localhost:3000/clients/';
  apiClient = 'http://localhost:3000/client/';
  apiInvoices = 'http://localhost:3000/invoices/';
  apiTasks = 'http://localhost:3000/tasks/';
  apiProjects = 'http://localhost:3000/projects/';

  // get all data
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiClients}`);
  }
  //Get Client Data
  getClient(id: any): Observable<any> {
    return this._http.get(`${this.apiClient + id}`);
  }

  //get invoices
  getInvoices(id: any): Observable<any> {
    return this._http.get(`${this.apiInvoices + id}`);
  }
  //get tasks
  getTasks(id: any): Observable<any> {
    return this._http.get(`${this.apiTasks + '' + id}`);
  }
  //get Projects
  getProjects(id: any): Observable<any> {
    return this._http.get(`${this.apiProjects + '' + id}`);
  }
  deleteClient(id: any): Observable<any> {
    return this._http.delete(`${this.apiClient + '' + id}`);
  }
}
