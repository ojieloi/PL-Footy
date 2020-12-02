import { Component,ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { TeamsService } from "../services/teams.service";
import { TableService } from "../services/table.service";
import {FixtureService } from "../services/fixture.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  show = true;

  league= [];
  table = [];
  events =[];
  
  constructor(private router: Router, private tableService: TableService, private teamService: TeamsService,private fixtureService: FixtureService) { }

  async segmentChanged(ev: any) { }

  ngOnInit() {
    // get UPCOMING Games 
    this.fixtureService.getUpcomingGames().subscribe(res => {
    })
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.show = false;
    }, 5000);
  }

  openTeam(team) {
    this.teamService.addTeam(team);
    this.router.navigate(['team/' + team.strTeam]);
  }
}
  


  


