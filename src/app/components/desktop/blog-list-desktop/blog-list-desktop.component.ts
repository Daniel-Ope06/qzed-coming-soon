import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/blog.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list-desktop',
  templateUrl: './blog-list-desktop.component.html',
  styleUrls: ['./blog-list-desktop.component.scss']
})
export class BlogListDesktopComponent {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();
  blogCategory: string = this.blogService.getBlogCategory();
  blogList$: Observable<any> | undefined;
  blogs: Blog[] = [];

  constructor(private themeSwitchService: ThemeSwitchService, private contentfulService: ContentfulService, private blogService: BlogService) { }

  ngOnInit(): void {
    this.initializeBlogList();
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  initializeBlogList(): void {
    this.blogList$ = this.contentfulService.getEntries('blogList');
    this.blogList$?.subscribe((blogList: any) => {
      blogList.items[0].fields.blogPosts.forEach((item: any) => {
        this.blogs.push(new Blog({
          id: item.sys.id,
          date: item.fields.date,
          title: item.fields.title,
          author: item.fields.author,
          readTime: item.fields.readTime,
          imgUrl: item.fields.image.fields.file.url
        }));
      });
    });
  }

  routeToBlog(id: string): void {
    this.blogService.routeToBlog(id);
  }
}
