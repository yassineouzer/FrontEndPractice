import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { OpportunitesEmploiComponent } from './opportunites-emploi/opportunites-emploi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "ProfileUser", component: ProfileUserComponent },
  { path: "OpportunitesEmploi", component: OpportunitesEmploiComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
