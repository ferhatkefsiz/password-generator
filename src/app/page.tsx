"use client";

import React from "react";
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

export default function Home() {
  const [value, setValue] = React.useState([20]);

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
                  event.preventDefault(), alert("Submitted: " + `${value[0]}`);
                }}
                onReset={() => setValue([55, 75])}
              >
                <div className="flex items-center gap-8">
                  <div className="flex items-center space-x-3">
                    <span className="dark:text-gray-400 text-sm select-none">
                      Characters
                    </span>
                  </div>

                  <Slider id="a" value={value} onValueChange={setValue} />

                  <span className="ml-1 font-semibold text-gray-900 dark:text-gray-50 text-xs font-mono">
                    ({value[0]})
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
                    <Switch id="upgrade-1" name="upgrade-1" />
                  </div>

                  <div className="flex items-center space-x-3">
                    <label
                      htmlFor="upgrade-2"
                      className="dark:text-gray-400 text-sm select-none"
                    >
                      Symbols <span className="sr-only">Symbols</span>
                    </label>
                    <Switch id="upgrade-2" name="upgrade-2" />
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

            <div className="my-4 text-gray-200 text-sm">Generated Password</div>
            <Card>
              <p className="text-center">
                <code>{"FJK*LoBzmWYPR*uxCtHZ@>>ftZ]X"}</code>
              </p>
            </Card>
            <div className="grid grid-cols-2 items-center gap-2 mt-4">
              <Button>Copy Password</Button>
              <Button variant="light">Refresh Password</Button>
            </div>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}
