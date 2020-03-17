import { Component, Injectable } from '@angular/core';
import { ApiClientService } from './services/api-client.service';
import {Event} from './models/event';
import { Tag } from './models/tag';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'krisenkultur';

  constructor(private apiClient: ApiClientService) {
    //Some tests
    let result = apiClient.getEventsById(1).subscribe( result => {
        console.log('one element', result as Event)
    });
    let result2 = apiClient.getEventsByDate("2020-03-15 18:54:06").subscribe( result => {
      console.log("by date", result)
    });
    let result3 = apiClient.getTagsForEvent(1).subscribe(result => {
      console.log("by id", result)
    })
    let result4 = apiClient.getAllTags().subscribe(result => {
      console.log("all taggs", result)
    })
    let result5 = apiClient.getWithTag("Klimagerechtigkeit").subscribe(result => {
      console.log("get with tag", result)
    })

    //Currently not working
    let result1 = apiClient.getAll().subscribe( result => {
      console.log('all', result)
    });
  }
}
