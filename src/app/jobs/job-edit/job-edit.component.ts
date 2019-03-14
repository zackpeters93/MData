import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {
  id: number;
  editMode = false;
  jobForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private jobService: JobService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {

    let jobNameObj = '';
    let jobFolderObj = '';

    if (this.editMode){
      const job = this.jobService.getJob(this.id);
      jobNameObj = job.jobName;
      jobFolderObj = job.jobFolder;
    }

    this.jobForm = new FormGroup({
      'jobName': new FormControl(jobNameObj),
      'jobFolder': new FormControl(jobFolderObj)
    });
  }

}
