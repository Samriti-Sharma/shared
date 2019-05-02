import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

  addTeam(data): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/add',
    Object.assign({ 'access_token': accessToken },data));
 }


 updateTeam(data): Observable<any> { 
  let accessToken = localStorage.getItem('accessToken'); 
  return this.http.post<any>(environment.API_URL + 'teams/edit', 
  Object.assign({ 'access_token': accessToken }, data)); 
  }

}
