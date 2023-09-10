import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/blog.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list-mobile',
  templateUrl: './blog-list-mobile.component.html',
  styleUrls: ['./blog-list-mobile.component.scss']
})
export class BlogListMobileComponent implements OnInit {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();
  blogCategory: string = this.blogService.getBlogCategory();
  blogList$: Observable<any> | undefined;
  filteredBlogs: Blog[] = [];
  blogs: Blog[] = [];

  constructor(private themeSwitchService: ThemeSwitchService, private contentfulService: ContentfulService, private blogService: BlogService) { }

  ngOnInit(): void {
    this.initializeBlogList();

    this.blogService.blogCategory$.subscribe((category: string) => {
      this.blogCategory = category;
      this.filteredBlogs = this.filterBlogs(this.blogCategory);
    });

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
          title: item.fields.title,
          author: item.fields.author,
          readTime: item.fields.readTime,
          category: item.fields.category,
          imgUrl: item.fields.image.fields.file.url
        }));
      });
      this.filteredBlogs = this.filterBlogs(this.blogCategory);
    });
  }

  filterBlogs(category: string): Blog[] {
    if (this.blogService.getBlogCategory() === 'All') {
      return this.blogs;
    } else {
      return this.blogs.filter((blog: Blog) => blog.category === category);
    }
  }

  routeToBlog(id: string): void {
    this.blogService.routeToBlog(id);
  }
}
