import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/partial/header/header.component';
import { HeroComponent } from './home/partial/hero/hero.component';
import { PartenairesComponent } from './home/partial/partenaires/partenaires.component';
import { ServicesComponent } from './home/partial/services/services.component';
import { OffresComponent } from './home/partial/offres/offres.component';
import { BlogComponent } from './home/partial/blog/blog.component';
import { LikesComponent } from './home/partial/likes/likes.component';
import { ActualitesComponent } from './home/partial/actualites/actualites.component';
import { FooterComponent } from './home/partial/footer/footer.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { OpportunitesEmploiComponent } from './opportunites-emploi/opportunites-emploi.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    PartenairesComponent,
    ServicesComponent,
    OffresComponent,
    BlogComponent,
    LikesComponent,
    ActualitesComponent,
    FooterComponent,
    ProfileUserComponent,
    OpportunitesEmploiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
