import CryptoJS from 'crypto-js';

const CRYPTO_SECRET = process.env.CRYPTO_SECRET as string;

export const encryptHandler = (value: string) => {
  const encrypt = CryptoJS.HmacSHA256(value, CRYPTO_SECRET).toString();

  return encrypt;
};
