import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FpModule } from './fp/fp.module';
import { LoansModule } from './loans/loans.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LoansModule,
    FpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV == 'dev' ? 'env/.dev.env' : 'env/.prod.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
