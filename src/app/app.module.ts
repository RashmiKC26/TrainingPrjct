import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDataEntryComponent } from './person-data-entry/person-data-entry.component';
import { PersonDataDisplayComponent } from './person-data-display/person-data-display.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { HttpClientModule } from '@angular/common/http';
import { PropernamePipe } from './propername.pipe';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { LinkedInEntryComponent } from './linked-in-entry/linked-in-entry.component';
import { LinkedInDisplayComponent } from './linked-in-display/linked-in-display.component';
import { LinkedInService } from './linked-in.service';
import { StudentServiceService } from './student-service.service';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDataEntryComponent,
    PersonDataDisplayComponent,
    StudentEntryComponent,
    StudentDisplayComponent,
    PropernamePipe,
    HighlightDirective,
    UnlessDirective,
    LinkedInEntryComponent,
    LinkedInDisplayComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LinkedInService,StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
