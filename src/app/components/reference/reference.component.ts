import { EventReference } from './../../models/event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  @Input() event: EventReference;

  constructor() { }

  ngOnInit() {

  }

}
