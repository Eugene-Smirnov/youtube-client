import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { SEARCH_REQ_URL, VIDEOS_REQ_URL } from 'src/app/shared/variables';
import { SearchItemModel } from '../models/search-item.model';
import { SearchResponseModel } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private descriptionItem: BehaviorSubject<SearchItemModel | null> =
    new BehaviorSubject<SearchItemModel | null>(null);

  descriptionItem$: Observable<SearchItemModel | null> = this.descriptionItem.pipe();

  searchItems(inputValue: string): Observable<SearchItemModel[]> {
    const searchReqURL = `${SEARCH_REQ_URL}?q=${inputValue}`;
    return this.http.get<{ items: { id: { videoId: string } }[] }>(searchReqURL).pipe(
      map(({ items }) => items.map((item) => item.id.videoId).join(',')),
      switchMap((idArr) => this.httpVideoReq(idArr)),
    );
  }

  httpVideoReq(idArr: string): Observable<SearchItemModel[]> {
    const videosReqUrl = `${VIDEOS_REQ_URL}?id=${idArr}`;
    return this.http.get<SearchResponseModel>(videosReqUrl).pipe(map((res) => res.items));
  }

  getDescription(idArr: string): void {
    const videosRes$ = this.httpVideoReq(idArr);
    videosRes$.subscribe((res) => {
      this.descriptionItem.next(res[0]);
    });
  }
}
