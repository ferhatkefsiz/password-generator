"use client";

import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import {
  RiLightbulbLine,
  RiLockPasswordLine,
  RiShuffleLine,
} from "@remixicon/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <Card className="mx-auto max-w-lg">
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Choose password type
        </h3>

        <Tabs defaultValue="tab1" className="mt-4">
          <TabsList variant="solid" className="w-full grid grid-cols-3">
            <TabsTrigger value="tab1" className="gap-1.5">
              <RiShuffleLine className="-ml-1 size-4" aria-hidden="true" />
              Random
            </TabsTrigger>
            <TabsTrigger value="tab2" className="gap-1.5">
              <RiLightbulbLine className="-ml-1 size-4" aria-hidden="true" />
              Memorable
            </TabsTrigger>
            <TabsTrigger value="tab3" className="gap-1.5">
              <RiLockPasswordLine className="-ml-1 size-4" aria-hidden="true" />
              Pin
            </TabsTrigger>
          </TabsList>

          <Divider>Customize your new password</Divider>

          <div className="mt-4">
            <TabsContent value="tab1">
              <p className="text-sm text-gray-500 sm:text-gray-500">
                Tab 1 content
              </p>
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
          </div>
        </Tabs>

        <p className="mt-2 hidden text-sm leading-6 text-gray-900 sm:block dark:text-gray-50">
          His graceful and effortless style of play, combined with his
          sportsmanship and impact on the global tennis community, solidify his
          legacy as the greatest tennis player of all time.
        </p>
      </Card>
    </div>
  );
}
