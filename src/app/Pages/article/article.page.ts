import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service"

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  article= [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // Getting article
    let item = this.newsService.getArticle();
    let selected = {};
    for (let obj of item) {
      selected[obj] = { ...obj, count: 1 };
    }
    this.article = Object.keys(selected).map((key) => selected[key]);
    console.log(this.article);
  }

}
