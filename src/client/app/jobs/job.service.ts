import { Injectable } from '@angular/core';

import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  private jobs: Job[] = [
    new Job(1, 'zpeters', 'Zack'),
    new Job(2, 'hwalker', 'Herschel')
  ];

  constructor() { }

  getJobs() {
    return this.jobs.slice();
  }

  getJob(index: number) {
    return this.jobs[index];
  }


}
