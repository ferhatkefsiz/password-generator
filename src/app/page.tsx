"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Button } from "@/components/Button";

import RandomPassword from "@/modules/generators/RandomPassword";
import MemorablePassword from "@/modules/generators/MemorablePassword";
import PinPassword from "@/modules/generators/PinPassword";
import PasswordVisualizer from "@/modules/PasswordVisualizer";

import {
  generateMemorablePassword,
  generatePinPassword,
  generateRandomPassword,
} from "@/lib/generatePassword";

import {
  RiLightbulbLine,
  RiLockPasswordLine,
  RiShuffleLine,
} from "@remixicon/react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("random-password");
  const [copied, setCopied] = useState(false);

  const defaultLengths = useMemo(
    () => ({
      random: 14,
      memorable: 4,
      pin: 6,
    }),
    [],
  );

  const [lengths, setLengths] = useState(defaultLengths);

  // Settings for Random PW
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // Settings for Memorable PW
  const [capitalizeFirstLetter, setCapitalizeFirstLetter] = useState(true);
  const [useFullWords, setUseFullWords] = useState(true);

  const [password, setPassword] = useState("");

  // Generating pw based on active tab
  const generatePassword = useCallback(() => {
    const key = activeTab.split("-")[0] as keyof typeof lengths;

    const length = lengths[key];

    if (activeTab === "random-password") {
      return generateRandomPassword(length, includeNumbers, includeSymbols);
    } else if (activeTab === "memorable-password") {
      return generateMemorablePassword(
        length,
        capitalizeFirstLetter,
        useFullWords,
      );
    } else if (activeTab === "pin-password") {
      return generatePinPassword(length);
    }

    return "";
  }, [
    activeTab,
    lengths,
    includeNumbers,
    includeSymbols,
    capitalizeFirstLetter,
    useFullWords,
  ]);

  useEffect(() => {
    setPassword(generatePassword());
  }, [generatePassword]);

  const handleRefreshPassword = useCallback(() => {
    setPassword(generatePassword());
  }, [generatePassword]);

  const handleLengthChange = (
    type: keyof typeof defaultLengths,
    value: number,
  ) => {
    setLengths((prev) => ({ ...prev, [type]: value }));
  };

  const handleCopyPassword = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="flex items-center justify-center p-4 mt-auto">
      <Card className="mx-auto max-w-lg">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Choose password type
        </h3>

        <Tabs
          className="mt-4"
          defaultValue="random-password"
          value={activeTab}
          onValueChange={(val) => {
            setActiveTab(val);
            setPassword(generatePassword()); // Update password when tab changes
          }}
        >
          <TabsList variant="solid" className="w-full grid grid-cols-3">
            <TabsTrigger value="random-password" className="gap-1.5 py-2">
              <RiShuffleLine className="whitespace-nowrap -ml-1 min-w-4 size-4" aria-hidden="true" />
              <span className="text-xs">Random</span>
            </TabsTrigger>

            <TabsTrigger value="memorable-password" className="gap-1.5 py-2">
              <RiLightbulbLine className="whitespace-nowrap -ml-1 min-w-4 size-4" aria-hidden="true" />
              <span className="text-xs">Memorable</span>
            </TabsTrigger>

            <TabsTrigger value="pin-password" className="gap-1.5 py-2">
              <RiLockPasswordLine className="whitespace-nowrap -ml-1 min-w-4 size-4" aria-hidden="true" />
              <span className="text-xs">Pin</span>
            </TabsTrigger>
          </TabsList>

          <Divider>Customize your new password</Divider>

          <div className="mt-4">
            <TabsContent value="random-password">
              <RandomPassword
                length={lengths.random}
                includeNumbers={includeNumbers}
                includeSymbols={includeSymbols}
                onLengthChange={(val) => handleLengthChange("random", val[0])}
                onIncludeNumbersChange={setIncludeNumbers}
                onIncludeSymbolsChange={setIncludeSymbols}
              />
            </TabsContent>

            <TabsContent value="memorable-password">
              <MemorablePassword
                length={lengths.memorable}
                setLength={(val) => handleLengthChange("memorable", val[0])}
                capitalizeFirstLetter={capitalizeFirstLetter}
                setCapitalizeFirstLetter={setCapitalizeFirstLetter}
                useFullWords={useFullWords}
                setUseFullWords={setUseFullWords}
              />
            </TabsContent>

            <TabsContent value="pin-password">
              <PinPassword
                length={lengths.pin}
                handleLengthChange={(val) => handleLengthChange("pin", val[0])}
              />
            </TabsContent>

            <div className="my-4 text-gray-500 dark:text-gray-400 text-sm">
              Generated Password
            </div>

            <Card className="text-center min-h-20 items-center justify-center flex flex-col">
              <PasswordVisualizer password={password} />
            </Card>

            <div className="grid grid-cols-2 items-center gap-2 mt-4">
              <Button onClick={handleCopyPassword}>
                {copied ? "Copied!" : "Copy Password"}
              </Button>
              <Button onClick={handleRefreshPassword} variant="secondary">
                Refresh Password
              </Button>
            </div>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}
