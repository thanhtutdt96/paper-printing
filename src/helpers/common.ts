export const commaHandler = (number: number) => {
  const regexPattern = /\B(?=(\d{3})+(?!\d))/g;

  return number.toString().replace(regexPattern, ',');
};
