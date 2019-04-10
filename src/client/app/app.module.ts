import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobItemComponent } from './jobs/job-list/job-item/job-item.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobEditComponent } from './jobs/job-edit/job-edit.component';
import { JobStartComponent } from './jobs/job-start/job-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DataListComponent } from './jobs/job-detail/data-list/data-list.component';
import { DataItemComponent } from './jobs/job-detail/data-list/data-item/data-item.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JobsComponent,
    JobListComponent,
    JobItemComponent,
    JobDetailComponent,
    JobEditComponent,
    JobStartComponent,
    DropdownDirective,
    DataListComponent,
    DataItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
