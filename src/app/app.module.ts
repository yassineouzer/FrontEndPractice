import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ServicesComponent } from './services/services.component';
import { OffresComponent } from './offres/offres.component';
import { BlogComponent } from './blog/blog.component';
import { LikesComponent } from './likes/likes.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { OpportunitesEmploiComponent } from './opportunites-emploi/opportunites-emploi.component';

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
    OpportunitesEmploiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
