export const getShortDisplayString: any = (address: string) => {
  const firstFourDigit = address?.slice(0, 4);
  const lastFourDigit = address?.slice(Number(address?.length) - 4);

  const string = `${firstFourDigit}...${lastFourDigit}`;
  return string;
};
