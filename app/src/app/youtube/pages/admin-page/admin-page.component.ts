import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  isClicked = false;

  constructor(private store: Store) {}

  onSubmit() {
    this.isClicked = true;
  }

  // ngOnInit(): void {}
}
