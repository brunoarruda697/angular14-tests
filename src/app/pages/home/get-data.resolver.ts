import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root',
})
export class GetDataResolver implements Resolve<any> {
  constructor(private getDataService: GetDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getDataService.getData();
  }
}
