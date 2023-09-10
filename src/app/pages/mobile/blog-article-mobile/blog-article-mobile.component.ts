import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ContentfulService } from 'src/app/services/contentful.service';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';

@Component({
  selector: 'app-blog-article-mobile',
  templateUrl: './blog-article-mobile.component.html',
  styleUrls: ['./blog-article-mobile.component.scss']
})
export class BlogArticleMobileComponent implements OnInit {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();
  private routeSubscription!: Subscription;
  blogArticle$: Observable<any> | undefined;
  blog!: Blog;

  constructor(private contentfulService: ContentfulService, private location: Location, private title: Title, private route: ActivatedRoute, private themeSwitchService: ThemeSwitchService) { }

  ngOnInit(): void {
    this.getBlogArticle();

    this.routeSubscription = this.route.params.subscribe((params) => {
      this.getBlogArticle();
    });

    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  ngOnDestroy() { this.routeSubscription.unsubscribe(); } // Unsubscribe from the route parameter changes to avoid memory leaks

  getRouteId(): string {
    const url = this.location.path();
    const parts = url.split('/');
    return parts[parts.length - 1];
  }

  getBlogArticle(): void {
    this.blogArticle$ = this.contentfulService.getEntry(this.getRouteId());
    this.blogArticle$?.subscribe((blogArticle: any) => {
      this.blog = new Blog({
        id: blogArticle.sys.id,
        title: blogArticle.fields.title,
        author: blogArticle.fields.author,
        article: blogArticle.fields.article,
        readTime: blogArticle.fields.readTime,
        imgUrl: blogArticle.fields.image.fields.file.url
      });
      this.title.setTitle(`QZed | ${this.blog.title}`);
    });
  }
}
