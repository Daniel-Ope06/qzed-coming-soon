import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';

@Component({
  selector: 'app-coming-soon-desktop',
  templateUrl: './coming-soon-desktop.component.html',
  styleUrls: ['./coming-soon-desktop.component.scss']
})
export class ComingSoonDesktopComponent implements OnInit {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();

  constructor(private themeSwitchService: ThemeSwitchService) { }

  ngOnInit(): void {
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
}
