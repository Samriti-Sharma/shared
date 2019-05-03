import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { TeamListCommon } from "./team-list..common"; 
import { TeamListService } from '../../services/team-list.service'; 
import { Router } from '@angular/router'; 
//import { ListViewEventData } from 'nativescript-ui-listview'; 

@Component({ 
selector: 'app-team-list', 
templateUrl: './team-list.component.html', 
styleUrls: ['./team-list.component.css'] 
}) 
export class TeamListComponent extends TeamListCommon implements OnInit { 
// teamlist: any=[]; 
// total:any=0; 

constructor(public teamService: TeamListService, public route: Router, public amount: TeamListService,public ref:ChangeDetectorRef) 
{ 
super(teamService, route, amount,ref) 
} 


myFunction(id){ 
    console.log(id); 
    let data={ 
    team_id:id 
    }; 
    this.teamService.deleteTeam(data).subscribe(response => { 
    console.log("response for delete = "+response.message); 
    if (response && response.status == 200) { 
    this.getTeams(); 
    console.log("item deleted"); 
    } 
    else{ 
    console.log("not deleted "+ response); 
    } 
    }); 
    }

}