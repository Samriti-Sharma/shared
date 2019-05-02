import { Injectable } from '@angular/core'; 
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
import { Observable } from 'rxjs'; 
import { Router } from '@angular/router'; 
@Injectable({ 
providedIn: 'root' 
}) 
export class CheckGuardService implements CanActivate{ 
constructor( 
private myRoute: Router){ 
} 
//to run the can activate auth guard 
canActivate( 
next: ActivatedRouteSnapshot, 
state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { 
if(localStorage.getItem('accessToken')){ 
  console.log("auth"); 
  this.myRoute.navigate(["/dashboard/team-list"]); 
  return false; 
}else{ 
// alert("Wrong credentials ") 
return true;
} 
} 
}