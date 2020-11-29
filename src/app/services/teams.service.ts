import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  team = [];

  // Creating a base URL for when searching is required
  baseUrl = 'http://newsapi.org/v2/everything?q=';
  apiKey = '10b5021388dc440ea87cc6eaa2e4a13f';

  constructor(private http: HttpClient) { }

  // Gets all Premier League teams
  getAllTeams() {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }))
  }
  
  // Gets previous 5 games
  getPreviousGames(id) {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=' + id;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }))
  }

  // Gets next 5 games
  getUpcomingGames(id) {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=' + id;
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
