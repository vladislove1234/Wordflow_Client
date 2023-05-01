import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})

export class ArticleCardComponent {
   @Input() article: Article;

    constructor(public router: Router) {
    }

    goToAuthorPage(){
      this.router.navigate(['/user'], { queryParams: { id: 1 } });
    }
}
