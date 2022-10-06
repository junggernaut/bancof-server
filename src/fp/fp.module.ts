import { Module } from '@nestjs/common';
import { FpService } from './fp.service';
import { FpController } from './fp.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [FpController],
  providers: [FpService],
})
export class FpModule {}
