import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LoanDocument = Loan & Document;

@Schema()
export class Loan {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  hash: string;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
