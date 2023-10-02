import { Redis } from 'ioredis';

const config = useRuntimeConfig();

const getRedisUrl = () => {
  if (config.baseRedisUrl) return config.baseRedisUrl;

  throw new Error('Redis Url not defined');
};

export const redis = new Redis(getRedisUrl());
