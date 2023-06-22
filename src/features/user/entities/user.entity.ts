import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RoleEnum } from 'src/constant';

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
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: String, enum: RoleEnum, defaultValue: RoleEnum.ADMIN })
  role: string;

  // For comparing passwords
  comparePassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const saltRounds = process.env.PASSWORD_SALT_ROUNDS;
  const hashedPassword = await bcrypt.hash(this.password, saltRounds);
  this.password = hashedPassword;
  next();
});

// /**
//  * Check if password matches the user's password
//  */
UserSchema.methods.isPasswordMatch = async function (
  password: string,
): Promise<boolean> {
  const user = this;
  return bcrypt.compare(password, user.password);
};

// UserSchema.statics = {
//   isEmailTaken: async function (
//     email: string,
//     excludeUserId: Types.ObjectId,
//   ): Promise<boolean> {
//     const user = await this.findOne({
//       email,
//       _id: {
//         $ne: excludeUserId,
//       },
//     });
//     return !!user;
//   },
// };
