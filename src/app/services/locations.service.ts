import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  coordinates: any;
  constructor() { }
  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
        navigator.geolocation.getCurrentPosition((pos: Position) => {
          observer.next(pos);
        }),
          () => {
            console.log('Position is not available');
          }
      });
  }
}
