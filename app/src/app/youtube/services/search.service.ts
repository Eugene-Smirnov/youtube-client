import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { SearchItemModel } from '../models/search-item.model';
import { SearchResponseModel } from '../models/search-response.model';

const SEARCH_REQ_URL =
  'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDd5ivcNnIbI6u7F9NcjVwP1vsmc3H_9J4&part=snippet&maxResults=10&q=';

const VIDEOLIST_REQ_URL =
  'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDd5ivcNnIbI6u7F9NcjVwP1vsmc3H_9J4&part=snippet,statistics&id=';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private items: BehaviorSubject<SearchItemModel[]> = new BehaviorSubject<SearchItemModel[]>([]);

  items$: Observable<SearchItemModel[]> = this.items.pipe(
    debounceTime(300),
    map((items) => items),
  );

  private descriptionItem: BehaviorSubject<SearchItemModel | null> =
    new BehaviorSubject<SearchItemModel | null>(null);

  descriptionItem$: Observable<SearchItemModel | null> = this.descriptionItem.pipe(
    map((item) => item),
  );

  searchItems(inputValue: string): void {
    const searchReqURL = `${SEARCH_REQ_URL}${inputValue}`;
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
    const videosReqUrl = `${VIDEOLIST_REQ_URL}${idArr}`;
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
