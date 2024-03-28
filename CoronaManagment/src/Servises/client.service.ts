import { HttpClient } from '@angular/common/http';
import { Client } from 'src/Classes/Client';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  clientList:Client[] = [];
  clientUpdate!:Client

  userUrl= `${environment.urlApi}/${'Client'}`;

  AddClient(newClient:Client):Observable<any>{
    return this.httpClient.post<any>(`${this.userUrl}/${'AddClient'}`,newClient)
  }

  DeleteClient(identityClient:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.userUrl}/${'DeletClient'}/${identityClient}`)
  }

  UpdateClient(id:number,updateClient:Client):Observable<any>{
    return this.httpClient.put<any>(`${this.userUrl}/${'UpdateClient'}/${id}`,updateClient)
  }
  
  GetListClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.userUrl}/${'GetAllClients'}`)
  }

  GetClient(idClient:number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.userUrl}/${'GetClient'}/${idClient}`)
  }

  GetClientById(idClient:number)
  {  
    return this.clientList.find(x=> x.id==idClient)
  }

  CountNotVaccin():Observable<number>{
    return this.httpClient.get<number>(`${this.userUrl}/${'CountNotVaccin'}`);
  }
}
