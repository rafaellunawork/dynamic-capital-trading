import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password?: string;
  name: string;
  role: 'user' | 'admin';
  isVerified: boolean;
  verificationToken?: string;
  resetToken?: string;
  resetTokenExpiry?: Date;
  googleId?: string;
  lastDemoReset?: Date;
  walkthroughCompleted: boolean;
  notificationPrefs: {
    email: boolean;
    inApp: boolean;
    priceAlerts: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String },
    name: { type: String, required: true, trim: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
    googleId: { type: String },
    lastDemoReset: { type: Date },
    walkthroughCompleted: { type: Boolean, default: false },
    notificationPrefs: {
      email: { type: Boolean, default: true },
      inApp: { type: Boolean, default: true },
      priceAlerts: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

userSchema.index({ googleId: 1 }, { unique: true, sparse: true });

export const User = model<IUser>('User', userSchema);
