import { Injectable } from '@angular/core';
import { createClient, Entry, EntryCollection } from 'contentful';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  // Get contentful client
  private client = createClient({
    space: 'ub24u7c1cn4k',
    accessToken: 'hIHeyQUpjSlqX_-dUVaQSIJHG1GbcZnE5E8vvwF2UBc'
  });

  // Get all entries of a specific content type
  getEntries(contentType: string): Observable<EntryCollection<any>> {
    return from(this.client.getEntries({
      content_type: contentType
    }));
  }

  // Get entry by ID
  getEntry(id: string): Observable<Entry<any>> {
    return from(this.client.getEntry(id));
  }
}
