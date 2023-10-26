import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IntervalService {
  private counter$: Observable<number> = new Observable();
}
