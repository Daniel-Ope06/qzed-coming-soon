import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// common components
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { ThemeSwitchComponent } from './components/common/theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    AppComponent,

    // common
    NavBarComponent,
    ThemeSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
