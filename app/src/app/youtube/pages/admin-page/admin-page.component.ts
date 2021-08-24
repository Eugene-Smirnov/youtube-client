import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addCustomItem } from 'src/app/redux/actions/custom-items.actions';
import { CustomItemsService } from '../../services/custom-items.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  isClicked = false;

  constructor(
    private store: Store,
    private customItemsService: CustomItemsService,
    private router: Router,
  ) {}

  onSubmit(title: string, description: string, imageLink: string, videoLink: string) {
    this.isClicked = true;
    if (!title || !description || !imageLink || !videoLink) return;
    const newItem = this.customItemsService.createItem(title, description, imageLink, videoLink);
    this.store.dispatch(addCustomItem(newItem));
    this.router.navigate(['/search']);
  }
}
