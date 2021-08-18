import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss'],
})
export class HeaderSearchBarComponent implements OnInit {
  @Input() isSearchSettingsOpened: boolean = false;

  @Output() search = new EventEmitter<string>();

  @Output() toggleSettingsBar = new EventEmitter();

  searchValue = new FormControl('');

  searchValue$: Observable<string> = this.searchValue.valueChanges.pipe(
    debounceTime(300),
    map((value) => value),
  );

  constructor(private router: Router) {}

  onSearchInput(inputValue: string) {
    this.router.navigate(['/search']);
    this.search.emit(inputValue);
  }

  ngOnInit() {
    this.searchValue$.subscribe((value) => this.onSearchInput(value));
  }

  onSettingsButtonClick(): void {
    this.toggleSettingsBar.emit();
  }
}
