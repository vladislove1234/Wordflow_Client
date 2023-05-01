import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;
  lorem: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor urna tortor, placerat sagittis augue ornare ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vel lorem in eros tempor ornare sed sed orci. Quisque blandit feugiat libero, in tincidunt ante accumsan sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis cursus lectus. Proin commodo mollis ligula, non laoreet dolor elementum a. Nullam sed blandit lectus. Quisque ut dapibus risus. Ut sollicitudin justo libero, sit amet commodo leo aliquet ac. Mauris dapibus diam urna, ac feugiat ex volutpat elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec posuere purus. Phasellus tincidunt tempor purus in convallis. Aliquam gravida, neque eu semper cursus, nulla sapien malesuada odio, ac accumsan nunc augue et mi.";

  constructor(private route: ActivatedRoute, private router: Router, public articleService: ArticleService) { 

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.article = this.articleService.getArticle(params['id']);
    });
  }
}
