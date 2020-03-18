import { SubmissionModalComponent } from './modals/submission-modal/submission-modal.component';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ApiClientService } from './services/api-client.service';
import { EventReference } from './models/event';
import { Tag } from './models/tag';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'krisenkultur';

  /**
   * Loaded events
   */
  events: EventReference[];
  /**
   * Init hook
   * @param dialog
   * @param apiClient
   */
  constructor(public dialog: MatDialog, private apiClient: ApiClientService) {
    this.testApi()
  }


  /**
   * Load data
   */
  loadData() {
    let result = this.apiClient.getAll().subscribe(events => {
      console.log(this.events);
      this.events = events as EventReference[];
    })
  }

  /**
   * APi Testing function
   */
  testApi() {
    let result = this.apiClient.getEventsById(3).subscribe(result => {
      console.log('one element', result as EventReference)
      this.events = [result as EventReference];
      this.events.push(result as EventReference);
      this.events.push(result as EventReference);
      this.events.push(result as EventReference);
      this.events.push(result as EventReference);
      this.events.push(result as EventReference);
      this.events.push(result as EventReference);
      this.events.push(result as EventReference);
      this.events.push(result as EventReference);
      this.events.push(result as EventReference);

    });
    let result2 = this.apiClient.getEventsByDate("2020-03-17").subscribe(result => {
      console.log("by date", result)
    });
    let result3 = this.apiClient.getTagsForEvent(1).subscribe(result => {
      console.log("by id", result)
    })
    let result4 = this.apiClient.getAllTags().subscribe(result => {
      console.log("all taggs", result)
    })
    let result5 = this.apiClient.getWithTag("Klimagerechtigkeit").subscribe(result => {
      console.log("get with tag", result)
    })

    //Currently not working
    let result1 = this.apiClient.getAll().subscribe(result => {
      console.log('all', result)
    });
  }


  /**
   * Opens submission modal
   */
  openSubmissionModal() {
    const dialogRef = this.dialog.open(SubmissionModalComponent, {
      width: '800px',
    });
  }
}
