import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MatchService } from "../services/match.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  last = [];
  next = [];

  option = 1;

  constructor(private router: Router, private matchService: MatchService) {}

  segmentChanged(ev: any) {
    console.log('Segment changed');
  }

  ngOnInit() {

    // Getting previous 15 games
    this.matchService.getPreviousGames().subscribe(res => {
      this.last = res.events;
      console.log("Last games: ", this.last);
    })

    // Getting next 15 games
    this.matchService.getUpcomingGames().subscribe(res => {
      this.next = res.events;
      console.log("Last games: ", this.next);
    })
  }

  seeStats(team) {
    this.matchService.addTeam(team);
    this.router.navigate(['match-detail/' + team.strEvent]);
  }

}
