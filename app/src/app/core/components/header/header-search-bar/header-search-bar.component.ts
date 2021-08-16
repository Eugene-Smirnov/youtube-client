import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss'],
})
export class HeaderSearchBarComponent {
  @Input() isSearchSettingsOpened: boolean = false;

  @Output() search = new EventEmitter<string>();

  @Output() toggleSettingsBar = new EventEmitter();

  constructor(private router: Router) {}

  onSettingsButtonClick(): void {
    this.toggleSettingsBar.emit();
  }

  onSearchButton(inputValue: string) {
    this.router.navigate(['/search']);
    this.search.emit(inputValue);
  }
}
