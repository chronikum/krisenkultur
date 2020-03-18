import { EventReference } from './../models/event';
import { Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../models/tag';

/**
 * Service to communicate with the backend
 */
@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  /**
   * Endpoint
   */
  endpoint = 'https://krisenkultur.de/api/index.php';

  /**
   * Init hook
   */
  constructor(private http: HttpClient) {

  }

  /**
   * Get all events
   */
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + '?get_all')
  }

  /**
   * Get all tags from server
   */
  getAllTags(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + '?get_taggs')
  }
  /**
   * Get entries from server with tag
   */
  getWithTag(tag: string): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + '?get_with_tagg=' + tag)
  }
  /**
   * Get tags for event
   */
  getTagsForEvent(id: number): Observable<Tag[]> {
    return this.http.get<any[]>(this.endpoint + '?get_taggs_for_event=' + id)
  }

  /**
   * Get event by id
   */
  getEventsById(id: number): Observable<EventReference> {
    return this.http.get<EventReference>(this.endpoint + '?get_by_id=' + id)
  }

  /**
   * Get events by date (%d.%m.%Y)
   */
  getEventsByDate(date: string): Observable<EventReference[]> {
    return this.http.get<EventReference[]>(this.endpoint + '?get_events_by_date=' + date)
  }

  // /**
  //  * Create event
  //  */
  // createEvent(event: EventReference): Observable<EventReference> {
  //   return this.http.get<EventReference>(this.endpoint + '?createEvent=' + date)
  // }
}
