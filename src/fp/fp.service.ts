import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import apis from 'src/http/urls';
import { GlobalHttpService } from 'src/http/http.service';

@Injectable()
export class FpService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: GlobalHttpService,
  ) {}

  getAverageFp(fps: Array<number>) {
    fps.forEach((fp) => console.log(fp));
  }

  async getFp(collectionAddress: string) {
    const first = await this.httpService.get(
      `${apis.fp.nftgo.prefix}${collectionAddress}/metrics`,
      { 'X-API-KEY': this.config.get('NFTGO_API_KEY') },
    );
    console.log(first.floor_price);

    // const second = await lastValueFrom(
    //   this.httpService
    //     .get(`${apis.fp.looksware.prefix}${collectionAddress}`)
    //     .pipe(map((res) => res.data)),
    // );
    // console.log(second.data);
    return first.floor_price;
  }
}
