import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ArtsComponent } from './components/pages/arts/arts.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FeaturedsComponent } from './components/pages/featureds/featureds.component';
import { GalleriesComponent } from './components/pages/galleries/galleries.component';
import { KitchensComponent } from './components/pages/kitchens/kitchens.component';
import { MoreDetailComponent } from './components/pages/more-detail/more-detail.component';
import { OurServiceComponent } from './components/pages/our-service/our-service.component';
import { ReviewersComponent } from './components/pages/reviewers/reviewers.component';
import { TourismsComponent } from './components/pages/tourisms/tourisms.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
// import { WelcomeComponent } from '../app/components/welcome.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about-us', component: AboutComponent, data: { animation: 'isRight' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'isLeft' } },
  { path: 'service', component: OurServiceComponent, data: { animation: 'isRight' } },
  { path: 'featured', component: FeaturedsComponent, data: { animation: 'isLeft' } },
  { path: 'tourism', component: TourismsComponent, data: { animation: 'isRight' } },
  { path: 'arts', component: ArtsComponent, data: { animation: 'isLeft' } },
  { path: 'kitchens', component: KitchensComponent, data: { animation: 'isRight' } },
  { path: 'galleries', component: GalleriesComponent, data: { animation: 'isLeft' } },
  { path: 'reviews', component: ReviewersComponent, data: { animation: 'isRight' } },


  { path: 'event-more-detail', component: MoreDetailComponent },

  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
