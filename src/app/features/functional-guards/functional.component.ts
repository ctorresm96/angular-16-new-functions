import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functional',
  templateUrl: './functional.component.html',
  styleUrls: ['./functional.component.scss'],
})
export class FunctionalComponent {
  constructor(private router: Router) {}

  goToPrivatePage() {
    this.router.navigate(['functional/private']);
  }

  goToListUsers() {
    this.router.navigate(['functional/products']);
  }
}
