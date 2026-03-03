import { Schema, model, Document } from 'mongoose';

export interface IAsset extends Document {
  symbol: string;
  name: string;
  isActive: boolean;
  decimals: number;
  minQuantity: number;
  icon?: string;
  createdAt: Date;
  updatedAt: Date;
}

const assetSchema = new Schema<IAsset>(
  {
    symbol: { type: String, required: true, unique: true, uppercase: true, trim: true },
    name: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    decimals: { type: Number, default: 8 },
    minQuantity: { type: Number, default: 0.001 },
    icon: { type: String },
  },
  { timestamps: true }
);

export const Asset = model<IAsset>('Asset', assetSchema);
