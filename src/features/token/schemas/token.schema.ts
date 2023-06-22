import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TokenEnum } from 'src/constant';

@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
})
export class Token extends Document {
  @Prop({ type: String, index: true, required: true })
  token: string;

  @Prop({
    type: String,
    enum: [TokenEnum.REFRESH, TokenEnum.RESET_PASSWORD, TokenEnum.VERIFY_EMAIL],
    required: true,
  })
  type: string;

  @Prop({ type: Date, required: true })
  expires: Date;

  @Prop({ type: Boolean, default: false })
  blacklisted: boolean;

  @Prop({ type: Boolean, default: true })
  visibility: boolean;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
