export const isValid = (content, type, length) => {
  if (content.length < length) {
    return false;
  } else if (typeof content !== type) {
    return false;
  } else {
    return true;
  }
};
