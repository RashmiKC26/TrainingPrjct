import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedInEntryComponent } from './linked-in-entry/linked-in-entry.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';


const routes: Routes = [
  {path:'linkedin-entry',component:LinkedInEntryComponent},
  {path:'profile-entry',component:ProfileViewComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
