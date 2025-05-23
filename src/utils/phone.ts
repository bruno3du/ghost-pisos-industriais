export function formatPhoneNumber(number: string): string {
  // Remove any non-numeric characters
  const clean = number.replace(/\D/g, '');

  const areaCode = clean.slice(2, 4);
  const firstPart = clean.slice(4, 9);
  const secondPart = clean.slice(9, 13);

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}