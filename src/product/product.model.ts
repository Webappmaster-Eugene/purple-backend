import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

class ProductCharacteristic {
  @prop()
  name: string;

  @prop()
  value: string;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface ProductModel extends Base {}
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class ProductModel extends TimeStamps {
  @prop()
  image: string;

  @prop()
  description: string;

  @prop()
  price: number;

  @prop()
  title: string;

  @prop()
  oldPrice: number;
  credit: number;

  @prop()
  calculatedRating: number;

  @prop()
  advantages: string;

  @prop()
  disAdvantages: string;

  @prop({ type: () => [String] })
  categories: string[];

  @prop({ type: () => [String] })
  tags: string[];

  @prop({ type: () => [ProductCharacteristic], _id: false })
  characteristics: ProductCharacteristic[];
}
