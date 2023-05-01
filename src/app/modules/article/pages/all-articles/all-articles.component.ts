import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../../../shared/models/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent {
  
  articles: Article[];

  constructor(private articleService : ArticleService, private router: Router) {
    this.articles = articleService.getArticles();

    console.log(this.articles);
   }

   onArticleClick(id: number) {
    this.router.navigate(['/article'], { queryParams: { id: id } });
  }
}
