import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sick } from 'src/Classes/Sick';
import { Observable } from 'rxjs';
import { CountSick } from 'src/Classes/CountSick';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SickService {

  constructor(
    private httpClient:HttpClient
  ) { }

  userUrl= `${environment.urlApi}/${'Sick'}`;

  AddSick(sick:Sick):Observable<any>{
    return this.httpClient.post<any>(`${this.userUrl}/${'AddSick'}`,sick)
  }
  

  GetSick(idClient:string):Observable<Sick>{
    return this.httpClient.get<Sick>(`${this.userUrl}/${'GetSick'}/${idClient}`)
}

GetCountSick():Observable<number[]>{
  return this.httpClient.get<number[]>(`${this.userUrl}/${'CountSick'}`)
}
}
