import jwt from 'jsonwebtoken';

export const tokenVerifyHandler = (value: string) => {
  const config = useRuntimeConfig();
  try {
    const token = jwt.verify(value, config.jwtSecret);
    if (token) return token;
    return 'Wrong credential';
  } catch (error) {
    return 'Something gone wrong';
  }
};

export const tokenCreateHandler = (value: any) => {
  const config = useRuntimeConfig();

  const token = jwt.sign(value, config.jwtSecret);

  return token;
};
