import { Body, Controller, Post } from '@nestjs/common';
import { LoanService } from './loan.service';
import { Loan } from './schemas/loan.schema';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post('/borrow')
  createLoan(@Body('loanData') loanData: Loan) {
    return this.loanService.createLoan(loanData);
  }
}
