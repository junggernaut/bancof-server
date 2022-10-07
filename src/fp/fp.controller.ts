import { Controller, Get, Param } from '@nestjs/common';
import { FpService } from './fp.service';

@Controller('fp')
export class FpController {
  constructor(private readonly fpService: FpService) {}

  @Get(':collectionAddress')
  async getFp(@Param('collectionAddress') collectionAddress: string) {
    const fp = await this.fpService.getFp(collectionAddress);
    return fp;
  }
}
