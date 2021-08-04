import { Component, Input, OnInit } from '@angular/core';
import { SearchItemModel } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem?: SearchItemModel;

  ngOnInit(): void {}
}
