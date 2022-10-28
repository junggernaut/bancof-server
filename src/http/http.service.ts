import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class GlobalHttpService {
  constructor(private readonly httpService: HttpService) {}

  get(url, headers?) {
    return lastValueFrom(
      this.httpService
        .get(url, {
          headers,
        })
        .pipe(
          map((res) => {
            return {
              success: true,
              data: res.data,
            };
          }),
        ),
    ).catch((err) => {
      return {
        success: false,
        data: err,
      };
    });
  }

  post(url, body?, headers?) {
    return lastValueFrom(
      this.httpService
        .post(url, body, {
          headers,
        })
        .pipe(
          map((res) => {
            return {
              success: true,
              data: res.data,
            };
          }),
        ),
    ).catch((err) => {
      return {
        success: false,
        data: err,
      };
    });
  }
}
