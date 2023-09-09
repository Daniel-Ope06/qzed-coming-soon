import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';

interface Button {
  text: string;
  selected: boolean;
}

@Component({
  selector: 'app-blog-mobile',
  templateUrl: './blog-mobile.component.html',
  styleUrls: ['./blog-mobile.component.scss']
})
export class BlogMobileComponent implements OnInit {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();
  buttons: Button[] = [
    { text: 'All', selected: true },
    { text: 'App', selected: false },
    { text: 'Academic', selected: false }
  ];

  constructor(private themeSwitchService: ThemeSwitchService) { }

  ngOnInit(): void {
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  onButtonClick(selectedButton: Button) {
    this.buttons.forEach(btn => btn.selected = false);
    selectedButton.selected = true;
  }
}
