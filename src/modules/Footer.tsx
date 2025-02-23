export default function Footer() {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 sm:px-6">
      <footer className="relative py-8">
        <div className="flex justify-between gap-2 max-sm:flex-col max-sm:text-center">
          <p className="dark:text-gray-400 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Password Generator
          </p>
          <p className="dark:text-gray-400 text-gray-500 text-sm">
            A project by{" "}
            <a
              className="text-foreground decoration-border font-medium underline underline-offset-4 hover:no-underline"
              href="https://ferhatkefsiz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ferhat Kefsiz
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
