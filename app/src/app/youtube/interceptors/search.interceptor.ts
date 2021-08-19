import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { SEARCH_REQ_URL, VIDEOS_REQ_URL } from 'src/app/shared/variables';

const API_KEY = 'AIzaSyDd5ivcNnIbI6u7F9NcjVwP1vsmc3H_9J4';

export const PART_SNIPPET = 'snippet';
export const PART_STATISTICS = 'statistics';
export const MAX_RESULTS = 10;

@Injectable()
export class SearchParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(SEARCH_REQ_URL)) {
      const paramReq = req.clone({
        url: req.url.replace(
          req.url,
          `${req.url}&key=${API_KEY}&part=${PART_SNIPPET}&maxResults=${MAX_RESULTS}`,
        ),
      });
      return next.handle(paramReq);
    }

    if (req.url.includes(VIDEOS_REQ_URL)) {
      const paramReq = req.clone({
        url: req.url.replace(
          req.url,
          `${req.url}&key=${API_KEY}&part=${PART_SNIPPET},${PART_STATISTICS}`,
        ),
      });
      return next.handle(paramReq);
    }

    return next.handle(req);
  }
}
