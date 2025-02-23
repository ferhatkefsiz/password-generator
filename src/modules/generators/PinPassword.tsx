import React from "react";
import { Slider } from "@/components/Slider";
import { Divider } from "@/components/Divider";

interface PinPasswordProps {
  length: number;
  handleLengthChange: (val: number[]) => void;
}

export default function PinPassword({
  length,
  handleLengthChange,
}: PinPasswordProps) {
  return (
    <div>
      <div className="flex items-center gap-8">
        <div className="flex items-center space-x-3">
          <span className="dark:text-gray-400 text-sm select-none">
            Characters
          </span>
        </div>

        <Slider
          id="length"
          value={[length]}
          onValueChange={handleLengthChange}
          min={3}
          max={12}
        />

        <span className="ml-1 select-none font-semibold text-gray-900 dark:text-gray-50 text-xs font-mono dark:bg-gray-800/80 bg-gray-200/50 py-2 px-4 rounded">
          {length}
        </span>
      </div>

      <Divider />
    </div>
  );
}
