const formatLinkProduct = (path: string) => {
  const modify = path.split(' ');
  return modify.join('-').toLowerCase();
};

export default formatLinkProduct;
