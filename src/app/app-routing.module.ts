import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUserComponent } from './profile-user/profile-user.component';

const routes: Routes = [
  {path:"ProfileUser", component:ProfileUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
