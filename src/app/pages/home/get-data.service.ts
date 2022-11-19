import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './home.model';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Activity> {
    return this.httpClient.get<Activity>(
      'https://www.boredapi.com/api/activity'
    );
  }
}
