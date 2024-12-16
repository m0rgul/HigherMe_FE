export const capitalizeString = (str: string): string =>
  str ? str.replace(/^./, (str) => str.toUpperCase()) : "";
