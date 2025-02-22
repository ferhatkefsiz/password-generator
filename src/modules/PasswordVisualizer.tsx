export default function PasswordVisualizer({ password }: { password: string }) {
  // Split the password into characters and style each character based on its type
  const styledPassword = password.split("").map((char, index) => {
    if (/\d/.test(char)) {
      return (
        <span key={index} className="text-blue-500">
          {char}
        </span>
      );
    } else if (/[!@#$%^&*()_+{}[\]|\\:;<>,.?/~`]/.test(char)) {
      return (
        <span key={index} className="text-red-500">
          {char}
        </span>
      );
    } else {
      return (
        <span key={index} className="text-gray-900 dark:text-gray-50">
          {char}
        </span>
      );
    }
  });

  return <code className="break-all font-mono font-medium">{styledPassword}</code>;
}
