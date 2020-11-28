import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NewsService } from "../services/news.service"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  articles = [];

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getArticles().subscribe(res => {
      this.articles = res.articles;
      console.log("Articles: ", this.articles);
    })
  }

}
