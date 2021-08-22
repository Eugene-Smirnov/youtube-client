import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SEARCH_REQ_URL, VIDEOS_REQ_URL } from 'src/app/shared/variables';
import { SearchItemModel } from '../models/search-item.model';
import { SearchResponseModel } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private items: BehaviorSubject<SearchItemModel[]> = new BehaviorSubject<SearchItemModel[]>([]);

  items$: Observable<SearchItemModel[]> = this.items.pipe();

  private descriptionItem: BehaviorSubject<SearchItemModel | null> =
    new BehaviorSubject<SearchItemModel | null>(null);

  descriptionItem$: Observable<SearchItemModel | null> = this.descriptionItem.pipe();

  searchItems(inputValue: string): void {
    const searchReqURL = `${SEARCH_REQ_URL}?q=${inputValue}`;
    const searchRes$ = this.http.get<{ items: { id: { videoId: string } }[] }>(searchReqURL);
    let idArr = '';
    searchRes$.subscribe((res) => {
      idArr = res.items.map((item) => item.id.videoId).join(',');
      this.getVideos(idArr);
    });
  }

  getVideos(idArr: string): void {
    const videosRes$ = this.httpVideoReq(idArr);
    videosRes$.subscribe((res) => {
      this.items.next(res.items);
    });
  }

  httpVideoReq(idArr: string): Observable<SearchResponseModel> {
    const videosReqUrl = `${VIDEOS_REQ_URL}?id=${idArr}`;
    const videosRes$ = this.http.get<SearchResponseModel>(videosReqUrl);
    return videosRes$;
  }

  getDescription(idArr: string): void {
    const videosRes$ = this.httpVideoReq(idArr);
    videosRes$.subscribe((res) => {
      this.descriptionItem.next(res.items[0]);
    });
  }
}
