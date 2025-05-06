import { Divider } from "@/components/Divider";
import { Slider } from "@/components/Slider";
import { Switch } from "@/components/Switch";

interface RandomPasswordProps {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  onLengthChange: (val: number[]) => void;
  onIncludeNumbersChange: (checked: boolean) => void;
  onIncludeSymbolsChange: (checked: boolean) => void;
}

export default function RandomPassword({
  length,
  includeNumbers,
  includeSymbols,
  onLengthChange,
  onIncludeNumbersChange,
  onIncludeSymbolsChange,
}: RandomPasswordProps) {
  return (
    <div>
      <div className="flex items-center gap-8">
        <div className="flex items-center space-x-3">
          <span className="dark:text-gray-400 text-gray-500 text-sm select-none">
            Characters
          </span>
        </div>

        <Slider
          id="length"
          value={[length]}
          onValueChange={onLengthChange}
          min={8}
          max={100}
        />

        <span className="ml-1 select-none font-semibold text-gray-900 dark:text-gray-50 text-xs font-mono dark:bg-gray-800/80 bg-gray-200/50 py-2 px-4 rounded">
          {length}
        </span>
      </div>
      <Divider />

      <div className="flex items-center gap-8">
        <div className="flex items-center space-x-3">
          <label
            htmlFor="numbers"
            className="dark:text-gray-400 text-gray-500 text-sm select-none"
          >
            Numbers
          </label>
          <Switch
            id="numbers"
            checked={includeNumbers}
            onCheckedChange={onIncludeNumbersChange}
          />
        </div>

        <div className="flex items-center space-x-3">
          <label
            htmlFor="symbols"
            className="dark:text-gray-400 text-gray-500 text-sm select-none"
          >
            Symbols
          </label>
          <Switch
            id="symbols"
            checked={includeSymbols}
            onCheckedChange={onIncludeSymbolsChange}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
}
