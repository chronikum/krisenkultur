import { EventReference } from './../../models/event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-reference-holder',
  templateUrl: './event-reference-holder.component.html',
  styleUrls: ['./event-reference-holder.component.scss']
})
export class EventReferenceHolderComponent implements OnInit {
  /**
   * Events to be hold in 
   */
  @Input() events: [EventReference];
  constructor() { }

  ngOnInit() {
  }

}
