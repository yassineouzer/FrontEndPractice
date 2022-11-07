import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './partial/header/header.component';
import { HeroComponent } from './partial/hero/hero.component';
import { PartenairesComponent } from './partial/partenaires/partenaires.component';
import { ServicesComponent } from './partial/services/services.component';
import { OffresComponent } from './partial/offres/offres.component';
import { BlogComponent } from './partial/blog/blog.component';
import { LikesComponent } from './partial/likes/likes.component';
import { ActualitesComponent } from './partial/actualites/actualites.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './partial/footer/footer.component';

@NgModule({
  declarations: [
  
    HeaderComponent,
    HeroComponent,
    PartenairesComponent,
    ServicesComponent,
    OffresComponent,
    BlogComponent,
    LikesComponent,
    ActualitesComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
 
  ],
  providers: [],

})
export class AppModule { }
