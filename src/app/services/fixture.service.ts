import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  event = [];

  baseUrl = 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328'

  constructor(private http: HttpClient) { }

  // Getting match details
  getEvent(id) {
    const url = this.baseUrl + id;
    return this.http.get(url).pipe(map((res:any) => {
      return res;
    }))
  }

  getUpcomingGames(){
    const url='/www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328'
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }))
  }

  getTeam() {
    return this.team;
  }

  addTeam(item) {
    this.team.push(item);
  }

 
}
