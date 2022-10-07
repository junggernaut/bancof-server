import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Loan, LoanSchema } from './schemas/loan.schema';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Loan.name, schema: LoanSchema }]),
  ],
  controllers: [LoanController],
  providers: [LoanService],
})
export class LoansModule {}
