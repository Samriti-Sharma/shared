import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set_storage(Token){
    localStorage.setItem('accessToken',Token); 
  }
}
