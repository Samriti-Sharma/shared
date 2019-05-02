// import { Component, OnInit } from '@angular/core';
// import { TeamListService } from "../../services/team-list.service"; 
// import { Router } from '@angular/router';
// import { ListViewEventData } from "nativescript-ui-listview";
// import { View } from "tns-core-modules/ui/core/view";
// import { query } from '@angular/core/src/render3';
// //import * as dialogs from "tns-core-modules/ui/dialogs";

// @Component({
//   selector: 'app-team-list',
//   templateUrl: './team-list.component.html',
//   styleUrls: ['./team-list.component.css']
// })
// export class TeamListComponent implements OnInit {
//   teamlist: any=[];
//   total:any=0;
  
//   constructor( private teamService : TeamListService ,private Route:Router,private amount : TeamListService ) { }

//   ngOnInit() {
//     this.getTeams();
//   }

//   getTeams() {
//     this.teamService.getTeams().subscribe(response => {
//       if (response && response.status === 200) {
//         this.teamlist=response.data;
//         for( let i=0;i<this.teamlist.length;i++){
//           this.total+=this.teamlist[i].amount;
//         }
//         this.amount.amount=this.total;
//         console.log(this.total);
//       } else if (response && response.status === 401) {
//         console.log("error");
//       }
//     });
//   }

//   change(team,i){
//   //  this.Route.navigate(['/update/team-list', {outlet: {'team': [team.team_id]}}]);
//   console.log("gyhjn");  
//   console.log(i);
//     this.Route.navigate(['/dashboard/team-list/edit',team.team_id],{
//     queryParams:{id:i,team_name:team.team_name,amount:team.amount}}
//     );
    
//   }
 
//   update(){
//     console.log("change");
//     this.Route.navigate(['/private/edit-team']);
//   }

//   public onCellSwiping(args: ListViewEventData) {
//     const swipeLimits = args.data.swipeLimits;
//     const currentItemView = args.object;
//      if (args.data.x < -200) {
//         console.log("Notify perform right action");
//     }
// }

//   public onSwipeCellStarted(args: ListViewEventData) {
//     const swipeLimits = args.data.swipeLimits;
//     const swipeView = args['object']; 
//     const rightItem = swipeView.getViewById<View>('delete-view');
//     swipeLimits.right = rightItem.getMeasuredWidth();
//     swipeLimits.threshold = rightItem.getMeasuredWidth()* 1; // 2;
// }

// public onSwipeCellFinished(args: ListViewEventData) {
// }
// public onRightSwipeClick(args) { 

//   const x=this.teamlist.indexOf(args.object.bindingContext); 
//   let data={ 
//   team_id:this.teamlist[x].team_id}; 
//   const team = this.teamlist[x].team_name; 
  
//   dialogs.confirm({ 
//   title: "Do You Want to Delete Team", 
//   message: team , 
//   okButtonText: "OK", 
//   cancelButtonText: "CANCEL", 
//   }).then((result) => 
//   { 
//   if (result) { 
//   console.log("in delete"); 
//   this.teamService.deleteTeam(data).subscribe(response => { 
//   console.log("response for delete = "+response.message); 
//   if (response && response.status == 200) { 
//   this.getTeams(); 
//   console.log("item deleted"); 
//   } 
//   else{console.log("item not deleted");} 
//   }); 
//   } 
//   else if (!result) 
//   { 
//   console.log("you clicked on cancel button"); 
//   } 
//   }); 
//   }
// }


import { Component, OnInit } from '@angular/core'; 
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

constructor(public teamService: TeamListService, public route: Router, public amount: TeamListService) 
{ 
super(teamService, route, amount) 
} 

}