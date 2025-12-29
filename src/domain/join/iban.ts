export const normalizeIban = (value: string) =>
  value.replace(/\s+/g, "").toUpperCase();

export const isValidIban = (value: string) => {
  const iban = normalizeIban(value);
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(iban)) return false;
  const rearranged = `${iban.slice(4)}${iban.slice(0, 4)}`;
  let remainder = 0;
  for (const char of rearranged) {
    const digit =
      char >= "A" && char <= "Z"
        ? (char.charCodeAt(0) - 55).toString()
        : char;
    for (const digitChar of digit) {
      remainder = (remainder * 10 + Number(digitChar)) % 97;
    }
  }
  return remainder === 1;
};
