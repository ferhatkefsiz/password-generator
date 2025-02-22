"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import {
  RiLightbulbLine,
  RiLockPasswordLine,
  RiShuffleLine,
} from "@remixicon/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Button } from "@/components/Button";

import RandomPassword from "@/modules/generators/RandomPassword";
import PasswordVisualizer from "@/modules/PasswordVisualizer";

import { generatePassword } from "@/lib/generatePassword";

export default function Home() {
  const [length, setLength] = useState([14]);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPassword(generatePassword(length[0], includeNumbers, includeSymbols));
  }, [length, includeNumbers, includeSymbols]);

  const handleCopyPassword = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    navigator.clipboard.writeText(password);
  }, [password]);

  const handleRefreshPassword = useCallback(() => {
    setPassword(generatePassword(length[0], includeNumbers, includeSymbols));
  }, [includeNumbers, includeSymbols, length]);

  const onLengthChange = (val: number[]) => {
    setLength(val);
    setPassword(generatePassword(val[0], includeNumbers, includeSymbols));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <Card className="mx-auto max-w-lg">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Choose password type
        </h3>

        <Tabs defaultValue="random-password" className="mt-4">
          <TabsList variant="solid" className="w-full grid grid-cols-3">
            <TabsTrigger value="random-password" className="gap-1.5 py-1.5">
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
            <TabsContent value="random-password">
              <RandomPassword
                length={length[0]}
                includeNumbers={includeNumbers}
                includeSymbols={includeSymbols}
                onLengthChange={onLengthChange}
                onIncludeNumbersChange={setIncludeNumbers}
                onIncludeSymbolsChange={setIncludeSymbols}
              />
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

            <Card className="text-center min-h-20 items-center justify-center flex">
              <PasswordVisualizer password={password} />
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
