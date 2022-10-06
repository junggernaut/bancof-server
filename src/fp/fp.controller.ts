import { Controller, Get, Param } from '@nestjs/common';
import { FpService } from './fp.service';

@Controller('fp')
export class FpController {
  constructor(private readonly fpService: FpService) {}

  @Get(':collectionAddress')
  getFp(@Param('collectionAddress') collectionAddress: string) {
    return this.fpService.getFp(collectionAddress);
  }
}
