export default (prop, className) => {
  const rights = prop.filter(element => element === className);
  return rights.length * 42;
};
