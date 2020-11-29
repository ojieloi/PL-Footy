import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { TeamsService } from "../services/teams.service";
import { TableService } from "../services/table.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  table = [];
  allTeams = [];
  option = 1;

  constructor(private router: Router, private tableService: TableService, private teamService: TeamsService) {}

  async segmentChanged(ev: any) {  
    // 
  }

  ngOnInit() {

    // Getting PL table
    this.tableService.getTable().subscribe(res => {
      this.table = res.table;
      console.log("Table: ", this.table);
    })

    // Getting all teams
    this.teamService.getAllTeams().subscribe(res => {
      this.allTeams = res.teams;
      console.log("Teams: ", this.allTeams);
    })
  }

  openTeam(team) {
    this.teamService.addTeam(team);
    this.router.navigate(['team/' + team.strTeam]);
  }
}
