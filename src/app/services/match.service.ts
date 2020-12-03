import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  event = [];
  baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupeventstats.php?id=';

  constructor(private http: HttpClient) { }

  // Getting match details
  getEvent(id) {
    const url = this.baseUrl + id;
    return this.http.get(url).pipe(map((res:any) => {
      return res;
    }))
  }

  getUpcomingGames() {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328';
    return this.http.get(url).pipe(map((res:any) => {
      return res;
    }))
  }

  getPreviousGames() {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328';
    return this.http.get(url).pipe(map((res:any) => {
      return res;
    }))
  }

  getTeam() {
    return this.event;
  }

  addTeam(item) {
    this.event.push(item);
  }
}
