import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({type:'ObjectId'})
  organization:ObjectId;

  @Prop()
  position:string;

  @Prop({type:'ObjectId'})
  category:string;
  @Prop()
  jobLevel:string;

  @Prop()
  employmentType:string;

  @Prop()
  skills:string[];
  
  @Prop()
  salary:number;

  @Prop()
  overview:string;

  @Prop()
  requirements:string;

  @Prop()
  keywords:string[];

  @Prop({default:Date.now})
  createdAt:Date;
  
  @Prop({default:Date.now})
  updatedAt:Date;
  /*@Prop()
  username: string;

  @Prop()
  password:string;*/

  
}

export const UserSchema = SchemaFactory.createForClass(User);