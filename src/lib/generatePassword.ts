export const generatePassword = (
  length: number,
  includeNumbers: boolean,
  includeSymbols: boolean,
): string => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQxqRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";

  let characters = letters;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)],
  ).join("");
};
