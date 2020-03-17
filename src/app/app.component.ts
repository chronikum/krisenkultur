import { SubmissionModalComponent } from './modals/submission-modal/submission-modal.component';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'krisenkultur';


  constructor(public dialog: MatDialog) {

  }
  /**
   * Opens submission modal
   */
  openSubmissionModal() {
    const dialogRef = this.dialog.open(SubmissionModalComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
}
