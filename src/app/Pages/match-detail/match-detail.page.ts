import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// import { threadId } from 'worker_threads';
import { MatchService } from "../../services/match.service";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
})
export class MatchDetailPage implements OnInit {

  event = [];
  goalDetail = [];

  constructor(private router: Router, private matchService: MatchService) {
    this.matchService.getEvent('441613').subscribe(res => {
      this.event = res.events;
      // this.getGoalDetail(this.event);
      console.log(this.event);
    })
  }

  segmentChanged(ev: any) {
    console.log('Segment changed');
  }

  ngOnInit() {
  }

  // async getGoalDetail(event) {
  //   let teamName;
  //   let func = await Object.values(event).map(res => {
  //     teamName = res;

  //     this.matchService.getTeamArticles(teamName.strTeam).subscribe(res => {
  //       this.articles = res.articles;
  //       console.log("Articles: ", this.articles);
  //     })
  //   })
  // }

}
