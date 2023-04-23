import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/users'

  GetAll(){
    return this.http.get(this.apiurl);
  }

  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  ProceedRegistration(inputdata:any){
    return this.http.post(this.apiurl, inputdata);
  }

  Updateuser(code:any, inputdata:any){
    return this.http.post(this.apiurl + '/' + code , inputdata);
  }

  IsloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  GetUserrole(){
    return sessionStorage.getItem('')!=null?sessionStorage.getItem('username')?.toString():'';
  }
}
