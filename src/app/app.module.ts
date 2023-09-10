import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// my imported modules
import { FormsModule } from '@angular/forms';

// common components
import { EmailFormComponent } from './components/common/email-form/email-form.component';
import { FaqListComponent } from './components/common/faq-list/faq-list.component';
import { LoadingSpinnerComponent } from './components/common/loading-spinner/loading-spinner.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { ThemeSwitchComponent } from './components/common/theme-switch/theme-switch.component';
import { WelcomeMsgComponent } from './components/common/welcome-msg/welcome-msg.component';

// desktop components
import { BackgroundDecorationsDesktopComponent } from './components/desktop/background-decorations-desktop/background-decorations-desktop.component';

// mobile components
import { BlogListMobileComponent } from './components/mobile/blog-list-mobile/blog-list-mobile.component';

// combined pages
import { BlogArticleComponent } from './pages/combined/blog-article/blog-article.component';
import { BlogComponent } from './pages/combined/blog/blog.component';
import { ComingSoonComponent } from './pages/combined/coming-soon/coming-soon.component';
import { FaqComponent } from './pages/combined/faq/faq.component';

// desktop pages
import { ComingSoonDesktopComponent } from './pages/desktop/coming-soon-desktop/coming-soon-desktop.component';
import { FaqDesktopComponent } from './pages/desktop/faq-desktop/faq-desktop.component';

// mobile pages
import { BlogArticleMobileComponent } from './pages/mobile/blog-article-mobile/blog-article-mobile.component';
import { BlogMobileComponent } from './pages/mobile/blog-mobile/blog-mobile.component';
import { ComingSoonMobileComponent } from './pages/mobile/coming-soon-mobile/coming-soon-mobile.component';
import { FaqMobileComponent } from './pages/mobile/faq-mobile/faq-mobile.component';


@NgModule({
  declarations: [
    AppComponent,

    // common
    EmailFormComponent,
    FaqListComponent,
    LoadingSpinnerComponent,
    NavBarComponent,
    ThemeSwitchComponent,
    WelcomeMsgComponent,

    // combined
    BlogArticleComponent,
    BlogComponent,
    ComingSoonComponent,
    FaqComponent,

    // desktop
    BackgroundDecorationsDesktopComponent,
    ComingSoonDesktopComponent,
    FaqDesktopComponent,

    // mobile
    BlogArticleMobileComponent,
    BlogListMobileComponent,
    BlogMobileComponent,
    ComingSoonMobileComponent,
    FaqMobileComponent
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
