import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllArticlesComponent } from './pages/all-articles/all-articles.component';
import {   } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { ArticleComponent } from './pages/article/article.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import {MatIconModule} from '@angular/material/icon';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    AllArticlesComponent,
    ArticleCardComponent,
    ArticleComponent,
    CommentCardComponent,
    PostCommentComponent,
    CreateArticleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    CKEditorModule,

  ],
  exports: [
    AllArticlesComponent,
    MatFormFieldModule,
    ArticleCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class ArticleModule { }
