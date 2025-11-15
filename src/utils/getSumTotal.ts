export const getSumTotal = (arr: number[]): number => {
  return arr.reduce((total, num) => total + num, 0);
}