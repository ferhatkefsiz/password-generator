"use client";

import React, { useCallback, useState } from "react";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import {
  RiLightbulbLine,
  RiLockPasswordLine,
  RiShuffleLine,
} from "@remixicon/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Switch } from "@/components/Switch";
import { Slider } from "@/components/Slider";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

const generatePassword = (
  length: number,
  includeNumbers: boolean,
  includeSymbols: boolean
): string => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/~";

  let characters = letters;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  ).join("");
};

export default function Home() {
  const [length, setLength] = useState([20]);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyPassword = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    navigator.clipboard.writeText(password);
  }, [password]);

  const handleRefreshPassword = useCallback(() => {
    setPassword(generatePassword(length[0], includeNumbers, includeSymbols));
  }, [includeNumbers, includeSymbols, length]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <Card className="mx-auto max-w-lg">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Choose password type
        </h3>

        <Tabs defaultValue="tab1" className="mt-4">
          <TabsList variant="solid" className="w-full grid grid-cols-3">
            <TabsTrigger value="tab1" className="gap-1.5 py-1.5">
              <RiShuffleLine className="-ml-1 size-4" aria-hidden="true" />
              Random
            </TabsTrigger>
            <TabsTrigger value="tab2" className="gap-1.5 py-1.5">
              <RiLightbulbLine className="-ml-1 size-4" aria-hidden="true" />
              Memorable
            </TabsTrigger>
            <TabsTrigger value="tab3" className="gap-1.5 py-1.5">
              <RiLockPasswordLine className="-ml-1 size-4" aria-hidden="true" />
              Pin
            </TabsTrigger>
          </TabsList>

          <Divider>Customize your new password</Divider>

          <div className="mt-4">
            <TabsContent value="tab1">
              <form
                onSubmit={(event) => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  event.preventDefault(), alert("Submitted: " + `${length[0]}`);
                }}
                onReset={() => setLength([55, 75])}
              >
                <div className="flex items-center gap-8">
                  <div className="flex items-center space-x-3">
                    <span className="dark:text-gray-400 text-sm select-none">
                      Characters
                    </span>
                  </div>

                  <Slider
                    id="a"
                    value={length}
                    onValueChange={(val) => setLength(val)}
                  />

                  <span className="ml-1 font-semibold text-gray-900 dark:text-gray-50 text-xs font-mono">
                    ({length[0]})
                  </span>

                  <Input
                    id="pw-length"
                    name="pw-length"
                    className="mt-2 w-36"
                  />
                </div>

                <Divider />
                <div className="flex items-center gap-8">
                  <div className="flex items-center space-x-3">
                    <label
                      htmlFor="upgrade-1"
                      className="dark:text-gray-400 text-sm select-none"
                    >
                      Numbers <span className="sr-only">Numbers</span>
                    </label>
                    <Switch
                      id="upgrade-1"
                      name="upgrade-1"
                      checked={includeNumbers}
                      onCheckedChange={setIncludeNumbers}
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <label
                      htmlFor="upgrade-2"
                      className="dark:text-gray-400 text-sm select-none"
                    >
                      Symbols <span className="sr-only">Symbols</span>
                    </label>
                    <Switch
                      id="upgrade-2"
                      name="upgrade-2"
                      checked={includeSymbols}
                      onCheckedChange={setIncludeSymbols}
                    />
                  </div>
                </div>
                <Divider />
              </form>
            </TabsContent>
            <TabsContent value="tab2">
              <p className="text-sm text-gray-500 sm:text-gray-500">
                Tab 2 content
              </p>
            </TabsContent>
            <TabsContent value="tab3">
              <p className="text-sm text-gray-500 sm:text-gray-500">
                Tab 3 content
              </p>
            </TabsContent>

            <div className="my-4 text-gray-500 dark:text-gray-400 text-sm">
              Generated Password
            </div>

            <Card className="text-center">
              <code className="break-all">{password}</code>
            </Card>

            <div className="grid grid-cols-2 items-center gap-2 mt-4">
              <Button onClick={handleCopyPassword}>
                {copied ? "Copied!" : "Copy Password"}
              </Button>
              <Button onClick={handleRefreshPassword} variant="light">
                Refresh Password
              </Button>
            </div>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}
