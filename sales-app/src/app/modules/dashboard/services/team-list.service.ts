import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamListService {
  amount: number = 0;
  flag:boolean = true;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    let accessToken = localStorage.getItem('accessToken');
    return this.http.post<any>(environment.API_URL + 'teams/get', { 'access_token': accessToken });
  }

  deleteTeam(data): Observable<any> { 
    let accessToken = localStorage.getItem('accessToken'); 
    return this.http.post<any>(environment.API_URL + 'teams/delete', 
    Object.assign({ 'access_token': accessToken }, data)); 
    }

}
