import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedInEntryComponent } from './linked-in-entry/linked-in-entry.component';
import { LinkedInProjectResolverGuard } from './linked-in-project-resolver.guard';
import { ProfileViewComponent } from './profile-view/profile-view.component';


const routes: Routes = [
  {path:'linkedin-entry',component:LinkedInEntryComponent,resolve:{
    linkedIdData:LinkedInProjectResolverGuard}},
  {path:'profile-entry',component:ProfileViewComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
