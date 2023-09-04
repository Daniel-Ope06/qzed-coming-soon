import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// my imported modules
import { FormsModule } from '@angular/forms';

// common components
import { EmailFormComponent } from './components/common/email-form/email-form.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { ThemeSwitchComponent } from './components/common/theme-switch/theme-switch.component';
import { WelcomeMsgComponent } from './components/common/welcome-msg/welcome-msg.component';

// desktop components
import { ComingSoonDesktopComponent } from './pages/desktop/coming-soon-desktop/coming-soon-desktop.component';


@NgModule({
  declarations: [
    AppComponent,

    // common
    EmailFormComponent,
    NavBarComponent,
    ThemeSwitchComponent,
    WelcomeMsgComponent,

    // desktop
    ComingSoonDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
