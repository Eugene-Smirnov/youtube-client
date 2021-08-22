import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header-search-params',
  templateUrl: './header-search-params.component.html',
  styleUrls: ['./header-search-params.component.scss'],
})
export class HeaderSearchParamsComponent {
  @Input() isDesc = true;

  @Input() searchByDate = false;

  @Input() searchByViews = false;

  @Output() searchFilterChange = new EventEmitter<string>();

  @Output() byDateClick = new EventEmitter();

  @Output() byViewsClick = new EventEmitter();
}
