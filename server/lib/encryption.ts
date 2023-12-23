import CryptoJS from 'crypto-js';

const CRYPTO_SECRET = process.env.CRYPTO_SECRET as string;

export const encryptHandler = (value: string) => {
  const encrypt = CryptoJS.AES.encrypt(value, CRYPTO_SECRET).toString();

  return encrypt;
};

export const decryptHandler = (value: string) => {
  const decrypt = CryptoJS.AES.decrypt(value, CRYPTO_SECRET).toString(CryptoJS.enc.Utf8);

  return decrypt;
};
