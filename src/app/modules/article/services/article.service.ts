import { Injectable } from '@angular/core';
import { Article } from '../../../shared/models/article.model';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  readonly user : User = {id: 0, username: 'admin', email: "", firstname: "Vlad", lastname: "Taraban"};
  readonly lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu imperdiet enim. Fusce vitae metus eu enim condimentum pharetra sed in nisl. Quisque et efficitur neque. Aliquam sodales dignissim pellentesque. Nulla facilisi. Ut lobortis elit urna, eget dignissim arcu cursus id. Ut a magna tellus. Aenean pulvinar luctus lorem, quis tincidunt eros imperdiet vitae. Vivamus iaculis purus urna. Vivamus et luctus nisl. Integer nibh nisl, egestas et dui lobortis, maximus interdum risus."
  readonly articles : Article[] = [
    {id: 1, title: 'ASP.NET. Whats new?', content: this.lorem, author: this.user},
    {id: 2, title: 'Create your first site with Angular', content: this.lorem, author: this.user},
    {id: 3, title: 'Article 3', content: this.lorem, author: this.user},
    {id: 4, title: 'Article 4', content: this.lorem, author: this.user},
    {id: 5, title: 'Article 5', content: this.lorem, author: this.user}];

  constructor() { }

  getArticles() : Article[] {
    return this.articles;
  }

  getArticle(id: number) : Article {
    return this.articles.find(x => x.id == id)!;
  }
}
