/* eslint-disable */

export const toCamelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
};

export const toTitleCase = (str) => {
  const pattern = /\w\S*/g;
  const cb = txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();

  return str.replace(pattern, cb);
};

export const hasClass = (el, className) => {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

export const addClass = (el, className) => {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

export const removeClass = (el, className) => {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}
