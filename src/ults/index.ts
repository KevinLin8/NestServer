export function removeEmptyProps(obj) {
  for (let prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj,prop)){
    if (obj[prop] === null || obj[prop] === undefined || obj[prop] === '') {
      delete obj[prop];
    }
    }

  }
  return obj;
}