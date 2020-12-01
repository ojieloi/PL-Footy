import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NewsService } from "../services/news.service"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  searchTerm: string;
  articles = [];
  transfers = [];

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {
    // Getting all PL articles
    this.newsService.getArticles().subscribe(res => {
      this.articles = res.articles;
      console.log("All Articles: ", this.articles);
    })

    // Getting PL transfer articles
    this.newsService.getTransferNews().subscribe(res => {
      this.transfers = res.articles;
      console.log("Transfer Articles: ", this.articles);
    })
  }

  openArticle(item) {
    this.router.navigate(['article']);
    this.newsService.addArticle(item);
    console.log(item);
  }

  searchArticle(ev: any) {
    this.newsService.getTeamArticles(this.searchTerm).subscribe(res => {
      this.articles = res.articles;
      console.log(this.articles);
    })
  }

}
