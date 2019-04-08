import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Job } from '../job.model';
import { JobService } from '../job.service';

import { DataService } from './data.service';
import { Data } from './data.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  datas: Data[];
  job: Job;
  id: number;

  constructor(private dataService: DataService,
              private jobService: JobService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.job = this.jobService.getJob(this.id);
        }
      )

    this.datas = this.dataService.getDatas();
  }

  onNewData() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditJob() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
