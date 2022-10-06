import { Injectable } from '@nestjs/common';
import { getFetch } from 'src/externalApi/axios';
import apis from 'src/externalApi/url';

@Injectable()
export class FpService {
  getFp(collectionAddress: string) {
    console.log(collectionAddress);
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
