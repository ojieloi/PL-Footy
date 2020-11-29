import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TeamsService } from "../../services/teams.service"
import { NewsService } from "../../services/news.service"

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  team = [];
  articles = []
  last = [];
  next = [];

  constructor(private router: Router, private teamService: TeamsService, private newsService: NewsService) {
    // this.teamService.getAllTeams().subscribe(res => {
    //   this.team = res.teams;
    //   console.log("Teams: ", this.team);
    // })

    // this.newsService.getTeamArticles('Arsenal').subscribe(res => {
    //   this.articles = res.articles;
    //   console.log("Articles: ", this.articles);
    // })

    // this.teamService.getPreviousGames('133604').subscribe(res => {
    //   this.last = res.results;
    //   console.log("Previous: ", this.last);
    // })

    // this.teamService.getUpcomingGames('133604').subscribe(res => {
    //   this.next = res.events;
    //   console.log("Previous: ", this.next);
    // })
  }

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

  // Get Team-Related News
  getArticles(team) {
    let teamName;
    let article = [];
    let func = Object.values(team).map(res => {
      teamName = res;

      this.newsService.getTeamArticles(teamName.strTeam).subscribe(res => {
        this.articles = res.articles;
        console.log("Articles: ", this.articles);
      })
    })
  }

  // Get Previous Games
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

  // Get Upcoming Games
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

  // Open Article
  openArticle(item) {
    this.router.navigate(['article']);
    this.newsService.addArticle(item);
    console.log(item);
  }

}
