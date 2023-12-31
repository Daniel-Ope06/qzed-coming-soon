import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase modules
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

// my imported modules
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

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
import { FeaturesComponent } from './pages/combined/features/features.component';

// desktop pages
import { BlogArticleDesktopComponent } from './pages/desktop/blog-article-desktop/blog-article-desktop.component';
import { BlogDesktopComponent } from './pages/desktop/blog-desktop/blog-desktop.component';
import { BlogListDesktopComponent } from './components/desktop/blog-list-desktop/blog-list-desktop.component';
import { ComingSoonDesktopComponent } from './pages/desktop/coming-soon-desktop/coming-soon-desktop.component';
import { FaqDesktopComponent } from './pages/desktop/faq-desktop/faq-desktop.component';

// mobile pages
import { BlogArticleMobileComponent } from './pages/mobile/blog-article-mobile/blog-article-mobile.component';
import { BlogMobileComponent } from './pages/mobile/blog-mobile/blog-mobile.component';
import { ComingSoonMobileComponent } from './pages/mobile/coming-soon-mobile/coming-soon-mobile.component';
import { FaqMobileComponent } from './pages/mobile/faq-mobile/faq-mobile.component';
import { FeaturesMobileComponent } from './pages/mobile/features-mobile/features-mobile.component';
import { PosterListMobileComponent } from './components/mobile/poster-list-mobile/poster-list-mobile.component';



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
    FeaturesComponent,

    // desktop
    BackgroundDecorationsDesktopComponent,
    BlogArticleDesktopComponent,
    BlogDesktopComponent,
    BlogListDesktopComponent,
    ComingSoonDesktopComponent,
    FaqDesktopComponent,

    // mobile
    BlogArticleMobileComponent,
    BlogListMobileComponent,
    BlogMobileComponent,
    ComingSoonMobileComponent,
    FaqMobileComponent,
    FeaturesMobileComponent,
    PosterListMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MarkdownModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
