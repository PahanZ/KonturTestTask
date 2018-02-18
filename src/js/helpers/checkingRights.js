export default () => {
  const rights = Array.prototype.map.call(document.getElementsByClassName('checked'), element => element);
  return rights.length;
};
