import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Collection, CollectionSchema } from './collection.schema';

// struct Item {
//   Collection collection;
//   uint256 id;
// }

@Schema({ versionKey: false, _id: false })
export class Item {
  @Prop({ required: true, type: CollectionSchema })
  collection: Collection;

  @Prop({ required: true })
  id: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
