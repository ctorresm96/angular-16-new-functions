import { Component, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-destroy-ref',
  templateUrl: './destroy-ref.component.html',
  styleUrls: ['./destroy-ref.component.scss'],
})
export class DestroyRefComponent {
  counter = 0;

  constructor() {
    interval(100).subscribe(() => {
      this.counter++;
      console.log(this.counter);
    });
  }
}

// constructor() {
//   interval(100)
//     .pipe(takeUntil(this.componentDestroyed$))
//     .subscribe(() => {
//       this.counter++;
//       console.log(this.counter);
//     });
// }

// ngOnDestroy(): void {
//   this.componentDestroyed$.next(true);
//   this.componentDestroyed$.complete();
// }
