export const generateRandomPassword = (
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

export const generateMemorablePassword = (
  length: number,
  capitalizeFirstLetter: boolean,
  useFullWords: boolean,
): string => {
  const words = [
    "apple",
    "banana",
    "cherry",
    "grape",
    "orange",
    "mango",
    "peach",
  ];

  let password = "";

  if (useFullWords) {
    // Kelimelerden rastgele seç
    while (password.length < length) {
      const word = words[Math.floor(Math.random() * words.length)];
      password += word;
    }
  } else {
    // Rastgele harf seç
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQxqRSTUVWXYZ";
    password = Array.from(
      { length },
      () => letters[Math.floor(Math.random() * letters.length)],
    ).join("");
  }

  if (capitalizeFirstLetter) {
    // İlk harfi büyüt
    password = password.charAt(0).toUpperCase() + password.slice(1);
  }

  return password.slice(0, length); // Parola uzunluğunu sınırla
};

export const generatePinPassword = (length: number): string => {
  const numbers = "0123456789";

  return Array.from(
    { length },
    () => numbers[Math.floor(Math.random() * numbers.length)],
  ).join("");
};
