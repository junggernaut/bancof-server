import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Item, ItemSchema } from './item.schema';

export type LoanDocument = Loan & Document;

// struct Loan {
//   address borrower;
//   address principalToken;
//   GenericTokenInterface.Item[] collaterals;
/// struct Item {
///   Collection collection;
///   uint256 id;
/// }
/// struct Collection {
///   address addr;
///  Spec spec;
/// }
/// enum Spec {invaild, eth, erc20, erc721, erc1155 /*, cryptopunk, cryptokitty */}
//   uint256[] collateralAmounts;
//   uint256[] principals;

//   uint256 beginTime;
//   uint256 duration;
//   uint256 interestRate;
// }

@Schema({ versionKey: false })
export class Loan {
  @Prop({ required: true })
  borrower: string;

  @Prop({ required: true })
  pricipalToken: string;

  @Prop({
    required: true,
    type: [ItemSchema],
  })
  collaterals: Item[];

  @Prop({ required: true })
  collateralAmounts: number[];

  @Prop({ required: true })
  principals: number[];

  @Prop({ required: true, type: Date })
  beginTime: number;

  @Prop({ required: true, type: Number })
  duration: number;

  @Prop({ required: true, type: Number })
  interestRate: number;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
