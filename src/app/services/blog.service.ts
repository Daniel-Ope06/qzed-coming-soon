import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blogCategorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('All');
  public blogCategory$: Observable<string> = this.blogCategorySubject.asObservable();

  constructor() { }

  setBlogCategory(category: string): void {
    this.blogCategorySubject.next(category);
  }

  getBlogCategory(): string {
    return this.blogCategorySubject.getValue();
  }
}
