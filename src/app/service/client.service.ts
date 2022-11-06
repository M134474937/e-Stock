import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from '../model/client';
import {FormBuilder,FormGroup,FormControl,ReactiveFormsModule,Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public dataForm : FormGroup;
  constructor(private http:HttpClient) {  }
  private baseUrl='http://localhost:8080/api/Client';
  choixmenu: string ='A';
  getData(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createData(info:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,info, { responseType: 'text' });
  }
  updatedata(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  deleteData(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }
  getAll():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
}
}
