import { Component, OnInit } from '@angular/core';
import { ThemeSwitchService } from 'src/app/services/theme-switch.service';
import { FireDBService } from 'src/app/services/fire-db.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  emailInput: string = '';
  isEmailExpanded: boolean = false;

  popUpMsg: string = '';
  isPopUpVisible: boolean = false;

  isDarkTheme: boolean = this.themeSwitchService.getTheme();

  constructor(private themeSwitchService: ThemeSwitchService, private fireDB: FireDBService) { }

  ngOnInit(): void {
    this.themeSwitchService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  openWhatsApp(): void {
    window.open('https://chat.whatsapp.com/B4iok9Lpl0SL6C7MhR2Hhn', '_blank');
  }

  async toggleEmail(): Promise<void> {
    this.isEmailExpanded = !this.isEmailExpanded;
    // to submit email
    if (!this.isEmailExpanded) {
      const email = this.emailInput.trim().toLowerCase();

      if (this.isEmailValid(email)) {
        this.emailInput = '';
        this.fireDB.addSubscriber(email);
        this.popUpMsg = 'Thank you for subscribing!\nYou will receive an email within 24hrs.';
      } else {
        this.popUpMsg = 'Please enter a valid email address.';
      }

      await this.showPopUp();
    }
  }

  isEmailValid(email: string): boolean {
    return (email.includes('@') && email.includes('.') );
  }

  async showPopUp(): Promise<void>{
    this.isPopUpVisible = true;
    await this.delay(4000);
    this.isPopUpVisible = false;
  }

  async delay(ms: number): Promise<void> {
    await new Promise<void>(resolve => setTimeout(() => resolve(), ms));
  }
}
