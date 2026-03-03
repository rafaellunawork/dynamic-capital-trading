import mongoose from 'mongoose';
import { env } from './env';

export async function connectDB(): Promise<void> {
  const uri = env.mongoUri;

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB runtime error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected');
  });
}

export function getDB() {
  return mongoose.connection;
}
