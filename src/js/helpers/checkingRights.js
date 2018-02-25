export default (prop) => {
  const rights = prop.filter(element => element === 'show');
  return rights.length * 42;
};
