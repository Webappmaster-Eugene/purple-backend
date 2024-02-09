import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class HHData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface TopPageModel extends Base {}
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @prop()
  secondCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => HHData })
  hh?: HHData;

  @prop({ type: () => [TopPageAdvantage] })
  advantage: TopPageAdvantage[];

  @prop()
  seoText: string;

  @prop()
  tagsTitle: string;

  @prop()
  tags: string[];
}
