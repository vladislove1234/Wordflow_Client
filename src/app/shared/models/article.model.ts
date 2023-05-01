import { User } from './user.model';

export class Article{
    id: number;
    title: string;
    content: string;
    author: User;
}