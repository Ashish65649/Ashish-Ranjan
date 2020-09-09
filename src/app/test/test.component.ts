import { AppComponent } from './../app.component';
import { Article } from './test-article-class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() article: Article;
  constructor() {

  }

  voteUp(): void {
    this.article.voteUp();
  }
  voteDown(): void {
    this.article.voteDown();
  }
  ngOnInit(): void {
  }
}
