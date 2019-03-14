import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
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
