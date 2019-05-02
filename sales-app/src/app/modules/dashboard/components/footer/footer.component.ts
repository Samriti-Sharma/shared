import { Component, OnInit } from '@angular/core';
import { TeamListService } from '../../services/team-list.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  count= this.amount.amount;

  
  constructor(private amount : TeamListService) { }

  ngOnInit() {
  }

}
