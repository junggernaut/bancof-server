import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FpModule } from './fp/fp.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [LoansModule, FpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
