import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-submission-modal',
  templateUrl: './submission-modal.component.html',
  styleUrls: ['./submission-modal.component.scss']
})
export class SubmissionModalComponent implements OnInit {

  /**
   * Constructs Submission Modal
   * @param dialogRef
   * @param fb
   */
  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<SubmissionModalComponent>, fb: FormBuilder) {
    this.submissionForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      // tslint:disable-next-line: max-line-length
      eventlink: ['', [Validators.required, Validators.pattern('[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)')]]
    });
  }
  /**
   * FormGroup for SUbmSubmisson
   */
  submissionForm: FormGroup;
  /**
   * Close modal
   */
  closeModal(): void {
    this.dialogRef.close();
  }

  /**
   * Init hook
   */
  ngOnInit() {

  }

}
