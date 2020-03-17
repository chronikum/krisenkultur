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
   * Submission Form Group
   */
  submissionForm: FormGroup;

  /**
   * Constructs Submission Modal
   * @param dialogRef
   * @param fb
   */
  constructor(@Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<SubmissionModalComponent>, fb: FormBuilder) {
    this.submissionForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      eventLink: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
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
