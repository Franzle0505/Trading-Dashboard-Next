export const formatShorterNumber = (num) => {
  const sign = Math.sign(num) === -1 ? "-" : "";
  const absNum = Math.abs(num);
  if (absNum < 1000) return sign + absNum;
  if (absNum < 1000000) return `${sign}${(absNum / 1000).toFixed(1)}K`;
  if (absNum < 1000000000) return `${sign}${(absNum / 1000000).toFixed(1)}M`;
  return `${sign}${(absNum / 1000000000).toFixed(1)}B`;
};

export const commaNumber = (num) => {
  const number = Number(num);
  if (isNaN(number)) return "Invalid number";
  return number.toLocaleString();
};
