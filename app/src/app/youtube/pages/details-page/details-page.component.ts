import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    const urlID = this.route.snapshot.params.id;
    this.searchService.getDescription(urlID);
    this.searchService.descriptionItem$.subscribe((item) => {
      if (item) {
        this.item = item;
      } else this.router.navigate(['/404']);
    });

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
