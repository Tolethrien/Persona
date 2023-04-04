export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const randomKey = () => {
  return Math.random().toString().slice(2, -2);
};
