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
    debounceTime(500),
    map((value) => value),
  );

  constructor(private router: Router) {}

  onSearchClick(): void {
    this.router.navigate(['/search']);
  }

  onSearchInput(inputValue: string): void {
    this.search.emit(inputValue);
  }

  ngOnInit(): void {
    this.searchValue$.subscribe((value) => this.onSearchInput(value));
  }

  onSettingsButtonClick(): void {
    this.toggleSettingsBar.emit();
  }
}
