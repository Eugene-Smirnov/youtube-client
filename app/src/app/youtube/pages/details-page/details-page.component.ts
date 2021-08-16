import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItemModel } from '../../models/search-item.model';
import { SearchService } from '../../services/search.service';
import {
  PUB_LESS_MONTH_CLASS,
  PUB_LESS_WEEK_CLASS,
  PUB_MORE_HALF_YEAR_CLASS,
} from '../../../shared/variables';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  item: SearchItemModel | null = null;

  publicationClass = '';

  constructor(private route: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit(): void {
    const urlID = this.route.snapshot.params.id;
    const item = this.searchService.getItemById(urlID);
    if (item) this.item = item;

    if (!this.item?.snippet.publishedAt) return;
    const publicationDate = new Date(this.item.snippet.publishedAt).getTime();
    const daysFromPublication = (new Date().getTime() - publicationDate) / 1000 / 60 / 60 / 24;
    if (daysFromPublication < 7) {
      this.publicationClass = PUB_LESS_WEEK_CLASS;
    } else if (daysFromPublication < 31) {
      this.publicationClass = PUB_LESS_MONTH_CLASS;
    } else if (daysFromPublication > 182) {
      this.publicationClass = PUB_MORE_HALF_YEAR_CLASS;
    }
  }
}
