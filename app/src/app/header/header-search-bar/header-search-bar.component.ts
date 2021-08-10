import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss'],
})
export class HeaderSearchBarComponent {
  @Output() search = new EventEmitter<string>();
}
