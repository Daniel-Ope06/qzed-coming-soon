import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {
  isDarkTheme = false;
  themeStorage = 'qzed-theme';

  constructor(private themeSwitchService: ThemeSwitchService) { }

  ngOnInit(): void { this.initializeTheme(); }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeSwitchService.setTheme(this.isDarkTheme);
    localStorage.setItem(this.themeStorage , this.isDarkTheme ? 'dark' : 'light');
  }

  initializeTheme(): void {
    if (localStorage.getItem(this.themeStorage)) {
      this.isDarkTheme = localStorage.getItem(this.themeStorage) === 'dark' ? true : false;
      this.themeSwitchService.setTheme(this.isDarkTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkTheme = prefersDark.matches;
      this.themeSwitchService.setTheme(this.isDarkTheme);
    }
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
      localStorage.setItem(this.themeStorage, isDarkTheme ? 'dark' : 'light');
    });
  }
}
