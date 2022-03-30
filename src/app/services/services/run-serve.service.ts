import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RunServeService {



  constructor(private http: HttpClient) {
  }


  getData(host: string, param: string): Observable<any> {
    const service = host + param;
    return this.http.get(service, { headers: this.cargHeaders() }).pipe(map(response => response/*, error => error*/));
  }

  postDataLogin(param: string, data: any): Observable<any> {
    const service = "RunEnumService.GET_HOST" + param;
    return this.http.post(service, data).pipe(map(response => response/*, error => error*/));
  }

  postData(param: string, data: any): Observable<any> {
    const service = "RunEnumService.GET_HOST" + param;
    return this.http.post(service, data, { headers: this.cargHeaders() }).pipe(map(response => response/*, error => error*/));
  }

  putData(param: string, data: any): Observable<any> {
    const service = "RunEnumService.GET_HOST" + param;
    return this.http.put(service, data, { headers: this.cargHeaders() }).pipe(map(response => response/*, error => error*/));
  }

  deleteData(param: string): Observable<any> {
    const service = "RunEnumService.GET_HOST" + param;
    return this.http.delete(service, { headers: this.cargHeaders() }).pipe(map(response => response/*, error => error*/));
  }



  cargHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

  }


}
