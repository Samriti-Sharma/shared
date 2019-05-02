import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set_storage(Token){
    require( "nativescript-localstorage" );
    localStorage.setItem('accessToken',Token); 
  }
}
