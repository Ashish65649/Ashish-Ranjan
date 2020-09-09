import { Article } from './test/test-article-class';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit Form';

  articles: Article[] = new Array();

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }


  Submit(name: HTMLInputElement, link: HTMLInputElement): boolean {

    this.articles.push(new Article(0, name.value, link.value));
    this.sortArticles();
    return false;
  }
}
