import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';

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
    ).catch((error) => {
      if (error.response) {
        return {
          success: false,
          data: error.response.data,
        };
      } else if (error.request) {
        return {
          success: false,
          data: error.request,
        };
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        return {
          success: false,
          data: error.message,
        };
      }
    });
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
