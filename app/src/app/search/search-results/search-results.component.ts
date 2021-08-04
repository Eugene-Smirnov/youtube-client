import { Component, Input, OnInit } from '@angular/core';
import { SearchItemModel } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() searchResponse?: SearchItemModel[];

  ngOnInit(): void {}
}
