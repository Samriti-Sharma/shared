import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TeamListService } from '../../services/team-list.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Route:Router , public teamService : TeamListService,
    private ref:ChangeDetectorRef) {
   }
  
  ngOnInit() {
   
  }


  add(){
     this.teamService.flag=false;
    this.Route.navigate(['/dashboard/team-list/add']);
    this.ref.detectChanges();

  }

  logout(){ 
    localStorage.clear();
    this.Route.navigate(['login']); 
    }
}
