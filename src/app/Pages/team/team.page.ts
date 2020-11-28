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

  constructor(private teamService: TeamsService) {
    this.teamService.getAllTeams().subscribe(res => {
      this.team = res.teams;
      console.log("Teams: ", this.team);
    })
  }

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
    let teamID;
    let func = Object.values(id).map(res => {
      teamID = res;

      this.teamService.getPreviousGames(teamID.idTeam).subscribe(res => {
        this.last = res.results;
        console.log("Previous: ", this.last);
      })
    })
  }

  getUpcomingMatches(id = []) {
    let teamID;
    let func = Object.values(id).map(res => {
      teamID = res;

      this.teamService.getUpcomingGames(teamID.idTeam).subscribe(res => {
        this.next = res.events;
        console.log("Upcoming: ", this.next);
      })
    })
  }

}
