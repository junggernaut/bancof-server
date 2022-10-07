import { Module } from '@nestjs/common';
import { FpService } from './fp.service';
import { FpController } from './fp.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FpController],
  providers: [FpService],
})
export class FpModule {}
