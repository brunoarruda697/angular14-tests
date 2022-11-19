import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetDataService } from './get-data.service';
import { Activity } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data$: Observable<Activity>;

  constructor(private getDataService: GetDataService) {
    this.data$ = this.getDataService.getData();
  }
}
