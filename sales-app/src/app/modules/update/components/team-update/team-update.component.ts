import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UpdateService } from '../../services/update.service';
import { ActivatedRoute } from '@angular/router';
import { TeamListService } from '../../../dashboard/services/team-list.service';
//import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  add_TeamForm: FormGroup;
  id: any;
  name: any;
  amount: any;
  title: string;
  array_id: number;

  constructor(private router: Router,
    private formBuilder: FormBuilder, private addservice: UpdateService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.amount = parseInt(this.route.snapshot.queryParamMap.get('amount'));
    this.name = this.route.snapshot.queryParamMap.get('team_name');
    this.array_id = parseInt(this.route.snapshot.queryParamMap.get('id'));

  
    this.add_TeamForm = this.formBuilder.group({
      team: ['', Validators.required],
      revenue: ['', Validators.required]

    });
    this.select();
    console.log('team-update');
  }

  onNavBtnTap = function () {

    this.router.navigate(['/login']);
  }

  select() {
    if (this.id > 0) {
      console.log("edit");
      this.title = "Update";
      this.add_TeamForm.controls['team'].setValue(this.name);
      this.add_TeamForm.controls['revenue'].setValue(this.amount);
    }
    else {
      console.log("add");
      this.title = "Add";
      this.add_TeamForm.controls['team'].setValue('');
      this.add_TeamForm.controls['revenue'].setValue('');
    }
  }



  check_update(data) {
    if (this.id > 0) {
      console.log("sssssssssss");
      console.log(this.add_TeamForm.get('team').value);

      let data = { team_id: this.id, team_name: this.add_TeamForm.get('team').value, amount: this.add_TeamForm.get('revenue').value };
      console.log(data);
      this.addservice.updateTeam(data).subscribe(response => {
        if (response && response.status == 200) {
          alert("Team Updated");
          console.log(response);
          this.router.navigate(['/dashboard/team-list']);
          this.closeAddExpenseModal.nativeElement.click();
          //location.reload();
        }
        else {
          alert("error");
        }

      });
    }

    else {

      console.log(this.add_TeamForm.get('team').value);
      if (this.add_TeamForm.controls.team.valid && this.add_TeamForm.controls.revenue.valid) {
        console.log(this.add_TeamForm.get('team').value);
        data = { team_name: this.add_TeamForm.controls.team.value, amount: this.add_TeamForm.controls.revenue.value };
        console.log(data);
        this.addservice.addTeam(data).subscribe(response => {
          console.log(response);
          if (response && response.status == 200) {
            alert("Team Added");
            console.log("add-success");
            this.closeAddExpenseModal.nativeElement.click();
            this.router.navigate(['/dashboard/team-list']);
          }
        });
      }
      else {
        alert("Session Timed out");
        console.log("something went wrong in login service");
      }
    }
  }
}
