import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';

@Component({
  selector: 'app-background-decorations-desktop',
  templateUrl: './background-decorations-desktop.component.html',
  styleUrls: ['./background-decorations-desktop.component.scss']
})
export class BackgroundDecorationsDesktopComponent implements OnInit {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();

  constructor(private themeSwitchService: ThemeSwitchService) { }

  ngOnInit(): void {
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
}
