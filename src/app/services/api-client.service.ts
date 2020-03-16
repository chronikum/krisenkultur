import { Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  tagsForEvent(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.endpoint + '?get_taggs_for_event=' + id)
  }

}
