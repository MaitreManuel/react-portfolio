export const is_json_valid = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
