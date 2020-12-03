import { Component, OnInit } from '@angular/core';
import { MatchService } from "../../services/match.service";

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.page.html',
  styleUrls: ['./match-detail.page.scss'],
})
export class MatchDetailPage implements OnInit {

  event = [];
  stats = [];

  constructor(private matchService: MatchService) {}

  segmentChanged(ev: any) {
    console.log('Segment changed');
  }

  ngOnInit() {
    // Getting event
    let item = this.matchService.getTeam();
    let selected = {};
    for (let obj of item) {
      selected[obj] = { ...obj, count: 1 };
    }
    this.event = Object.keys(selected).map((key) => selected[key]);
    console.log("Event:", this.event);

    // Getting event stats
    this.getStats(this.event);
  }

  // Getting game stats
  async getStats(id) {
    let match;
    let func = await Object.values(id).map(res => {
      match = res;

      this.matchService.getEvent(match.idEvent).subscribe(res => {
        this.stats = res.eventstats;
        console.log("Stats:", this.stats);
        // console.log("Stats:", match.idEvent);
      })
    });
  }

}
