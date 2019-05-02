//import { OnInit } from '@angular/core'; 
import { TeamListService } from "../../services/team-list.service";
import { Router } from '@angular/router';

export class TeamListCommon {

    public teamlist: any = [];
    public total: any = 0;

    constructor(public teamService: TeamListService, public Route: Router, public amount: TeamListService) { }

    public ngOnInit() {
        this.getTeams();
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
          console.log("gyhjn");  
          console.log(i);
            this.Route.navigate(['/dashboard/team-list/edit',team.team_id],{
            queryParams:{id:i,team_name:team.team_name,amount:team.amount}}
            );
            
          }

    public update(){
            console.log("change");
            this.Route.navigate(['/private/edit-team']);
          }
}