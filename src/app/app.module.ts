import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
// import { YouTubePlayerModule } from "@angular/youtube-player";
// import { VgCoreModule } from '@videogular2/core';
// import { VgControlsModule } from 'videogular2/controls';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurServiceComponent } from './components/pages/our-service/our-service.component';
import { FeaturedsComponent } from './components/pages/featureds/featureds.component';
import { TourismsComponent } from './components/pages/tourisms/tourisms.component';
import { ArtsComponent } from './components/pages/arts/arts.component';
import { KitchensComponent } from './components/pages/kitchens/kitchens.component';
import { GalleriesComponent } from './components/pages/galleries/galleries.component';
import { ReviewersComponent } from './components/pages/reviewers/reviewers.component';
import { MoreDetailComponent } from './components/pages/more-detail/more-detail.component';
import { SanitizeHtmlPipe } from './components/pipes/sanitize-html.pipe';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    OurServiceComponent,
    FeaturedsComponent,
    TourismsComponent,
    ArtsComponent,
    KitchensComponent,
    GalleriesComponent,
    ReviewersComponent,
    MoreDetailComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // VgControlsModule,
    // VgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
