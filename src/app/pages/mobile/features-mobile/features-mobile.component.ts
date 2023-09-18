import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { Feature } from 'src/app/models/feature.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-features-mobile',
  templateUrl: './features-mobile.component.html',
  styleUrls: ['./features-mobile.component.scss']
})
export class FeaturesMobileComponent implements OnInit {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();
  featureList$: Observable<any> | undefined;
  features: Feature[] = [];
  selectedFeature!: Feature;

  constructor(private themeSwitchService: ThemeSwitchService, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.initializeFeatureList();
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  initializeFeatureList(): void {
    this.featureList$ = this.contentfulService.getEntries('featureList');
    this.featureList$?.subscribe((featureList: any) => {
      featureList.items[0].fields.featureItems.forEach((item: any) => {
        this.features.push(new Feature(item.fields.title, item.fields.isCompleted, item.fields.features, item.fields.isCompleted? item.fields.launchDate : ''));
      });
      this.selectedFeature = this.features[0];
    });
  }

  selectFeature(index: number): void {
    this.selectedFeature = this.features[index];
  }
}
