import { Component, OnInit } from '@angular/core';
import { TeamsService } from "../../services/teams.service"

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  team = [];
  last = [];
  next = [];

  constructor(private teamService: TeamsService) { }

  ngOnInit() {
    // Getting team
    let item = this.teamService.getTeam();
    let selected = {};
    for (let obj of item) {
      selected[obj] = { ...obj, count: 1 };
    }
    this.team = Object.keys(selected).map((key) => selected[key]);

    // Get last matches
    this.getLastMatches(this.team);

    // Get upcoming matches
    this.getUpcomingMatches(this.team);

    console.log(this.team);
  }

  getLastMatches(id) {
    let val;
    this.teamService.getTeam().map(key => {
      this.last = key;
      console.log("Previous games: ", this.last);
    })
  }

  getUpcomingMatches(id = []) {
    let teamID = id.map(key => {id: key.idTeam})
    console.log(teamID);
  }

}
