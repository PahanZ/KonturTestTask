export default (prop) => {
  const rights = prop.filter(element => element === 'hide');
  return rights.length * 42;
};
