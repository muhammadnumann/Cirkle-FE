export const objectKeys = <T extends {}>(obj: T) => {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
};

export const objectValues = <T extends {}>(obj: T) => {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
};

export const stringToEnum = <ET, T>(enumObj: ET, str: keyof ET): T => enumObj[<string>str];
