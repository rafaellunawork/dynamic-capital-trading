export const APP_NAME = 'Dynamic Capital';

export const DEMO_BALANCE = 10_000;

export const SUPPORTED_ASSETS = ['BTC', 'ETH', 'SOL'] as const;
export type SupportedAsset = (typeof SUPPORTED_ASSETS)[number];

export const ORDER_TYPES = ['market', 'limit'] as const;
export type OrderType = (typeof ORDER_TYPES)[number];

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
