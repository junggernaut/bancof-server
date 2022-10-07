import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Loan, LoanDocument } from './schemas/loan.schema';

@Injectable()
export class LoanService {
  constructor(
    @InjectModel(Loan.name) private readonly loanModel: Model<LoanDocument>,
  ) {}

  create(name: string, hash: string) {
    const newLoan = new this.loanModel({ name, hash });
    return newLoan.save();
  }
}
