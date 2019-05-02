import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Route:Router) { }

  ngOnInit() {
  }


  add(){
    console.log("gyhj");
    this.Route.navigate(['/dashboard/team-list/add']); 
  }

  logout(){ 
    localStorage.clear();
    this.Route.navigate(['login']); 
    }
}
