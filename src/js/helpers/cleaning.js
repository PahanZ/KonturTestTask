export default (elem, value) => {
  Array.prototype.forEach.call(elem, (element) => {
    const card = element;
    card.style.opacity = value;
  });
};
