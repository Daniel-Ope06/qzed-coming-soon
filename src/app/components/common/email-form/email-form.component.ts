import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  emailInput: string = '';
  isEmailExpanded: boolean = false;
  isDarkTheme: boolean = this.themeSwitchService.getTheme();

  constructor(private themeSwitchService: ThemeSwitchService) { }

  ngOnInit(): void {
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  openWhatsApp(): void {
    window.open('https://chat.whatsapp.com/B4iok9Lpl0SL6C7MhR2Hhn', '_blank');
  }

  toggleEmail(): void {
    this.isEmailExpanded = !this.isEmailExpanded;
  }

  isEmailValid(): boolean {
    return (this.emailInput.includes('@') && this.emailInput.includes('.') );
  }
}
