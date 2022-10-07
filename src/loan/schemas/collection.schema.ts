import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// struct Collection {
//   address addr;
//  Spec spec;
// }
/// enum Spec {invaild, eth, erc20, erc721, erc1155 /*, cryptopunk, cryptokitty */}

@Schema({ versionKey: false, _id: false })
export class Collection {
  @Prop({ required: true })
  addr: string;

  @Prop({ required: true })
  spec: string;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
