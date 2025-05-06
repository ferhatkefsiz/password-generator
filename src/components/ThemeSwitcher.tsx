/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cx } from "@/lib/utils";
import { useTheme } from "next-themes";
import { type ComponentProps, useDeferredValue } from "react";
import { RiMacLine, RiMoonLine, RiSunLine } from "@remixicon/react";

const THEMES = [
  {
    type: "system",
    icon: (props: any) => {
      return <RiMacLine {...props} />;
    },
    label: "system theme",
  },
  {
    type: "light",
    icon: (props: any) => <RiSunLine {...props} />,
    label: "light theme",
  },
  {
    type: "dark",
    icon: (props: any) => <RiMoonLine {...props} />,
    label: "dark theme",
  },
] as const;

type Theme = (typeof THEMES)[number]["type"];

interface ThemeSwitcherProps
  extends Omit<ComponentProps<"div">, "onChange" | "value" | "defaultValue"> {
  value?: Theme;
  onChange?: (theme: Theme) => void;
  defaultValue?: Theme;
}

function ThemeSwitcher({
  value,
  onChange,
  defaultValue,
  className,
  ...props
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const deferredTheme = useDeferredValue(theme, "system");

  return (
    <div
      className={cx(
        "relative isolate inline-flex h-8 items-center rounded-full border border-dotted border-gray-400 dark:border-gray-700 px-1",
        className,
      )}
      {...props}
    >
      {THEMES.map(({ type, icon: Icon, label }) => {
        const isActive = deferredTheme === type;

        return (
          <button
            aria-label={`Switch to ${label}`}
            className="group relative size-6 rounded-full transition duration-200 ease-out"
            key={type}
            onClick={() => setTheme(type)}
            title={`Switch to ${label}`}
            type="button"
            data-umami-event={`Switch Theme to ${type}`}
          >
            {isActive && (
              <div className="-z-1 absolute inset-0 rounded-full dark:bg-gray-800 bg-gray-200" />
            )}
            <Icon
              className={cx(
                "relative m-auto size-3.5",
                "transition duration-200 ease-out",
                isActive
                  ? "dark:text-gray-100 text-gray-800"
                  : "dark:text-gray-100 text-gray-800 group-hover:text-gray-400 group-focus-visible:text-gray-400 group-hover:dark:text-gray-400 group-focus-visible:dark:text-gray-400",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

export { ThemeSwitcher };
