import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TeamsService } from "../../services/teams.service";
import { NewsService } from "../../services/news.service";
import { MatchService } from "../../services/match.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  show = true;

  team = [];
  articles = []
  last = [];
  next = [];

  option = 2;

  constructor(private router: Router, private teamService: TeamsService, private newsService: NewsService, private matchService: MatchService) {}

  segmentChanged(ev: any) {
    console.log('Segment changed');
  }

  ngOnInit() {
    // Getting team
    let item = this.teamService.getTeam();
    let selected = {};
    for (let obj of item) {
      selected[obj] = { ...obj, count: 1 };
    }
    this.team = Object.keys(selected).map((key) => selected[key]);

    // Get team-related articles
    this.getArticles(this.team);

    // Get last matches
    this.getLastMatches(this.team);

    // Get upcoming matches
    this.getUpcomingMatches(this.team);

    console.log(this.team);
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.show = false;
    }, 2000);
  }

  // Get Team-Related News
  async getArticles(team) {
    let teamName;
    let func = await Object.values(team).map(res => {
      teamName = res;

      this.newsService.getTeamArticles(teamName.strTeam).subscribe(res => {
        this.articles = res.articles;
        console.log("Articles: ", this.articles);
      })
    })
  }

  // Get Previous Games
  async getLastMatches(id) {
    let teamID;
    let func = await Object.values(id).map(res => {
      teamID = res;

      this.teamService.getPreviousGames(teamID.idTeam).subscribe(res => {
        this.last = res.results;
        console.log("Previous: ", this.last);
      })
    })
  }

  // Get Upcoming Games
  async getUpcomingMatches(id = []) {
    let teamID;
    let func = await Object.values(id).map(res => {
      teamID = res;

      this.teamService.getUpcomingGames(teamID.idTeam).subscribe(res => {
        this.next = res.events;
        console.log("Upcoming: ", this.next);
      })
    })
  }

  // Open Article
  openArticle(item) {
    this.router.navigate(['article']);
    this.newsService.addArticle(item);
    console.log(item);
  }

  // Open Match Details
  seeStats(team) {
    this.matchService.addTeam(team);
    this.router.navigate(['match-detail/' + team.strEvent]);
  }

}
