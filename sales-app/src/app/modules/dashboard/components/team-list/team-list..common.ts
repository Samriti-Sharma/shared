//import { OnInit } from '@angular/core'; 
import { TeamListService } from "../../services/team-list.service";
import { Router } from '@angular/router';
import { ChangeDetectorRef, SimpleChange } from "@angular/core";

export class TeamListCommon {

    public teamlist: any = [];
    public total: any = 0;
    public flag:boolean;
    constructor(public teamService: TeamListService, public Route: Router, public amount: TeamListService, public ref:ChangeDetectorRef) { }

    public ngOnInit() {
        this.flag=this.teamService.flag;
        this.getTeams();
        console.log("team-list");
    }

    public ngOnChanges(changes: SimpleChange){
        console.log(changes);

    }

    public getTeams() {
        this.teamService.getTeams().subscribe(response => {
            if (response && response.status === 200) {
                this.teamlist = response.data;
                console.log(this.teamlist);
                console.log("success");
                for (let i = 0; i < this.teamlist.length; i++) {
                    this.total += this.teamlist[i].amount;
                }
                this.amount.amount = this.total;
                console.log(this.total);
            } else if (response && response.status === 401) {
                console.log("error");
            }
        });
    }

   public change(team,i){
   
         this.teamService.flag=false;
         //this.ref.detectChanges();
            this.Route.navigate(['/dashboard/team-list/edit',team.team_id],{
            queryParams:{id:i,team_name:team.team_name,amount:team.amount}}
            );
            this.ref.detectChanges()
           
            
          }

    // public update(){
    //         console.log("change");
    //         this.Route.navigate(['/private/edit-team']);
    //       }
}