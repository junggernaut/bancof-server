import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import urls from 'src/http/urls';
import { GlobalHttpService } from 'src/http/http.service';

@Injectable()
export class FpService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: GlobalHttpService,
  ) {}

  async getFp(collectionAddress: string) {
    const fps: number[] = [];
    const [nftgo, looksware] = await Promise.all([
      this.httpService.get(
        `${urls.fp.nftgo.prefix}${collectionAddress}/metrics`,
        { 'X-API-KEY': this.config.get('NFTGO_API_KEY') },
      ),
      this.httpService.get(`${urls.fp.looksware.prefix}${collectionAddress}`),
    ]);
    if (nftgo.success === true) {
      console.log(nftgo.data.floor_price.value);
      fps.push(nftgo.data.floor_price.value);
    }
    if (looksware.success === true) {
      fps.push(looksware.data.data.floorPrice / 10 ** 18);
    }
    return fps.reduce((x, y) => x + y) / fps.length;
  }
}
