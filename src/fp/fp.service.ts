import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getFetch } from 'src/externalApi/axios';
import apis from 'src/externalApi/url';
@Injectable()
export class FpService {
  constructor(private readonly config: ConfigService) {}

  async getFp(collectionAddress: string) {
    console.log(collectionAddress);
    console.log(this.config.get('NFTGO_API_KEY'));
    // const nftGo = await getFetch(
    //   `${apis.fp.nftgo.prefix}/${collectionAddress}/metrics`,
    //   {
    //     'X-API-KEY': NFTGO_API_KEY,
    //   },
    // );
    // console.log(nftGo);

    // const looksware = await getFetch(
    //   `${LOOKSWARE_URL_PREFIX}${collectionAddress}`,
    // );
    // console.log(looksware);
  }
}
