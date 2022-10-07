import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import apis from 'src/fp/urls';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FpService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  getAverageFp(fps: Array<number>) {
    fps.forEach((fp) => console.log(fp));
  }

  async getFp(collectionAddress: string) {
    const first = await lastValueFrom(
      this.httpService
        .get(`${apis.fp.nftgo.prefix}${collectionAddress}/metrics`, {
          headers: { 'X-API-KEY': this.config.get('NFTGO_API_KEY') },
        })
        .pipe(map((res) => res.data)),
    );
    console.log(first.floor_price);

    const second = await lastValueFrom(
      this.httpService
        .get(`${apis.fp.looksware.prefix}${collectionAddress}`)
        .pipe(map((res) => res.data)),
    );
    console.log(second.data);
  }
}
