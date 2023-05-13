import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  /*URL = 'http://localhost:9000/api/personas/';
  URL2 = 'http://localhost:9000/auth/'; */

  URL = 'https://backendportfolioale2.onrender.com/api/personas/';
  URL2 = 'https://backendportfolioale2.onrender.com/auth/';

  constructor(private httpClient: HttpClient){

    //const token = sessionStorage.getItem('AuthToken');
    //this.httpHeaders = httpHeaders.append('Authorization', 'Bearer' + token)
    //console.log(this.httpHeaders)
  }


  public detail(user:String): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `detalles/${user}`);
  }

  public update(id:number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL2 + `update/${id}`, persona);
  }
}