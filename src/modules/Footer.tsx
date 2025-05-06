import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white dark:bg-gray-950 mt-auto">
      <footer className="relative py-8 max-w-5xl w-full mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-start gap-y-4 lg:flex-row w-full lg:items-center lg:justify-between">
          <p className="dark:text-gray-400 text-gray-500 text-sm">
            Built by{" "}
            <span>
              <Link
                href="https://ferhatkefsiz.com"
                className="font-medium underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ferhat Kefsiz
              </Link>
            </span>{" "}
            . The source code is available on{" "}
            <Link
              href="https://github.com/ferhatkefsiz/password-generator"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub.
            </Link>
          </p>
          <ThemeSwitcher />
        </div>
      </footer>
    </div>
  );
}
