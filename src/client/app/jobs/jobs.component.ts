import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { JobService } from './job.service';
import { Job } from './job.model';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobService]
})
export class JobsComponent implements OnInit {
  jobs: Job[];

  constructor(private jobService: JobService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

  onNewJob() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
