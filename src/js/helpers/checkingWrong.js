export default () => {
  const rights = Array.prototype.filter.call(document.getElementsByClassName('wrapFoCard'), element => !element.classList.contains('checked'));
  return rights.length;
};
