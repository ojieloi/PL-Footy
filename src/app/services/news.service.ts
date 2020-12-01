import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  article = [];
  baseURL = 'http://newsapi.org/v2/everything?qInTitle=';

  constructor(private http: HttpClient) { }

  // Service that fetches Premier League news srticles
  getTransferNews() {
    const url = 'http://newsapi.org/v2/everything?qInTitle=premier league transfer&sortBy=publishedAt&pageSize=50&language=en&apiKey=10b5021388dc440ea87cc6eaa2e4a13f';
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  getArticles() {
    const url = 'http://newsapi.org/v2/everything?qInTitle=Premier League&sortBy=publishedAt&pageSize=50&language=en&apiKey=10b5021388dc440ea87cc6eaa2e4a13f';
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  // getTeamArticles(teamName) {
  //   const url = this.baseURL + teamName + ' football&category=sports&sortBy=publishedAt&pageSize=50&apiKey=10b5021388dc440ea87cc6eaa2e4a13f';
  //   return this.http.get(url).pipe(map((res: any) => {
  //     return res;
  //   }));
  // }

  getTeamArticles(teamName) {
    const url = this.baseURL + teamName + ' football&sortBy=relevancy&pageSize=50&language=en&apiKey=10b5021388dc440ea87cc6eaa2e4a13f';
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  getArticle() {
    return this.article;
  }

  addArticle(item) {
    this.article.push(item);
  }
}
