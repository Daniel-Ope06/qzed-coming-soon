import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';

@Component({
  selector: 'app-faq-mobile',
  templateUrl: './faq-mobile.component.html',
  styleUrls: ['./faq-mobile.component.scss']
})
export class FaqMobileComponent implements OnInit {
  isDarkTheme: boolean = this.themeSwitchService.getTheme();

  constructor(private themeSwitchService: ThemeSwitchService) { }

  ngOnInit(): void {
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  sendEmail(): void {
    const emailAddress = 'qzedanswers@outlook.com';
    const subject = 'Your Subject Here';
    const body = 'Hi Qzed,\nYour email body goes here.';
    const mailToLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailToLink);
  }
}
