import { Body, Controller, Post } from '@nestjs/common';
import { stringify } from 'querystring';
import { LoanService } from './loan.service';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  createLoan(@Body('name') name: string, @Body('hash') hash: string) {
    return this.loanService.create(name, hash);
  }
}
