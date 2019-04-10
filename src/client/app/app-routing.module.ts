import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsComponent } from './jobs/jobs.component';
import { JobStartComponent } from './jobs/job-start/job-start.component';
import { JobEditComponent } from './jobs/job-edit/job-edit.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobsComponent, children: [
    { path: '', component: JobStartComponent },
    { path: 'new', component: JobEditComponent },
    { path: ':id', component: JobDetailComponent },
    { path: ':id/edit', component: JobEditComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
