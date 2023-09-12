import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Poster } from 'src/app/models/poster.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poster-list-mobile',
  templateUrl: './poster-list-mobile.component.html',
  styleUrls: ['./poster-list-mobile.component.scss']
})
export class PosterListMobileComponent {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();
  posterList$: Observable<any> | undefined;
  isPosterSelected: boolean = false;
  selectedPoster: Poster = new Poster('', '', '');
  posters: Poster[] = [];

  constructor(private themeSwitchService: ThemeSwitchService, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.initializePosterList();
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  initializePosterList(): void {
    this.posterList$ = this.contentfulService.getEntries('posterList');
    this.posterList$?.subscribe((posterList: any) => {
      posterList.items[0].fields.posters.forEach((poster: any) => {
        this.posters.push(new Poster(poster.fields.image.fields.file.url, poster.fields.author, poster.fields.caption));
      });
    });
  }

  selectPoster(poster: Poster): void {
    this.selectedPoster['imgUrl'] = poster['imgUrl'];
    this.selectedPoster['author'] = poster['author'];
    this.selectedPoster['caption'] = poster['caption'];
    this.isPosterSelected = true;
  }

  closePoster(): void {
    this.isPosterSelected = false;
  }

  // downloadImage(imgUrl: string) {
  //   const link = document.createElement('a');
  //   link.href = imgUrl;
  //   link.download = "qzed_poster";
  //   link.target = '_blank';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
}
