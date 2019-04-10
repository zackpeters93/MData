export class Job {
  public jobID: number;
  public jobName: string;
  public jobFolder: string;

  constructor(jobID: number, jobName: string, jobFolder: string) {
    this.jobID = jobID;
    this.jobName = jobName;
    this.jobFolder = jobFolder;
  }
}
