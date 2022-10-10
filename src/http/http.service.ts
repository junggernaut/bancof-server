import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class GlobalHttpService {
  constructor(private readonly httpService: HttpService) {}

  get(url, headers) {
    return lastValueFrom(
      this.httpService
        .get(url, {
          headers,
        })
        .pipe(
          map((res) => res.data),
          catchError((err) => err),
        ),
    );
  }

  post(url, body, headers) {
    return lastValueFrom(
      this.httpService
        .post(url, body, {
          headers,
        })
        .pipe(
          map((res) => res.data),
          catchError((err) => err),
        ),
    );
  }
}
