import { Module } from '@nestjs/common';
import { FpService } from './fp.service';
import { FpController } from './fp.controller';

@Module({
  controllers: [FpController],
  providers: [FpService],
})
export class FpModule {}
