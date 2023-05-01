import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllArticlesComponent } from './modules/article/pages/all-articles/all-articles.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ArticleComponent } from './modules/article/pages/article/article.component';
import { CreateArticleComponent } from './modules/article/pages/create-article/create-article.component';
import { UserComponent } from './modules/user/pages/user/user.component';

const routes: Routes = [
  { path: 'home', component: AllArticlesComponent },
  { path: 'article', component: ArticleComponent},
  { path: 'add-article', component: CreateArticleComponent},
  { path: 'user', component: UserComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
