const convertProductLink = (name: string) => {
  return name.split(' ').join('-').toLocaleLowerCase();
};

export default convertProductLink;
